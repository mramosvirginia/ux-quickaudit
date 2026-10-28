// Estado
let currentCategory = "landing-page";
let currentTab = "usabilidad";
// id -> { status: "cumple" | "falta" | "noaplica", priority: "critica" | "alta" | "mejora", note: "" }
const audit = new Map();

const CATEGORY_LABEL = { "landing-page": "Landing page", ecommerce: "Ecommerce", dashboard: "Dashboard", formulario: "Formulario" };
const TAB_LABEL = { usabilidad: "Usabilidad", accesibilidad: "Accesibilidad", psicologia: "Psicología" };
const STATUS_LABEL = { cumple: "Cumple", falta: "Falta", noaplica: "No aplica" };
const PRIORITY_LABEL = { critica: "Crítica", alta: "Alta", mejora: "Mejora" };
const PRIORITIES = ["critica", "alta", "mejora"];
const DEFAULT_PRIORITY = "alta";

const ICON_CHECK = '<svg class="opt-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8.5L6.5 12L13 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ICON_ALERT = '<svg class="opt-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3V9M8 12.5V12.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
const ICON_MINUS = '<svg class="opt-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.5 8H12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
const STATUS_ICON = { cumple: ICON_CHECK, falta: ICON_ALERT, noaplica: ICON_MINUS };

// Índice id -> punto (con su producto y enfoque)
const index = new Map();
Object.keys(auditData).forEach(cat => {
    Object.keys(auditData[cat]).forEach(tab => {
        auditData[cat][tab].cards.forEach(card => index.set(card.id, { ...card, cat, tab }));
    });
});

// Elementos
const grid = document.getElementById("cards-grid");
const mainTitle = document.getElementById("current-title");
const mainDesc = document.getElementById("current-desc");
const reportCount = document.getElementById("report-count");
const reportSummary = document.getElementById("report-summary");
const reportEmpty = document.getElementById("report-empty");
const reportList = document.getElementById("report-list");
const copyBtn = document.getElementById("copy-btn");
const copyMdBtn = document.getElementById("copy-md-btn");
const clearBtn = document.getElementById("clear-btn");
const barCount = document.getElementById("bar-count");
const barCopy = document.getElementById("bar-copy");
const toast = document.getElementById("toast");

const countLabel = n => `${n} ${n === 1 ? "valorado" : "valorados"}`;

function el(tag, className, text) {
    const e = document.createElement(tag);
    if (className) e.className = className;
    if (text !== undefined) e.textContent = text;
    return e;
}

// Tarjetas
function optionRadio(name, value, labelText, checked, kind) {
    const label = el("label", `opt opt-${kind}`);
    const input = el("input", "opt-input");
    input.type = "radio"; input.name = name; input.value = value; input.checked = checked;
    const pill = el("span", `opt-pill opt-${value}`);
    if (kind === "status") pill.insertAdjacentHTML("beforeend", STATUS_ICON[value]);
    pill.appendChild(document.createTextNode(labelText));
    label.append(input, pill);
    return { label, input };
}

