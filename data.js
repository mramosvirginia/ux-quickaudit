const auditData = {
    "landing-page": {
        "usabilidad": {
            title: "Usabilidad en web",
            description: "Aplica las 10 heurísticas de Nielsen para optimizar la eficiencia de la interfaz y garantizar una navegación fluida y sin errores.",
            icon: "bolt", color: "#6418EE",
            cards: [
                { id: 1, title: "Evitar fugas en el Hero", text: "Elimina enlaces externos o menús secundarios en la cabecera para evitar que el usuario abandone la página antes de leer la propuesta de valor.", link: "https://www.nngroup.com/articles/top-10-mistakes-web-design/" },
                { id: 2, title: "Patrón de lectura en F", text: "Ubica la información clave arriba a la izquierda, siguiendo el recorrido visual natural del usuario para asegurar que vea los puntos más críticos.", link: "https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/" },
                { id: 3, title: "Arquitectura SEO", text: "Utiliza etiquetas de encabezado (H1, H2) coherentes para ayudar a los motores de búsqueda a entender tu web.", link: "https://web.dev/vitals/" },
                { id: 4, title: "Navegación persistente", text: "Implementa un menú superior sticky que facilite el acceso a otras secciones en cualquier momento del scroll.", link: "https://www.nngroup.com/articles/sticky-headers/" },
                { id: 5, title: "Indicadores de scroll", text: "Añade pistas visuales que inviten a seguir bajando si hay contenido crítico debajo del primer pliegue.", link: "https://www.nngroup.com/articles/scrolling-and-attention/" },
                { id: 6, title: "Consistencia de interfaz", text: "Mantén un sistema de diseño coherente en botones e iconos para transmitir confianza y profesionalidad.", link: "https://www.nngroup.com/articles/ten-usability-heuristics/#consistency" },
                { id: 7, title: "Propuesta de valor clara", text: "Redacta textos enfocados en la solución que aportas, priorizando el beneficio real sobre los detalles técnicos.", link: "https://www.nngroup.com/articles/how-users-read-on-the-web/" },
                { id: 8, title: "Punto de acción único", text: "Define un botón de conversión (CTA) que destaque visualmente sobre el resto para guiar al usuario sin distracciones.", link: "https://www.nngroup.com/articles/ten-usability-heuristics/#visibility" }
            ]
        },
        "accesibilidad": {
            title: "Accesibilidad en web",
            description: "Cumple los estándares WCAG para crear un diseño inclusivo que permita a cualquier persona utilizar tu producto sin barreras.",
            icon: "visibility", color: "#EE18EE",
            cards: [
                { id: 9, title: "Contraste de texto", text: "Asegura un ratio de 4.5:1 entre el texto y el fondo para garantizar la legibilidad en cualquier pantalla.", link: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" },
                { id: 10, title: "Orden de encabezados", text: "Usa una jerarquía lógica de etiquetas para que los lectores de pantalla entiendan la estructura de la información.", link: "https://www.w3.org/WAI/tutorials/page-structure/headings/" },
                { id: 11, title: "Alt text descriptivo", text: "Añade descripciones a las imágenes clave para que usuarios con discapacidad visual reciban el contexto completo.", link: "https://www.w3.org/WAI/tutorials/images/" },
                { id: 12, title: "Foco de teclado visible", text: "Resalta con un borde claro el elemento seleccionado al navegar por la web usando el tabulador.", link: "https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html" },
                { id: 13, title: "Fuentes legibles", text: "Utiliza tamaños de fuente mínimos de 16px y evita tipografías decorativas en bloques de texto largos.", link: "https://www.nngroup.com/articles/legibility-readability-comprehension/" },
                { id: 14, title: "Enlaces con contexto", text: "Evita el texto genérico como 'Saber más'; usa frases que indiquen claramente el destino real del enlace.", link: "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html" },
                { id: 15, title: "Formularios accesibles", text: "Indica los campos obligatorios claramente y asocia cada etiqueta con su caja de entrada correspondiente.", link: "https://www.w3.org/WAI/tutorials/forms/" },
                { id: 16, title: "Pausa en carruseles", text: "Permite que el usuario pueda detener o controlar el movimiento de elementos automáticos para leer a su ritmo.", link: "https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html" }
            ]
        },
        "psicologia": {
            title: "Psicología en web",
            description: "Aplica sesgos cognitivos y leyes visuales para guiar el comportamiento del usuario de forma ética, reduciendo su fatiga mental.",
            icon: "psychology", color: "#184DEE",
            cards: [
                { id: 17, title: "Ley de Hick", text: "Limita el número de opciones en menús para acelerar la toma de decisiones y evitar que el usuario se sienta abrumado.", link: "https://lawsofux.com/hicks-law/" },
                { id: 18, title: "Prueba Social", text: "Ubica testimonios o logos de clientes cerca del botón de acción para reforzar la confianza en la marca.", link: "https://www.nngroup.com/articles/social-proof-ux/" },
                { id: 19, title: "Espacios en blanco", text: "Deja 'aire' entre secciones para reducir la fatiga visual y resaltar los mensajes que quieres comunicar.", link: "https://lawsofux.com/law-of-proximity/" },
                { id: 20, title: "Ley de Fitts", text: "Diseña botones de acción grandes y fáciles de pulsar para minimizar el esfuerzo motor del usuario.", link: "https://lawsofux.com/fittss-law/" },
                { id: 21, title: "Efecto de Primacía", text: "Sitúa la información más impactante al inicio de la página para asegurar que sea lo primero que se procese.", link: "https://lawsofux.com/serial-position-effect/" },
                { id: 22, title: "Ley de la Continuidad", text: "Usa elementos visuales que guíen de forma natural el ojo del usuario hacia el botón de conversión principal.", link: "https://www.nngroup.com/articles/gestalt-proximity/" },
                { id: 23, title: "Anclaje de valor", text: "Presenta primero los beneficios emocionales antes de revelar el precio final o los datos técnicos áridos.", link: "https://www.nngroup.com/articles/anchoring-principle/" },
                { id: 24, title: "Ley de Prägnanz", text: "Mantén un diseño equilibrado y simple para que la interfaz se perciba como honesta y profesional.", link: "https://lawsofux.com/law-of-pr%C3%A4gnanz/" }
            ]
        }
    },
    "ecommerce": {
        "usabilidad": {
            title: "Usabilidad en ecommerce",
            description: "Optimiza la experiencia de compra eliminando fricciones en el embudo de ventas y facilitando el hallazgo de productos.",
            icon: "bolt", color: "#6418EE",
            cards: [
                { id: 25, title: "Carrito siempre visible", text: "El acceso al carro debe mostrar el número de ítems en tiempo real para evitar que el usuario olvide su selección.", link: "https://www.nngroup.com/articles/shopping-cart/" },
                { id: 26, title: "Buscador predictivo", text: "Implementa sugerencias automáticas y corrección de errores tipográficos para reducir el tiempo de búsqueda.", link: "https://www.nngroup.com/articles/search-visible-and-simple/" },
                { id: 27, title: "Filtros reversibles", text: "Permite eliminar criterios de búsqueda de forma individual y rápida sin resetear toda la página.", link: "https://www.nngroup.com/articles/filters-vs-facets/" },
                { id: 28, title: "Estado del inventario", text: "Informa claramente sobre la disponibilidad de stock o tallas antes del pago para evitar frustración.", link: "https://www.nngroup.com/articles/ecommerce-product-pages/" },
                { id: 29, title: "Compra como invitado", text: "Ofrece finalizar el pedido sin obligar a crear una cuenta, reduciendo el abandono del carrito.", link: "https://www.nngroup.com/articles/optional-registration/" },
                { id: 30, title: "Edición en carrito", text: "El usuario debe poder cambiar tallas o cantidades directamente desde el resumen sin volver atrás.", link: "https://www.nngroup.com/articles/shopping-cart/" },
                { id: 31, title: "Migas de pan", text: "Facilita la navegación estructural para que el usuario sepa siempre en qué categoría se encuentra.", link: "https://www.nngroup.com/articles/breadcrumbs/" },
                { id: 32, title: "Costes transparentes", text: "Muestra gastos de envío desde el primer paso para evitar sorpresas negativas en el último momento.", link: "https://www.nngroup.com/articles/shopping-cart/" }
            ]
        },
        "accesibilidad": {
            title: "Accesibilidad en ecommerce",
            description: "Garantiza que el proceso de pago y selección de producto sea accesible para todos los usuarios.",
            icon: "visibility", color: "#EE18EE",
            cards: [
                { id: 33, title: "Contraste en CTA", text: "El botón de 'Finalizar Compra' debe tener un contraste muy alto para ser identificable por baja visión.", link: "https://www.w3.org/WAI/perspective-videos/customizable/" },
                { id: 34, title: "Selector de variantes", text: "Asegura que la selección de tallas sea accesible por teclado y se comunique bien por voz.", link: "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html" },
                { id: 35, title: "Anuncios ARIA", text: "Notifica por voz cuando un artículo se añade al carrito sin necesidad de recargar la página.", link: "https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html" },
                { id: 36, title: "Errores de pago", text: "Si el pago falla, indica el error con texto y un icono claro, nunca solo mediante el color rojo.", link: "https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html" },
                { id: 37, title: "Zoom de producto", text: "Permite ampliar imágenes sin bloquear la interfaz ni impedir la vuelta a la navegación principal.", link: "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html" },
                { id: 38, title: "Labels en Checkout", text: "Mantén las etiquetas de dirección siempre visibles, incluso cuando el usuario está escribiendo.", link: "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html" },
                { id: 39, title: "Navegación secuencial", text: "El orden del foco del teclado debe seguir el flujo lógico de compra de forma predecible.", link: "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html" },
                { id: 40, title: "Multimedia con subtítulos", text: "Vídeos demostrativos de producto deben incluir subtítulos para usuarios con discapacidad auditiva.", link: "https://www.w3.org/WAI/media/av/captions/" }
            ]
        },
        "psicologia": {
            title: "Psicología en ecommerce",
            description: "Usa principios conductuales para aumentar la confianza y la tasa de conversión en el proceso de compra.",
            icon: "psychology", color: "#184DEE",
            cards: [
                { id: 41, title: "Efecto Aislamiento", text: "Destaca cromáticamente el precio rebajado para guiar la atención hacia el valor del ahorro.", link: "https://lawsofux.com/von-restorff-effect/" },
                { id: 42, title: "Prueba Social viva", text: "Mostrar cuántas personas ven el producto genera confianza y valida la popularidad del artículo.", link: "https://www.nngroup.com/articles/social-proof-ux/" },
                { id: 43, title: "Urgencia y Escasez", text: "Avisos de 'últimas unidades' motivan la decisión rápida ante el miedo a perder la oportunidad.", link: "https://www.nngroup.com/articles/indicators-validations-notifications/" },
                { id: 44, title: "Anclaje de precios", text: "Mostrar el precio original tachado ayuda a percibir el descuento como una ganancia directa.", link: "https://www.nngroup.com/articles/anchoring-principle/" },
                { id: 45, title: "Ley de Miller", text: "Divide el checkout en pasos cortos para reducir la carga de memoria y facilitar el pago.", link: "https://lawsofux.com/millers-law/" },
                { id: 46, title: "Reciprocidad", text: "Ofrecer un cupón tras la primera compra genera un sentimiento de deuda positiva que fideliza.", link: "https://www.nngroup.com/articles/applying-discounts/" },
                { id: 47, title: "Coste de oportunidad", text: "Resaltar beneficios inmediatos como 'Recíbelo mañana' ayuda a cerrar la venta por inmediatez.", link: "https://www.nngroup.com/articles/ecommerce-product-pages/" },
                { id: 48, title: "Similitud visual", text: "Mantén un diseño coherente para que el usuario sienta que la plataforma es segura y profesional.", link: "https://lawsofux.com/law-of-similarity/" }
            ]
        }
    },
    "dashboard": {
        "usabilidad": {
            title: "Usabilidad en dashboards",
            description: "Optimiza la visualización de datos y la gestión de tareas complejas con interfaces eficientes.",
            icon: "bolt", color: "#6418EE",
            cards: [
                { id: 49, title: "Skeletons de carga", text: "Muestra estructuras grises mientras se procesan datos para reducir la ansiedad y mejorar la percepción de velocidad.", link: "https://www.nngroup.com/articles/skeleton-screens/" },
                { id: 50, title: "Doble confirmación", text: "Solicita confirmación antes de borrar datos críticos para evitar errores accidentales graves.", link: "https://www.nngroup.com/articles/ten-usability-heuristics/#error-prevention" },
                { id: 51, title: "Atajos de teclado", text: "Permite realizar acciones comunes sin usar el ratón, mejorando la eficiencia de usuarios expertos.", link: "https://www.nngroup.com/articles/ui-copy/" },
                { id: 52, title: "Filtros persistentes", text: "Guarda automáticamente la última configuración de filtros para que el usuario no tenga que repetirla.", link: "https://www.nngroup.com/articles/ten-usability-heuristics/#recognition" },
                { id: 53, title: "Tooltips de ayuda", text: "Añade pequeñas burbujas de texto explicativo en métricas complejas para aclarar qué dato se visualiza.", link: "https://www.nngroup.com/articles/tooltip-guidelines/" },
                { id: 54, title: "Exportación rápida", text: "Ofrece botones visibles para descargar tablas en CSV o PDF sin navegar por menús ocultos.", link: "https://www.nngroup.com/articles/dashboards-preattentive//" },
                { id: 55, title: "Notificaciones sutiles", text: "Usa mensajes de estado (toasts) que no interrumpan el flujo de trabajo principal.", link: "https://www.nngroup.com/articles/ten-usability-heuristics/#visibility" },
                { id: 56, title: "Vistas editables", text: "Permite personalizar el panel eligiendo qué widgets o gráficas ver según la necesidad propia.", link: "https://www.nngroup.com/articles/flexibility-efficiency-heuristic/" }
            ]
        },
        "accesibilidad": {
            title: "Accesibilidad en dashboards",
            description: "Haz que la información compleja sea comprensible para cualquier usuario mediante el uso correcto de estándares.",
            icon: "visibility", color: "#EE18EE",
            cards: [
                { id: 57, title: "Redundancia visual", text: "No utilices solo el color para diferenciar series de datos; añade patrones para usuarios daltónicos.", link: "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html" },
                { id: 58, title: "Tablas con cabeceras", text: "Asegura etiquetas de encabezado correctas para que los lectores de pantalla den contexto a los datos.", link: "https://www.w3.org/WAI/tutorials/tables/" },
                { id: 59, title: "Evitar parpadeos", text: "No incluyas elementos que parpadeen más de tres veces por segundo para prevenir ataques de epilepsia.", link: "https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html" },
                { id: 60, title: "Identificación de alertas", text: "Los mensajes de error deben indicar exactamente la ubicación del problema de forma textual y clara.", link: "https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html" },
                { id: 61, title: "Foco en widgets", text: "Asegura que al navegar con teclado el foco siga un orden lógico entre los diferentes módulos.", link: "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html" },
                { id: 62, title: "Compatibilidad de Zoom", text: "El diseño debe adaptarse sin solapar widgets ni perder info al ampliar la vista al 200%.", link: "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html" },
                { id: 63, title: "Contraste en gráficas", text: "Colores de barras o líneas deben tener suficiente contraste respecto al fondo para ser distinguidos.", link: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html" },
                { id: 64, title: "Labels en selectores", text: "Cada filtro de fecha debe tener una etiqueta asociada que explique su función a lectores de pantalla.", link: "https://www.w3.org/WAI/tutorials/forms/labels/" }
            ]
        },
        "psicologia": {
            title: "Psicología en dashboards",
            description: "Reduce la carga cognitiva de los usuarios que manejan grandes volúmenes de datos mediante leyes visuales.",
            icon: "psychology", color: "#184DEE",
            cards: [
                { id: 65, title: "Ley de Miller en KPIs", text: "No muestres más de siete métricas clave para evitar saturar la memoria y facilitar el análisis.", link: "https://lawsofux.com/millers-law/" },
                { id: 66, title: "Ley de Proximidad", text: "Agrupa gráficas que analizan el mismo tipo de métrica dentro de un contenedor común.", link: "https://lawsofux.com/law-of-proximity/" },
                { id: 67, title: "Carga cognitiva baja", text: "Elimina bordes pesados y rejillas marcadas para que el dato numérico sea el único protagonista.", link: "https://www.nngroup.com/articles/minimize-cognitive-load/" },
                { id: 68, title: "Región Común", text: "Utiliza colores de fondo suaves para delimitar diferentes áreas de trabajo o módulos.", link: "https://lawsofux.com/law-of-common-region/" },
                { id: 69, title: "Efecto Von Restorff", text: "Utiliza un color vibrante solo para la métrica que requiere atención o indica alerta crítica.", link: "https://lawsofux.com/von-restorff-effect/" },
                { id: 70, title: "Ley de Semejanza", text: "Mantén el mismo estilo visual para todos los botones que ejecuten acciones del mismo tipo.", link: "https://lawsofux.com/law-of-similarity/" },
                { id: 71, title: "Reconocimiento", text: "Usa iconos estándar para funciones de gestión, evitando que el usuario deba aprender un nuevo lenguaje.", link: "https://www.nngroup.com/articles/recognition-and-recall/" },
                { id: 72, title: "Ley de Hick en menús", text: "Categoriza configuraciones en submenús lógicos para facilitar hallazgos sin perderse en listas.", link: "https://lawsofux.com/hicks-law/" }
            ]
        }
    },
    "formulario": {
        "usabilidad": {
            title: "Usabilidad en formularios",
            description: "Aumenta la tasa de registro y contacto facilitando la introducción de datos sin errores.",
            icon: "bolt", color: "#6418EE",
            cards: [
                { id: 73, title: "Validación inline", text: "Muestra mensajes de error en el momento en que el usuario sale del campo para corregirlos rápido.", link: "https://www.nngroup.com/articles/errors-forms-design-guidelines/" },
                { id: 74, title: "Microcopy de ayuda", text: "Incluye textos breves explicativos bajo campos complejos para aclarar el formato de dato necesario.", link: "https://www.nngroup.com/articles/microcontent-how-to-write-headlines-page-titles-and-subject-lines/" },
                { id: 75, title: "Máscaras de entrada", text: "Formatea automáticamente datos como teléfonos para evitar errores de puntuación del usuario.", link: "https://www.nngroup.com/articles/slips/" },
                { id: 76, title: "Guardado automático", text: "Almacena el progreso localmente para no perder datos si la página se recarga o falla la conexión.", link: "https://www.nngroup.com/articles/ten-usability-heuristics/#visibility" },
                { id: 77, title: "Botones diferenciados", text: "El botón de envío debe destacar visualmente sobre el de cancelar para evitar clics accidentales.", link: "https://www.nngroup.com/articles/reset-and-cancel-buttons/" },
                { id: 78, title: "Recuperación de errores", text: "Si el envío falla, mantén los campos rellenos para que el usuario no tenga que empezar de cero.", link: "https://www.nngroup.com/articles/ten-usability-heuristics/#help-users-recover" },
                { id: 79, title: "Indicadores de pasos", text: "En formularios largos, usa una barra de progreso que indique cuánto falta para completar el proceso.", link: "https://www.nngroup.com/articles/navigation-you-are-here/" },
                { id: 80, title: "Teclados adaptados", text: "Configura el teclado numérico automático en móvil cuando se solicite un dato de tipo teléfono.", link: "https://www.nngroup.com/articles/web-form-design/" }
            ]
        },
        "accesibilidad": {
            title: "Accesibilidad en formularios",
            description: "Garantiza que cualquier usuario, con o sin tecnologías de asistencia, pueda completar tus formularios.",
            icon: "visibility", color: "#EE18EE",
            cards: [
                { id: 81, title: "Agrupación semántica", text: "Utiliza etiquetas para agrupar campos relacionados (como la dirección) y facilitar la comprensión.", link: "https://www.w3.org/WAI/tutorials/forms/grouping/" },
                { id: 82, title: "Labels visibles", text: "No utilices el placeholder como etiqueta; desaparece al escribir y confunde a usuarios con poca memoria.", link: "https://www.w3.org/WAI/tutorials/forms/labels/" },
                { id: 83, title: "Errores con iconos", text: "Acompaña mensajes de error con iconos para que daltónicos identifiquen qué campo ha fallado.", link: "https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html" },
                { id: 84, title: "Instrucciones previas", text: "Coloca reglas de contraseña antes del campo para que el usuario las conozca antes de empezar.", link: "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html" },
                { id: 85, title: "Sin límites de tiempo", text: "Asegura que el formulario no caduque por inactividad sin avisar, permitiendo terminar el proceso.", link: "https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html" },
                { id: 86, title: "Contorno de foco", text: "El borde del campo seleccionado debe ser muy evidente para usuarios que navegan con tabulador.", link: "https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html" },
                { id: 87, title: "Navegación secuencial", text: "El orden de tabulación debe ser idéntico al visual para evitar saltos inesperados del cursor.", link: "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html" },
                { id: 88, title: "Sugerencias de arreglo", text: "Si un campo falla, ofrece una sugerencia clara de cómo solucionarlo en lugar de mensajes genéricos.", link: "https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html" }
            ]
        },
        "psicologia": {
            title: "Psicología en formularios",
            description: "Aumenta la motivación del usuario para completar la tarea reduciendo la percepción de esfuerzo.",
            icon: "psychology", color: "#184DEE",
            cards: [
                { id: 89, title: "Carga cognitiva mínima", text: "Pide solo los datos estrictamente necesarios; cada campo extra reduce drásticamente la conversión.", link: "https://www.nngroup.com/articles/4-principles-reduce-cognitive-load/" },
                { id: 90, title: "Gradiente de dificultad", text: "Sitúa las preguntas más fáciles al inicio para crear inercia positiva y motivar a terminar.", link: "https://www.nngroup.com/articles/minimize-cognitive-load/" },
                { id: 91, title: "Ley de Proximidad", text: "Mantén las etiquetas pegadas visualmente a sus campos para que se procesen como un solo elemento.", link: "https://lawsofux.com/law-of-proximity/" },
                { id: 92, title: "Sesgo de completitud", text: "Una barra de progreso activa el deseo psicológico de cerrar la tarea pendiente y no abandonar.", link: "https://lawsofux.com/zeigarnik-effect/" },
                { id: 93, title: "Columna única", text: "Formularios en una sola columna vertical son más rápidos de leer y generan menos errores.", link: "https://www.nngroup.com/articles/form-design-placeholders/" },
                { id: 94, title: "Ley de Prägnanz", text: "Mantén un diseño alineado y limpio para que el formulario parezca más sencillo de lo que es.", link: "https://lawsofux.com/law-of-pr%C3%A4gnanz/" },
                { id: 95, title: "Menos es más", text: "Eliminar campos opcionales aumenta la satisfacción del usuario y reduce el tiempo de registro.", link: "https://www.nngroup.com/articles/4-principles-reduce-cognitive-load/" },
                { id: 96, title: "Feedback de éxito", text: "Muestra un mensaje de confirmación claro tras el envío para cerrar el ciclo mental del usuario.", link: "https://www.nngroup.com/videos/success-rate-vs-completion-rate/" }
            ]
        }
    }
};