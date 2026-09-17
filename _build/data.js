"use strict";

// Contenido real del sitio: guías de compra y artículos de blog.
// Nada de datos de producto inventados (ni precios exactos, ni valoraciones,
// ni modelos) en el cuerpo de la guía: son guías de criterio, no fichas de
// producto. Los productos concretos van en el array `products` de cada guía,
// verificados en Amazon.es (ASIN, título, precio e imagen reales).

const GUIDES = [
  {
    slug: "camaras-wifi-interior",
    title: "Cómo elegir una cámara WiFi para interior",
    dek: "Resolución, visión nocturna, almacenamiento y privacidad: los criterios que importan antes de poner una cámara dentro de casa.",
    updated: "2026-09-16",
    intro: [
      "Una cámara de interior vigila lo más privado de tu casa: el salón, la habitación de un hijo o la zona donde duerme una persona mayor. Eso cambia las prioridades respecto a una cámara de exterior: aquí importa tanto la calidad de imagen como el control real que tienes sobre quién puede ver esas imágenes.",
      "Esta guía no recomienda una marca concreta: te da los criterios para comparar cualquier cámara WiFi de interior, la compres donde la compres.",
    ],
    sections: [
      {
        heading: "Resolución y campo de visión",
        body: [
          "1080p es el mínimo razonable hoy para identificar caras o leer una matrícula a través de una ventana; 2K o 3MP ya permite hacer zoom digital sin perder demasiado detalle. Un campo de visión de 360° (cámaras con base motorizada tipo panorámica-inclinación) cubre una habitación entera desde una esquina, mientras que las de gran angular fijo (130-160°) bastan para vigilar una puerta o un pasillo concreto.",
          "El seguimiento automático de movimiento (la cámara gira sola siguiendo a una persona o mascota) es útil en habitaciones grandes, pero no sustituye a un buen campo de visión de partida: una cámara mal colocada sigue teniendo puntos ciegos aunque gire.",
        ],
      },
      {
        heading: "Visión nocturna: infrarroja o en color",
        body: [
          "La visión nocturna infrarroja clásica (blanco y negro) es la más habitual y suficiente para detectar movimiento en la oscuridad. La visión nocturna en color, que usa un foco led tenue o mayor sensibilidad del sensor, aporta más detalle (ropa, objetos) pero consume algo más y en habitaciones muy oscuras puede quedar por debajo de la infrarroja en alcance.",
          "Si la cámara va a vigilar una cuna o la zona de juego de una mascota por la noche, prioriza que la visión nocturna cubra bien la distancia real de la habitación, no solo la especificación en metros del fabricante.",
        ],
      },
      {
        heading: "Almacenamiento: tarjeta SD, nube o ambos",
        body: [
          "El almacenamiento local (tarjeta microSD en la propia cámara) no depende de una suscripción y mantiene el vídeo dentro de casa, pero si roban la cámara o la tarjeta falla, se pierde la grabación. El almacenamiento en la nube sobrevive a que roben o rompan la cámara, pero casi siempre implica una cuota mensual pasado un periodo de prueba gratuito.",
          "Las cámaras que permiten elegir entre tarjeta SD, nube de pago o ambas a la vez dan más margen: puedes empezar sin gastar en suscripción y añadirla después si de verdad la necesitas.",
        ],
      },
      {
        heading: "Privacidad: modo privado y control de acceso",
        body: [
          "Una cámara de interior debería tener un modo privacidad real (que tape físicamente el objetivo o desactive la grabación) para las horas en que no quieres que nadie, ni siquiera el fabricante, tenga acceso a esa zona. Revisa también si la app permite ver quién ha iniciado sesión y cerrar accesos de otros dispositivos.",
          "Compatibilidad con Alexa o Google Home es un extra cómodo, pero conviene entender que añade otra cuenta con acceso a las imágenes: si la privacidad es tu prioridad número uno, valora si de verdad necesitas ese asistente conectado a la cámara del dormitorio.",
        ],
      },
    ],
    checklist: [
      "Resolución mínima 1080p, mejor 2K si vas a hacer zoom digital",
      "Campo de visión y seguimiento adecuados al tamaño real de la habitación",
      "Visión nocturna que cubra la distancia real, no solo la de la ficha técnica",
      "Almacenamiento local, en nube o ambos, según si quieres pagar suscripción",
      "Modo privacidad físico o por software para desactivarla cuando quieras",
    ],
    faq: [
      {
        q: "¿Necesito pagar una suscripción en la nube si tengo tarjeta SD?",
        a: "No necesariamente: muchas cámaras funcionan de forma completa solo con tarjeta microSD y sin ninguna cuota. La suscripción en la nube es un extra para quien quiere que el vídeo sobreviva a que roben o dañen la cámara, o para acceder a funciones avanzadas como detección de personas más precisa.",
      },
      {
        q: "¿Es seguro tener una cámara WiFi dentro del dormitorio?",
        a: "Depende de cómo la configures: usa siempre una contraseña fuerte y distinta de la de fábrica, activa la verificación en dos pasos si la app lo permite, y aprovecha el modo privacidad en las horas en que no necesitas vigilancia. Revisar de vez en cuando qué dispositivos tienen sesión iniciada en la app reduce mucho el riesgo de accesos no deseados.",
      },
    ],
    products: [
      {
        asin: "B08X6DCJT2",
        title: "Imou Cámara IP WiFi Interior 2K/3MP Cámara de Vigilancia WiFi Interior 360°",
        note: "Entrada de gama con buena relación precio-funciones: detección de personas y mascotas, audio bidireccional.",
        img: "https://m.media-amazon.com/images/I/51ibns6pBhL._AC_UL320_.jpg",
        price: "21,99",
        rating: "4,5★",
      },
      {
        asin: "B07XLML2YS",
        title: "Tapo C200 - Cámara de Vigilancia WiFi Interior 360º, 1080p, Detección IA",
        note: "La más vendida de la categoría: 360°, detección de personas y llanto de bebé, app sencilla.",
        img: "https://m.media-amazon.com/images/I/81mzC7O5VpL._AC_UL320_.jpg",
        price: "21,99",
        rating: "4,6★",
      },
      {
        asin: "B095CLQ1PT",
        title: "Tapo C210 - Cámara de Vigilancia WiFi Interior 360º, 2K 3MP, Detección IA",
        note: "Un salto de resolución sobre la C200 por poco más precio: mejor detalle si haces zoom.",
        img: "https://m.media-amazon.com/images/I/71nf8hRLq6L._AC_UL320_.jpg",
        price: "23,49",
        rating: "4,7★",
      },
      {
        asin: "B0FC331VV7",
        title: "XIAOMI C201 Camara Vigilancia WiFi Interior, 1080P HD Camara Vigilancia",
        note: "Seguimiento dinámico de personas y mascotas, control por Alexa y Google.",
        img: "https://m.media-amazon.com/images/I/61cngd8x4NL._AC_UL320_.jpg",
        price: "24,99",
        rating: "4,5★",
      },
      {
        asin: "B0FHKNX5CT",
        title: "EZVIZ C6N G1 3K Cámara Vigilancia WiFi Interior 360°",
        note: "Visión nocturna en color y seguimiento con zoom; buen punto medio de gama.",
        img: "https://m.media-amazon.com/images/I/614ZYF+tcOL._AC_UL320_.jpg",
        price: "35,99",
        rating: "4,4★",
      },
      {
        asin: "B086LBCQJL",
        title: "eufy by Anker IndoorCam E220 Camara vigilancia WiFi Interior 2K",
        note: "Reconocimiento de personas más fino y opción de funcionar sin base adicional.",
        img: "https://m.media-amazon.com/images/I/511E1rSQ37L._AC_UL320_.jpg",
        price: "36,99",
        rating: "4,5★",
      },
      {
        asin: "B07SV5NQNB",
        title: "Reolink Camara Vigilancia WiFi Interior 3K 5MP 360° PT, E1 Pro",
        note: "Resolución alta (5MP) y WiFi dual banda; de las más nítidas de la selección.",
        img: "https://m.media-amazon.com/images/I/51VfPyN4MRL._AC_UL320_.jpg",
        price: "59,99",
        rating: "4,4★",
      },
      {
        asin: "B0FG2RNTX6",
        title: "Tapo C260 - Cámara de Vigilancia WiFi Interior 360º, 4K 8MP, Detección IA",
        note: "Gama alta: 4K, reconocimiento facial y detección de mascotas y llanto de bebé.",
        img: "https://m.media-amazon.com/images/I/71xkhUc49UL._AC_UL320_.jpg",
        price: "59,79",
        rating: "4,7★",
      },
    ],
  },
  {
    slug: "camaras-wifi-exterior",
    title: "Cómo elegir una cámara WiFi para exterior",
    dek: "Resistencia al agua, visión nocturna a distancia y alimentación: lo que cambia respecto a una cámara de interior.",
    updated: "2026-09-15",
    intro: [
      "Una cámara pensada para interior no suele aguantar bien la intemperie: la lluvia, el sol directo o el frío de un invierno entero pueden dejarla inservible en pocos meses. Una cámara de exterior tiene que resolver problemas que dentro de casa no existen: estanqueidad, alcance nocturno mayor y, muchas veces, cómo llevarle corriente o alimentarla con batería.",
      "Como en el resto de guías de este sitio, aquí no se recomienda un modelo concreto: se explican los criterios para comparar cualquier cámara de exterior por su cuenta.",
    ],
    sections: [
      {
        heading: "Certificación IP: qué significa de verdad",
        body: [
          "La certificación IP65 o superior es el mínimo razonable para exterior: el primer dígito indica protección contra polvo (6 es total) y el segundo contra agua (5 aguanta chorros de agua, 6 y 7 aguantan inmersión temporal). Una cámara solo \"resistente a la lluvia\" sin certificación IP clara es una señal de alerta si va a estar expuesta a la intemperie sin ningún tipo de alero o protección.",
          "El rango de temperatura de funcionamiento también importa si vives en una zona con inviernos fríos o veranos muy calurosos: revisa la ficha técnica, no solo la resistencia al agua.",
        ],
      },
      {
        heading: "Cableada, con batería o solar",
        body: [
          "Las cámaras cableadas (a la corriente o por PoE, alimentación por el mismo cable de red) graban de forma continua sin preocuparte por la batería, pero requieren tener un punto de corriente o de red cerca de donde quieres instalarla. Las cámaras de batería se instalan en cualquier sitio sin obras, a cambio de tener que recargarlas cada cierto tiempo (semanas o meses, según el modelo y el uso).",
          "Los kits con panel solar resuelven el problema de recarga en exteriores con buena exposición al sol, pero en zonas con poca luz solar directa (norte, muy sombreadas) la batería puede no recargarse lo suficiente en invierno.",
        ],
      },
      {
        heading: "Visión nocturna e IA de detección a distancia",
        body: [
          "En exterior, la distancia a la que la cámara detecta movimiento importa más que en interior: un jardín o una entrada de coche necesitan más alcance que una habitación. La detección inteligente (personas, vehículos, animales) reduce muchísimo las falsas alarmas que antes disparaba cualquier rama moviéndose con el viento o un gato cruzando el jardín.",
          "La visión nocturna en color con foco integrado ayuda a identificar mejor a alguien en la entrada de casa de noche, aunque consume más batería que la infrarroja clásica en los modelos que no van cableados.",
        ],
      },
      {
        heading: "Instalación y ángulo de colocación",
        body: [
          "La altura y el ángulo de instalación influyen tanto como las especificaciones: una cámara puesta muy alta pierde detalle de caras, y una puesta muy baja es más fácil de tapar o inutilizar. 2,5-3 metros de altura, apuntando ligeramente hacia abajo, suele ser el punto de partida razonable para la mayoría de entradas y jardines.",
        ],
      },
    ],
    checklist: [
      "Certificación IP65 o superior, no solo \"resistente a la lluvia\"",
      "Alimentación (cableada, batería o solar) según dónde la vas a instalar",
      "Detección inteligente de personas/vehículos para evitar falsas alarmas",
      "Alcance de visión nocturna suficiente para el tamaño del jardín o entrada",
      "Altura y ángulo de instalación pensados para no perder detalle ni ser accesible",
    ],
    faq: [
      {
        q: "¿Cuánto dura la batería de una cámara solar en invierno?",
        a: "Depende mucho de las horas de sol directo que reciba el panel: en zonas con inviernos nublados o con la cámara en sombra, la recarga puede no compensar el consumo y la batería puede bajar poco a poco. Si tu instalación va a recibir poco sol en invierno, valora una cámara cableada o con batería de más capacidad como respaldo.",
      },
      {
        q: "¿Una cámara IP65 aguanta lluvia fuerte y directa?",
        a: "Sí, IP65 está pensada para chorros de agua desde cualquier ángulo, lo que cubre lluvia normal e incluso fuerte. Para zonas con lluvia muy intensa y prolongada, o si la cámara queda muy expuesta sin ningún alero, IP66 o IP67 dan un margen extra de tranquilidad.",
      },
    ],
    products: [
      {
        asin: "B0BQJVKVQR",
        title: "Tapo C500 - Cámara de Vigilancia WiFi Exterior 360º, 1080p, Detección IA",
        note: "Entrada de gama con giro motorizado 360° e IP65, buena relación calidad-precio.",
        img: "https://m.media-amazon.com/images/I/71wgoGwxAEL._AC_UL320_.jpg",
        price: "34,99",
        rating: "4,6★",
      },
      {
        asin: "B08BXZY1D2",
        title: "Imou 2K Cámara Vigilancia WiFi Exterior, Cámara IP Vigilancia de Seguridad",
        note: "Resolución 2K a precio de entrada, con detección de humanos.",
        img: "https://m.media-amazon.com/images/I/51ei79fht0L._AC_UL320_.jpg",
        price: "33,99",
        rating: "4,5★",
      },
      {
        asin: "B0DQ5NTHB8",
        title: "Tapo C51A - Cámara de Vigilancia WiFi Exterior 360º, 2K 3MP, Detección IA",
        note: "360° motorizado con detección de personas y almacenamiento local o en nube.",
        img: "https://m.media-amazon.com/images/I/61SuPcKyB6L._AC_UL320_.jpg",
        price: "42,99",
        rating: "4,7★",
      },
      {
        asin: "B0BZMLKXL4",
        title: "Tapo C510W - Cámara de Vigilancia WiFi Exterior 360º, 2K 3MP, Detección IA",
        note: "Muy bien valorada; punto de referencia en la gama media de exterior.",
        img: "https://m.media-amazon.com/images/I/71gn4Lap7gL._AC_UL320_.jpg",
        price: "42,99",
        rating: "4,7★",
      },
      {
        asin: "B0D262ZN1V",
        title: "EZVIZ 2PCS Cámara Vigilancia WiFi Exterior 360°, C8c 2MP",
        note: "Pack de dos cámaras: cubre dos puntos de la vivienda por el precio de una gama alta.",
        img: "https://m.media-amazon.com/images/I/51WsXtnabWL._AC_UL320_.jpg",
        price: "61,99",
        rating: "4,4★",
      },
      {
        asin: "B0CCW8GHT8",
        title: "Tapo C520WS - Cámara de Vigilancia WiFi Exterior 360º, 2K QHD, Detección IA",
        note: "Resolución QHD y buen alcance de detección para jardines grandes.",
        img: "https://m.media-amazon.com/images/I/718jyrLqD1L._AC_UL320_.jpg",
        price: "54,99",
        rating: "4,6★",
      },
      {
        asin: "B0FNRQYZB8",
        title: "Tapo C610 Kit - Cámara Vigilancia WiFi Exterior 360º, Panel Solar, 2K 3MP",
        note: "Incluye panel solar: pensada para instalación sin cables ni recarga manual.",
        img: "https://m.media-amazon.com/images/I/813QXHHWgIL._AC_UL320_.jpg",
        price: "74,99",
        rating: "4,3★",
      },
      {
        asin: "B0C33SR9RL",
        title: "Reolink Camara Vigilancia WiFi Exterior 4K 8MP PTZ, E1 Outdoor Pro",
        note: "Gama alta: 4K con zoom y giro motorizado, para quien prioriza el máximo detalle.",
        img: "https://m.media-amazon.com/images/I/61sq9n0Kc7L._AC_UL320_.jpg",
        price: "139,99",
        rating: "4,4★",
      },
    ],
  },
  {
    slug: "timbres-inteligentes-con-camara",
    title: "Timbres con cámara: cómo elegir el que de verdad necesitas",
    dek: "Ángulo de visión, detección de paquetes y alimentación: los criterios antes de sustituir tu timbre por uno inteligente.",
    updated: "2026-09-14",
    intro: [
      "Un timbre con cámara resuelve algo muy concreto: saber quién está en la puerta sin tener que abrirla, incluso cuando no estás en casa. Pero no todos sirven igual según el tipo de puerta, la instalación eléctrica que ya tengas o si lo que más te importa es ver paquetes dejados en el porche o identificar caras con detalle.",
      "Esta guía te da los criterios de compra, no un ranking de modelos concretos.",
    ],
    sections: [
      {
        heading: "Con cable o con batería",
        body: [
          "Si tu vivienda ya tiene un timbre cableado, un timbre inteligente con cable aprovecha esa instalación y no depende de recargar batería, aunque la instalación exige ciertos conocimientos eléctricos básicos o un electricista. Los timbres de batería se instalan en cualquier puerta sin obra ni cableado previo, pero hay que recargarlos cada varias semanas o meses según el uso y la frecuencia de detecciones.",
          "Algunos modelos aceptan ambas alimentaciones (cable o batería), lo que da flexibilidad si no estás seguro del tipo de instalación que tienes en tu puerta.",
        ],
      },
      {
        heading: "Ángulo de visión y detección de paquetes",
        body: [
          "Un ángulo de visión vertical amplio (formato \"cabeza a pies\") es importante para ver un paquete dejado en el suelo del porche, algo que muchos timbres con formato clásico horizontal no cubren bien. Si recibes paquetes con frecuencia, prioriza modelos que anuncien explícitamente detección de paquetes o campo de visión vertical extendido.",
          "El ángulo horizontal amplio (160-180°) ayuda además a cubrir los laterales de la puerta, útil en entradas estrechas o portales compartidos.",
        ],
      },
      {
        heading: "Almacenamiento y coste real a largo plazo",
        body: [
          "Muchos timbres con cámara solo graban clips cortos activados por movimiento salvo que pagues una suscripción en la nube: revisa qué incluye el plan gratuito antes de comprar, porque puede ser mucho más limitado de lo que parece en la ficha del producto. Los modelos con tarjeta microSD local evitan la cuota mensual a cambio de gestionar tú mismo el almacenamiento.",
        ],
      },
      {
        heading: "Videoportero de dos hilos frente a timbre WiFi independiente",
        body: [
          "Si vives en un piso con portero automático de dos hilos ya instalado, un videoportero compatible con esa instalación (pantalla interior + placa exterior) suele integrarse mejor que un timbre WiFi genérico pensado para vivienda unifamiliar. Para chalets o viviendas con puerta propia, el timbre WiFi independiente con app en el móvil es la opción más simple de instalar.",
        ],
      },
    ],
    checklist: [
      "Alimentación (cable, batería o ambas) según tu instalación actual",
      "Ángulo de visión vertical amplio si recibes paquetes con frecuencia",
      "Qué incluye realmente el plan gratuito de grabación en la nube",
      "Videoportero de dos hilos si ya tienes esa instalación en un piso",
      "Resolución mínima 1080p para identificar caras con claridad",
    ],
    faq: [
      {
        q: "¿Necesito pagar suscripción para que el timbre grabe vídeo?",
        a: "Depende del modelo: algunos incluyen almacenamiento local en tarjeta microSD sin coste añadido, mientras que otros solo ofrecen notificaciones en vivo gratis y cobran por guardar el historial de grabaciones en la nube. Revisa esta letra pequeña antes de comprar si te importa tener un histórico sin pagar cuota mensual.",
      },
      {
        q: "¿Puedo instalar un timbre inteligente si vivo de alquiler?",
        a: "Los modelos de batería sin cableado permiten una instalación reversible con cinta adhesiva de montaje o un soporte atornillado pequeño y fácil de tapar al irte, lo que suele ser más aceptable en alquiler que sustituir el timbre eléctrico original. Conviene confirmarlo con el propietario si vas a hacer algún taladro, aunque sea mínimo.",
      },
    ],
    products: [
      {
        asin: "B0FHXVX9W9",
        title: "Tapo D205 - Videoportero 2K 3 MP, Campo de visión 160°, batería de 5200 mAh",
        note: "Entrada de gama con buena autonomía de batería y campo de visión amplio.",
        img: "https://m.media-amazon.com/images/I/514FAKtvDtL._AC_UL320_.jpg",
        price: "49,99",
        rating: "4,4★",
      },
      {
        asin: "B0C92MHTGC",
        title: "Ring mirilla digital (Door View Cam)",
        note: "Se instala sobre la mirilla existente, ideal para puertas sin timbre eléctrico previo.",
        img: "https://m.media-amazon.com/images/I/51DO89pWMvL._AC_UL320_.jpg",
        price: "49,99",
        rating: "4,3★",
      },
      {
        asin: "B0DN6LZGBW",
        title: "Tapo D210 - Timbre con Cámara Exterior 2K, Batería 6 Meses, Detección IA",
        note: "Batería de larga duración (hasta 6 meses) y detección inteligente de personas.",
        img: "https://m.media-amazon.com/images/I/71NHWigPvRL._AC_UL320_.jpg",
        price: "64,79",
        rating: "4,5★",
      },
      {
        asin: "B0DLNXY81N",
        title: "EZVIZ Timbre Inalámbrico con Cámara de Panel Solar, CP3 Pro",
        note: "Incorpora panel solar para no depender de recargar la batería a mano.",
        img: "https://m.media-amazon.com/images/I/61uzx-C6IzL._AC_UL320_.jpg",
        price: "73,99",
        rating: "4,0★",
      },
      {
        asin: "B0G52BVRLQ",
        title: "Aqara Timbre con Cámara G400, PoE/Wi-Fi, HomeKit Secure Video, IP65",
        note: "Compatible con HomeKit Secure Video; opción para quien ya usa el ecosistema Apple.",
        img: "https://m.media-amazon.com/images/I/71NzCQEYE5L._AC_UL320_.jpg",
        price: "84,99",
        rating: "4,3★",
      },
      {
        asin: "B0GVQSJ2F7",
        title: "EZVIZ CP8 Timbre Inalámbrico Exterior con Cámara 5MP, Chime Incluido",
        note: "Incluye timbre repetidor de sonido interior y batería de gran capacidad (9600 mAh).",
        img: "https://m.media-amazon.com/images/I/61+ux6X2r8L._AC_UL320_.jpg",
        price: "89,99",
        rating: "4,0★",
      },
      {
        asin: "B0DDL95M8Z",
        title: "Tapo D235 - Timbre con Cámara Exterior 2K, Batería 7 Meses, Detección IA",
        note: "Gama alta de Tapo: mayor autonomía y detección IA más precisa.",
        img: "https://m.media-amazon.com/images/I/71r5xiPwDBL._AC_UL320_.jpg",
        price: "99,99",
        rating: "4,3★",
      },
      {
        asin: "B0FJJM9R3Z",
        title: "Ring Wired Video Doorbell 2K, Videotimbre cableado",
        note: "Pensado para aprovechar un timbre cableado ya existente, sin depender de batería.",
        img: "https://m.media-amazon.com/images/I/51LYJlS+mDL._AC_UL320_.jpg",
        price: "79,99",
        rating: "4,2★",
      },
    ],
  },
  {
    slug: "cerraduras-inteligentes",
    title: "Cerraduras inteligentes: qué mirar antes de cambiar la de tu puerta",
    dek: "Compatibilidad con tu cerradura actual, métodos de apertura y autonomía: lo que de verdad marca la diferencia.",
    updated: "2026-09-13",
    intro: [
      "Cambiar la cerradura de la puerta principal no es una decisión pequeña: si algo falla, puede dejarte fuera de casa. Por eso, más que en cualquier otro producto de esta web, conviene entender bien la compatibilidad con tu puerta actual antes de fijarte en funciones llamativas como el desbloqueo por huella o por voz.",
      "Esta guía explica los criterios de compra; no sustituye la comprobación física de tu cerradura y cilindro antes de comprar.",
    ],
    sections: [
      {
        heading: "Compatibilidad: cilindro europeo y tipo de puerta",
        body: [
          "La mayoría de cerraduras inteligentes para el mercado europeo se instalan sobre el cilindro europeo estándar, por fuera del mecanismo de cierre existente, sin necesidad de cambiar toda la cerradura. Antes de comprar, mide el grosor de tu puerta y el tipo de cilindro: algunos modelos solo cubren un rango concreto de medidas y no todas las puertas (blindadas, de comunidad con normativa propia) admiten cualquier dispositivo externo.",
          "Si vives en una comunidad de vecinos o en un piso de alquiler, conviene confirmar que la instalación no anula ninguna cerradura de seguridad exigida por el seguro del hogar.",
        ],
      },
      {
        heading: "Métodos de apertura: huella, código, tarjeta o llave física",
        body: [
          "Cuantos más métodos de apertura ofrezca la cerradura (huella dactilar, código numérico, tarjeta RFID, app del móvil y llave mecánica de reserva), más margen tienes si un método falla en un momento dado (batería del móvil agotada, dedo mojado que no lee bien la huella). La llave mecánica de emergencia es importante casi siempre: ninguna cerradura electrónica debería dejarte sin ninguna vía de entrada si se queda sin batería del todo.",
          "Los códigos temporales (para un familiar de visita o un servicio de limpieza puntual) son una función práctica que no todas las cerraduras ofrecen de fábrica.",
        ],
      },
      {
        heading: "Autonomía y qué pasa si se agota la batería",
        body: [
          "La mayoría funciona con pilas o batería recargable que dura meses, pero conviene saber qué ocurre cuando se agota: los mejores modelos avisan con antelación en la app y siguen permitiendo la apertura con llave física o código de emergencia externo (teclado numérico independiente de la batería interna).",
          "Un cargador de emergencia externo tipo poder bank que se conecta por contacto para dar corriente puntual a la cerradura es una función a valorar si vives solo y te preocupa quedarte fuera.",
        ],
      },
      {
        heading: "Conectividad: Bluetooth, WiFi y control remoto",
        body: [
          "Las cerraduras solo con Bluetooth abren de cerca (tú junto a la puerta) pero no permiten abrir en remoto desde fuera de casa ni recibir notificaciones instantáneas sin un puente adicional. Las que añaden WiFi o un hub compatible con Matter permiten controlar la cerradura desde cualquier lugar y integrarla con asistentes de voz o rutinas de automatización del hogar.",
        ],
      },
    ],
    checklist: [
      "Compatibilidad confirmada con el cilindro y grosor de tu puerta actual",
      "Llave mecánica de emergencia o código offline si se agota la batería",
      "Varios métodos de apertura (huella, código, app) para tener margen",
      "Aviso anticipado de batería baja en la app",
      "WiFi o hub compatible si quieres abrir en remoto o recibir notificaciones",
    ],
    faq: [
      {
        q: "¿Qué pasa si se queda sin batería estando fuera de casa?",
        a: "La mayoría de cerraduras de calidad incluyen una vía de emergencia: llave mecánica de reserva, teclado numérico alimentado aparte o un contacto externo para dar corriente puntual con una batería portátil. Comprueba que el modelo que compres tenga alguna de estas opciones antes de confiar en él como única cerradura de la puerta principal.",
      },
      {
        q: "¿Es más fácil de forzar una cerradura inteligente que una mecánica normal?",
        a: "Una cerradura inteligente de calidad no sustituye el cierre mecánico, solo automatiza cómo lo accionas: por dentro sigue siendo el mismo tipo de pestillo o bombín que una cerradura convencional. El punto débil real suele estar en la seguridad del propio cilindro (elige uno con buena resistencia a bumping o ganzuado) más que en el hecho de que sea \"inteligente\".",
      },
    ],
    products: [
      {
        asin: "B0DXLGDYM7",
        title: "Cerradura Inteligente Biométrica Pomo de Puerta con Huella y Control App",
        note: "Entrada de gama para puertas interiores: huella dactilar y control por app.",
        img: "https://m.media-amazon.com/images/I/617tdSaN2gL._AC_UL320_.jpg",
        price: "39,94",
        rating: "4,2★",
      },
      {
        asin: "B0GD4ZKJR3",
        title: "Cerradura Inteligente para Puertas, 5 en 1, Tuya App, NFC, Huella, Código",
        note: "Cinco métodos de apertura en un mismo dispositivo, buen equilibrio precio-funciones.",
        img: "https://m.media-amazon.com/images/I/71CnykxV-JL._AC_UL320_.jpg",
        price: "55,99",
        rating: "4,1★",
      },
      {
        asin: "B0GKVQ9V8Q",
        title: "Cerradura Inteligente con Huella Dactilar, App Bluetooth y Tarjeta RFID",
        note: "Buena valoración media, combina huella, Bluetooth y tarjeta RFID.",
        img: "https://m.media-amazon.com/images/I/616U+zdomOL._AC_UL320_.jpg",
        price: "79,97",
        rating: "4,6★",
      },
      {
        asin: "B0DK3F4N2G",
        title: "WELOCK ToucA51 Cerradura inteligente, huella, código, tarjeta RFID y APP",
        note: "Para cilindro europeo de 30-70 mm; instalación relativamente sencilla.",
        img: "https://m.media-amazon.com/images/I/61Q4EjOm+vL._AC_UL320_.jpg",
        price: "167,00",
        rating: "4,6★",
      },
      {
        asin: "B0D1BZPJP1",
        title: "Aqara Cerradura Inteligente U200 con Lector de Huella Digital",
        note: "Matter over Thread, compatible con Apple Home Key; ecosistema smart home amplio.",
        img: "https://m.media-amazon.com/images/I/71sVLpczwfL._AC_UL320_.jpg",
        price: "189,99",
        rating: "4,0★",
      },
      {
        asin: "B0FPX9YMYV",
        title: "Nuki Smart Lock Go (2025) con Bluetooth & Matter, con Keypad",
        note: "Incluye teclado numérico externo como método de apertura adicional.",
        img: "https://m.media-amazon.com/images/I/61p6ie883jL._AC_UL320_.jpg",
        price: "209,00",
        rating: "4,0★",
      },
      {
        asin: "B0FCSNMVP8",
        title: "tedee GO2 Alu Cerradura inteligente con WiFi y Bluetooth",
        note: "Desbloqueo automático al llegar a casa y control remoto por app.",
        img: "https://m.media-amazon.com/images/I/71Gv6CljXpL._AC_UL320_.jpg",
        price: "210,80",
        rating: "4,3★",
      },
      {
        asin: "B0DZCJCKHV",
        title: "SwitchBot Lock Ultra, Cerradura Inteligente WiFi con Teclado Táctil",
        note: "Gama alta: teclado táctil, huella y batería recargable, compatible con Matter.",
        img: "https://m.media-amazon.com/images/I/81fA1CPSEIL._AC_UL320_.jpg",
        price: "249,99",
        rating: "4,5★",
      },
    ],
  },
  {
    slug: "sensores-de-apertura-y-movimiento",
    title: "Sensores de apertura y movimiento: cómo montar una alarma sencilla",
    dek: "Sensores de puerta/ventana y de movimiento PIR: diferencias, cuándo usar cada uno y qué necesitas para que avisen a tu móvil.",
    updated: "2026-09-12",
    intro: [
      "No hace falta un sistema de alarma profesional con cuota mensual para tener una primera capa de seguridad: unos sensores de apertura en puertas y ventanas, combinados con algún sensor de movimiento en zonas de paso, ya avisan de una entrada no autorizada al móvil en tiempo real.",
      "Esta guía cubre los criterios para elegir bien estos sensores sueltos o en pequeños kits, sin necesidad de contratar una empresa de seguridad.",
    ],
    sections: [
      {
        heading: "Sensor de apertura (puerta/ventana) frente a sensor de movimiento (PIR)",
        body: [
          "El sensor de apertura son dos piezas magnéticas, una en el marco y otra en la hoja de la puerta o ventana, que avisan en cuanto se separan: es la primera línea de defensa en cualquier punto de entrada. El sensor de movimiento (PIR, infrarrojo pasivo) detecta el calor corporal moviéndose por una habitación y es más útil en zonas de paso interiores (pasillo, salón) que en cada puerta individual.",
          "Combinar ambos tipos da más cobertura real: los de apertura avisan nada más entrar alguien, y los de movimiento cubren si esa persona sigue moviéndose por dentro sin haber abierto ninguna puerta vigilada (por ejemplo, si entró por una ventana sin sensor).",
        ],
      },
      {
        heading: "Con o sin hub central",
        body: [
          "Los sensores WiFi se conectan directamente a tu router sin necesidad de comprar nada más, pero cada uno consume su propia conexión y algunos routers domésticos van justos si añades muchos dispositivos. Los sensores Zigbee (u otros protocolos de baja potencia) necesitan un hub o puente central, pero consumen mucha menos batería y suelen aguantar más de un año con una sola pila.",
          "Si ya tienes otros dispositivos smart home con hub (bombillas, enchufes), añadir sensores del mismo ecosistema suele ser más barato a largo plazo que multiplicar sensores WiFi independientes.",
        ],
      },
      {
        heading: "Falsas alarmas y sensibilidad ajustable",
        body: [
          "Los sensores de movimiento mal ajustados son la causa más habitual de notificaciones inútiles: una mascota, una cortina moviéndose con el aire acondicionado o el sol entrando por la ventana pueden disparar la alarma. Los modelos con sensibilidad ajustable o \"inmunidad a mascotas\" (que ignoran objetos por debajo de cierto peso o altura) reducen mucho este problema.",
        ],
      },
      {
        heading: "Notificaciones y qué hacer cuando saltan",
        body: [
          "De poco sirve un sensor si la notificación llega tarde o se pierde entre otras del móvil: revisa que la app permita configurar alertas prioritarias o sonido diferenciado. Ninguno de estos sensores sustituye a una alarma conectada a central receptora si lo que buscas es una respuesta activa ante un robo; son una capa de aviso, no una garantía de intervención.",
        ],
      },
    ],
    checklist: [
      "Sensores de apertura en todos los puntos de entrada reales (no solo la puerta principal)",
      "Sensor de movimiento en zonas de paso si quieres una segunda capa de cobertura",
      "WiFi si empiezas de cero, Zigbee/hub si ya tienes ecosistema smart home",
      "Sensibilidad ajustable o inmunidad a mascotas si tienes animales en casa",
      "Notificaciones configuradas para no perderse entre el resto de avisos del móvil",
    ],
    faq: [
      {
        q: "¿Estos sensores sustituyen a una alarma con central de seguridad?",
        a: "No del todo: avisan a tu móvil, pero no hay nadie que verifique la alarma ni avise a la policía automáticamente como en un sistema con central receptora contratada. Son una capa de aviso y disuasión razonable para la mayoría de viviendas, pero no ofrecen la misma respuesta que un servicio de seguridad profesional.",
      },
      {
        q: "¿Cuánto dura la batería de un sensor de apertura?",
        a: "Depende del protocolo: los sensores Zigbee de bajo consumo suelen aguantar 1-2 años con una pila de botón, mientras que algunos sensores WiFi que se conectan de forma más constante gastan más batería y pueden necesitar cambio o recarga cada pocos meses. Revisa esta cifra en la ficha antes de comprar si vas a instalar muchos sensores y no quieres estar revisándolos constantemente.",
      },
    ],
    products: [
      {
        asin: "B0C1G7W72B",
        title: "SONOFF Sensor Zigbee Puerta Ventana SNZB-04P",
        note: "Bajo consumo (Zigbee), requiere hub; buena opción si ya tienes ecosistema SONOFF/Zigbee.",
        img: "https://m.media-amazon.com/images/I/51+MdobHI1L._AC_UL320_.jpg",
        price: "9,99",
        rating: "4,4★",
      },
      {
        asin: "B0C1GB4DVR",
        title: "SONOFF Sensor de Movimiento Zigbee SNZB-03P",
        note: "PIR Zigbee de bajo consumo, mismo ecosistema que el sensor de apertura anterior.",
        img: "https://m.media-amazon.com/images/I/51dZyuxTAvL._AC_UL320_.jpg",
        price: "9,99",
        rating: "4,2★",
      },
      {
        asin: "B0B7NDJW6J",
        title: "Tapo T100 - Detector de Movimiento WiFi, Montaje Magnético",
        note: "Requiere hub Tapo; se integra bien si ya usas cámaras Tapo en casa.",
        img: "https://m.media-amazon.com/images/I/71t1rBSy4yL._AC_UL320_.jpg",
        price: "14,99",
        rating: "4,5★",
      },
      {
        asin: "B0BJFDQ99P",
        title: "Sensor de Puerta WiFi, Sensor de Contacto de Ventana Inteligente",
        note: "No requiere hub adicional: se conecta directo al WiFi doméstico.",
        img: "https://m.media-amazon.com/images/I/414a6P2Ky+L._AC_UL320_.jpg",
        price: "15,29",
        rating: "4,1★",
      },
      {
        asin: "B07D37VDM3",
        title: "Aqara Sensor de Puertas y Ventanas",
        note: "Requiere hub Aqara; muy compacto y de los más fiables de su ecosistema.",
        img: "https://m.media-amazon.com/images/I/61DUCYw4XQL._AC_UL320_.jpg",
        price: "19,99",
        rating: "4,3★",
      },
      {
        asin: "B0GCN54DTL",
        title: "LED ATOMANT 2X Sensor Apertura Puerta y Ventana WiFi con Aviso Móvil",
        note: "Pack de dos sensores WiFi independientes, sin necesidad de hub.",
        img: "https://m.media-amazon.com/images/I/61yTNJvQVmL._AC_UL320_.jpg",
        price: "21,95",
        rating: "4,1★",
      },
      {
        asin: "B07CBP6BQ1",
        title: "tiiwee Sensor de Movimiento PIR TWPIR02 para Sistema de Alarma de Hogar",
        note: "Pensado para integrarse en un kit de alarma más amplio del mismo fabricante.",
        img: "https://m.media-amazon.com/images/I/41JpTVmZtVL._AC_UL320_.jpg",
        price: "27,90",
        rating: "4,4★",
      },
      {
        asin: "B07ZTRRG6B",
        title: "Garza Smart - Kit Sistema de Alarma Inteligente WiFi para el hogar",
        note: "Kit completo con sirena, sensor de movimiento y de apertura en un solo paquete.",
        img: "https://m.media-amazon.com/images/I/616Oivx5qvL._AC_UL320_.jpg",
        price: "62,99",
        rating: "4,0★",
      },
    ],
  },
  {
    slug: "camaras-de-bateria-sin-cables",
    title: "Cámaras de vigilancia con batería y sin cables: guía de compra",
    dek: "Capacidad de batería, consumo real y ubicación: cómo elegir una cámara que no dependa de un enchufe cerca.",
    updated: "2026-09-11",
    intro: [
      "Las cámaras sin cables resuelven el problema de instalar vigilancia en sitios donde no hay corriente cerca: una caseta, la parte trasera del jardín, la fachada de una segunda vivienda. A cambio, hay que entender bien cómo se comporta la batería en el uso real, que suele diferir bastante de la cifra que anuncia el fabricante.",
      "Aquí no se recomienda un modelo concreto, sino los criterios para comparar cualquier cámara de batería antes de comprarla.",
    ],
    sections: [
      {
        heading: "Capacidad de batería frente a autonomía real",
        body: [
          "La autonomía anunciada (\"hasta X meses\") se mide casi siempre en condiciones de laboratorio con pocas detecciones diarias: en una zona de mucho tránsito (calle, entrada de garaje) la batería se agota mucho más rápido porque cada detección de movimiento activa grabación y, a veces, notificación push. Una cámara con batería de mayor capacidad (medida en mAh) da más margen real, aunque no hay una tabla de conversión exacta entre mAh y semanas de uso: depende del modelo y del entorno.",
          "Las cámaras con batería extraíble facilitan mucho el día a día: puedes tener una segunda batería cargando mientras usas la primera, en lugar de desmontar toda la cámara para cargarla en el enchufe.",
        ],
      },
      {
        heading: "Modo de bajo consumo y sensibilidad del sensor PIR",
        body: [
          "Muchas cámaras de batería usan un sensor de movimiento PIR de bajo consumo para \"despertar\" la cámara solo cuando detecta algo, en lugar de grabar en continuo, que agotaría la batería en horas. Ajustar bien la sensibilidad de ese sensor PIR es clave: demasiado sensible agota la batería con falsas activaciones (ramas, insectos cerca del objetivo), demasiado poco sensible puede no detectar a tiempo a una persona.",
        ],
      },
      {
        heading: "Panel solar como complemento, no como solución milagrosa",
        body: [
          "Un kit con panel solar puede mantener la batería cargada indefinidamente si recibe sol directo varias horas al día, pero en orientaciones norte, con sombra frecuente o en invierno con días cortos, la recarga puede no compensar el consumo. Revisa la orientación real del punto de instalación antes de asumir que el panel solar hace innecesario cualquier mantenimiento.",
        ],
      },
      {
        heading: "Conectividad WiFi y alcance desde la ubicación elegida",
        body: [
          "Una cámara de batería suele instalarse más lejos del router que una cableada (esa es precisamente su ventaja), pero eso significa que la señal WiFi en ese punto puede ser más débil. Comprueba la cobertura real con el móvil en el sitio exacto donde planeas instalarla antes de comprar, sobre todo si hay paredes gruesas o mucha distancia de por medio.",
        ],
      },
    ],
    checklist: [
      "Capacidad de batería (mAh) y si es extraíble para cargarla aparte",
      "Sensibilidad del sensor PIR ajustable para evitar falsas activaciones",
      "Panel solar solo como complemento si la orientación recibe sol real",
      "Cobertura WiFi comprobada en el punto exacto de instalación",
      "Certificación IP65 o superior si va a estar a la intemperie",
    ],
    faq: [
      {
        q: "¿Cuánto dura realmente la batería de estas cámaras?",
        a: "Mucho menos que la cifra de marketing en zonas de tránsito frecuente: una entrada de garaje con mucho movimiento puede agotar una batería en semanas en lugar de los meses anunciados. Ajustar bien la sensibilidad del sensor y elegir un modelo con batería de mayor capacidad o extraíble ayuda a reducir el mantenimiento.",
      },
      {
        q: "¿Vale la pena el panel solar o mejor cargar la batería a mano?",
        a: "Depende de la orientación: en un punto con varias horas de sol directo al día, el panel solar prácticamente elimina la necesidad de recargar manualmente. En puntos con sombra frecuente o mala orientación, puede que sigas teniendo que quitar la cámara para cargarla de vez en cuando, con lo que el panel solar aporta menos de lo esperado.",
      },
    ],
    products: [
      {
        asin: "B0DLVXVZFD",
        title: "VIRTAVO 2K Camara de Vigilancia WiFi Exterior/Interior sin Cables",
        note: "Entrada de gama sin cuota de suscripción obligatoria, batería recargable.",
        img: "https://m.media-amazon.com/images/I/61uLz6FhxiL._AC_UL320_.jpg",
        price: "29,99",
        rating: "4,2★",
      },
      {
        asin: "B0BZSFDDFB",
        title: "ieGeek 2K Camara Vigilancia WiFi Exterior/Interior sin Cables",
        note: "Buena valoración media, versátil para interior o exterior.",
        img: "https://m.media-amazon.com/images/I/61UMHyaposL._AC_UL320_.jpg",
        price: "33,99",
        rating: "4,5★",
      },
      {
        asin: "B0H6PQ1JX8",
        title: "NUASI 2K Camara Vigilancia WiFi Interior Sin Cable con Batería 7800mAh",
        note: "Batería de capacidad generosa (7800 mAh) para menos mantenimiento.",
        img: "https://m.media-amazon.com/images/I/71JX-h1AyzL._AC_UL320_.jpg",
        price: "36,09",
        rating: "4,4★",
      },
      {
        asin: "B0C5CX2CDK",
        title: "EZVIZ Camara Vigilancia WiFi Interior sin Cables, CB2",
        note: "Detección de movimiento humano PIR y hasta 512GB de tarjeta SD.",
        img: "https://m.media-amazon.com/images/I/51L4kYgu3ZL._AC_UL320_.jpg",
        price: "49,99",
        rating: "4,0★",
      },
      {
        asin: "B0DXK317FN",
        title: "COCOCAM 2K Camara Vigilancia WiFi Interior Sin Cable con Batería 5200mAh",
        note: "Buena valoración y batería de capacidad media-alta.",
        img: "https://m.media-amazon.com/images/I/61Zj3zUsrxL._AC_UL320_.jpg",
        price: "49,99",
        rating: "4,5★",
      },
      {
        asin: "B0DCNQNL9Z",
        title: "EZVIZ CB3 (2-Pack) Cámara Vigilancia WiFi Exterior 2K",
        note: "Pack de dos cámaras de exterior con batería recargable y modo AOV de bajo consumo.",
        img: "https://m.media-amazon.com/images/I/71EejHvMLbL._AC_UL320_.jpg",
        price: "94,99",
        rating: "4,0★",
      },
      {
        asin: "B08VDK81D4",
        title: "Reolink 4K Camara Vigilancia WiFi Exterior Solar, 8MP",
        note: "Alta resolución (8MP) con kit solar incluido, gama alta.",
        img: "https://m.media-amazon.com/images/I/61GB8u73PNL._AC_UL320_.jpg",
        price: "119,47",
        rating: "4,0★",
      },
      {
        asin: "B0GVK3C8LF",
        title: "EZVIZ CB8 Lite + Panel Solar, 6MP Cámara Vigilancia Exterior Solar",
        note: "Detección IA de personas y vehículos, zoom automático, panel solar incluido.",
        img: "https://m.media-amazon.com/images/I/61EUwx45c0L._AC_UL320_.jpg",
        price: "119,99",
        rating: "4,1★",
      },
    ],
  },
  {
    slug: "kits-de-videovigilancia-con-grabador",
    title: "Kits de videovigilancia con grabador (NVR/DVR): guía de compra",
    dek: "Cuántas cámaras necesitas, PoE frente a WiFi y capacidad de disco: cómo montar un sistema completo sin liarte.",
    updated: "2026-09-10",
    intro: [
      "Cuando una o dos cámaras sueltas se quedan cortas (una vivienda grande, un negocio pequeño, varias fachadas que cubrir), un kit con grabador centraliza toda la grabación en un único disco duro, sin depender de la nube ni de varias apps distintas. A cambio, la instalación es más compleja que enchufar una cámara WiFi individual.",
      "Esta guía explica qué mirar antes de comprar un kit completo, no un ranking de marcas.",
    ],
    sections: [
      {
        heading: "PoE frente a WiFi: qué cambia en la instalación",
        body: [
          "Los kits PoE (Power over Ethernet) alimentan y conectan cada cámara con un solo cable de red hasta el grabador, lo que da la conexión más estable y sin interferencias, a cambio de tener que pasar cable físico hasta cada cámara. Los kits WiFi evitan ese cableado, pero dependen de la cobertura de la señal en cada punto y pueden sufrir cortes si hay muchas cámaras compitiendo por el mismo canal.",
          "Para una instalación nueva o una reforma, PoE suele compensar por fiabilidad; para añadir cámaras a una vivienda ya terminada sin abrir paredes, WiFi es la opción realista.",
        ],
      },
      {
        heading: "Número de canales del grabador frente a cámaras que necesitas hoy",
        body: [
          "Los grabadores NVR/DVR se venden por número de canales (4, 8, 16...), y conviene comprar algunos canales de margen sobre las cámaras que instalas el primer día: añadir una cámara más adelante es mucho más barato que cambiar todo el grabador porque se quedó corto. Un kit de 8 canales con solo 4 cámaras instaladas deja margen para crecer sin duplicar la inversión inicial en el grabador.",
        ],
      },
      {
        heading: "Capacidad de disco duro y días de grabación",
        body: [
          "La capacidad del disco duro (medida en TB) determina cuántos días de grabación continua puedes guardar antes de que el sistema empiece a sobrescribir lo más antiguo: más cámaras, más resolución y grabación continua (en lugar de solo por detección de movimiento) consumen espacio mucho más rápido. Si te interesa tener varias semanas de histórico y no solo los últimos días, calcula bien el TB necesario antes de comprar, o valora ampliarlo tú mismo si el kit lo permite.",
        ],
      },
      {
        heading: "Resolución por cámara frente a resolución total del sistema",
        body: [
          "Un kit anunciado en \"8MP\" o \"4K\" se refiere normalmente a la resolución de cada cámara individual, no a la suma del sistema completo: revisa la ficha con atención para no confundir ambos conceptos. Una resolución más alta por cámara exige también un grabador y un disco duro capaces de procesar y guardar ese volumen de datos sin cuellos de botella.",
        ],
      },
    ],
    checklist: [
      "PoE si puedes cablear, WiFi si necesitas evitar obra",
      "Grabador con algunos canales de margen sobre las cámaras iniciales",
      "Capacidad de disco duro suficiente para los días de histórico que quieres guardar",
      "Resolución por cámara acorde a la capacidad real del grabador",
      "Comprobar si el disco duro viene incluido o hay que añadirlo aparte",
    ],
    faq: [
      {
        q: "¿Necesito conocimientos técnicos para instalar un kit con grabador?",
        a: "Un kit PoE básico (conectar cada cámara al grabador con cable de red y el grabador a un monitor o TV) está pensado para instalación doméstica sin ser electricista, aunque pasar los cables por paredes o techos sí puede requerir algo de bricolaje. Los kits WiFi son aún más sencillos de configurar, ya que solo hace que conectar cada cámara a la red y emparejarla con el grabador o la app.",
      },
      {
        q: "¿Puedo ver las cámaras del kit desde el móvil fuera de casa?",
        a: "Sí, prácticamente todos los grabadores actuales incluyen una app para acceso remoto por internet, no solo en red local. Conviene revisar si ese acceso remoto es gratuito de por vida o si el fabricante empieza a cobrar por él pasado un tiempo, algo que varía según la marca.",
      },
    ],
    products: [
      {
        asin: "B0F43GKQ2B",
        title: "ZOSI 5MP Kit Cámaras de Vigilancia Exterior WiFi6, 8CH con 2 Cámaras",
        note: "Entrada de gama WiFi con dos cámaras 360° pan-tilt y tarjeta de memoria incluida.",
        img: "https://m.media-amazon.com/images/I/5162Ul1MEqL._AC_UL320_.jpg",
        price: "129,99",
        rating: "3,8★",
      },
      {
        asin: "B0DYF1SVVP",
        title: "NIVIAN Kit Cámaras de Vigilancia Profesional WiFi con 4 Cámaras IP y NVR 10CH",
        note: "Cuatro cámaras IP con detección humana IA y audio bidireccional.",
        img: "https://m.media-amazon.com/images/I/81ujL9b663L._AC_UL320_.jpg",
        price: "151,00",
        rating: "4,2★",
      },
      {
        asin: "B09YRG1TB9",
        title: "Kit de videovigilancia PNI House IPMAX PoE 3LR, NVR 4 Puertos y 4 cámaras",
        note: "Kit PoE con 4 puertos dedicados, más estable que WiFi para instalación fija.",
        img: "https://m.media-amazon.com/images/I/71eXx6qJDUL._AC_UL320_.jpg",
        price: "151,18",
        rating: "4,4★",
      },
      {
        asin: "B093D7864B",
        title: "Hiseeu 5MP Kit Vigilancia WiFi Exterior, 10CH NVR 1TB, 4 Cámaras IP",
        note: "Disco duro de 1TB ya incluido, margen de canales para ampliar a futuro.",
        img: "https://m.media-amazon.com/images/I/61rXE5L6JBL._AC_UL320_.jpg",
        price: "289,99",
        rating: "4,3★",
      },
      {
        asin: "B0CWNV3689",
        title: "Jennov Kit Cámaras de Vigilancia con PTZ 360°, 10CH 5MP NVR con 1TB HDD",
        note: "Muy bien valorado; incluye cámara PTZ de giro completo entre las del kit.",
        img: "https://m.media-amazon.com/images/I/61g-4Y+gibL._AC_UL320_.jpg",
        price: "264,95",
        rating: "4,7★",
      },
      {
        asin: "B0FLJVBJL2",
        title: "Loocam Kit Cámaras Seguridad PoE 4K 8MP, NVR 8 Canales 2TB",
        note: "PoE con resolución 4K por cámara y 2TB de disco ya incluido.",
        img: "https://m.media-amazon.com/images/I/613vhitmifL._AC_UL320_.jpg",
        price: "269,99",
        rating: "4,0★",
      },
      {
        asin: "B07CQLB8HS",
        title: "Reolink 5MP Kit Cámaras de Vigilancia PoE, 4 cámaras y NVR 8CH con 2TB",
        note: "Gama alta con grabación continua y detección de personas/vehículos.",
        img: "https://m.media-amazon.com/images/I/61E0lYP730L._AC_UL320_.jpg",
        price: "549,99",
        rating: "4,5★",
      },
      {
        asin: "B07LBFJDQW",
        title: "Reolink 4K Kit Cámaras de Seguridad PoE, NVR 8CH con 2TB HDD",
        note: "El más completo de la selección: resolución 4K y sistema PoE de máxima fiabilidad.",
        img: "https://m.media-amazon.com/images/I/61MceWFXjxL._AC_UL320_.jpg",
        price: "699,99",
        rating: "4,4★",
      },
    ],
  },
  {
    slug: "enchufes-y-luces-inteligentes-de-seguridad",
    title: "Enchufes y luces inteligentes como complemento de seguridad",
    dek: "Cómo simular presencia en casa y disuadir con luz, sin que sea el único elemento de tu sistema de seguridad.",
    updated: "2026-09-09",
    intro: [
      "Un enchufe inteligente programado para encender una lámpara al anochecer, o un foco con sensor de movimiento en la entrada, no sustituyen a una cámara ni a una cerradura, pero son de los complementos más baratos y con mejor relación coste-beneficio para disuadir a alguien que esté vigilando la vivienda antes de un robo.",
      "Esta guía se centra en cómo elegir estos dos productos concretos con la seguridad del hogar como objetivo, no como domótica general.",
    ],
    sections: [
      {
        heading: "Enchufes inteligentes: simular presencia de verdad",
        body: [
          "Un enchufe programado siempre a la misma hora exacta es fácil de detectar como automatismo si alguien vigila la casa varios días seguidos; los enchufes con programación aleatoria dentro de una franja horaria (por ejemplo, encender entre las 20:00 y las 20:30) simulan mejor una presencia real. Algunos permiten programar varias franjas y varios dispositivos distintos (lámpara de salón, radio, luz de pasillo) para dar más variedad a la simulación.",
          "La medición de consumo eléctrico, aunque no está pensada para seguridad, es útil de forma indirecta: te avisa si un aparato programado (como una lámpara) deja de consumir, lo que puede indicar que se ha fundido la bombilla y el enchufe ya no está \"simulando\" nada.",
        ],
      },
      {
        heading: "Focos con sensor de movimiento: disuasión en la entrada",
        body: [
          "Un foco potente que se enciende de golpe al detectar movimiento en la entrada o el jardín es una de las medidas de disuasión más efectivas y baratas que existen: la mayoría de intentos de acceso no autorizado buscan pasar desapercibidos, y una luz brillante inesperada rompe justo eso. Prioriza focos con buen alcance de detección (10-12 metros o más) y ángulo amplio si cubren una zona extensa como un jardín o un camino de entrada.",
          "Los focos WiFi conectados a una app permiten además encenderlos en remoto o programarlos junto con otras luces, y algunos incluyen aviso al móvil cuando se activan, funcionando casi como un sensor de movimiento adicional.",
        ],
      },
      {
        heading: "Autonomía, cableado y mantenimiento",
        body: [
          "Los focos con sensor cableados a la instalación eléctrica no dependen de pilas ni de recarga y son la opción más fiable a largo plazo, aunque requieren cierta instalación eléctrica básica. Los modelos solares o a pilas se instalan sin obra en cualquier punto, pero conviene revisar su autonomía real, sobre todo en invierno con menos horas de luz si son solares.",
        ],
      },
      {
        heading: "Integrarlos con el resto del sistema",
        body: [
          "Enchufes y focos inteligentes ganan mucho valor cuando se combinan con los sensores y cámaras del resto de esta web: por ejemplo, que una cámara de exterior detecte movimiento y encienda automáticamente el foco de la entrada, o que un sensor de apertura dispare tanto una notificación como el encendido de todas las luces de la casa. No todos los ecosistemas son compatibles entre sí, así que conviene revisar esta integración antes de comprar piezas sueltas de fabricantes distintos.",
        ],
      },
    ],
    checklist: [
      "Programación con horarios aleatorios, no siempre la misma hora exacta",
      "Foco con alcance y ángulo de detección suficientes para la zona a cubrir",
      "Cableado si buscas la máxima fiabilidad; solar o pilas si no quieres obra",
      "Compatibilidad de ecosistema si quieres integrarlos con cámaras o sensores",
      "Aviso al móvil cuando el foco se active, si te interesa como aviso adicional",
    ],
    faq: [
      {
        q: "¿De verdad sirve de algo simular presencia con un enchufe?",
        a: "Como medida aislada no detiene un robo planificado con detalle, pero encarece y ralentiza el proceso de decisión de quien vigila una vivienda antes de actuar, que suele buscar objetivos que parezcan vacíos de forma clara y constante. Combinado con luces exteriores y alguna cámara visible, forma parte de una disuasión razonable y muy barata de implementar.",
      },
      {
        q: "¿Qué alcance de detección necesito en un foco de entrada?",
        a: "Para una entrada de coche o un jardín pequeño, 8-10 metros de alcance con un ángulo de 120° suele ser suficiente. Para parcelas más grandes o para cubrir un camino largo hasta la puerta, conviene buscar modelos con mayor alcance o combinar varios focos en distintos puntos en lugar de uno solo muy potente en el centro.",
      },
    ],
    products: [
      {
        asin: "B07Z5JD3T4",
        title: "Tapo P100 - Enchufe Inteligente WiFi, Programa Horarios, Control App/Voz",
        note: "El más barato y sencillo: ideal para empezar a programar horarios de luces.",
        img: "https://m.media-amazon.com/images/I/71aEoXvgIwL._AC_UL320_.jpg",
        price: "8,99",
        rating: "4,6★",
      },
      {
        asin: "B0C73HJ6LY",
        title: "SONOFF S60TPF Enchufe Inteligente Wi-Fi con Monitoreo Energético",
        note: "Incluye medición de consumo para detectar si una lámpara programada deja de funcionar.",
        img: "https://m.media-amazon.com/images/I/61F9MqnixIL._AC_UL320_.jpg",
        price: "9,89",
        rating: "4,6★",
      },
      {
        asin: "B09BFT7NZJ",
        title: "Tapo P110 - Enchufe Inteligente WiFi, Medición de Consumo, Control App/Voz",
        note: "Un escalón por encima del P100: añade medición de consumo por el mismo rango de precio.",
        img: "https://m.media-amazon.com/images/I/61927c8rHTL._AC_UL320_.jpg",
        price: "10,49",
        rating: "4,7★",
      },
      {
        asin: "B0B7NK25BJ",
        title: "Tapo P110 (2-Pack) - Enchufe Inteligente WiFi, Medición de Consumo",
        note: "Pack de dos para programar horarios distintos en dos habitaciones diferentes.",
        img: "https://m.media-amazon.com/images/I/71+GalhwkyL._AC_UL320_.jpg",
        price: "17,99",
        rating: "4,6★",
      },
      {
        asin: "B0DQQBPW6X",
        title: "PHILIPS Lois Foco Reflector LED Exterior con Sensor Movimiento 2700lm",
        note: "Foco cableado de marca reconocida, buen punto de entrada para la entrada de casa.",
        img: "https://m.media-amazon.com/images/I/71YlQvUJTKL._AC_UL320_.jpg",
        price: "16,29",
        rating: "4,4★",
      },
      {
        asin: "B0FC2TZ94X",
        title: "MEIKEE Foco LED con Sensor de Movimiento 42W 3600LM, 3 Cabezas",
        note: "Tres cabezas orientables por separado, útil para cubrir ángulos distintos de un jardín.",
        img: "https://m.media-amazon.com/images/I/61DWEnq123L._AC_UL320_.jpg",
        price: "32,99",
        rating: "4,4★",
      },
      {
        asin: "B0DNSSJJ87",
        title: "Brennenstuhl Connect WiFi Foco LED WF 2051 P con Detector de Movimiento",
        note: "Foco WiFi controlable por app, con varias funciones de luz ajustables a distancia.",
        img: "https://m.media-amazon.com/images/I/61LtgApz2JL._AC_UL320_.jpg",
        price: "59,99",
        rating: "4,4★",
      },
      {
        asin: "B083FF167K",
        title: "Tapo P100 (4-Pack) - Enchufe Inteligente WiFi, Programable, Control App/Voz",
        note: "Pack de cuatro para simular presencia en varias estancias a la vez a buen precio por unidad.",
        img: "https://m.media-amazon.com/images/I/71D52CIfpXL._AC_UL320_.jpg",
        price: "34,99",
        rating: "4,7★",
      },
    ],
  },
];