function renderCards() {
    const data = auditData[currentCategory][currentTab];
    mainTitle.textContent = data.title;
    mainDesc.textContent = `${data.description} Valora cada punto: si falta, añade una prioridad y una nota de tu caso.`;
    grid.innerHTML = "";

    data.cards.forEach(item => {
        const li = el("li");
        const card = el("article", "card");
        card.dataset.focus = currentTab;
        card.setAttribute("aria-labelledby", `t-${item.id}`);

        const top = el("div", "card-top");
        top.appendChild(el("span", "tag", item.origin));
        const title = el("h3", "card-title", item.title);
        title.id = `t-${item.id}`;
        card.append(top, title, el("p", "card-text", item.text));

        // Valoración
        const state = audit.get(item.id);
        const group = el("fieldset", "options");
        group.appendChild(el("legend", "sr-only", `Valoración de «${item.title}»`));
        const statusRow = el("div", "options-row");
        ["cumple", "falta", "noaplica"].forEach(s => {
            const { label, input } = optionRadio(`estado-${item.id}`, s, STATUS_LABEL[s], state && state.status === s, "status");
            input.addEventListener("change", () => setStatus(item.id, s, card));
            statusRow.appendChild(label);
        });
        group.appendChild(statusRow);
        card.appendChild(group);

        // Prioridad y nota (solo si falta)
        const extra = el("div", "extra");
        const prio = el("fieldset", "options options-priority");
        prio.appendChild(el("legend", "options-legend", "Prioridad"));
        const prioRow = el("div", "options-row");
        PRIORITIES.forEach(p => {
            const { label, input } = optionRadio(`prio-${item.id}`, p, PRIORITY_LABEL[p], state && state.priority === p, "priority");
            input.addEventListener("change", () => { audit.get(item.id).priority = p; renderReport(); });
            prioRow.appendChild(label);
        });
        prio.appendChild(prioRow);
        const note = el("textarea", "note");
        note.rows = 2; note.maxLength = 300;
        note.placeholder = "Nota sobre tu caso (opcional)";
        note.setAttribute("aria-label", `Nota sobre tu caso para «${item.title}» (opcional)`);
        note.value = state && state.note ? state.note : "";
        note.addEventListener("input", () => { audit.get(item.id).note = note.value; renderReport(); });
        extra.append(prio, note);
        extra.hidden = !(state && state.status === "falta");
        card.appendChild(extra);

        applyCardState(card, state);
        li.appendChild(card);
        grid.appendChild(li);
    });
}

function applyCardState(card, state) {
    card.dataset.status = state ? state.status : "none";
}

function setStatus(id, status, card) {
    const prev = audit.get(id);
    audit.set(id, { status, priority: prev ? prev.priority : DEFAULT_PRIORITY, note: prev ? prev.note : "" });
    const extra = card.querySelector(".extra");
    extra.hidden = status !== "falta";
    const prioInput = extra.querySelector(`input[value="${audit.get(id).priority}"]`);
    if (prioInput) prioInput.checked = true;
    applyCardState(card, audit.get(id));
    renderReport();
}

// Hallazgos agrupados por estado y prioridad
function findings() {
    const all = [...audit.entries()]
        .map(([id, s]) => ({ ...index.get(id), ...s }))
        .sort((a, b) => a.id - b.id);
    return {
        falta: PRIORITIES.map(p => ({ priority: p, items: all.filter(x => x.status === "falta" && x.priority === p) })).filter(g => g.items.length),
        cumple: all.filter(x => x.status === "cumple"),
        noaplica: all.filter(x => x.status === "noaplica"),
        total: all.length,
        nFalta: all.filter(x => x.status === "falta").length
    };
}

function summaryText(f) {
    const c = f.cumple.length, n = f.noaplica.length;
    return `${c} ${c === 1 ? "cumple" : "cumplen"} · ${f.nFalta} ${f.nFalta === 1 ? "falta" : "faltan"} · ${n} no ${n === 1 ? "aplica" : "aplican"}`;
}

function reportItem(p, onRemove, kind) {
    const li = el("li", `report-item report-item-${kind}`);
    const body = el("div", "report-item-body");
    const head = el("div", "report-item-head");
    const badge = kind === "falta" ? PRIORITY_LABEL[p.priority] : STATUS_LABEL[p.status];
    head.append(el("span", `badge badge-${kind === "falta" ? "falta" : p.status}`, badge), el("span", "report-item-title", p.title));
    body.appendChild(head);
    if (kind === "falta") {
        if (p.note && p.note.trim()) body.appendChild(el("p", "report-item-note", `Tu nota: ${p.note.trim()}`));
        body.appendChild(el("p", "report-item-action", `Siguiente paso: ${p.action}`));
    }
    li.appendChild(body);
    if (onRemove) {
        const rm = el("button", "remove");
        rm.type = "button";
        rm.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 3L13 13M13 3L3 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
        rm.setAttribute("aria-label", `Quitar «${p.title}» del informe`);
        rm.addEventListener("click", onRemove);
        li.appendChild(rm);
    }
    return li;
}

