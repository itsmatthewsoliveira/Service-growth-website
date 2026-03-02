export type Lang = "en" | "es" | "pt";

export const LANG_LABELS: Record<Lang, string> = {
  en: "EN",
  es: "ES",
  pt: "PT",
};

// ─── Translations ────────────────────────────────────────────────────────────

const translations = {
  // ─── Progress Bar Section Labels ───────────────────────────────────────────
  sections: {
    en: ["Business", "Services", "Brand", "Goals"],
    es: ["Negocio", "Servicios", "Marca", "Objetivos"],
    pt: ["Negócio", "Serviços", "Marca", "Objetivos"],
  },

  // ─── Section 1: Business Basics ────────────────────────────────────────────
  s1Title: {
    en: "About Your Business",
    es: "Sobre Su Empresa",
    pt: "Sobre Sua Empresa",
  },
  s1Subtitle: {
    en: "Tell us the fundamentals of your business.",
    es: "Cuéntenos los fundamentos de su negocio.",
    pt: "Conte-nos os fundamentos do seu negócio.",
  },
  fullName: { en: "Your Full Name", es: "Su Nombre Completo", pt: "Seu Nome Completo" },
  fullNamePh: { en: "e.g. John Smith", es: "ej. Juan García", pt: "ex. João Silva" },
  role: { en: "Your Role / Title", es: "Su Cargo / Título", pt: "Seu Cargo / Título" },
  rolePh: { en: "e.g. Owner, Director", es: "ej. Dueño, Director", pt: "ex. Proprietário, Diretor" },
  companyName: { en: "Company Name", es: "Nombre de la Empresa", pt: "Nome da Empresa" },
  companyNameHint: { en: "official / legal name", es: "nombre oficial / legal", pt: "nome oficial / legal" },
  companyNamePh: { en: "e.g. Smith Plumbing LLC", es: "ej. García Plomería S.A.", pt: "ex. Silva Encanamentos Ltda" },
  industry: { en: "Industry", es: "Industria", pt: "Indústria" },
  industryPh: { en: "Select your industry...", es: "Seleccione su industria...", pt: "Selecione sua indústria..." },
  yearsInBusiness: { en: "Years in Business", es: "Años en el Negocio", pt: "Anos no Negócio" },
  yearsInBusinessPh: { en: "e.g. 12", es: "ej. 12", pt: "ex. 12" },
  city: { en: "City / Province", es: "Ciudad / Provincia", pt: "Cidade / Estado" },
  cityPh: { en: "e.g. Jacksonville, FL", es: "ej. Miami, FL", pt: "ex. São Paulo, SP" },
  phone: { en: "Phone Number", es: "Número de Teléfono", pt: "Número de Telefone" },
  phonePh: { en: "(555) 123-4567", es: "(555) 123-4567", pt: "(11) 99999-9999" },
  email: { en: "Email Address", es: "Correo Electrónico", pt: "Endereço de E-mail" },
  emailPh: { en: "contact@yourcompany.com", es: "contacto@suempresa.com", pt: "contato@suaempresa.com" },
  existingWebsite: { en: "Existing Website", es: "Sitio Web Actual", pt: "Site Atual" },
  existingWebsiteHint: { en: "if any", es: "si tiene", pt: "se tiver" },
  existingWebsitePh: {
    en: "https://yoursite.com  — or leave blank",
    es: "https://susitio.com  — o dejar en blanco",
    pt: "https://seusite.com  — ou deixe em branco",
  },
  companyDescription: { en: "Brief Company Description", es: "Breve Descripción de la Empresa", pt: "Breve Descrição da Empresa" },
  companyDescriptionPh: {
    en: "Tell us what you do, who you serve, and what makes you different...",
    es: "Cuéntenos qué hace, a quién sirve y qué lo diferencia...",
    pt: "Conte-nos o que você faz, quem atende e o que te diferencia...",
  },

  // ─── Section 2: Services & Projects ────────────────────────────────────────
  s2Title: { en: "Services & Projects", es: "Servicios y Proyectos", pt: "Serviços e Projetos" },
  s2Subtitle: {
    en: "Help us understand what you offer and who you serve.",
    es: "Ayúdenos a entender lo que ofrece y a quién sirve.",
    pt: "Ajude-nos a entender o que você oferece e quem atende.",
  },
  primaryServices: { en: "Primary Services Offered", es: "Servicios Principales", pt: "Serviços Principais" },
  primaryServicesHint: { en: "check all that apply", es: "seleccione todos los que apliquen", pt: "selecione todos que se aplicam" },
  selectIndustryFirst: {
    en: "Please select your industry in Step 1 to see relevant services.",
    es: "Seleccione su industria en el Paso 1 para ver los servicios relevantes.",
    pt: "Selecione sua indústria no Passo 1 para ver os serviços relevantes.",
  },
  otherServices: { en: "Other Services", es: "Otros Servicios", pt: "Outros Serviços" },
  otherServicesPh: { en: "Anything not listed above...", es: "Cualquier cosa no listada arriba...", pt: "Qualquer coisa não listada acima..." },
  projectHistory: { en: "Project History", es: "Historial de Proyectos", pt: "Histórico de Projetos" },
  avgProjectSize: { en: "Average Project Size", es: "Tamaño Promedio de Proyecto", pt: "Tamanho Médio do Projeto" },
  avgProjectSizePh: { en: "e.g. $1,000 – $10,000", es: "ej. $1,000 – $10,000", pt: "ex. R$5.000 – R$50.000" },
  projectDuration: { en: "Typical Project Duration", es: "Duración Típica del Proyecto", pt: "Duração Típica do Projeto" },
  projectDurationPh: { en: "e.g. 1–4 weeks", es: "ej. 1–4 semanas", pt: "ex. 1–4 semanas" },
  notableProject: { en: "Biggest Win / Best Result", es: "Mayor Logro / Mejor Resultado", pt: "Maior Conquista / Melhor Resultado" },
  notableProjectPh: {
    en: "A client success story, big project, or result you're proud of...",
    es: "Una historia de éxito, gran proyecto o resultado del que se sienta orgulloso...",
    pt: "Uma história de sucesso, grande projeto ou resultado de que se orgulha...",
  },
  photosAvailable: { en: "Project Photos Available?", es: "¿Fotos de Proyectos Disponibles?", pt: "Fotos de Projetos Disponíveis?" },
  serviceArea: { en: "Geographic Service Area", es: "Área de Servicio Geográfica", pt: "Área de Atendimento" },
  serviceAreaPh: {
    en: "e.g. Northeast Florida, nationwide, etc.",
    es: "ej. Sur de Florida, todo el país, etc.",
    pt: "ex. Grande São Paulo, todo o Brasil, etc.",
  },

  // ─── Section 3: Brand & Identity ───────────────────────────────────────────
  s3Title: { en: "Brand & Identity", es: "Marca e Identidad", pt: "Marca e Identidade" },
  s3Subtitle: {
    en: "We need to understand how you want to be perceived in the market.",
    es: "Necesitamos entender cómo quiere ser percibido en el mercado.",
    pt: "Precisamos entender como você deseja ser percebido no mercado.",
  },
  brandPersonality: { en: "Brand Personality", es: "Personalidad de la Marca", pt: "Personalidade da Marca" },
  brandPersonalityHint: { en: "check up to 3", es: "seleccione hasta 3", pt: "selecione até 3" },
  hasLogo: { en: "Do You Have a Logo?", es: "¿Tiene un Logotipo?", pt: "Você Tem um Logotipo?" },
  brandColors: { en: "Brand Colors", es: "Colores de la Marca", pt: "Cores da Marca" },
  brandColorsPh: { en: "e.g. Dark navy, gold, white", es: "ej. Azul marino, dorado, blanco", pt: "ex. Azul marinho, dourado, branco" },
  fonts: { en: "Preferred Fonts", es: "Fuentes Preferidas", pt: "Fontes Preferidas" },
  fontsPh: { en: "e.g. Clean modern sans-serif", es: "ej. Sans-serif moderna y limpia", pt: "ex. Sans-serif moderna e limpa" },
  competitorWebsites: { en: "Competitor Websites You Respect", es: "Sitios Web de Competidores que Admira", pt: "Sites de Concorrentes que Admira" },
  competitorWebsitesPh: {
    en: "URLs or names + what you like about them...",
    es: "URLs o nombres + lo que le gusta de ellos...",
    pt: "URLs ou nomes + o que gosta neles...",
  },
  inspiredWebsites: { en: "Websites You Love (Any Industry)", es: "Sitios Web que le Encantan (Cualquier Industria)", pt: "Sites que Você Ama (Qualquer Indústria)" },
  inspiredWebsitesPh: {
    en: "Any industry — architecture, luxury brands, tech...",
    es: "Cualquier industria — arquitectura, marcas de lujo, tecnología...",
    pt: "Qualquer indústria — arquitetura, marcas de luxo, tecnologia...",
  },
  websiteFeeling: { en: "How Should Visitors Feel?", es: "¿Cómo Deben Sentirse los Visitantes?", pt: "Como os Visitantes Devem Se Sentir?" },
  websiteFeelingPh: {
    en: "e.g. Confident, impressed, ready to call you...",
    es: "ej. Confiados, impresionados, listos para llamarlo...",
    pt: "ex. Confiantes, impressionados, prontos para ligar...",
  },

  // ─── Section 4: Goals ──────────────────────────────────────────────────────
  s4Title: { en: "Goals & Expectations", es: "Objetivos y Expectativas", pt: "Objetivos e Expectativas" },
  s4Subtitle: {
    en: "Help us understand what success looks like for you.",
    es: "Ayúdenos a entender cómo es el éxito para usted.",
    pt: "Ajude-nos a entender como é o sucesso para você.",
  },
  primaryGoal: { en: "Primary Goal for the Website", es: "Objetivo Principal del Sitio Web", pt: "Objetivo Principal do Site" },
  idealClient: { en: "Who Is Your Ideal Client?", es: "¿Quién es Su Cliente Ideal?", pt: "Quem é Seu Cliente Ideal?" },
  idealClientPh: {
    en: "e.g. Homeowners aged 35-55, local businesses, property managers...",
    es: "ej. Propietarios de 35-55 años, negocios locales, administradores...",
    pt: "ex. Proprietários de 35-55 anos, empresas locais, administradores...",
  },
  problemSolved: { en: "What Problem Do You Solve?", es: "¿Qué Problema Resuelve?", pt: "Que Problema Você Resolve?" },
  problemSolvedPh: {
    en: "What pain points do clients come to you with?",
    es: "¿Con qué problemas llegan sus clientes?",
    pt: "Com quais problemas seus clientes chegam até você?",
  },
  additionalNotes: { en: "Anything Else We Should Know?", es: "¿Algo Más que Debamos Saber?", pt: "Mais Alguma Coisa que Devemos Saber?" },
  additionalNotesPh: {
    en: "Timeline, languages, certifications, awards...",
    es: "Plazos, idiomas, certificaciones, premios...",
    pt: "Prazos, idiomas, certificações, prêmios...",
  },

  // ─── Navigation ────────────────────────────────────────────────────────────
  back: { en: "Back", es: "Atrás", pt: "Voltar" },
  continue: { en: "Continue", es: "Continuar", pt: "Continuar" },
  submit: { en: "Submit", es: "Enviar", pt: "Enviar" },
  submitting: { en: "Submitting...", es: "Enviando...", pt: "Enviando..." },
  of: { en: "of", es: "de", pt: "de" },

  // ─── Select placeholders ───────────────────────────────────────────────────
  select: { en: "Select...", es: "Seleccionar...", pt: "Selecionar..." },
  sectionLabel: { en: "Section", es: "Sección", pt: "Seção" },

  // ─── Industry Options ──────────────────────────────────────────────────────
  industryOptions: {
    en: {
      "home-services": "Home Services",
      medical: "Medical / Healthcare",
      construction: "Construction / Contracting",
      legal: "Legal",
      "real-estate": "Real Estate",
      automotive: "Automotive",
      restaurant: "Restaurant / Food Service",
      fitness: "Fitness / Wellness",
      other: "Other",
    },
    es: {
      "home-services": "Servicios del Hogar",
      medical: "Médico / Salud",
      construction: "Construcción / Contratación",
      legal: "Legal",
      "real-estate": "Bienes Raíces",
      automotive: "Automotriz",
      restaurant: "Restaurante / Alimentación",
      fitness: "Fitness / Bienestar",
      other: "Otro",
    },
    pt: {
      "home-services": "Serviços Domésticos",
      medical: "Médico / Saúde",
      construction: "Construção / Empreiteira",
      legal: "Jurídico",
      "real-estate": "Imobiliário",
      automotive: "Automotivo",
      restaurant: "Restaurante / Alimentação",
      fitness: "Fitness / Bem-estar",
      other: "Outro",
    },
  },

  // ─── Brand Personality Options ─────────────────────────────────────────────
  brandPersonalityOptions: {
    en: [
      "Premium / Luxury",
      "Modern / Minimalist",
      "Trustworthy / Friendly",
      "Bold / Confident",
      "Innovative / Tech-forward",
      "Traditional / Classic",
    ],
    es: [
      "Premium / Lujo",
      "Moderno / Minimalista",
      "Confiable / Amigable",
      "Audaz / Seguro",
      "Innovador / Tecnológico",
      "Tradicional / Clásico",
    ],
    pt: [
      "Premium / Luxo",
      "Moderno / Minimalista",
      "Confiável / Amigável",
      "Ousado / Confiante",
      "Inovador / Tecnológico",
      "Tradicional / Clássico",
    ],
  },

  // ─── Logo Options ──────────────────────────────────────────────────────────
  logoOptions: {
    en: [
      "Yes — approved logo with files",
      "Yes — but needs redesign",
      "No — we need a logo",
    ],
    es: [
      "Sí — logotipo aprobado con archivos",
      "Sí — pero necesita rediseño",
      "No — necesitamos un logotipo",
    ],
    pt: [
      "Sim — logotipo aprovado com arquivos",
      "Sim — mas precisa de redesign",
      "Não — precisamos de um logotipo",
    ],
  },

  // ─── Photos Options ────────────────────────────────────────────────────────
  photosOptions: {
    en: [
      "Yes — high resolution photos available",
      "Yes — but photos need to be taken/found",
      "No — we'll need to discuss alternatives",
    ],
    es: [
      "Sí — fotos de alta resolución disponibles",
      "Sí — pero las fotos necesitan ser tomadas/encontradas",
      "No — necesitaremos discutir alternativas",
    ],
    pt: [
      "Sim — fotos de alta resolução disponíveis",
      "Sim — mas as fotos precisam ser tiradas/encontradas",
      "Não — precisaremos discutir alternativas",
    ],
  },

  // ─── Goal Options ──────────────────────────────────────────────────────────
  goalOptions: {
    en: [
      "Generate more leads / customers",
      "Build credibility & trust online",
      "Attract higher-value clients",
      "Replace word-of-mouth with online presence",
      "Expand to new areas / markets",
      "All of the above",
    ],
    es: [
      "Generar más clientes potenciales",
      "Construir credibilidad y confianza en línea",
      "Atraer clientes de mayor valor",
      "Reemplazar el boca a boca con presencia en línea",
      "Expandirse a nuevas áreas / mercados",
      "Todos los anteriores",
    ],
    pt: [
      "Gerar mais leads / clientes",
      "Construir credibilidade e confiança online",
      "Atrair clientes de maior valor",
      "Substituir indicações por presença online",
      "Expandir para novas áreas / mercados",
      "Todos os anteriores",
    ],
  },

  // ─── Completion Screen ─────────────────────────────────────────────────────
  thankYou: { en: "Thank You.", es: "Gracias.", pt: "Obrigado." },
  submittedMessage: {
    en: "Your onboarding questionnaire has been submitted. We review every response carefully before beginning work.",
    es: "Su cuestionario de incorporación ha sido enviado. Revisamos cada respuesta cuidadosamente antes de comenzar.",
    pt: "Seu questionário de integração foi enviado. Revisamos cada resposta cuidadosamente antes de começar.",
  },
  whatsNext: { en: "What Happens Next", es: "Qué Sucede Después", pt: "O Que Acontece Agora" },
  nextSteps: {
    en: [
      "You'll receive a confirmation email within 1 hour",
      "We'll review your answers within 24 hours",
      "A project strategy call will be scheduled",
      "Website design begins within 3–5 business days",
    ],
    es: [
      "Recibirá un correo de confirmación dentro de 1 hora",
      "Revisaremos sus respuestas dentro de 24 horas",
      "Se programará una llamada de estrategia",
      "El diseño del sitio web comienza en 3–5 días hábiles",
    ],
    pt: [
      "Você receberá um e-mail de confirmação em 1 hora",
      "Revisaremos suas respostas em 24 horas",
      "Uma chamada estratégica será agendada",
      "O design do site começa em 3–5 dias úteis",
    ],
  },
  bookCall: { en: "Book Your Strategy Call Now", es: "Reserve Su Llamada Estratégica", pt: "Agende Sua Chamada Estratégica" },
  skipWait: {
    en: "Skip the wait — book a time directly on our calendar.",
    es: "No espere — reserve un horario directamente en nuestro calendario.",
    pt: "Não espere — agende um horário diretamente no nosso calendário.",
  },
  errorMessage: {
    en: "Something went wrong. Please try again or email us directly.",
    es: "Algo salió mal. Inténtelo de nuevo o envíenos un correo directamente.",
    pt: "Algo deu errado. Tente novamente ou envie-nos um e-mail diretamente.",
  },

  // ─── Hero Section (onboarding page) ────────────────────────────────────────
  heroBadge: { en: "Client Onboarding", es: "Incorporación de Cliente", pt: "Integração de Cliente" },
  heroTitle1: { en: "Website", es: "Cuestionario", pt: "Questionário" },
  heroTitle2: { en: "Discovery", es: "de Descubrimiento", pt: "de Descoberta" },
  heroTitle3: { en: "Questionnaire", es: "del Sitio Web", pt: "do Site" },
  heroSubtitle: {
    en: "Please complete this form so we can build a website that truly represents your company. This typically takes 15–20 minutes.",
    es: "Complete este formulario para que podamos crear un sitio web que realmente represente a su empresa. Esto generalmente toma 15–20 minutos.",
    pt: "Complete este formulário para que possamos criar um site que realmente represente sua empresa. Isso geralmente leva 15–20 minutos.",
  },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Lang): string | string[] | Record<string, string> {
  const entry = translations[key];
  return (entry as Record<Lang, string | string[] | Record<string, string>>)[lang];
}

export function ts(key: TranslationKey, lang: Lang): string {
  return t(key, lang) as string;
}

export function ta(key: TranslationKey, lang: Lang): string[] {
  return t(key, lang) as string[];
}

export function tMap(key: TranslationKey, lang: Lang): Record<string, string> {
  return t(key, lang) as Record<string, string>;
}

export default translations;
