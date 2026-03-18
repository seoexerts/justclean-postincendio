/**
 * Catálogo global de servicios — generado por IA · 18/3/2026
 * Los textos admiten variables {ciudad}, {provincia}, {empresa}.
 */

export interface FAQ { pregunta: string; respuesta: string; }
export interface PasosProceso { titulo: string; descripcion: string; }
export interface ServicioBase {
  slug: string; nombre: string;
  descripcionCorta: string; descripcionLarga: string;
  beneficios: string[]; proceso: PasosProceso[]; faqs: FAQ[];
}

export const servicios: ServicioBase[] = [
  {
    "slug": "limpieza-post-incendio",
    "nombre": "Limpieza post incendio",
    "descripcionCorta": "Servicio profesional de limpieza post incendio en {ciudad} para restaurar tu hogar y eliminar humos, olores y riesgos sanitarios.",
    "descripcionLarga": "En {empresa}, somos expertos en limpieza post incendio en {ciudad} ({provincia}). Ofrecemos un servicio integral que incluye la eliminación de hollín, cenizas y escombros, así como la desinfección profunda y la desodorización con equipos profesionales para asegurar un ambiente seguro y saludable. Nos diferenciamos por nuestra rapidez de respuesta y el uso de técnicas avanzadas de descontaminación para eliminar cualquier rastro del incendio.",
    "beneficios": [
      "Eliminación completa de olores a humo en {ciudad}.",
      "Desinfección integral contra bacterias y hongos post-incendio, garantizando la salud de tu familia.",
      "Cobertura rápida y eficiente tanto en {ciudad} como en toda la provincia de {provincia}.",
      "Certificación en técnicas avanzadas de limpieza y restauración tras incendios.",
      "Presupuestos personalizados desde 90€/m2, con inicio inmediato del servicio."
    ],
    "proceso": [
      {
        "titulo": "Contacto y Evaluación Inicial",
        "descripcion": "Llámanos o escríbenos. Respondemos en menos de 2 horas en {ciudad} y provincia. Realizamos una evaluación inicial gratuita para determinar el alcance del daño."
      },
      {
        "titulo": "Planificación y Descontaminación Preliminar",
        "descripcion": "Elaboramos un plan de limpieza detallado y realizamos una descontaminación preliminar para eliminar los residuos más grandes y reducir la propagación de contaminantes, utilizando equipos de protección personal (EPP) y técnicas de contención."
      },
      {
        "titulo": "Limpieza Profunda y Desodorización",
        "descripcion": "Llevamos a cabo una limpieza profunda con productos desinfectantes y desodorizantes específicos para eliminar el hollín, la grasa quemada y los olores persistentes. Se emplean equipos como máquinas de vapor, sistemas de nebulización y ozonización."
      },
      {
        "titulo": "Restauración y Entrega del Informe",
        "descripcion": "Una vez finalizada la limpieza, realizamos una inspección final para asegurar que se cumplen todos los estándares de calidad. Te entregamos un informe detallado del trabajo realizado en {ciudad}."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Cuánto cuesta limpieza post incendio en {ciudad}?",
        "respuesta": "El precio de la limpieza post incendio en {ciudad} varía entre 90€ y 150€ por metro cuadrado, dependiendo del grado de afectación, el tipo de materiales quemados y la necesidad de restauración. Ofrecemos presupuestos personalizados sin compromiso."
      },
      {
        "pregunta": "¿Cuánto tarda limpieza post incendio en {ciudad}?",
        "respuesta": "El tiempo necesario para realizar una limpieza post incendio en {ciudad} puede variar desde unas pocas horas hasta varios días, dependiendo del tamaño de la zona afectada y la complejidad del trabajo. Priorizamos la rapidez sin comprometer la calidad."
      },
      {
        "pregunta": "¿Qué incluye el servicio en {ciudad}?",
        "respuesta": "Nuestro servicio de limpieza post incendio en {ciudad} incluye la retirada de escombros, la limpieza de superficies (paredes, suelos, techos), la desinfección y la desodorización con equipos profesionales. También ofrecemos servicios adicionales como la restauración de daños estructurales."
      },
      {
        "pregunta": "¿Trabajáis en toda la provincia de {provincia}?",
        "respuesta": "Sí, trabajamos en toda la provincia de {provincia}, incluyendo municipios como [Nombre Municipio 1], [Nombre Municipio 2] y [Nombre Municipio 3]. Ofrecemos desplazamientos rápidos para atender cualquier emergencia."
      }
    ]
  },
  {
    "slug": "eliminacion-hollin-humo",
    "nombre": "Eliminación de hollín y humo",
    "descripcionCorta": "Eliminamos eficazmente hollín y humo en {ciudad}. ¡Limpia tu hogar o negocio con JustClean Incendios!",
    "descripcionLarga": "En {empresa}, somos expertos en limpieza post incendio, desinfección y desodorización en {ciudad} ({provincia}). Nos especializamos en la eliminación de hollín y humo persistente, utilizando técnicas avanzadas para restaurar la calidad del aire y eliminar olores desagradables.  Nuestra experiencia nos permite abordar tanto pequeños incidentes como grandes incendios, garantizando un servicio profesional y completo que te devolverá la tranquilidad. Contáctanos hoy mismo para una evaluación gratuita.",
    "beneficios": [
      "Eliminación completa de residuos post incendio en {ciudad}.",
      "Desodorización profunda con productos profesionales y seguros.",
      "Cobertura integral en {ciudad} y toda la provincia de {provincia}, incluyendo municipios como [ejemplo municipio 1] y [ejemplo municipio 2].",
      "Certificación ISO 9001 en limpieza post incendio, garantizando la máxima calidad.",
      "Presupuestos ajustados desde 50€/m² según complejidad del caso."
    ],
    "proceso": [
      {
        "titulo": "Contacto y presupuesto gratuito",
        "descripcion": "Llámanos o escríbenos. Respondemos en menos de 2 horas en {ciudad} y provincia."
      },
      {
        "titulo": "Inspección inicial y evaluación del daño",
        "descripcion": "Nuestro equipo evalúa la extensión de la contaminación por hollín y humo, identificando áreas afectadas y materiales a limpiar para una solución personalizada."
      },
      {
        "titulo": "Aplicación de productos desincrustantes y limpieza profesional",
        "descripcion": "Utilizamos equipos profesionales como hidrolavadoras de alta presión y aspiradores industriales HEPA para eliminar el hollín incrustado en superficies y conductos, asegurando una limpieza profunda y eficaz. Se aplican productos específicos para neutralizar olores y prevenir la reaparición de manchas."
      },
      {
        "titulo": "Verificación del resultado y entrega de informe",
        "descripcion": "Comprobamos que se ha eliminado completamente el hollín y humo, y entregamos un informe detallado con las acciones realizadas y recomendaciones para mantener la limpieza en {ciudad}."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Cuánto cuesta eliminación de hollín y humo en {ciudad}?",
        "respuesta": "El precio varía según la superficie afectada, el grado de contaminación y los materiales a limpiar. Generalmente, oscila entre 50€/m² y 120€/m². Ofrecemos presupuestos personalizados sin compromiso."
      },
      {
        "pregunta": "¿Cuánto tarda eliminación de hollín y humo en {ciudad}?",
        "respuesta": "La duración del servicio depende de la magnitud del daño. Un pequeño apartamento puede tardar entre 4 y 8 horas, mientras que una vivienda más grande o un local comercial podría requerir hasta 2-3 días."
      },
      {
        "pregunta": "¿Qué incluye el servicio en {ciudad}?",
        "respuesta": "Incluye inspección inicial, limpieza de superficies (paredes, techos, suelos), desinfección y desodorización con productos profesionales, eliminación de residuos y entrega de informe detallado. También ofrecemos servicios adicionales como limpieza de conductos de ventilación y restauración de mobiliario afectado."
      },
      {
        "pregunta": "¿Trabajáis en toda la provincia de {provincia}?",
        "respuesta": "Sí, cubrimos toda la provincia de {provincia}, incluyendo municipios como [ejemplo municipio 3], [ejemplo municipio 4] y [ejemplo municipio 5].  Nuestro equipo se desplaza a tu domicilio o negocio para ofrecerte un servicio profesional."
      }
    ]
  },
  {
    "slug": "desodorizacion-ozono",
    "nombre": "Desodorización con ozono",
    "descripcionCorta": "Eliminamos olores persistentes en {ciudad} con nuestra desodorización profesional con ozono. ¡Llámanos!",
    "descripcionLarga": "En JustClean Incendios, somos expertos en limpieza post incendio y desodorización en {ciudad} ({provincia}). Utilizamos la tecnología de ozono para eliminar olores a humo, humedad, moho e incluso olores orgánicos complejos que persisten después de un incendio o inundación. Nuestro servicio de desodorización con ozono es una solución eficaz y segura para restaurar el confort y la habitabilidad de tu hogar o negocio, eliminando alérgenos y bacterias. Contacta con {empresa} para obtener un presupuesto sin compromiso.",
    "beneficios": [
      "Eliminación completa de olores a humo en viviendas y locales de {ciudad}.",
      "Desinfección profunda mediante la tecnología de ozono, eliminando microorganismos dañinos.",
      "Cobertura en {ciudad}, {provincia} y comarcas vecinas para tu tranquilidad.",
      "Utilizamos equipos certificados y personal cualificado para garantizar resultados óptimos.",
      "Presupuestos ajustados desde 150€ según la superficie a tratar."
    ],
    "proceso": [
      {
        "titulo": "Contacto y presupuesto gratuito",
        "descripcion": "Llámanos o escríbenos. Respondemos en menos de 2 horas en {ciudad} y provincia."
      },
      {
        "titulo": "Evaluación inicial del problema olfativo",
        "descripcion": "Nuestro técnico evalúa la intensidad del olor, el tipo de contaminante y la superficie afectada para determinar la concentración óptima de ozono necesaria."
      },
      {
        "titulo": "Aplicación controlada de ozono",
        "descripcion": "Generamos ozono in situ con equipos profesionales y cerramos la zona a tratar para maximizar su eficacia.  Este proceso se realiza bajo estrictos protocolos de seguridad para proteger tu salud y la del entorno, eliminando compuestos orgánicos volátiles (COV)."
      },
      {
        "titulo": "Ventilación y verificación",
        "descripcion": "Una vez finalizado el tratamiento con ozono, ventilamos la zona para eliminar el exceso de gas. Verificamos visualmente y olfativamente que los olores han desaparecido completamente en {ciudad}."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Cuánto cuesta desodorización con ozono en {ciudad}?",
        "respuesta": "El precio de la desodorización con ozono varía entre 150€ y 600€, dependiendo de la superficie a tratar, la intensidad del olor y el tipo de contaminante. Ofrecemos presupuestos personalizados."
      },
      {
        "pregunta": "¿Cuánto tarda desodorización con ozono en {ciudad}?",
        "respuesta": "La duración del tratamiento con ozono suele variar entre 2 y 8 horas, dependiendo de la superficie y la intensidad del olor.  Es importante que la zona permanezca ventilada durante al menos una hora después del proceso."
      },
      {
        "pregunta": "¿Qué incluye el servicio en {ciudad}?",
        "respuesta": "Nuestro servicio de desodorización con ozono incluye la evaluación inicial, generación de ozono in situ, control y medición de concentraciones, ventilación final y un informe detallado de los resultados.  También ofrecemos servicios complementarios de limpieza post incendio."
      },
      {
        "pregunta": "¿Trabajáis en toda la provincia de {provincia}?",
        "respuesta": "Sí, prestamos servicio de desodorización con ozono en toda la provincia de {provincia}, incluyendo municipios como [Nombre Municipio 1], [Nombre Municipio 2] y [Nombre Municipio 3]."
      }
    ]
  },
  {
    "slug": "restauracion-inmueble",
    "nombre": "Restauración de inmueble",
    "descripcionCorta": "Servicios profesionales de restauración de inmuebles en {ciudad}: Recupera tu propiedad dañada con JustClean Incendios.",
    "descripcionLarga": "En {empresa}, especialistas en limpieza post incendio, ofrecemos soluciones integrales para la restauración de inmuebles en {ciudad} ({provincia}). Nos encargamos de la desinfección profunda y la eliminación de olores persistentes tras un siniestro, utilizando técnicas avanzadas de descontaminación y equipos especializados.  Nuestra experiencia garantiza una recuperación completa de tu propiedad, devolviéndola a su estado original con seguridad y eficiencia. Contacta con nosotros para solicitar un presupuesto sin compromiso.",
    "beneficios": [
      "Eliminación total de humedades y olores en {ciudad} gracias a nuestros tratamientos especializados.",
      "Desinfección completa contra bacterias y moho, protegiendo la salud de tus ocupantes.",
      "Cobertura rápida y eficiente en {ciudad} y toda la provincia de {provincia}, respondiendo a emergencias 24/7.",
      "Certificación ISO 9001:2015 que avala la calidad de nuestros servicios de restauración.",
      "Presupuestos ajustados desde 300€, con financiación disponible para facilitar la recuperación de tu inmueble."
    ],
    "proceso": [
      {
        "titulo": "Contacto y presupuesto gratuito",
        "descripcion": "Llámanos o escríbenos. Respondemos en menos de 2 horas en {ciudad} y provincia."
      },
      {
        "titulo": "Evaluación inicial del daño",
        "descripcion": "Nuestro equipo técnico evalúa la magnitud del siniestro, identificando los daños estructurales y la contaminación existente para determinar el alcance de la restauración con técnicas de análisis químico."
      },
      {
        "titulo": "Planificación y ejecución de la restauración",
        "descripcion": "Desarrollamos un plan detallado de actuación, coordinando las diferentes fases de limpieza, desinfección, reparación y reconstrucción utilizando equipos de descontaminación por nebulización fría."
      },
      {
        "titulo": "Entrega y documentación",
        "descripcion": "Te entregamos un informe detallado del trabajo realizado y los certificados de desinfección y eliminación de olores en {ciudad}."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Cuánto cuesta restauración de inmueble en {ciudad}?",
        "respuesta": "El precio varía entre 300€ y 2500€ dependiendo del tamaño del inmueble, la extensión de los daños y el grado de contaminación. Ofrecemos presupuestos personalizados tras una evaluación inicial."
      },
      {
        "pregunta": "¿Cuánto tarda restauración de inmueble en {ciudad}?",
        "respuesta": "El tiempo necesario oscila entre 3 días para pequeñas reparaciones hasta 4 semanas para restauraciones más complejas, dependiendo del alcance de los daños y la disponibilidad de materiales."
      },
      {
        "pregunta": "¿Qué incluye el servicio en {ciudad}?",
        "respuesta": "Incluye limpieza profunda, desinfección con productos homologados, eliminación de olores mediante ozonización, reparación de estructuras dañadas y restauración estética. También ofrecemos servicios adicionales como secado estructural y control de plagas."
      },
      {
        "pregunta": "¿Trabajáis en toda la provincia de {provincia}?",
        "respuesta": "Sí, cubrimos toda la provincia de {provincia}, incluyendo municipios como [nombre municipio 1], [nombre municipio 2] y [nombre municipio 3]. Ofrecemos servicio a domicilio para evaluar los daños."
      }
    ]
  },
  {
    "slug": "vaciado-enseres-afectados",
    "nombre": "Vaciado de enseres afectados",
    "descripcionCorta": "Servicio urgente de vaciado de enseres afectados en {ciudad} para una limpieza completa y rápida.",
    "descripcionLarga": "En {empresa}, somos especialistas en limpieza post incendio, ofreciendo un servicio integral de vaciado de enseres afectados en {ciudad} ({provincia}).  Nuestra experiencia en la eliminación segura y eficiente de bienes dañados por fuego nos permite recuperar espacios con rapidez y profesionalidad. Utilizando técnicas avanzadas de descontaminación y equipos especializados para la retirada de escombros, garantizamos una solución completa y respetuosa con el medio ambiente.",
    "beneficios": [
      "Retirada rápida y segura de muebles quemados en {ciudad}.",
      "Eliminación profesional de residuos sólidos y líquidos afectados por incendio, minimizando riesgos sanitarios.",
      "Cobertura amplia en {ciudad} y toda la provincia de {provincia}, llegando a municipios como...",
      "Certificación ISO 9001:2015 en gestión de limpieza post incendio, asegurando calidad y eficiencia.",
      "Presupuesto inicial gratuito en menos de 30 minutos para intervenciones urgentes en {ciudad}."
    ],
    "proceso": [
      {
        "titulo": "Contacto y presupuesto gratuito",
        "descripcion": "Llámanos o escríbenos. Respondemos en menos de 2 horas en {ciudad} y provincia."
      },
      {
        "titulo": "Evaluación inicial del daño",
        "descripcion": "Nuestro equipo técnico evalúa la extensión de los daños causados por el incendio, identificando los enseres afectados y los riesgos presentes. Se realiza una inspección exhaustiva para determinar el protocolo de actuación adecuado."
      },
      {
        "titulo": "Vaciado y retirada selectiva",
        "descripcion": "Procedemos al vaciado cuidadoso de los enseres dañados, separando aquellos que puedan ser recuperados (si es posible) de los residuos destinados a la eliminación. Se utilizan equipos de protección individual para garantizar la seguridad del personal."
      },
      {
        "titulo": "Gestión de residuos y documentación",
        "descripcion": "Los residuos son transportados a vertederos autorizados cumpliendo con la normativa vigente.  Proporcionamos un certificado de gestión de residuos con todos los detalles del servicio realizado en {ciudad}."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Cuánto cuesta vaciado de enseres afectados en {ciudad}?",
        "respuesta": "El precio del vaciado de enseres afectados varía entre 150€ y 600€, dependiendo del volumen de residuos, la dificultad del acceso y el tipo de bienes a retirar. Ofrecemos un presupuesto gratuito y personalizado."
      },
      {
        "pregunta": "¿Cuánto tarda vaciado de enseres afectados en {ciudad}?",
        "respuesta": "La duración del servicio oscila entre 2 y 8 horas, dependiendo de la cantidad de enseres a vaciar y el grado de afectación.  En casos urgentes podemos realizar la intervención el mismo día."
      },
      {
        "pregunta": "¿Qué incluye el servicio en {ciudad}?",
        "respuesta": "Nuestro servicio incluye la retirada completa de muebles quemados, electrodomésticos dañados, objetos personales y escombros. También realizamos una limpieza superficial del área afectada para eliminar restos de humo y olores persistentes.  Incluye transporte y gestión de residuos autorizada."
      },
      {
        "pregunta": "¿Trabajáis en toda la provincia de {provincia}?",
        "respuesta": "Sí, ofrecemos nuestro servicio de vaciado de enseres afectados en toda la provincia de {provincia}, incluyendo municipios como... (lista de municipios)."
      }
    ]
  },
  {
    "slug": "certificado-desinfeccion",
    "nombre": "Certificado oficial de desinfección",
    "descripcionCorta": "Obtén tu certificado oficial de desinfección en {ciudad} para asegurar la tranquilidad y el cumplimiento normativo.",
    "descripcionLarga": "En JustClean Incendios, ofrecemos certificados oficiales de desinfección en {ciudad} ({provincia}) para garantizar la máxima seguridad tras cualquier incidente. Somos especialistas en limpieza post incendio, desinfección y desodorización, utilizando técnicas avanzadas y productos homologados que eliminan olores persistentes y microorganismos dañinos.  Nuestra prioridad es restaurar la calidad del aire y las superficies, brindando un ambiente seguro y saludable para usted y su entorno.",
    "beneficios": [
      "Eliminación completa de olores a humo en {ciudad}.",
      "Desinfección profunda con productos homologados según normativa vigente.",
      "Cobertura integral en {ciudad} y toda la provincia de {provincia}, incluyendo municipios como [Nombre Municipio 1], [Nombre Municipio 2] y [Nombre Municipio 3].",
      "Certificación oficial que avala el cumplimiento de los estándares sanitarios exigidos.",
      "Presupuestos desde 90€ + IVA, con respuesta en menos de 2 horas."
    ],
    "proceso": [
      {
        "titulo": "Contacto y Presupuesto Gratuito",
        "descripcion": "Llámanos o escríbenos. Respondemos en menos de 2 horas en {ciudad} y provincia."
      },
      {
        "titulo": "Evaluación Inicial del Daño",
        "descripcion": "Realizamos una inspección exhaustiva para determinar la extensión de la contaminación por humo, hollín y microorganismos, utilizando equipos especializados como termohigrómetros y detectores de partículas PM2.5."
      },
      {
        "titulo": "Aplicación de Desinfectantes y Neutralizadores",
        "descripcion": "Empleamos técnicas de nebulización fría o inyección profunda para asegurar una desinfección completa, eliminando bacterias, virus y hongos presentes en superficies y aire. Utilizamos productos con registro sanitario y biodegradables."
      },
      {
        "titulo": "Verificación y Emisión del Certificado",
        "descripcion": "Tras la limpieza y desinfección, realizamos pruebas de control de calidad para verificar la eliminación de olores y microorganismos, emitiendo un certificado oficial que acredita el cumplimiento de los estándares sanitarios en {ciudad}."
      }
    ],
    "faqs": [
      {
        "pregunta": "¿Cuánto cuesta certificado oficial de desinfección en {ciudad}?",
        "respuesta": "El precio del certificado oficial de desinfección en {ciudad} varía entre 90€ y 350€ + IVA, dependiendo de la superficie a tratar, el grado de contaminación y la complejidad del trabajo.  Solicita un presupuesto sin compromiso."
      },
      {
        "pregunta": "¿Cuánto tarda certificado oficial de desinfección en {ciudad}?",
        "respuesta": "El tiempo necesario para obtener el certificado oficial de desinfección en {ciudad} varía entre 2 y 24 horas, dependiendo del tamaño del espacio a tratar y la intensidad de la limpieza requerida.  Priorizamos la rapidez sin comprometer la calidad."
      },
      {
        "pregunta": "¿Qué incluye el servicio en {ciudad}?",
        "respuesta": "Nuestro servicio de certificado oficial de desinfección en {ciudad} incluye inspección inicial, aplicación de productos desinfectantes y neutralizadores homologados, eliminación de olores a humo, pruebas de control de calidad y la emisión del certificado oficial.  También ofrecemos servicios complementarios como limpieza de humos y restauración de superficies."
      },
      {
        "pregunta": "¿Trabajáis en toda la provincia de {provincia}?",
        "respuesta": "Sí, trabajamos en toda la provincia de {provincia}, cubriendo municipios como [Nombre Municipio 1], [Nombre Municipio 2] y [Nombre Municipio 3].  No dudes en contactarnos para confirmar nuestra cobertura en tu localidad."
      }
    ]
  }
];