// Dibuja los hallazgos en un contenedor (se usa en el panel y en el informe de ejemplo)
function drawFindings(container, f, removable) {
    container.innerHTML = "";
    const remover = p => removable ? () => { audit.delete(p.id); renderReport(); renderCards(); } : null;
    f.falta.forEach(g => {
        const sec = el("li", "report-group");
        sec.appendChild(el("h4", "report-group-title group-falta", `Prioridad ${PRIORITY_LABEL[g.priority].toLowerCase()}`));
        const ul = el("ul", "report-sublist");
        g.items.forEach(p => ul.appendChild(reportItem(p, remover(p), "falta")));
        sec.appendChild(ul);
        container.appendChild(sec);
    });
    [["cumple", "Cumple", "group-cumple"], ["noaplica", "No aplica", "group-noaplica"]].forEach(([key, label, cls]) => {
        if (!f[key].length) return;
        const sec = el("li", "report-group");
        sec.appendChild(el("h4", `report-group-title ${cls}`, label));
        const ul = el("ul", "report-sublist");
        f[key].forEach(p => ul.appendChild(reportItem(p, remover(p), "ok")));
        sec.appendChild(ul);
        container.appendChild(sec);
    });
}

// Panel de informe
function renderReport() {
    const f = findings();
    const n = f.total;
    reportCount.textContent = countLabel(n);
    reportCount.classList.toggle("has-items", n > 0);
    barCount.textContent = countLabel(n);
    reportSummary.textContent = n ? summaryText(f) : "";
    reportSummary.hidden = n === 0;
    reportEmpty.hidden = n > 0;
    clearBtn.hidden = n === 0;
    [copyBtn, copyMdBtn, barCopy].forEach(b => { b.disabled = n === 0; });
    drawFindings(reportList, f, true);
}

// Texto del informe
function referencesText(md) {
    return md
        ? "## Referencias\n\n" + references.map(x => `- [${x.name}](${x.url})`).join("\n") + "\n"
        : "Referencias:\n" + references.map(x => `- ${x.name}: ${x.url}`).join("\n") + "\n";
}

function where(p) { return `${CATEGORY_LABEL[p.cat]} · ${TAB_LABEL[p.tab]}`; }

function buildPlain() {
    const f = findings();
    let r = `UX QUICKAUDIT · Informe de auditoría\n${countLabel(f.total)}: ${summaryText(f)}\n\n`;
    f.falta.forEach(g => {
        r += `FALTA · PRIORIDAD ${PRIORITY_LABEL[g.priority].toUpperCase()}\n`;
        g.items.forEach(p => {
            r += `- ${p.title} (${p.origin}) [${where(p)}]\n`;
            if (p.note && p.note.trim()) r += `  Nota: ${p.note.trim()}\n`;
            r += `  Siguiente paso: ${p.action}\n`;
        });
        r += "\n";
    });
    if (f.cumple.length) r += "CUMPLE\n" + f.cumple.map(p => `- ${p.title} (${p.origin})`).join("\n") + "\n\n";
    if (f.noaplica.length) r += "NO APLICA\n" + f.noaplica.map(p => `- ${p.title}`).join("\n") + "\n\n";
    return r + referencesText(false);
}

