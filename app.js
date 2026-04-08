let currentCategory = "landing-page";
let currentTab = "usabilidad";
let selectedCards = new Set();

const iconMap = {
    "bolt": "ray-icon.svg",
    "visibility": "eye-icon.svg",
    "psychology": "brain-icon.svg"
};

const grid = document.getElementById('cards-grid');
const mainTitle = document.getElementById('current-title');
const mainDesc = document.getElementById('current-desc');
const mainIcon = document.getElementById('current-icon');
const copyBtn = document.getElementById('copy-btn');

function render() {
    // obtener los datos de data.js
    const data = auditData[currentCategory][currentTab];
    const fileName = iconMap[data.icon]; 
    
    // actualizar Cabecera de resultados
    mainTitle.innerText = data.title;
    mainDesc.innerText = data.description;
    if(mainIcon) mainIcon.src = `assets/${fileName}`; 

    // generar las cards
    grid.innerHTML = "";

    data.cards.forEach(item => {
        const card = document.createElement('article');
        
        // aplicar clase de selección dinámica según la pestaña activa
        let activeSelectionClass = "";
        if (selectedCards.has(item.id)) {
            activeSelectionClass = `selected-${currentTab}`;
        }
        
        card.className = `card ${activeSelectionClass}`;
        
        card.innerHTML = `
            <img src="assets/${fileName}" class="card-icon-svg" alt="icon">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <a href="${item.link}" target="_blank" class="source-link">
                <img src="assets/arrow.svg" class="arrow-icon" alt="arrow">
                Consultar fuente oficial
            </a>
        `;
        
        // manejo de clic para seleccionar (evitando el link oficial)
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.source-link')) {
                toggleSelection(item.id);
            }
        });
        
        grid.appendChild(card);
    });
}

function toggleSelection(id) {
    if(selectedCards.has(id)) {
        selectedCards.delete(id);
    } else {
        selectedCards.add(id);
    }
    render();
}

// listeners categorias
document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.cat-btn.active').classList.remove('active');
        btn.classList.add('active');
        currentCategory = btn.dataset.cat;
        render();
    });
});

// listeners tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.tab-btn.active').classList.remove('active');
        btn.classList.add('active');
        currentTab = btn.dataset.tab;
        render();
    });
});

// lógica de copiado global
copyBtn.addEventListener('click', () => {
    if(selectedCards.size === 0) {
        alert("Selecciona al menos una pauta para generar el informe.");
        return;
    }

    let report = "--- UX QUICKAUDIT REPORT ---\n\n";

    // recorremos todo el objeto auditData para encontrar los seleccionados
    Object.keys(auditData).forEach(catKey => {
        Object.keys(auditData[catKey]).forEach(tabKey => {
            auditData[catKey][tabKey].cards.forEach(card => {
                if(selectedCards.has(card.id)) {
                    report += `[${tabKey.toUpperCase()}] ${card.title}\n${card.text}\n\n`;
                }
            });
        });
    });

    navigator.clipboard.writeText(report).then(() => {
        const originalText = copyBtn.innerText;
        copyBtn.innerText = "¡Informe copiado!";
        setTimeout(() => copyBtn.innerText = originalText, 2000);
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
});

// carga inicial
render();