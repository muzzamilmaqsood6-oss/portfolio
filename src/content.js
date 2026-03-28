export const dynamicPhrases = [
  'intelligent machines',
  'AI systems',
  'retrieval workflows',
  'context-aware products',
  'machine-assisted software',
];

export const heroStats = [
  {
    label: 'Current focus',
    value: 'AI systems, RAG workflows, backend APIs',
  },
  {
    label: 'Location',
    value: 'Islamabad, Pakistan',
  },
  {
    label: 'Availability',
    value: 'Open to internships and entry-level roles',
  },
];

export const aboutLines = [
  'Retrieval-driven systems grounded in context and useful responses.',
  'Clean backend services, API design, and scalable workflows.',
  'Modern interfaces that stay readable, polished, and fast.',
  'Strong communication, ownership, and execution in team environments.',
];

export const profileBlocks = [
  {
    kicker: 'Profile',
    title: 'AI-focused builder from Islamabad.',
    items: [
      'Final-semester BS Computer Science student',
      'National University of Technology, Islamabad',
      'Interested in AI, backend, and intelligent software roles',
    ],
  },
  {
    kicker: 'Certifications',
    title: 'Foundations that support the technical path.',
    items: [
      'Cisco IT Essentials',
      'Google Lead Development Certification',
      'Communication and documentation experience through ISPR internship',
    ],
  },
];

export const skillGroups = [
  {
    number: '01',
    category: 'AI / Retrieval',
    title: 'Context-aware machine workflows',
    description:
      'Built around AI automation, embeddings, RAG concepts, prompt-guided logic, sentiment workflows, and context continuity.',
    tags: ['AI Automation', 'RAG Concepts', 'Vector Embeddings', 'pgVector', 'Prompt Engineering', 'Sentiment Analysis'],
  },
  {
    number: '02',
    category: 'Backend / Data',
    title: 'APIs, services, and reliable data flow',
    description:
      'Comfortable working with Python-based APIs, database-backed systems, structured workflows, and backend thinking that supports scale.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'JavaScript', 'API Development', 'Backend Development'],
  },
  {
    number: '03',
    category: 'Cloud / Deployment',
    title: 'Containerized and cloud-oriented direction',
    description:
      'Focused on reproducible, deployable, and infrastructure-aware software systems.',
    tags: ['Docker', 'Kubernetes', 'AWS', 'Kafka', 'Apache Spark', 'Cloud Native'],
  },
  {
    number: '04',
    category: 'Product / UI',
    title: 'Readable interfaces with strong communication',
    description:
      'Responsive design, user trust, clean presentation, and collaboration that keeps execution aligned.',
    tags: ['React', 'Responsive UI', 'Communication', 'Problem Solving', 'Team Collaboration', 'Product UX'],
  },
];

export const projectCards = [
  {
    id: 'crm',
    cardClass: 'project-card project-primary glass-panel',
    previewClass: 'project-preview crm-preview',
    label: 'Flagship AI Project',
    year: '2025 - Present',
    title: 'AI-Powered Multi-Channel CRM System',
    description:
      'Built as a final year collaboration with Rockville Technologies, this system unifies WhatsApp, Instagram, Facebook, and website chat into one AI-assisted workspace.',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS'],
    buttonClass: 'button',
    preview: 'crm',
  },
  {
    id: 'chaty',
    cardClass: 'project-card project-secondary glass-panel',
    previewClass: 'project-preview chaty-preview',
    label: 'Document Intelligence',
    year: '2026',
    title: 'Chaty_PDFs',
    description:
      'A retrieval-first chatbot experience focused on turning static PDFs into something searchable, interactive, and useful.',
    tags: [],
    buttonClass: 'button button-secondary',
    preview: 'chaty',
  },
  {
    id: 'imageSearch',
    cardClass: 'project-card project-tertiary project-search-card glass-panel',
    previewClass: 'project-preview search-preview',
    label: 'Computer Vision Project',
    year: '2026',
    title: 'Image Search Engine Using CNN',
    description:
      'Developed an image retrieval system to find same or similar images inside large datasets with deep visual feature extraction and a local network web interface.',
    tags: ['ResNet-50', 'CLIP', 'Color Histograms', 'Flask', 'Pickle', 'Computer Vision'],
    buttonClass: 'button button-ghost',
    preview: 'imageSearch',
  },
];

