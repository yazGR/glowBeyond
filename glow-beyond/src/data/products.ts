export type SupportedLocale =
  | "fr"
  | "en"
  | "es";

export interface ProductTranslation {
  name: string;
  description: string;
  longDescription: string;

  notes: string[];

  benefits: string[];
}

export interface Product {
  id: number;
  slug: string;

  image: string;

  gallery: string[];

  price: number;

  translations: Record< SupportedLocale, ProductTranslation >;
}

export const products: Product[] = [
    {
        id: 1,
        slug: "moonveil",

        image: "/collection-1.png",

        gallery: [
            "/moonveil-1.png",
            "/moonveil-2.png",
            "/moonveil-3.png",
            "/moonveil-4.png",
            "/moonveil-5.png"
        ],

        price: 28,

        translations: {
            fr: {
                name: "MOONVEIL - Sleep Candle",

                description:
                    "Une bougie conçue pour vous aider à vous déconnecter du stress quotidien et à préparer votre esprit et votre corps à un repos profond.",

                longDescription:
                    " Moonveil transforme votre espace en un refuge de tranquillité. Son mélange de lavande, de vanille et de cèdre favorise la détente avant le coucher.",

                notes: [
                    "Lavender",
                    "Vanilla Bean",
                    "Cedarwood"
                ],

                benefits: [
                    "Favorise la relaxation",
                    "Aide à créer une routine de sommeil",
                    "Réduit le stress",
                    "Crée une atmosphère chaleureuse"
                ]
            },

            en: {
                name: "MOONVEIL - Sleep Candle",

                description:
                    "A candle designed to help you disconnect from daily stress and prepare your mind and body for deep rest.",

                longDescription:
                    "Moonveil transforms your space into a peaceful sanctuary. Its blend of lavender, vanilla, and cedarwood creates a warm atmosphere that encourages relaxation before sleep.",

                notes: [
                    "Lavender",
                    "Vanilla Bean",
                    "Cedarwood"
                ],

                benefits: [
                    "Promotes relaxation",
                    "Supports a bedtime routine",
                    "Reduces stress",
                    "Creates a cozy atmosphere"
                ]
            },

            es: {
                name: "MOONVEIL - Sleep Candle",

                description:
                    "Una vela diseñada para ayudarte a desconectarte del estrés diario y preparar mente y cuerpo para un descanso profundo.",

                longDescription:
                    "Moonveil transforma tu espacio en un refugio de tranquilidad. Su combinación de lavanda, vainilla y cedro crea una atmósfera cálida y reconfortante que favorece la relajación antes de dormir. Es la compañera ideal para tu rutina nocturna, lectura antes de acostarte o momentos de autocuidado.",

                notes: [
                    "Lavender",
                    "Vanilla Bean",
                    "Cedarwood"
                ],

                benefits: [
                    "Favorece la relajación",
                    "Ayuda a crear una rutina de sueño",
                    "Reduce el estrés",
                    "Genera una atmósfera acogedora"
                ]
            }
        }
    },
  {
    id: 2,
    slug: "nordhale",
    image: "/collection-2.png",
    gallery: [
            "/nordhale-1.png",
            "/nordhale-2.png",
            "/nordhale-3.png",
            "/nordhale-4.png",
            "/nordhale-5.png"
        ],
    price: 30,
    translations: {
      fr: {
        name: "NORDHALE - Relax Candle",

        description:
          " Inspirée des forêts canadiennes, elle aide à réduire le stress et à retrouver le calme.",

        longDescription:
          "Nordhale capture la sensation d'une promenade dans une forêt paisible après la pluie. La bergamote et l'eucalyptus créent une expérience de détente inspirée des spas.",

        notes: [
          "Bergamot",
          "Eucalyptus",
        ],

        benefits: [
          "Favorise la détente mentale",
          "Libère les tensions",
          "Crée une expérience de type spa"
        ]
      },

      en: {
        name: "NORDHALE - Relax Candle",

        description:
          " Inspired by Canadian forests, it helps reduce stress and find calm.",

        longDescription:
          "Nordhale captures the feeling of walking through a peaceful forest after the rain. Bergamot and eucalyptus create a refreshing spa-like experience.",

        notes: [
          "Bergamot",
          "Eucalyptus",
        ],

        benefits: [
          "Promotes mental relaxation",
          "Releases tension",
          "Creates a spa-like experience"
        ]
      },

      es: {
        name: "NORDHALE - Relax Candle",

        description:
          "Inspirada en los bosques canadienses, ayuda a reducir el estrés y encontrar calma.",

        longDescription:
          "Nordhale captura la sensación de caminar por un bosque tranquilo después de la lluvia. La frescura de la bergamota y el eucalipto crea una experiencia tipo spa que invita a respirar profundo y reconectar con el presente.",

        notes: [
          "Bergamot",
          "Eucalyptus",
        ],

        benefits: [
          "Promueve la relajación mental",
          "Ayuda a liberar tensión acumulada",
          "Crea un ambiente tipo spa"
        ]
      }
    }
  },
  {
    id: 3,
    slug: "clearmind",
    image: "/collection-3.png",
    gallery: [
            "/clearmind-1.png",
            "/clearmind-2.png",
            "/clearmind-3.png",
            "/clearmind-4.png",
            "/clearmind-5.png"
        ],
    price: 29,
     translations: {
      fr: {
        name: "CLEARMIND - Focus Candle",

        description:
          "Conçue pour garder l’esprit concentré, clair et productif.",

        longDescription:
          "Clearmind associe la bergamote au romarin et à la menthe pour favoriser la concentration.",

        notes: [
          "Rosemary Mint",
          "Bergamot",
        ],

        benefits: [
          "Favorise la concentration",
          "Améliore la productivité",
          "Procure une sensation d'organisation et de lucidité",
          "Apporte une énergie fraîche sans être envahissante",
          "Idéale pour le télétravail, la planification et les projets importants"
        ]
      },

      en: {
        name: "CLEARMIND - Focus Candle",

        description:
          "Designed to keep the mind focused, clear, and productive.",

        longDescription:
          "Clearmind blends bergamot with rosemary mint to create an energizing and balanced atmosphere.",

        notes: [
          "Rosemary Mint",
          "Bergamot",
        ],

        benefits: [
          "Enhances focus and mental concentration",
          "Helps maintain productivity during work and creative activities",
          "Promotes a sense of mental clarity and organization",
          "Provides fresh energy without feeling overwhelming",
          "Ideal for home offices, planning sessions, and important projects"
        ]
      },

      es: {
        name: "CLEARMIND - Focus Candle",

        description:
          "Diseñada para mantener la mente enfocada, despejada y productiva.",

        longDescription:
          "Clearmind combina la frescura cítrica de la bergamota con las notas herbales de romero y menta para crear una atmósfera estimulante y equilibrada.",

        notes: [
          "Rosemary Mint",
          "Bergamot",
        ],

        benefits: [
          "Favorece la concentración y el enfoque mental",
          "Ayuda a mantener la productividad durante el trabajo o actividades creativas",
          "Promueve una sensación de claridad mental y organización",
          "Aporta energía fresca sin resultar abrumadora",
          "Ideal para oficinas en casa, sesiones de planificación y proyectos importantes"
        ]
      }
    }
  },
  {
    id: 4,
    slug: "lumen",
    image: "/collection-4.png",
    gallery: [
            "/lumen-1.png",
            "/lumen-2.png",
            "/lumen-3.png",
            "/lumen-4.png",
            "/lumen-5.png"
        ],
    price: 29,
     translations: {
      fr: {
        name: "LUMEN - Study Candle",

        description:
          "Créée pour accompagner les séances d’étude, de lecture et d’apprentissage.",

        longDescription:
          "Lumen associe le citron frais au romarin et à la menthe pour favoriser l’attention et l’apprentissage",

        notes: [
          "Clean Lemon",
          "Rosemary Mint"
        ],

        benefits: [
          "Favorise la concentration pendant les longues séances d'étude",
          "Aide à maintenir l'attention et à réduire les distractions",
          "Crée un environnement stimulant pour l'apprentissage et la lecture",
          "Encourage la créativité et la mémorisation des informations",
          "Idéale pour les étudiants, les lecteurs et les personnes qui aiment apprendre en continu"
        ]
      },

      en: {
        name: "CLEARMIND - Focus Candle",

        description:
          "Created to accompany study, reading, and learning sessions.",

        longDescription:
          " Lumen combines fresh lemon with rosemary mint to support focus during long study sessions.",

        notes: [
          "Clean Lemon",
          "Rosemary Mint"
        ],

        benefits: [
          "Supports focus during extended study sessions",
          "Helps maintain attention and reduce distractions",
          "Creates an inspiring environment for learning and reading",
          "Encourages creativity and information retention",
          "Ideal for students, readers, and lifelong learners"
        ]
      },

      es: {
        name: "CLEARMIND - Focus Candle",

        description:
          "Creada para acompañar sesiones de estudio, lectura y aprendizaje.",

        longDescription:
          "Lumen combina la energía fresca del limón con las propiedades estimulantes del romero y la menta para ayudar a mantener la atención durante períodos prolongados de estudio.",

        notes: [
          "Clean Lemon",
          "Rosemary Mint"
        ],

        benefits: [
          "Favorece el enfoque durante sesiones de estudio prolongadas",
          "Ayuda a mantener la atención y reducir distracciones",
          "Crea un ambiente estimulante para el aprendizaje y la lectura",
          "Promueve la creatividad y la retención de información",
          "Ideal para estudiantes, lectores y personas que disfrutan aprender continuamente"
        ]
      }
    }
  },
];