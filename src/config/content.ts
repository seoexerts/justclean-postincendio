/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  CONTENIDO DEL SITIO — src/config/content.ts                ║
 * ║                                                              ║
 * ║  Todos los textos editables de la web están aquí.           ║
 * ║  Usa {{city}} donde quieras que aparezca la ciudad principal ║
 * ║  (se reemplaza automáticamente en tiempo de build).         ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export const content = {

  // ── Hero ──────────────────────────────────────────────────────
  hero: {
    eyebrow:     'Empresa especializada en limpieza post incendio en Barcelona',
    h1main:      'Limpieza Post Incendio: Desinfección y Desodorización',
    h1accent:    'en Barcelona y alrededores',
    description: 'JustClean Incendios ofrece servicios profesionales de limpieza tras incendios, desinfección y eliminación de olores en {{city}}. Recupera tu espacio con la máxima seguridad y eficiencia gracias a nuestra experiencia en el Baix Llobregat, Maresme y Vallès.',
    badge1:      'Presupuesto en 30 minutos',
    badge2:      'Más de 15 años de experiencia en {{city}}',
    badge3:      'Certificación ENAC para limpieza post incendio',
    badge4:      'Cobertura en todo el Ámbito metropolitano de Barcelona',
    cardStat:    '+200',
    cardLabel:   'hogares y negocios desinfectados en {{city}}',
  },

  // ── Beneficios (6 tarjetas) ────────────────────────────────────
  benefits: [
    {
      icon: 'shield',
      title:       'Desinfección Avanzada',
      description: 'Utilizamos productos biocidas homologados por el Ministerio de Sanidad para eliminar bacterias, virus y olores persistentes tras un incendio. Nuestro equipo conoce a la perfección las particularidades del entorno industrial y residencial en el Vallès Oriental.',
    },
    {
      icon: 'clock',
      title:       'Rapidez y Eficiencia',
      description: 'Nos movemos con urgencia para minimizar los tiempos de inactividad, ofreciendo soluciones rápidas y efectivas para restaurar tus espacios en menos de 24 horas.  Contamos con equipos especializados para intervenciones inmediatas en la comarca del Barcelonés.',
    },
    {
      icon: 'check',
      title:       'Garantía Profesional',
      description: 'Cumplimos rigurosamente con las normativas de seguridad e higiene, asegurando una limpieza completa y segura. Nuestra certificación ENAC avala nuestra calidad y compromiso con los estándares más exigentes en la provincia de Barcelona.',
    },
    {
      icon: 'box',
      title:       'Servicio Integral a Domicilio',
      description: 'Nos encargamos de todo el proceso, desde la evaluación inicial hasta la finalización del trabajo, incluyendo retirada de escombros y limpieza profunda.  Atendemos tanto a particulares como a empresas en {{city}}, Sant Cugat o Mataró.',
    },
    {
      icon: 'heart',
      title:       'Trato Personalizado',
      description: 'Nos preocupamos por comprender tus necesidades específicas y ofrecerte una solución a medida, brindando un servicio cercano y transparente. Nuestro equipo está formado por profesionales locales que conocen la importancia de la confianza en {{city}}.',
    },
    {
      icon: 'users',
      title:       'Equipo Altamente Cualificado',
      description: 'Contamos con técnicos especializados en limpieza post incendio, formados para afrontar cualquier tipo de situación y garantizar resultados impecables.  Nuestra experiencia abarca desde viviendas hasta locales comerciales en el Baix Llobregat.',
    }
  ],

  // ── Servicios (tarjetas del inicio) ───────────────────────────
  serviceSummaries: [
    {
      slug:        'limpieza-post-incendio',
      nombre:      'Limpieza post incendio',
      description: 'Recupera tu hogar tras un incendio con JustClean Incendios, expertos en limpieza y restauración de inmuebles en Barcelona. Ofrecemos servicios profesionales de limpieza tras incendios para eliminar cenizas, humo y olores persistentes en toda la ciudad condal.',
      features:    ['Utilizamos equipos de última generación para una limpieza profunda.', 'Desinfección completa contra bacterias y hongos.', 'Cobertura en Barcelona, Barcelonés, Baix Llobregat, Maresme, Vallès Oriental y Vallès Occidental.', 'Atención personalizada y presupuestos sin compromiso.'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'eliminacion-hollin-humo',
      nombre:      'Eliminación de hollín y humo',
      description: '¿El humo ha dejado una marca en tu propiedad? En JustClean Incendios eliminamos eficazmente el hollín y el olor a humo, devolviendo la normalidad a hogares y negocios en Barcelona.  Especialistas en limpieza profunda tras incendios en toda la provincia de Barcelona.',
      features:    ['Tratamiento especializado para superficies delicadas.', 'Neutralización completa de olores con técnicas avanzadas.', 'Cobertura en Barcelona, Barcelonés, Baix Llobregat, Maresme, Vallès Oriental y Vallès Occidental.', 'Servicio rápido y eficiente para minimizar las molestias.'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'desodorizacion-ozono',
      nombre:      'Desodorización con ozono',
      description: 'Elimina olores a humo persistentes en Barcelona con nuestro tratamiento de desodorización con ozono. JustClean Incendios te ofrece una solución profesional y eficaz para recuperar la tranquilidad en tu hogar tras un incendio.  Servicio disponible en toda el área metropolitana de Barcelona.',
      features:    ['Tecnología de ozono para eliminar bacterias y alérgenos.', 'Eliminación completa de olores a humo, moho y humedad.', 'Cobertura en Barcelona, Barcelonés, Baix Llobregat, Maresme, Vallès Oriental y Vallès Occidental.', 'Certificados de desinfección oficiales.'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'restauracion-inmueble',
      nombre:      'Restauración de inmueble',
      description: 'JustClean Incendios ofrece servicios integrales de restauración de inmuebles tras incendios en Barcelona, desde la limpieza inicial hasta la reparación y pintura. Recupera tu propiedad a su estado original con un equipo de profesionales cualificados en toda el área del Barcelonés.',
      features:    ['Reparación estructural y albañilería.', 'Pintura y acabados profesionales.', 'Cobertura en Barcelona, Barcelonés, Baix Llobregat, Maresme, Vallès Oriental y Vallès Occidental.', 'Asesoramiento personalizado para la mejor solución.'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'vaciado-enseres-afectados',
      nombre:      'Vaciado de enseres afectados',
      description: 'En JustClean Incendios nos encargamos del vaciado profesional y seguro de enseres dañados por el incendio en Barcelona.  Ofrecemos un servicio discreto y eficiente, gestionando la retirada de muebles y objetos inservibles en toda la comarca del Baix Llobregat.',
      features:    ['Retirada segura de muebles y objetos.', 'Gestión responsable de residuos.', 'Cobertura en Barcelona, Barcelonés, Baix Llobregat, Maresme, Vallès Oriental y Vallès Occidental.', 'Servicio rápido y eficiente para agilizar la recuperación.'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'certificado-desinfeccion',
      nombre:      'Certificado oficial de desinfección',
      description: 'Garantiza una limpieza completa tras el incendio con nuestro certificado oficial de desinfección emitido por JustClean Incendios en Barcelona.  Cumplimos con las normativas vigentes para asegurar la eliminación total de contaminantes en toda la provincia de Maresme.',
      features:    ['Cumplimiento de normativas sanitarias.', 'Certificación oficial y sellado.', 'Cobertura en Barcelona, Barcelonés, Baix Llobregat, Maresme, Vallès Oriental y Vallès Occidental.', 'Tranquilidad y seguridad para ti y tu familia.'],
      featured:    true,
      ctaPage:     true,
    }
  ],

  // ── Textos de secciones ───────────────────────────────────────
  sections: {
    beneficiosSub:  'Más de 10 años de experiencia. Equipo propio, sin subcontratas y con gestión de residuos certificada.',
    serviciosSub:   'Todo lo que necesitas para dejar el inmueble listo.',
    testimoniosSub: 'Más de 500 familias y empresas han confiado en nosotros.',
    zonaComarca:    'de la comarca',
    zonaBarrios:    'También en los barrios de {{city}}:',
    preciosSub:     'Presupuesto final gratuito y sin compromiso. Estos precios son orientativos — el coste real depende del volumen y accesibilidad.',
    preciosNota:    'Precios orientativos para {{city}}. El presupuesto definitivo se calcula según el volumen real, accesibilidad y distancia al punto limpio. Siempre gratuito y sin compromiso.',
    faqSub:         'Resolvemos las dudas más habituales antes de contratar el servicio.',
  },

  // ── Testimonios (4) ───────────────────────────────────────────
  testimonials: [
    {
      initials: 'MC',
      name:     'María C.',
      location: 'Barcelona (Gràcia)',
      service:  'Limpieza post incendio vivienda',
      quote:    'Después del pequeño incendio en mi casa de Gràcia, JustClean Incendios fue una salvación. Fueron rápidos, profesionales y dejaron todo impecable. ¡Recomiendo sus servicios al 100%!.',
    },
    {
      initials: 'JR',
      name:     'Jordi R.',
      location: 'Sant Adrià del Besòs',
      service:  'Desinfección local comercial',
      quote:    'La limpieza de mi restaurante en Sant Adrià fue rápida y eficiente, eliminando por completo el olor a humo. El equipo de JustClean Incendios fue muy profesional y me explicaron todo el proceso con detalle.',
    },
    {
      initials: 'AL',
      name:     'Ana L.',
      location: 'Esplugues de Llobregat',
      service:  'Limpieza post incendio vivienda',
      quote:    'Necesitaba una limpieza urgente tras un fuego en mi casa de Esplugues y JustClean Incendios me ofreció el mejor precio y un servicio excelente. ¡Muy contenta con la rapidez y profesionalidad!.',
    },
    {
      initials: 'PG',
      name:     'Pedro G.',
      location: 'Mollet del Vallès',
      service:  'Limpieza post incendio local industrial',
      quote:    'Confío en JustClean Incendios para mis locales industriales en Mollet desde hace años. Siempre responden rápido y ofrecen un servicio de limpieza a fondo que cumple con todos los estándares.',
    }
  ],

  // ── Precios (3 tramos) ────────────────────────────────────────
  pricing: [
    {
      tipo:      'Desinfección básica (hasta 30m²)',
      precio:    'desde 950 €',
      highlight: true,
      badge:     'más solicitado',
      features:  ['Limpieza superficial', 'Eliminación de olores leves', 'Producto desinfectante estándar'],
    },
    {
      tipo:      'Tratamiento integral (hasta 80m²)',
      precio:    'desde 1350 €',
      highlight: true,
      badge:     'Más solicitado',
      features:  ['Desinfección profunda', 'Eliminación completa de olores', 'Retirada de escombros ligeros', 'Producto desinfectante profesional', 'Certificado de limpieza'],
    },
    {
      tipo:      'Restauración completa (superficies amplias)',
      precio:    'Presupuesto personalizado',
      highlight: false,
      features:  ['Limpieza a fondo de paredes y techos', 'Reparación de daños menores', 'Eliminación de humedades', 'Desinfección especializada', 'Plan integral de prevención'],
    }
  ],

  // ── Preguntas frecuentes (6) ──────────────────────────────────
  faqs: [
    {
      pregunta:  '¿Cuánto cuesta la limpieza post incendio en Barcelona?',
      respuesta: 'El precio varía según el tamaño del área afectada, la intensidad del fuego y los daños sufridos. Un tratamiento básico puede costar desde 950€, mientras que una restauración completa requiere un presupuesto personalizado después de evaluar el estado del inmueble. Ofrecemos presupuestos gratuitos en {{city}} y sus alrededores.',
    },
    {
      pregunta:  '¿Cuánto tiempo tarda la limpieza post incendio?',
      respuesta: 'La duración depende de la magnitud del incendio. Una desinfección básica puede tardar entre 2 y 4 horas, mientras que una restauración completa podría extenderse a varios días.  Nos esforzamos por minimizar los tiempos de inactividad en el Vallès Occidental.',
    },
    {
      pregunta:  '¿Qué incluye el servicio de limpieza tras un incendio?',
      respuesta: 'El servicio incluye la evaluación inicial del daño, la limpieza y desinfección profunda de todas las superficies afectadas, la eliminación de olores, la retirada de escombros (en algunos casos) y la entrega de un certificado de limpieza. Trabajamos en {{city}} aplicando protocolos especializados.',
    },
    {
      pregunta:  '¿Trabajáis en toda la comarca del Barcelonés?',
      respuesta: 'Sí, cubrimos todas las localidades del Ámbito metropolitano de Barcelona, incluyendo municipios como Sant Cugat, Esplugues de Llobregat, Mollet del Vallès y sus alrededores.  Nuestra área de cobertura se extiende por todo el Baix Llobregat y Maresme.',
    },
    {
      pregunta:  '¿Qué debo hacer antes de que lleguen los profesionales?',
      respuesta: 'Es recomendable ventilar la zona afectada y retirar objetos personales valiosos. Facilitar el acceso al inmueble y proporcionar información detallada sobre los daños nos permitirá agilizar el proceso en {{city}}.',
    },
    {
      pregunta:  '¿Tienen seguro de responsabilidad civil?',
      respuesta: 'Sí, contamos con un amplio seguro de responsabilidad civil que cubre cualquier daño accidental durante la ejecución del servicio, garantizando su tranquilidad y seguridad. Estamos certificados para trabajar en todo el territorio catalán.',
    }
  ],

  // ── Proceso de trabajo (4 pasos) ──────────────────────────────
  proceso: [
    {
      titulo:      '1. Contacto y Presupuesto Gratuito',
      descripcion: 'Llámanos o rellena nuestro formulario online para solicitar un presupuesto sin compromiso. Te responderemos en menos de 30 minutos en {{city}}.',
    },
    {
      titulo:      '2. Evaluación y Planificación del Trabajo',
      descripcion: 'Uno de nuestros técnicos visitará la propiedad para evaluar los daños, determinar el alcance del trabajo y elaborar un plan de limpieza personalizado. Utilizamos equipos especializados para detectar focos ocultos de olor.',
    },
    {
      titulo:      '3. Limpieza y Desinfección Profesional',
      descripcion: 'Nuestro equipo aplicará técnicas y productos específicos para eliminar olores, desinfectar superficies y restaurar la calidad del aire en el ambiente. Cumplimos con todas las normativas de seguridad y salud laboral.',
    },
    {
      titulo:      '4. Entrega de Informe y Certificado',
      descripcion: 'Te entregaremos un informe detallado de los trabajos realizados y un certificado de limpieza que garantiza la eliminación completa de olores y la desinfección del inmueble.  Tu tranquilidad es nuestra prioridad en {{city}}.',
    }
  ],

} as const;

export type Content = typeof content;