const ARTICLES = [
  {
    slug: "como-montar-un-sistema-de-videovigilancia-domestico-desde-cero",
    title: "Cómo montar un sistema de videovigilancia doméstico desde cero",
    dek: "El orden lógico para ir añadiendo cámaras, sensores y cerraduras sin gastar de más el primer mes.",
    updated: "2026-09-16",
    body: [
      "Montar la seguridad de una casa desde cero da la tentación de comprarlo todo de golpe (cámaras, timbre, cerradura, sensores), pero casi siempre compensa más empezar por lo que cubre el mayor riesgo con menos coste y ampliar después.",
      "Un orden razonable para la mayoría de viviendas: primero, una cámara de exterior orientada a la puerta principal o entrada de coche, que es el punto por el que entra la mayoría de intentos de acceso no autorizado. Segundo, sensores de apertura en las puertas y ventanas más accesibles (planta baja, ventanas ocultas desde la calle). Tercero, un timbre con cámara si recibes visitas o paquetes con frecuencia y quieres ver quién llama sin abrir. Por último, una cerradura inteligente, que es el cambio más caro y más delicado de instalar, y donde menos prisa suele haber si el resto de capas ya están en marcha.",
      "Un error habitual es comprar primero un kit grande con grabador NVR sin haber probado antes una sola cámara WiFi: para la mayoría de viviendas unifamiliares o pisos, una o dos cámaras bien colocadas cubren el riesgo real, y el kit con grabador solo compensa cuando de verdad necesitas cubrir muchos puntos a la vez (una parcela grande, un negocio con varias fachadas).",
      "Antes de comprar cualquier pieza, dedica un rato a pensar en los puntos de entrada reales de tu vivienda (puerta principal, puerta trasera, ventanas de planta baja, garaje) y prioriza cubrir esos puntos concretos antes que añadir funciones llamativas a un solo dispositivo.",
      "En las guías de este sitio (cámaras de interior y exterior, timbres, cerraduras, sensores, cámaras de batería, kits con grabador y enchufes/luces) desarrollamos cada pieza por separado con más detalle de criterios de compra.",
    ],
  },
  {
    slug: "errores-comunes-instalar-camaras-de-seguridad-en-casa",
    title: "5 errores comunes al instalar cámaras de seguridad en casa",
    dek: "Fallos fáciles de evitar que reducen mucho la utilidad real de una cámara, aunque el modelo sea bueno.",
    updated: "2026-09-14",
    body: [
      "Comprar una buena cámara no garantiza que funcione bien si la instalación tiene alguno de estos errores habituales, todos evitables sin gastar más dinero.",
      "1. Colocarla demasiado alta o demasiado lejos del punto de interés. Una cámara puesta muy alta para \"verlo todo\" a menudo pierde el detalle de caras justo donde más importa (la puerta, la ventana). 2,5-3 metros de altura suele ser el punto de partida razonable para la mayoría de entradas.",
      "2. No comprobar la cobertura WiFi real antes de fijar la cámara. Una señal débil en el punto final de instalación provoca cortes de vídeo y notificaciones tardías; conviene probar con el móvil en el sitio exacto antes de montar nada de forma definitiva.",
      "3. Dejar la sensibilidad de detección de fábrica sin ajustar. Un jardín con árboles moviéndose por el viento o una calle con mucho tráfico satura de falsas notificaciones si no se ajusta la sensibilidad o la zona de detección, lo que acaba haciendo que se ignoren también las alertas reales.",
      "4. Ignorar el modo privacidad en cámaras de interior. Dejar una cámara grabando permanentemente en una zona privada de la casa cuando no hace falta es un riesgo de privacidad evitable con solo activar el modo privado en las horas en que no se necesita vigilancia.",
      "5. No revisar quién tiene acceso a la cuenta o a las imágenes. Con el tiempo se acumulan sesiones antiguas (un móvil viejo, un familiar que ya no vive en casa) con acceso a la app: revisar de vez en cuando los dispositivos conectados evita accesos que ya no deberían estar activos.",
    ],
  },
  {
    slug: "cuanto-merece-la-pena-gastar-en-seguridad-para-el-hogar",
    title: "¿Cuánto merece la pena gastar en seguridad para el hogar?",
    dek: "Dónde está el salto de valor real entre lo básico, lo intermedio y lo profesional.",
    updated: "2026-09-12",
    body: [
      "No existe una cifra única correcta para todo el mundo, pero sí hay tramos de precio donde el salto de utilidad es claro y otros donde ya se paga sobre todo por marca o por funciones que la mayoría no llega a usar.",
      "El primer salto importante, y el más rentable, está entre no tener nada de seguridad y tener lo básico: una cámara de exterior orientada a la entrada y un par de sensores de apertura en los puntos más vulnerables. Ese paso cambia mucho el nivel de disuasión y de aviso temprano por una inversión relativamente pequeña.",
      "El segundo salto, más caro, está en la redundancia y la cobertura: varias cámaras cubriendo distintos ángulos, un kit con grabador y disco propio en lugar de depender de la nube, o una cerradura inteligente que sustituya la llave física. Este tramo compensa sobre todo en viviendas más grandes, con varios puntos de acceso, o para quien pasa mucho tiempo fuera de casa.",
      "A partir de cierto nivel de gasto, lo que se añade suele ser comodidad y automatización avanzada (integración entre todos los dispositivos, reconocimiento facial, resoluciones muy altas) más que seguridad adicional real: los criterios que de verdad importan (cobertura de los puntos de entrada, alcance de detección, fiabilidad de la alimentación) ya estaban cubiertos en el tramo anterior.",
      "La pregunta que más ayuda a decidir no es \"¿cuánto cuesta el mejor sistema?\" sino \"¿qué puntos de mi vivienda quedarían completamente sin cubrir si no invierto nada?\". Cubrir primero esos puntos concretos suele dar mejor relación seguridad-precio que comprar el kit más completo del mercado desde el primer día.",
    ],
  },
  {
    slug: "camara-con-cable-o-sin-cable-que-elegir-segun-donde-vivas",
    title: "Cámara con cable o sin cable: qué elegir según dónde vivas",
    dek: "La decisión cambia mucho entre una vivienda en propiedad, un piso de alquiler y una segunda residencia.",
    updated: "2026-09-10",
    body: [
      "La pregunta \"¿cámara con cable o de batería?\" no tiene una respuesta única: depende sobre todo del tipo de vivienda y de cuánto control tienes sobre hacer obra o cableado permanente.",
      "En una vivienda en propiedad donde piensas quedarte años, una instalación cableada (o PoE, si vas a poner varias cámaras) suele salir a cuenta a medio plazo: sin preocuparte de baterías, con la conexión más estable y sin depender de la cobertura WiFi llegando bien hasta cada rincón del jardín.",
      "En un piso de alquiler, las cámaras de batería o con instalación adhesiva/atornillado mínimo son casi siempre la opción más razonable: se pueden retirar sin dejar marcas importantes al mudarte, y no dependen de modificar la instalación eléctrica de una vivienda que no es tuya.",
      "En una segunda residencia que visitas poco, una cámara de batería con panel solar cobra más sentido que en una vivienda habitual, porque nadie va a estar recargándola cada pocas semanas; eso sí, conviene revisar la cobertura de red del lugar (WiFi, o si hace falta una alternativa con tarjeta SIM) antes de asumir que vas a poder verla en remoto sin problemas.",
      "Para negocios pequeños o parcelas grandes con varios puntos que cubrir, un kit con grabador y cámaras PoE suele compensar frente a multiplicar cámaras de batería sueltas, tanto por fiabilidad como porque centraliza toda la grabación en un único disco duro en lugar de varias tarjetas SD independientes.",
    ],
  },
  {
    slug: "que-mirar-en-la-letra-pequena-del-almacenamiento-en-la-nube",
    title: "Qué mirar en la letra pequeña del almacenamiento en la nube de una cámara",
    dek: "Antes de asumir que tu cámara \"graba en la nube gratis\", conviene leer qué incluye realmente ese plan.",
    updated: "2026-09-08",
    body: [
      "Muchas cámaras y timbres con cámara se anuncian con \"almacenamiento en la nube incluido\", pero ese texto suele esconder condiciones que solo se descubren después de comprar: es la letra pequeña que más merece la pena leer antes de decidirte.",
      "Primero, cuánto tiempo dura el plan gratuito: algunos fabricantes ofrecen la nube sin coste solo durante un periodo de prueba (30 días, unos meses) y pasan a cobrar automáticamente o a limitar la función después. Segundo, qué guarda exactamente ese plan gratuito: en muchos casos son solo clips cortos activados por movimiento, no grabación continua, y el histórico puede limitarse a unos pocos días antes de borrarse.",
      "Tercero, si el plan gratuito cubre una sola cámara o todas las que tengas instaladas: algunos fabricantes cobran por cámara adicional aunque el primer dispositivo sea gratis, lo que puede disparar el coste si tienes pensado ampliar el sistema más adelante.",
      "Cuarto, qué pasa con las grabaciones si dejas de pagar la suscripción: en algunos casos se pierde el acceso al histórico ya grabado, no solo a la grabación futura. Y quinto, si existe alternativa de almacenamiento local (tarjeta microSD) como respaldo o sustituto completo de la nube, lo que en muchos casos permite prescindir de cualquier cuota mensual sin perder la función de grabación.",
      "Revisar estos cinco puntos antes de comprar evita la sorpresa más habitual: una cámara barata de entrada que, sumando la suscripción mensual a lo largo de un año o dos, acaba costando más que un modelo algo más caro con almacenamiento local incluido desde el principio.",
    ],
  },
];