function buildMarkdown() {
    const f = findings();
    let r = `# Informe UX QuickAudit\n\n_${countLabel(f.total)}: ${summaryText(f)}_\n\n`;
    f.falta.forEach(g => {
        r += `## Falta · Prioridad ${PRIORITY_LABEL[g.priority].toLowerCase()}\n\n`;
        g.items.forEach(p => {
            r += `- **${p.title}** (${p.origin}) · ${where(p)}\n`;
            if (p.note && p.note.trim()) r += `  - Nota: ${p.note.trim()}\n`;
            r += `  - Siguiente paso: ${p.action}\n`;
        });
        r += "\n";
    });
    if (f.cumple.length) r += "## Cumple\n\n" + f.cumple.map(p => `- ${p.title} (${p.origin})`).join("\n") + "\n\n";
    if (f.noaplica.length) r += "## No aplica\n\n" + f.noaplica.map(p => `- ${p.title}`).join("\n") + "\n\n";
    return r + referencesText(true);
}

// Copiar y avisar
let toastTimer;
function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

async function copy(text, okMsg) {
    try {
        await navigator.clipboard.writeText(text);
        showToast(okMsg);
    } catch (err) {
        showToast("No se pudo copiar. Selecciona y copia el texto a mano.");
    }
}

copyBtn.addEventListener("click", () => audit.size && copy(buildPlain(), "Informe copiado"));
barCopy.addEventListener("click", () => audit.size && copy(buildPlain(), "Informe copiado"));
copyMdBtn.addEventListener("click", () => audit.size && copy(buildMarkdown(), "Informe en Markdown copiado"));
clearBtn.addEventListener("click", () => { audit.clear(); renderReport(); renderCards(); });

// Selectores
function setPressed(containerSel, attr, value) {
    document.querySelectorAll(`${containerSel} [${attr}]`).forEach(b => {
        b.setAttribute("aria-pressed", String(b.getAttribute(attr) === value));
    });
}

document.querySelectorAll(".chip").forEach(btn => {
    btn.addEventListener("click", () => {
        currentCategory = btn.dataset.cat;
        setPressed("#category-selector", "data-cat", currentCategory);
        renderCards();
    });
});

document.querySelectorAll(".tab").forEach(btn => {
    btn.addEventListener("click", () => {
        currentTab = btn.dataset.tab;
        setPressed("#tabs-selector", "data-tab", currentTab);
        renderCards();
    });
});

// Informe de ejemplo (ficticio)
(function drawSample() {
    const sample = [
        { id: 9, status: "falta", priority: "critica", note: "El texto gris sobre fondo blanco en la sección de precios apenas se lee." },
        { id: 12, status: "falta", priority: "alta", note: "Al tabular, el botón principal no muestra contorno." },
        { id: 14, status: "falta", priority: "mejora", note: "" },
        { id: 10, status: "cumple" },
        { id: 11, status: "cumple" },
        { id: 16, status: "noaplica" }
    ].map(s => ({ ...index.get(s.id), ...s })).sort((a, b) => a.id - b.id);
    const f = {
        falta: PRIORITIES.map(p => ({ priority: p, items: sample.filter(x => x.status === "falta" && x.priority === p) })).filter(g => g.items.length),
        cumple: sample.filter(x => x.status === "cumple"),
        noaplica: sample.filter(x => x.status === "noaplica"),
        total: sample.length,
        nFalta: sample.filter(x => x.status === "falta").length
    };
    document.getElementById("sample-count").textContent = countLabel(f.total);
    document.getElementById("sample-summary").textContent = summaryText(f);
    drawFindings(document.getElementById("sample-list"), f, false);
})();

// Referencias del pie
const refsList = document.getElementById("refs-list");
references.forEach(r => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "ref-card";
    a.dataset.focus = r.focus;
    a.href = r.url; a.target = "_blank"; a.rel = "noopener";
    a.innerHTML = '<span class="ref-name"></span><span class="ref-desc"></span><span class="ref-go" aria-hidden="true">↗</span>';
    a.querySelector(".ref-name").textContent = r.short;
    a.querySelector(".ref-desc").textContent = r.desc;
    a.setAttribute("aria-label", r.name + " (se abre en una pestaña nueva)");
    li.appendChild(a);
    refsList.appendChild(li);
});

// Carga inicial
renderCards();
renderReport();
