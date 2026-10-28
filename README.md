# UX QuickAudit

Auditoría de UX guiada con fuentes verificadas. Valoras cada punto de un producto digital, priorizas lo que falta y copias un informe con tus hallazgos. No usa IA, no pide registro y todo ocurre en el navegador.

**Demo:** https://mramosvirginia.github.io/ux-quickaudit/

## Cómo se usa
1. **Elige qué revisar:** tipo de producto (landing page, ecommerce, dashboard o formulario) y enfoque (usabilidad, accesibilidad o psicología del diseño).
2. **Valora cada punto:** *Cumple*, *Falta* o *No aplica*. Si falta, asigna una prioridad (Crítica, Alta o Mejora; Alta por defecto) y añade una nota sobre tu caso.
3. **Copia tu informe** en texto o en Markdown. Incluye los hallazgos agrupados por prioridad, con su origen y su siguiente paso, además de lo que cumple, lo que no aplica y las referencias.

La página incluye un informe de ejemplo ficticio para ver el resultado antes de empezar. El tiempo de una revisión es de aproximadamente un minuto por tipo de producto y enfoque (estimación propia, no medida).

## Contenido
96 puntos: 4 productos × 3 enfoques × 8 puntos. Cada punto indica su origen (NN/g, criterio WCAG, Laws of UX, Gestalt, psicología conductual o buena práctica del sector) y un siguiente paso concreto. En lugar de un enlace por punto, hay tres referencias generales en el pie de página.

Qué no hace: no analiza capturas ni evalúa el producto por ti. Guía la revisión con un criterio fijo; la valoración es tuya.

## Estado y pendientes
- Algunos puntos de NN/g están pendientes de contrastar con la fuente exacta.
- Las tres URL de referencia deben comprobarse antes de cada publicación.
- Falta probarla con otras personas y medir el tiempo real de una revisión.

## Tecnología
HTML, CSS y JavaScript sin librerías ni dependencias. Los datos están en `data.js`; el estado de la auditoría vive en memoria y no se guarda. Valoración con grupos de radio nativos (accesibles con teclado), foco visible, región `aria-live` para avisos y diseño adaptado a móvil con barra de informe fija abajo. Diseño y componentes en Figma, con variables que coinciden con los tokens de `style.css`.

## Autoría
Proyecto propio de Virginia M. Ramos · 2026. Licencia MIT.