// Un producto destacado por categoría, para el bloque "Lo más recomendado"
// que aparece en todas las páginas (ver featuredProductsSection en lib.js).
// Se reutilizan los datos ya cargados en GUIDES para no duplicar imagen/precio.
function pickFeatured(guideSlug, asin) {
  const g = GUIDES.find((x) => x.slug === guideSlug);
  const p = g.products.find((x) => x.asin === asin);
  return { ...p, category: g.slug, categoryTitle: g.title };
}

const FEATURED = [
  pickFeatured("camaras-wifi-interior", "B095CLQ1PT"),
  pickFeatured("camaras-wifi-exterior", "B0BZMLKXL4"),
  pickFeatured("timbres-inteligentes-con-camara", "B0DN6LZGBW"),
  pickFeatured("cerraduras-inteligentes", "B0GKVQ9V8Q"),
  pickFeatured("sensores-de-apertura-y-movimiento", "B0GCN54DTL"),
  pickFeatured("camaras-de-bateria-sin-cables", "B0DXK317FN"),
  pickFeatured("kits-de-videovigilancia-con-grabador", "B0CWNV3689"),
  pickFeatured("enchufes-y-luces-inteligentes-de-seguridad", "B0FC2TZ94X"),
];

module.exports = { GUIDES, ARTICLES, FEATURED };
