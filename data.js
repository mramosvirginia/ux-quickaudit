// Datos de UX QuickAudit: 4 tipos de producto × 3 enfoques × 8 puntos = 96, cada uno con su siguiente paso (action).
// "origin" indica de dónde sale cada punto (NN/g, WCAG, Laws of UX o buena práctica del sector).
const auditData = {
  "landing-page": {
    "usabilidad": {
      "title": "Usabilidad en web",
      "description": "Aplica las 10 heurísticas de Nielsen para optimizar la eficiencia de la interfaz y garantizar una navegación fluida y sin errores.",
      "cards": [
        {
          "id": 1,
          "title": "Evitar fugas en el Hero",
          "text": "Elimina enlaces externos o menús secundarios en la cabecera para evitar que el usuario abandone la página antes de leer la propuesta de valor.",
          "action": "Quita de la cabecera los enlaces que sacan de la página y deja solo el logo y la acción principal.",
          "origin": "Buena práctica"
        },
        {
          "id": 2,
          "title": "Patrón de lectura en F",
          "text": "Ubica la información clave arriba a la izquierda, siguiendo el patrón de lectura habitual en páginas con mucho texto.",
          "action": "Mueve el mensaje clave y el botón principal a la zona superior izquierda, antes del primer scroll.",
          "origin": "NN/g"
        },
        {
          "id": 3,
          "title": "Primer pliegue rápido",
          "text": "Haz que el contenido principal cargue pronto: la persona decide en segundos si se queda.",
          "action": "Mide la carga de lo que se ve sin hacer scroll y difiere imágenes y scripts que no son necesarios al inicio.",
          "origin": "Buena práctica"
        },
        {
          "id": 4,
          "title": "Navegación persistente",
          "text": "Implementa un menú superior sticky que facilite el acceso a otras secciones en cualquier momento del scroll.",
          "action": "Fija el menú superior al hacer scroll o añade un acceso de vuelta al inicio y a las secciones principales.",
          "origin": "NN/g"
        },
        {
          "id": 5,
          "title": "Indicadores de scroll",
          "text": "Añade pistas visuales que inviten a seguir bajando si hay contenido crítico debajo del primer pliegue.",
          "action": "Deja asomar parte del siguiente bloque en el primer pliegue o añade una pista visual para seguir bajando.",
          "origin": "NN/g"
        },
        {
          "id": 6,
          "title": "Consistencia de interfaz",
          "text": "Mantén un sistema de diseño coherente en botones e iconos para transmitir confianza y profesionalidad.",
          "action": "Revisa botones, iconos y estilos de enlace y unifícalos con un único conjunto de componentes.",
          "origin": "NN/g"
        },
        {
          "id": 7,
          "title": "Propuesta de valor clara",
          "text": "Redacta textos enfocados en la solución que aportas, priorizando el beneficio real sobre los detalles técnicos.",
          "action": "Reescribe el titular para que diga qué problema resuelves y para quién, antes de explicar cómo.",
          "origin": "NN/g"
        },
        {
          "id": 8,
          "title": "Punto de acción único",
          "text": "Define un botón de conversión (CTA) que destaque visualmente sobre el resto para guiar al usuario sin distracciones.",
          "action": "Deja un único botón principal por pantalla y rebaja el resto a estilos secundarios.",
          "origin": "Buena práctica"
        }
      ]
    },
    "accesibilidad": {
      "title": "Accesibilidad en web",
      "description": "Cumple los estándares WCAG para crear un diseño inclusivo que permita a cualquier persona utilizar tu producto sin barreras.",
      "cards": [
        {
          "id": 9,
          "title": "Contraste de texto",
          "text": "Asegura un ratio de 4.5:1 entre el texto y el fondo (3:1 en texto grande) para garantizar la legibilidad en cualquier pantalla.",
          "action": "Comprueba el contraste con una herramienta y sube el tono del texto o del fondo hasta llegar a 4.5:1 (3:1 en texto grande).",
          "origin": "WCAG 1.4.3"
        },
        {
          "id": 10,
          "title": "Orden de encabezados",
          "text": "Usa una jerarquía lógica de etiquetas para que los lectores de pantalla entiendan la estructura de la información.",
          "action": "Revisa la jerarquía h1, h2, h3 sin saltos y que haya un solo h1 por página.",
          "origin": "WCAG 1.3.1"
        },
        {
          "id": 11,
          "title": "Alt text descriptivo",
          "text": "Añade descripciones a las imágenes clave para que usuarios con discapacidad visual reciban el contexto completo.",
          "action": "Añade alt descriptivo a las imágenes que aportan información y deja vacío el de las decorativas.",
          "origin": "WCAG 1.1.1"
        },
        {
          "id": 12,
          "title": "Foco de teclado visible",
          "text": "Resalta con un borde claro el elemento seleccionado al navegar por la web usando el tabulador.",
          "action": "Recorre la página con la tecla Tab y añade un contorno visible a todo lo que recibe el foco.",
          "origin": "WCAG 2.4.7"
        },
        {
          "id": 13,
          "title": "Fuentes legibles",
          "text": "Parte de 16px como base y evita tipografías decorativas en bloques de texto largos.",
          "action": "Fija el cuerpo de texto en 16 px o más y reserva las tipografías decorativas para títulos.",
          "origin": "Buena práctica"
        },
        {
          "id": 14,
          "title": "Enlaces con contexto",
          "text": "Evita el texto genérico como 'Saber más'; usa frases que indiquen claramente el destino real del enlace.",
          "action": "Sustituye 'Saber más' o 'Aquí' por un texto que diga a dónde lleva el enlace.",
          "origin": "WCAG 2.4.4"
        },
        {
          "id": 15,
          "title": "Formularios accesibles",
          "text": "Indica los campos obligatorios claramente y asocia cada etiqueta con su caja de entrada correspondiente.",
          "action": "Marca los obligatorios en el propio campo y asocia cada etiqueta a su campo con for e id.",
          "origin": "WCAG 3.3.2"
        },
        {
          "id": 16,
          "title": "Pausa en carruseles",
          "text": "Permite que el usuario pueda detener o controlar el movimiento de elementos automáticos para leer a su ritmo.",
          "action": "Añade un botón de pausa y desactiva el avance automático si no es imprescindible.",
          "origin": "WCAG 2.2.2"
        }
      ]
    },
    "psicologia": {
      "title": "Psicología en web",
      "description": "Aplica sesgos cognitivos y leyes visuales para guiar el comportamiento del usuario de forma ética, reduciendo su fatiga mental.",
      "cards": [
        {
          "id": 17,
          "title": "Ley de Hick",
          "text": "Limita el número de opciones en menús para acelerar la toma de decisiones y evitar que el usuario se sienta abrumado.",
          "action": "Reduce el menú a las opciones principales y agrupa el resto en un único apartado.",
          "origin": "Laws of UX"
        },
        {
          "id": 18,
          "title": "Prueba Social",
          "text": "Ubica testimonios o logos de clientes reales cerca del botón de acción para reforzar la confianza en la marca.",
          "action": "Añade testimonios o logos reales junto al botón principal, con nombre y contexto.",
          "origin": "Psicología conductual"
        },
        {
          "id": 19,
          "title": "Espacios en blanco",
          "text": "Deja 'aire' entre secciones para reducir la fatiga visual y resaltar los mensajes que quieres comunicar.",
          "action": "Aumenta el espacio entre secciones y deja un único mensaje principal por bloque.",
          "origin": "Buena práctica"
        },
        {
          "id": 20,
          "title": "Ley de Fitts",
          "text": "Diseña botones de acción grandes y fáciles de pulsar para minimizar el esfuerzo motor del usuario.",
          "action": "Agranda el botón principal (mínimo 44 px de alto en móvil) y deja margen alrededor.",
          "origin": "Laws of UX"
        },
        {
          "id": 21,
          "title": "Efecto de Primacía",
          "text": "Sitúa la información más impactante al inicio de la página para asegurar que sea lo primero que se procese.",
          "action": "Pon el mensaje más importante al inicio de la página y los datos de apoyo después.",
          "origin": "Laws of UX"
        },
        {
          "id": 22,
          "title": "Ley de la Continuidad",
          "text": "Usa elementos visuales que guíen de forma natural el ojo del usuario hacia el botón de conversión principal.",
          "action": "Usa alineaciones, líneas o imágenes que lleven la mirada hacia el botón principal.",
          "origin": "Principios Gestalt"
        },
        {
          "id": 23,
          "title": "Valor antes que precio",
          "text": "Presenta primero los beneficios emocionales antes de revelar el precio final o los datos técnicos áridos.",
          "action": "Reordena para contar primero el beneficio y dejar el precio después de explicarlo.",
          "origin": "Psicología conductual"
        },
        {
          "id": 24,
          "title": "Ley de Prägnanz",
          "text": "Mantén un diseño equilibrado y simple para que la interfaz se perciba como honesta y profesional.",
          "action": "Elimina elementos que no aporten y alinea todo a una misma cuadrícula.",
          "origin": "Laws of UX"
        }
      ]
    }
  },
  "ecommerce": {
    "usabilidad": {
      "title": "Usabilidad en ecommerce",
      "description": "Optimiza la experiencia de compra eliminando fricciones en el embudo de ventas y facilitando el hallazgo de productos.",
      "cards": [
        {
          "id": 25,
          "title": "Carrito siempre visible",
          "text": "El acceso al carro debe mostrar el número de ítems en tiempo real para evitar que el usuario olvide su selección.",
          "action": "Muestra el número de artículos en el icono del carrito y actualízalo al añadir.",
          "origin": "NN/g"
        },
        {
          "id": 26,
          "title": "Buscador predictivo",
          "text": "Implementa sugerencias automáticas y corrección de errores tipográficos para reducir el tiempo de búsqueda.",
          "action": "Activa sugerencias mientras se escribe y tolera errores tipográficos en la búsqueda.",
          "origin": "NN/g"
        },
        {
          "id": 27,
          "title": "Filtros reversibles",
          "text": "Permite eliminar criterios de búsqueda de forma individual y rápida sin resetear toda la página.",
          "action": "Muestra los filtros activos como etiquetas que se puedan quitar de una en una.",
          "origin": "NN/g"
        },
        {
          "id": 28,
          "title": "Estado del inventario",
          "text": "Informa claramente sobre la disponibilidad de stock o tallas antes del pago para evitar frustración.",
          "action": "Indica stock o talla agotada en la ficha de producto, no solo al pagar.",
          "origin": "NN/g"
        },
        {
          "id": 29,
          "title": "Compra como invitado",
          "text": "Ofrece finalizar el pedido sin obligar a crear una cuenta, reduciendo el abandono del carrito.",
          "action": "Añade la opción de comprar como invitado y deja el registro para después de pagar.",
          "origin": "NN/g"
        },
        {
          "id": 30,
          "title": "Edición en carrito",
          "text": "El usuario debe poder cambiar tallas o cantidades directamente desde el resumen sin volver atrás.",
          "action": "Permite cambiar cantidad y talla y eliminar artículos desde el propio carrito.",
          "origin": "NN/g"
        },
        {
          "id": 31,
          "title": "Migas de pan",
          "text": "Facilita la navegación estructural para que el usuario sepa siempre en qué categoría se encuentra.",
          "action": "Añade migas de pan en las fichas y listados, con cada nivel clicable.",
          "origin": "NN/g"
        },
        {
          "id": 32,
          "title": "Costes transparentes",
          "text": "Muestra gastos de envío desde el primer paso para evitar sorpresas negativas en el último momento.",
          "action": "Muestra una estimación de envío desde la ficha o el carrito, antes del último paso.",
          "origin": "NN/g"
        }
      ]
    },
    "accesibilidad": {
      "title": "Accesibilidad en ecommerce",
      "description": "Garantiza que el proceso de pago y selección de producto sea accesible para todos los usuarios.",
      "cards": [
        {
          "id": 33,
          "title": "Contraste en CTA",
          "text": "El botón de 'Finalizar Compra' debe tener contraste suficiente (4.5:1 en el texto, 3:1 en el borde del botón) para ser identificable por baja visión.",
          "action": "Comprueba el contraste del texto del botón (4.5:1) y de su borde (3:1) y corrígelo.",
          "origin": "WCAG 1.4.3"
        },
        {
          "id": 34,
          "title": "Selector de variantes",
          "text": "Asegura que la selección de tallas sea accesible por teclado y se comunique bien por voz.",
          "action": "Haz que las tallas se puedan elegir con teclado y que cada opción indique su estado.",
          "origin": "WCAG 4.1.2"
        },
        {
          "id": 35,
          "title": "Anuncios ARIA",
          "text": "Notifica por voz cuando un artículo se añade al carrito sin necesidad de recargar la página.",
          "action": "Añade una región aria-live que anuncie 'Artículo añadido al carrito'.",
          "origin": "WCAG 4.1.3"
        },
        {
          "id": 36,
          "title": "Errores de pago",
          "text": "Si el pago falla, indica el error con texto y un icono claro, nunca solo mediante el color rojo.",
          "action": "Acompaña el error de pago de un icono y un texto que diga qué falló y cómo resolverlo.",
          "origin": "WCAG 3.3.1"
        },
        {
          "id": 37,
          "title": "Zoom de producto",
          "text": "Permite ampliar el texto al 200 % y las imágenes sin bloquear la interfaz ni impedir la vuelta a la navegación principal.",
          "action": "Prueba la página al 200 % de zoom y comprueba que nada se solapa ni se queda bloqueado.",
          "origin": "WCAG 1.4.4"
        },
        {
          "id": 38,
          "title": "Labels en Checkout",
          "text": "Mantén las etiquetas de dirección siempre visibles, incluso cuando el usuario está escribiendo.",
          "action": "Usa etiquetas visibles encima del campo en lugar de placeholders.",
          "origin": "WCAG 3.3.2"
        },
        {
          "id": 39,
          "title": "Navegación secuencial",
          "text": "El orden del foco del teclado debe seguir el flujo lógico de compra de forma predecible.",
          "action": "Recorre el checkout con Tab y ajusta el orden del foco al orden visual.",
          "origin": "WCAG 2.4.3"
        },
        {
          "id": 40,
          "title": "Multimedia con subtítulos",
          "text": "Vídeos demostrativos de producto deben incluir subtítulos para usuarios con discapacidad auditiva.",
          "action": "Añade subtítulos a los vídeos de producto.",
          "origin": "WCAG 1.2.2"
        }
      ]
    },
    "psicologia": {
      "title": "Psicología en ecommerce",
      "description": "Usa principios conductuales para aumentar la confianza y la tasa de conversión en el proceso de compra.",
      "cards": [
        {
          "id": 41,
          "title": "Efecto Aislamiento",
          "text": "Destaca cromáticamente el precio rebajado para guiar la atención hacia el valor del ahorro.",
          "action": "Destaca el precio rebajado con color o peso tipográfico y no lo mezcles con otros elementos destacados.",
          "origin": "Laws of UX"
        },
        {
          "id": 42,
          "title": "Prueba Social viva",
          "text": "Mostrar cuántas personas ven el producto genera confianza y valida la popularidad del artículo. Úsalo solo con datos reales.",
          "action": "Muestra el dato solo si es real y se actualiza; si no, quítalo.",
          "origin": "Psicología conductual"
        },
        {
          "id": 43,
          "title": "Urgencia y Escasez",
          "text": "Avisos de 'últimas unidades' motivan la decisión rápida ante el miedo a perder la oportunidad. Úsalos solo cuando el stock sea real.",
          "action": "Usa avisos de stock solo con datos reales de inventario.",
          "origin": "Psicología conductual"
        },
        {
          "id": 44,
          "title": "Anclaje de precios",
          "text": "Mostrar el precio original tachado ayuda a percibir el descuento como una ganancia directa. Usa siempre un precio original real y verificable.",
          "action": "Muestra el precio tachado solo si es el precio anterior real y verificable.",
          "origin": "Psicología conductual"
        },
        {
          "id": 45,
          "title": "Fragmentación (chunking)",
          "text": "Divide el checkout en pasos cortos para reducir la carga de memoria y facilitar el pago.",
          "action": "Divide el checkout en pasos cortos con título y progreso visible.",
          "origin": "Laws of UX"
        },
        {
          "id": 46,
          "title": "Reciprocidad",
          "text": "Ofrecer un cupón tras la primera compra genera un sentimiento de deuda positiva que fideliza.",
          "action": "Ofrece un cupón tras la primera compra y explica con claridad sus condiciones.",
          "origin": "Psicología conductual"
        },
        {
          "id": 47,
          "title": "Gratificación inmediata",
          "text": "Resaltar beneficios inmediatos como 'Recíbelo mañana' ayuda a cerrar la venta por inmediatez.",
          "action": "Muestra la fecha de entrega estimada cerca del botón de compra.",
          "origin": "Psicología conductual"
        },
        {
          "id": 48,
          "title": "Efecto estética-usabilidad",
          "text": "Mantén un diseño coherente para que el usuario sienta que la plataforma es segura y profesional.",
          "action": "Revisa la coherencia visual de todo el flujo de compra, sobre todo en el pago.",
          "origin": "Laws of UX"
        }
      ]
    }
  },
  "dashboard": {
    "usabilidad": {
      "title": "Usabilidad en dashboards",
      "description": "Optimiza la visualización de datos y la gestión de tareas complejas con interfaces eficientes.",
      "cards": [
        {
          "id": 49,
          "title": "Skeletons de carga",
          "text": "Muestra estructuras grises mientras se procesan datos para reducir la ansiedad y mejorar la percepción de velocidad.",
          "action": "Sustituye los spinners por esqueletos con la forma del contenido que va a cargar.",
          "origin": "NN/g"
        },
        {
          "id": 50,
          "title": "Doble confirmación",
          "text": "Solicita confirmación antes de borrar datos críticos para evitar errores accidentales graves.",
          "action": "Añade una confirmación antes de borrar o de acciones que no se pueden deshacer.",
          "origin": "NN/g"
        },
        {
          "id": 51,
          "title": "Atajos de teclado",
          "text": "Permite realizar acciones comunes sin usar el ratón, mejorando la eficiencia de usuarios expertos.",
          "action": "Añade atajos para las acciones frecuentes y muéstralos en la interfaz o en ayuda.",
          "origin": "NN/g"
        },
        {
          "id": 52,
          "title": "Filtros persistentes",
          "text": "Guarda automáticamente la última configuración de filtros para que el usuario no tenga que repetirla.",
          "action": "Guarda los filtros del usuario y recupéralos al volver.",
          "origin": "NN/g"
        },
        {
          "id": 53,
          "title": "Tooltips de ayuda",
          "text": "Añade pequeñas burbujas de texto explicativo en métricas complejas para aclarar qué dato se visualiza.",
          "action": "Añade una explicación breve a las métricas poco claras, accesible también con teclado.",
          "origin": "NN/g"
        },
        {
          "id": 54,
          "title": "Exportación rápida",
          "text": "Ofrece botones visibles para descargar tablas en CSV o PDF sin navegar por menús ocultos.",
          "action": "Coloca el botón de exportar junto a la tabla o gráfica, con el formato indicado.",
          "origin": "Buena práctica"
        },
        {
          "id": 55,
          "title": "Notificaciones sutiles",
          "text": "Usa mensajes de estado (toasts) que no interrumpan el flujo de trabajo principal.",
          "action": "Usa avisos que desaparezcan solos y no tapen contenido, con aria-live.",
          "origin": "NN/g"
        },
        {
          "id": 56,
          "title": "Vistas editables",
          "text": "Permite personalizar el panel eligiendo qué widgets o gráficas ver según la necesidad propia.",
          "action": "Permite elegir y reordenar los widgets y recuerda la configuración.",
          "origin": "NN/g"
        }
      ]
    },
    "accesibilidad": {
      "title": "Accesibilidad en dashboards",
      "description": "Haz que la información compleja sea comprensible para cualquier usuario mediante el uso correcto de estándares.",
      "cards": [
        {
          "id": 57,
          "title": "Redundancia visual",
          "text": "No utilices solo el color para diferenciar series de datos; añade patrones para usuarios daltónicos.",
          "action": "Añade patrones, formas o etiquetas directas además del color en las series de datos.",
          "origin": "WCAG 1.4.1"
        },
        {
          "id": 58,
          "title": "Tablas con cabeceras",
          "text": "Asegura etiquetas de encabezado correctas para que los lectores de pantalla den contexto a los datos.",
          "action": "Marca las cabeceras con th y scope y añade un título a cada tabla.",
          "origin": "WCAG 1.3.1"
        },
        {
          "id": 59,
          "title": "Evitar parpadeos",
          "text": "No incluyas elementos que parpadeen más de tres veces por segundo para prevenir crisis epilépticas.",
          "action": "Elimina los elementos que parpadean más de tres veces por segundo.",
          "origin": "WCAG 2.3.1"
        },
        {
          "id": 60,
          "title": "Identificación de alertas",
          "text": "Los mensajes de error deben indicar exactamente la ubicación del problema de forma textual y clara.",
          "action": "Redacta el error indicando qué campo falla y qué debe hacer la persona.",
          "origin": "WCAG 3.3.1"
        },
        {
          "id": 61,
          "title": "Foco en widgets",
          "text": "Asegura que al navegar con teclado el foco siga un orden lógico entre los diferentes módulos.",
          "action": "Recorre el panel con Tab y ordena el foco por módulos, como se lee.",
          "origin": "WCAG 2.4.3"
        },
        {
          "id": 62,
          "title": "Compatibilidad de Zoom",
          "text": "El diseño debe adaptarse sin solapar widgets ni perder info al ampliar la vista al 200%.",
          "action": "Prueba el panel al 200 % de zoom y reorganiza los módulos para que no se solapen.",
          "origin": "WCAG 1.4.4"
        },
        {
          "id": 63,
          "title": "Contraste en gráficas",
          "text": "Colores de barras o líneas deben tener suficiente contraste respecto al fondo para ser distinguidos.",
          "action": "Comprueba el contraste de líneas y barras contra el fondo (mínimo 3:1) y corrígelo.",
          "origin": "WCAG 1.4.11"
        },
        {
          "id": 64,
          "title": "Labels en selectores",
          "text": "Cada filtro de fecha debe tener una etiqueta asociada que explique su función a lectores de pantalla.",
          "action": "Asocia una etiqueta visible o aria-label a cada selector de fecha y filtro.",
          "origin": "WCAG 3.3.2"
        }
      ]
    },
    "psicologia": {
      "title": "Psicología en dashboards",
      "description": "Reduce la carga cognitiva de los usuarios que manejan grandes volúmenes de datos mediante leyes visuales.",
      "cards": [
        {
          "id": 65,
          "title": "Ley de Miller en KPIs",
          "text": "Mantén un grupo reducido de KPIs principales (en torno a 5-7) para no saturar la memoria y facilitar el análisis.",
          "action": "Reduce los indicadores principales a unos 5-7 y deja el resto en un nivel secundario.",
          "origin": "Laws of UX"
        },
        {
          "id": 66,
          "title": "Ley de Proximidad",
          "text": "Agrupa gráficas que analizan el mismo tipo de métrica dentro de un contenedor común.",
          "action": "Agrupa en un mismo bloque las gráficas que miden lo mismo y separa los bloques.",
          "origin": "Laws of UX"
        },
        {
          "id": 67,
          "title": "Carga cognitiva baja",
          "text": "Elimina bordes pesados y rejillas marcadas para que el dato numérico sea el único protagonista.",
          "action": "Quita bordes y líneas de rejilla que no aporten y deja los datos como protagonistas.",
          "origin": "Laws of UX"
        },
        {
          "id": 68,
          "title": "Región Común",
          "text": "Utiliza colores de fondo suaves para delimitar diferentes áreas de trabajo o módulos.",
          "action": "Usa fondos suaves para delimitar módulos en vez de bordes pesados.",
          "origin": "Laws of UX"
        },
        {
          "id": 69,
          "title": "Efecto Von Restorff",
          "text": "Utiliza un color vibrante solo para la métrica que requiere atención o indica alerta crítica.",
          "action": "Reserva un color llamativo para lo que requiere atención y úsalo en pocos sitios.",
          "origin": "Laws of UX"
        },
        {
          "id": 70,
          "title": "Ley de Semejanza",
          "text": "Mantén el mismo estilo visual para todos los botones que ejecuten acciones del mismo tipo.",
          "action": "Unifica el estilo de los botones que hacen el mismo tipo de acción.",
          "origin": "Laws of UX"
        },
        {
          "id": 71,
          "title": "Reconocimiento",
          "text": "Usa iconos estándar para funciones de gestión, evitando que el usuario deba aprender un nuevo lenguaje.",
          "action": "Usa iconos conocidos y acompáñalos con texto cuando el significado no sea evidente.",
          "origin": "NN/g"
        },
        {
          "id": 72,
          "title": "Ley de Hick en menús",
          "text": "Categoriza configuraciones en submenús lógicos para facilitar hallazgos sin perderse en listas.",
          "action": "Agrupa los ajustes en submenús con nombres claros.",
          "origin": "Laws of UX"
        }
      ]
    }
  },
  "formulario": {
    "usabilidad": {
      "title": "Usabilidad en formularios",
      "description": "Aumenta la tasa de registro y contacto facilitando la introducción de datos sin errores.",
      "cards": [
        {
          "id": 73,
          "title": "Validación inline",
          "text": "Muestra mensajes de error en el momento en que el usuario sale del campo para corregirlos rápido.",
          "action": "Valida cada campo al salir de él y muestra el mensaje junto al campo.",
          "origin": "NN/g"
        },
        {
          "id": 74,
          "title": "Microcopy de ayuda",
          "text": "Incluye textos breves explicativos bajo campos complejos para aclarar el formato de dato necesario.",
          "action": "Añade un ejemplo del formato esperado bajo los campos complejos.",
          "origin": "NN/g"
        },
        {
          "id": 75,
          "title": "Máscaras de entrada",
          "text": "Formatea automáticamente datos como teléfonos para evitar errores de puntuación del usuario.",
          "action": "Formatea teléfonos, fechas y tarjetas automáticamente y acepta variantes al pegar.",
          "origin": "NN/g"
        },
        {
          "id": 76,
          "title": "Guardado automático",
          "text": "Almacena el progreso localmente para no perder datos si la página se recarga o falla la conexión.",
          "action": "Guarda el progreso en el navegador y recupéralo al volver.",
          "origin": "Buena práctica"
        },
        {
          "id": 77,
          "title": "Botones diferenciados",
          "text": "El botón de envío debe destacar visualmente sobre el de cancelar para evitar clics accidentales.",
          "action": "Diferencia el botón de envío del de cancelar por estilo y por posición.",
          "origin": "NN/g"
        },
        {
          "id": 78,
          "title": "Recuperación de errores",
          "text": "Si el envío falla, mantén los campos rellenos para que el usuario no tenga que empezar de cero.",
          "action": "Conserva lo escrito cuando hay un error y marca solo los campos a corregir.",
          "origin": "NN/g"
        },
        {
          "id": 79,
          "title": "Indicadores de pasos",
          "text": "En formularios largos, usa una barra de progreso que indique cuánto falta para completar el proceso.",
          "action": "Añade un indicador de pasos o una barra de progreso con el número de pasos.",
          "origin": "NN/g"
        },
        {
          "id": 80,
          "title": "Teclados adaptados",
          "text": "Configura el teclado numérico automático en móvil cuando se solicite un dato de tipo teléfono.",
          "action": "Usa el tipo de campo adecuado (tel, email, number) para que salga el teclado correcto.",
          "origin": "Buena práctica"
        }
      ]
    },
    "accesibilidad": {
      "title": "Accesibilidad en formularios",
      "description": "Garantiza que cualquier usuario, con o sin tecnologías de asistencia, pueda completar tus formularios.",
      "cards": [
        {
          "id": 81,
          "title": "Agrupación semántica",
          "text": "Utiliza etiquetas para agrupar campos relacionados (como la dirección) y facilitar la comprensión.",
          "action": "Agrupa campos relacionados con fieldset y legend.",
          "origin": "WCAG 1.3.1"
        },
        {
          "id": 82,
          "title": "Labels visibles",
          "text": "No utilices el placeholder como etiqueta; desaparece al escribir y confunde a usuarios con poca memoria.",
          "action": "Sustituye los placeholders por etiquetas visibles y deja el placeholder solo como ejemplo.",
          "origin": "WCAG 3.3.2"
        },
        {
          "id": 83,
          "title": "Errores con iconos",
          "text": "Acompaña mensajes de error con iconos para que daltónicos identifiquen qué campo ha fallado.",
          "action": "Añade un icono y un texto al error, además del color.",
          "origin": "WCAG 1.4.1"
        },
        {
          "id": 84,
          "title": "Instrucciones previas",
          "text": "Coloca reglas de contraseña antes del campo para que el usuario las conozca antes de empezar.",
          "action": "Muestra las reglas antes del campo y no solo cuando falla.",
          "origin": "WCAG 3.3.2"
        },
        {
          "id": 85,
          "title": "Sin límites de tiempo",
          "text": "Asegura que el formulario no caduque por inactividad sin avisar, permitiendo terminar el proceso.",
          "action": "Evita que la sesión caduque sin aviso y avisa antes de que ocurra, con opción de ampliar.",
          "origin": "WCAG 2.2.1"
        },
        {
          "id": 86,
          "title": "Contorno de foco",
          "text": "El borde del campo seleccionado debe ser muy evidente para usuarios que navegan con tabulador.",
          "action": "Refuerza el contorno de foco de los campos con contraste suficiente.",
          "origin": "WCAG 2.4.7"
        },
        {
          "id": 87,
          "title": "Navegación secuencial",
          "text": "El orden de tabulación debe ser idéntico al visual para evitar saltos inesperados del cursor.",
          "action": "Ajusta el orden del foco para que coincida con el orden visual.",
          "origin": "WCAG 2.4.3"
        },
        {
          "id": 88,
          "title": "Sugerencias de arreglo",
          "text": "Si un campo falla, ofrece una sugerencia clara de cómo solucionarlo en lugar de mensajes genéricos.",
          "action": "Redacta cada error con la causa y un ejemplo de cómo corregirlo.",
          "origin": "WCAG 3.3.3"
        }
      ]
    },
    "psicologia": {
      "title": "Psicología en formularios",
      "description": "Aumenta la motivación del usuario para completar la tarea reduciendo la percepción de esfuerzo.",
      "cards": [
        {
          "id": 89,
          "title": "Carga cognitiva mínima",
          "text": "Pide solo los datos estrictamente necesarios; cada campo extra puede reducir la conversión.",
          "action": "Revisa cada campo y elimina los que no sean necesarios para el objetivo.",
          "origin": "Laws of UX"
        },
        {
          "id": 90,
          "title": "Empezar por lo fácil",
          "text": "Sitúa las preguntas más fáciles al inicio para crear inercia positiva y motivar a terminar.",
          "action": "Reordena para empezar con las preguntas más sencillas y dejar las delicadas al final.",
          "origin": "Buena práctica"
        },
        {
          "id": 91,
          "title": "Ley de Proximidad",
          "text": "Mantén las etiquetas pegadas visualmente a sus campos para que se procesen como un solo elemento.",
          "action": "Acerca la etiqueta a su campo y separa más los grupos distintos.",
          "origin": "Laws of UX"
        },
        {
          "id": 92,
          "title": "Sesgo de completitud",
          "text": "Una barra de progreso activa el deseo psicológico de cerrar la tarea pendiente y no abandonar.",
          "action": "Añade una barra de progreso o un contador de pasos que muestre lo que falta.",
          "origin": "Laws of UX"
        },
        {
          "id": 93,
          "title": "Columna única",
          "text": "Formularios en una sola columna vertical son más rápidos de leer y generan menos errores.",
          "action": "Pasa el formulario a una sola columna, salvo campos muy cortos que van juntos.",
          "origin": "NN/g"
        },
        {
          "id": 94,
          "title": "Ley de Prägnanz",
          "text": "Mantén un diseño alineado y limpio para que el formulario parezca más sencillo de lo que es.",
          "action": "Alinea los campos a una cuadrícula y elimina elementos que no aporten.",
          "origin": "Laws of UX"
        },
        {
          "id": 95,
          "title": "Menos es más",
          "text": "Quita los campos innecesarios: acortan el formulario y el tiempo de registro.",
          "action": "Quita los campos opcionales o difiere su petición hasta después del registro.",
          "origin": "Buena práctica"
        },
        {
          "id": 96,
          "title": "Feedback de éxito",
          "text": "Muestra un mensaje de confirmación claro tras el envío para cerrar el ciclo mental del usuario.",
          "action": "Muestra una confirmación clara con lo que ha ocurrido y lo siguiente que pasará.",
          "origin": "NN/g"
        }
      ]
    }
  }
};

const references = [
  {
    "name": "NN/g · 10 heurísticas de usabilidad",
    "url": "https://www.nngroup.com/articles/ten-usability-heuristics/",
    "short": "NN/g",
    "desc": "10 heurísticas de usabilidad: la base de los puntos de usabilidad.",
    "focus": "usabilidad"
  },
  {
    "name": "W3C · WCAG 2.2 (referencia rápida)",
    "url": "https://www.w3.org/WAI/WCAG22/quickref/",
    "short": "W3C",
    "desc": "WCAG 2.2: los criterios de accesibilidad citados en cada punto.",
    "focus": "accesibilidad"
  },
  {
    "name": "Laws of UX",
    "url": "https://lawsofux.com/",
    "short": "Laws of UX",
    "desc": "Principios de psicología aplicados al diseño de interfaces.",
    "focus": "psicologia"
  }
];
