/**
 * ╔═══════════════════════════════════════════════════════╗
 * ║  CONFIGURACIÓN CENTRAL DEL SITIO — src/config/site.ts ║
 * ║  Generado por generator.html — edita allí, no aquí   ║
 * ╚═══════════════════════════════════════════════════════╝
 */

export const siteConfig = {

  // ── Identidad del negocio ──────────────────────────────
  businessName:      'Nombre del Negocio',
  businessNameLegal: 'Nombre Legal S.L.',
  cif:   'B00000000',
  logo:  '/logo.png',

  // ── Servicio y área ────────────────────────────────────
  serviceType:  'Tipo de servicio',
  area:         'Ciudad principal y municipios cercanos.',
  mainCity:     'Ciudad Principal',
  comarca:      'la Comarca',
  foundingYear: '2020',

  // ── Contacto ──────────────────────────────────────────
  phone:    '+34 600 000 000',
  email:    'info@ejemplo.com',
  whatsapp: '34600000000',
  // import.meta.env.SITE lee el campo `site` de astro.config.mjs,
  // que a su vez lee process.env.PUBLIC_SITE_URL del dashboard de la plataforma.
  // @ts-ignore — import.meta.env requiere node_modules instalados para el IDE
  web: import.meta.env.SITE || 'https://tu-web.netlify.app',

  // ── Horario ───────────────────────────────────────────
  horario:      'Mo-Fr 09:00-18:00',
  horarioTexto: 'Lunes a Viernes, 9:00–18:00',
  horarioDias:  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as string[],
  horarioAbre:  '09:00',
  horarioCierra:'18:00',

  // ── SEO ───────────────────────────────────────────────
  description: 'Descripción del negocio para meta description y Schema.',
  priceRange:  '€€',
  aggregateRating: {
    ratingValue:  5.0,
    reviewCount:  0,
    bestRating:   5,
    worstRating:  1,
  },

  // ── Colores corporativos ──────────────────────────────
  colorPrimary: '#0057ff',
  colorText:    '#0f172a',

  // ── Diseño visual ─────────────────────────────────────
  // fontFamily: Inter | Plus Jakarta Sans | Outfit | Nunito | DM Sans | Sora
  fontFamily:  'Inter',
  // designStyle: sharp | rounded | pill
  designStyle: 'rounded',
  // brandIcon: ◈ | ◆ | ⬡ | ✦ | ◉ | ⬢ | ▲ | ●
  brandIcon:   '◈',
  // mapZoom: 13–16
  mapZoom:     15,

  // ── SEO avanzado ──────────────────────────────────────
  // titleFormula: 1 | 2 | 3 | 4  (varía la estructura del <title>)
  titleFormula: 1,
  // schemaType: tipo Schema.org según sector
  // LocalBusiness | Plumber | Electrician | HousePainter | MovingCompany
  // CleaningService | HomeAndConstructionBusiness | ProfessionalService
  schemaType:  'LocalBusiness',
  // sectionOrder: orden y visibilidad de secciones en la home
  // Elimina una sección del array para ocultarla
  // Hero (①) y CTA final (⑨) son siempre fijos
  sectionOrder: ['beneficios','servicios','zona','proceso','testimonios','precios','faq'] as string[],

  // ── Navegación ────────────────────────────────────────
  navAbout:    'Quiénes somos',   // alt: 'Sobre nosotros' | 'La empresa' | 'Equipo'
  navFaq:      'FAQ',             // alt: 'Preguntas' | 'Dudas frecuentes' | 'Ayuda'
  navCta:      'PRESUPUESTO GRATIS', // alt: 'LLAMAR AHORA' | 'CONSULTA GRATIS' | 'SOLICITAR CITA'
  navCtaShort: 'PRESUPUESTO',     // versión corta para móvil
  navCtaEmoji: '📋',              // alt: '📞' | '✉️' | '🔥' | '⚡' | '🛠️' | '✅' | '💬'

  // ── Enlaces externos ──────────────────────────────────
  // Dejar url vacía para ocultar el enlace
  // rel: 'nofollow' | 'follow'  (nofollow = no pasa PageRank)
  externalLink1: { url: '', anchor: '', rel: 'nofollow' },  // aparece en el hero
  externalLink2: { url: '', anchor: '', rel: 'nofollow' },  // aparece en el footer

  // ── Redes sociales ────────────────────────────────────
  social: {
    facebook:  '',
    instagram: '',
    linkedin:  '',
  },

  // ── Verificación de sitio ─────────────────────────────
  googleVerification: '',
  bingVerification:   '',

} as const;

export type SiteConfig = typeof siteConfig;