export const projectDetails = {
  crm: {
    label: 'Flagship AI Project',
    title: 'AI-Powered Multi-Channel CRM System',
    summary:
      'A cloud-native CRM direction that unifies WhatsApp, Instagram, Facebook, and website chat inside one intelligent workspace.',
    overview:
      'Built as a final year collaboration with Rockville Technologies, the system centralizes fragmented communication channels so teams can respond from one operational inbox instead of switching between disconnected tools.',
    impact:
      'The AI layer supports response assistance, sentiment analysis, lead management, and context continuity through vector embeddings and pgVector. The value is practical: faster handling, better context, and smarter communication flow.',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Kafka', 'Spark', 'Docker', 'Kubernetes', 'AWS', 'pgVector'],
    actions: [
      { label: 'GitHub Profile', href: 'https://github.com/muzzamilmaqsood6-oss/muzzamil', variant: 'ghost' },
      { label: 'Contact', href: '#contact', variant: 'primary' },
    ],
    preview: 'crm',
  },
  chaty: {
    label: 'Document Intelligence',
    title: 'Chaty_PDFs - AI-Powered PDF Chatbot',
    summary:
      'A retrieval-first chatbot that turns PDFs into grounded, interactive question-answer experiences.',
    overview:
      'This project extracts PDF text, chunks documents into retrievable units, and lets users ask natural questions in a clean interface instead of manually scanning long files.',
    impact:
      'Its strength comes from RAG-style retrieval, vector search, and grounded responses. That makes the system more useful than generic chat because it answers from the uploaded material instead of guessing without context.',
    tags: ['FastAPI', 'Tailwind', 'JavaScript', 'HuggingFace', 'ChromaDB', 'RAG'],
    actions: [
      { label: 'GitHub Profile', href: 'https://github.com/muzzamilmaqsood6-oss/muzzamil', variant: 'ghost' },
      { label: 'Contact', href: '#contact', variant: 'secondary' },
    ],
    preview: 'chaty',
  },
  imageSearch: {
    label: 'Computer Vision Project',
    title: 'Image Search Engine Using CNN',
    summary:
      'An image retrieval system designed to find the same or similar images inside large datasets through deep visual features.',
    overview:
      'The project used ResNet-50, CLIP, and color histograms for feature extraction, then stored feature vectors and metadata in Pickle files to support efficient similarity lookups.',
    impact:
      'It strengthened practical computer vision, feature engineering, and ML deployment skills by combining multiple retrieval signals inside a Flask web app with password-protected local network access.',
    tags: ['ResNet-50', 'CLIP', 'Color Histograms', 'Flask', 'Pickle', 'Computer Vision'],
    actions: [
      { label: 'GitHub Profile', href: 'https://github.com/muzzamilmaqsood6-oss/muzzamil', variant: 'ghost' },
      { label: 'Contact', href: '#contact', variant: 'secondary' },
    ],
    preview: 'imageSearch',
  },
};

export const timeline = [
  {
    year: '2026',
    title: 'Final Semester Computer Science Focus',
    description: 'Focused on AI systems, backend engineering, retrieval workflows, and production-oriented software development.',
    logoKey: 'aiFocus',
    logoAlt: 'AI systems icon',
  },
  {
    year: '2025 - Present',
    title: 'Final Year Project Collaboration with Rockville Technologies',
    description: 'Working on a cloud-native CRM direction that blends unified communication channels, AI-assisted workflows, sentiment understanding, and vector-backed context continuity.',
  },
  {
    year: '2025',
    title: 'ISPR Internship',
    description: 'Built communication, documentation, and coordination discipline in a professional setting that required organized work and clear execution.',
    logoKey: 'ispr',
    logoAlt: 'ISPR logo',
  },
  {
    year: '2022 - 2026',
    title: 'BS Computer Science, National University of Technology',
    description: 'Building the technical base for AI, backend engineering, cloud-oriented systems, and product-focused software work in Islamabad.',
    logoKey: 'nutech',
    logoAlt: 'National University of Technology logo',
  },
];

export const contactCards = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: '+92 317 5253522',
    href: 'https://wa.me/923175253522',
    external: true,
    className: 'contact-card whatsapp-card',
    iconKey: 'whatsapp',
    alt: 'WhatsApp logo',
  },
  {
    id: 'email',
    label: 'Email',
    value: 'muzzamilmaqsood6@gmail.com',
    href: 'mailto:muzzamilmaqsood6@gmail.com',
    external: false,
    className: 'contact-card',
    iconKey: 'mail',
    alt: 'Email logo',
    iconClassName: 'mail-icon-image',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'muzzamil-maqsood-7495823b2',
    href: 'https://www.linkedin.com/in/muzzamil-maqsood-7495823b2',
    external: true,
    className: 'contact-card',
    iconKey: 'linkedin',
    alt: 'LinkedIn logo',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'muzzamilmaqsood6-oss/muzzamil',
    href: 'https://github.com/muzzamilmaqsood6-oss/muzzamil',
    external: true,
    className: 'contact-card',
    iconKey: 'github',
    alt: 'GitHub logo',
    iconClassName: 'github-icon-image',
  },
];
