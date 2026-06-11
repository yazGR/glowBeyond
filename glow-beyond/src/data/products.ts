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
        slug: "vanilla-dreams",

        image: "/collection-1.png",

        gallery: [
            "/vanilla-1.png",
            "/vanilla-2.png",
            "/vanilla-3.png"
        ],

        price: 28,

        translations: {
            fr: {
                name: "Vanilla Dreams",

                description:
                    "Vanille chaleureuse aux notes crémeuses.",

                longDescription:
                    "Une fragrance douce et enveloppante qui transforme chaque espace en un refuge chaleureux et réconfortant.",

                notes: [
                    "Vanille",
                    "Crème",
                    "Sucre chaud"
                ],

                benefits: [
                    "Atmosphère chaleureuse",
                    "Moments de détente",
                    "Ambiance réconfortante"
                ]
            },

            en: {
                name: "Vanilla Dreams",

                description:
                    "Warm vanilla with creamy notes.",

                longDescription:
                    "A soft and comforting fragrance designed to transform your space into a cozy retreat.",

                notes: [
                    "Vanilla",
                    "Cream",
                    "Warm Sugar"
                ],

                benefits: [
                    "Cozy atmosphere",
                    "Relaxing moments",
                    "Comforting fragrance"
                ]
            },

            es: {
                name: "Sueños de Vainilla",

                description:
                    "Vainilla cálida con notas cremosas.",

                longDescription:
                    "Una fragancia suave y reconfortante diseñada para transformar cualquier espacio en un refugio acogedor.",

                notes: [
                    "Vainilla",
                    "Crema",
                    "Azúcar caliente"
                ],

                benefits: [
                    "Ambiente acogedor",
                    "Momentos de relajación",
                    "Fragancia reconfortante"
                ]
            }
        }
    },
  {
    id: 2,
    slug: "lavender-calm",
    image: "/collection-2.png",
    gallery: [
            "/lavender-1.png",
            "/lavender-2.png",
            "/lavender-3.png"
        ],
    price: 30,
    translations: {
      fr: {
        name: "Lavender Calm",

        description:
          "Lavande relaxante pour des soirées paisibles.",

        longDescription:
          "Une fragrance apaisante qui favorise la détente et crée une atmosphère sereine après une longue journée.",

        notes: [
          "Lavande",
          "Herbes douces",
          "Fleurs fraîches"
        ],

        benefits: [
          "Réduit le stress",
          "Favorise la relaxation",
          "Crée une ambiance paisible"
        ]
      },

      en: {
        name: "Lavender Calm",

        description:
          "Relaxing lavender crafted for peaceful evenings.",

        longDescription:
          "A soothing fragrance designed to promote relaxation and create a peaceful atmosphere after a long day.",

        notes: [
          "Lavender",
          "Soft Herbs",
          "Fresh Florals"
        ],

        benefits: [
          "Reduces stress",
          "Promotes relaxation",
          "Creates a peaceful atmosphere"
        ]
      },

      es: {
        name: "Calma de Lavanda",

        description:
          "Lavanda relajante creada para noches tranquilas.",

        longDescription:
          "Una fragancia calmante diseñada para promover la relajación y crear una atmósfera tranquila después de un día largo.",

        notes: [
          "Lavanda",
          "Hierbas suaves",
          "Flores frescas"
        ],

        benefits: [
          "Reduce el estrés",
          "Favorece la relajación",
          "Crea un ambiente tranquilo"
        ]
      }
    }
  },
  {
    id: 3,
    slug: "citrus-glow",
    image: "/collection-3.png",
    gallery: [
            "/citrus-1.png",
            "/citrus-2.png",
            "/citrus-3.png"
        ],
    price: 29,
     translations: {
      fr: {
        name: "Citrus Glow",

        description:
          "Agrumes lumineux aux notes chaleureuses.",

        longDescription:
          "Une fragrance énergisante qui apporte fraîcheur, vitalité et luminosité à votre espace.",

        notes: [
          "Orange",
          "Citron",
          "Agrumes frais"
        ],

        benefits: [
          "Énergise l'espace",
          "Favorise la concentration",
          "Crée une ambiance lumineuse"
        ]
      },

      en: {
        name: "Citrus Glow",

        description:
          "Bright citrus balanced with warm undertones.",

        longDescription:
          "An uplifting fragrance that brings freshness, energy and brightness into your everyday environment.",

        notes: [
          "Orange",
          "Lemon",
          "Fresh Citrus"
        ],

        benefits: [
          "Energizes the room",
          "Improves focus",
          "Creates a bright atmosphere"
        ]
      },

      es: {
        name: "Brillo Cítrico",

        description:
          "Cítricos brillantes equilibrados con notas cálidas.",

        longDescription:
          "Una fragancia revitalizante que aporta frescura, energía y luminosidad a cualquier espacio.",

        notes: [
          "Naranja",
          "Limón",
          "Cítricos frescos"
        ],

        benefits: [
          "Energiza el ambiente",
          "Favorece la concentración",
          "Crea una atmósfera luminosa"
        ]
      }
    }
  },
];