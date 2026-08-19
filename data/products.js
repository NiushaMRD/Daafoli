const brands = [
  "Maybelline",
  "MAC",
  "Neutrogena",
  "Dior",
  "The Ordinary",
  "La Roche-Posay",
  "Gucci",
  "KIKO",
  "SHEGLAM",
  "Louis Vuitton",
  "Chanel",
  "YSL",
  "NIVEA",
  "Catrice",
  "L'Oréal",
];

const createProduct = ({
  id,
  slug,
  name,
  brand,
  category,
  price,
  image,
  rating = 4.7,
  discount = 0,
  stock = true,
  featured = false,
  isNew = false,
  bestseller = false,
}) => ({
  id,
  slug,
  name,
  brand,
  category,
  image: `/${image}`,
  price,
  oldPrice: discount
    ? Math.round(price / (1 - discount / 100))
    : null,
  discount,
  rating,
  stock,
  featured,
  isNew,
  bestseller,
  description: `${name} از برند ${brand} با کیفیت مناسب و طراحی جذاب برای استفاده روزمره.`,
  gallery: [
    `/${image}`,
  ],
});

export const products = [
  // =====================================================
  // محصولات قبلی — بدون تغییر
  // =====================================================

  {
    id: 1,
    slug: "mac-matte-lipstick",
    name: "رژ لب مات مک",
    brand: "MAC",
    category: "لوازم آرایشی",
    image: "/images/products/product1.png",
    price: 1450000,
    oldPrice: 1800000,
    discount: 20,
    rating: 4.8,
    stock: true,
    featured: true,
    isNew: false,
    bestseller: true,
    description:
      "رژ لب مات با ماندگاری بالا، بافت سبک و بدون ایجاد خشکی روی لب.",
    gallery: [
      "/images/products/product1.png",
      "/images/products/product1-2.png",
      "/images/products/product1-3.png",
    ],
  },

  {
    id: 2,
    slug: "neutrogena-moisturizer",
    name: "کرم آبرسان نوتروژینا",
    brand: "Neutrogena",
    category: "مراقبت پوست و مو",
    image: "/images/products/product2.png",
    price: 850000,
    oldPrice: null,
    discount: 0,
    rating: 4.6,
    stock: true,
    featured: false,
    isNew: true,
    bestseller: false,
    description:
      "کرم آبرسان مناسب انواع پوست با جذب سریع.",
    gallery: [
      "/images/products/product2.png",
      "/images/products/product2-2.png",
    ],
  },

  {
    id: 4,
    slug: "maybelline-mascara",
    name: "ریمل حجم دهنده میبلین",
    brand: "Maybelline",
    category: "لوازم آرایشی",
    image: "/images/products/product4.png",
    price: 950000,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    stock: false,
    featured: false,
    isNew: false,
    bestseller: true,
    description:
      "ریمل حجم‌دهنده با ماندگاری بالا و بدون ریزش.",
    gallery: [
      "/images/products/product4.png",
      "/images/products/product4-2.png",
    ],
  },

  {
    id: 5,
    slug: "vitamin-c-serum",
    name: "سرم ویتامین C",
    brand: "The Ordinary",
    category: "مراقبت پوست و مو",
    image: "/images/products/new1.png",
    price: 1350000,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    stock: true,
    featured: true,
    isNew: true,
    bestseller: false,
    description:
      "سرم روشن‌کننده پوست با ویتامین C خالص.",
    gallery: [
      "/images/products/new1.png",
      "/images/products/new1-2.png",
    ],
  },

  {
    id: 6,
    slug: "la-roche-posay-sunscreen",
    name: "ضد آفتاب پوست چرب",
    brand: "La Roche-Posay",
    category: "مراقبت پوست و مو",
    image: "/images/products/skin2.png",
    price: 1200000,
    oldPrice: 1400000,
    discount: 15,
    rating: 4.9,
    stock: true,
    featured: false,
    isNew: true,
    bestseller: true,
    description:
      "ضد آفتاب فاقد چربی با SPF50.",
    gallery: [
      "/images/products/skin2.png",
      "/images/products/skin2-2.png",
    ],
  },

  // =====================================================
  // لوازم آرایشی
  // 28 محصول جدید → مجموع = 30
  // =====================================================

  createProduct({
    id: 7,
    slug: "maybelline-fit-me-foundation",
    name: "کرم پودر Fit Me",
    brand: "Maybelline",
    category: "لوازم آرایشی",
    price: 1250000,
    image: "product7.png",
    discount: 10,
    bestseller: true,
  }),

  createProduct({
    id: 8,
    slug: "mac-studio-fix",
    name: "کرم پودر Studio Fix",
    brand: "MAC",
    category: "لوازم آرایشی",
    price: 3200000,
    image: "product8.png",
    rating: 4.9,
    discount: 15,
  }),

  createProduct({
    id: 9,
    slug: "sheglam-liquid-blush",
    name: "رژگونه مایع شیگلم",
    brand: "SHEGLAM",
    category: "لوازم آرایشی",
    price: 890000,
    image: "1sh(4).jpg",
    discount: 10,
    isNew: true,
  }),

  createProduct({
    id: 10,
    slug: "kiko-lip-gloss",
    name: "لیپ گلاس کیکو",
    brand: "KIKO",
    category: "لوازم آرایشی",
    price: 1100000,
    image: "1k(1).jpg",
  }),

  createProduct({
    id: 11,
    slug: "dior-lipstick",
    name: "رژ لب لوکس دیور",
    brand: "Dior",
    category: "لوازم آرایشی",
    price: 3500000,
    image: "1d(10).jpg",
    discount: 15,
    featured: true,
  }),

  createProduct({
    id: 12,
    slug: "chanel-lipstick",
    name: "رژ لب کلاسیک شنل",
    brand: "Chanel",
    category: "لوازم آرایشی",
    price: 3900000,
    image: "1c(10).jpg",
    rating: 4.9,
  }),

  createProduct({
    id: 13,
    slug: "ysl-lipstick",
    name: "رژ لب Rouge Pur Couture",
    brand: "YSL",
    category: "لوازم آرایشی",
    price: 4100000,
    image: "1y(2).jpg",
    discount: 10,
  }),

  createProduct({
    id: 14,
    slug: "loreal-mascara",
    name: "ریمل حجم‌دهنده لورآل",
    brand: "L'Oréal",
    category: "لوازم آرایشی",
    price: 980000,
    image: "product14.png",
  }),

  createProduct({
    id: 15,
    slug: "catrice-concealer",
    name: "کانسیلر Catrice",
    brand: "Catrice",
    category: "لوازم آرایشی",
    price: 720000,
    image: "product15.png",
    discount: 10,
  }),

  createProduct({
    id: 16,
    slug: "mac-eyeshadow",
    name: "پالت سایه چشم مک",
    brand: "MAC",
    category: "لوازم آرایشی",
    price: 2800000,
    image: "product16.png",
    featured: true,
  }),

  createProduct({
    id: 17,
    slug: "maybelline-concealer",
    name: "کانسیلر میبلین",
    brand: "Maybelline",
    category: "لوازم آرایشی",
    price: 790000,
    image: "product17.png",
  }),

  createProduct({
    id: 18,
    slug: "sheglam-highlighter",
    name: "هایلایتر شیگلم",
    brand: "SHEGLAM",
    category: "لوازم آرایشی",
    price: 850000,
    image: "1sh(5).jpg",
    isNew: true,
  }),

  createProduct({
    id: 19,
    slug: "kiko-eyeliner",
    name: "خط چشم کیکو",
    brand: "KIKO",
    category: "لوازم آرایشی",
    price: 760000,
    image: "1k(4).jpg",
  }),

  createProduct({
    id: 20,
    slug: "gucci-lipstick",
    name: "رژ لب Gucci Beauty",
    brand: "Gucci",
    category: "لوازم آرایشی",
    price: 4300000,
    image: "1g(1).jpg",
    rating: 4.9,
    featured: true,
  }),

  createProduct({
    id: 21,
    slug: "louis-vuitton-lipstick",
    name: "رژ لب لوئیس ویتون",
    brand: "Louis Vuitton",
    category: "لوازم آرایشی",
    price: 5200000,
    image: "1l(7).jpg",
    discount: 10,
  }),

  createProduct({
    id: 22,
    slug: "nivea-lip-balm",
    name: "بالم لب نیوآ",
    brand: "NIVEA",
    category: "لوازم آرایشی",
    price: 350000,
    image: "product22.png",
  }),

  createProduct({
    id: 23,
    slug: "loreal-foundation",
    name: "کرم پودر لورآل",
    brand: "L'Oréal",
    category: "لوازم آرایشی",
    price: 1150000,
    image: "product23.png",
    discount: 10,
  }),

  createProduct({
    id: 24,
    slug: "catrice-blush",
    name: "رژگونه Catrice",
    brand: "Catrice",
    category: "لوازم آرایشی",
    price: 680000,
    image: "product24.png",
  }),

  createProduct({
    id: 25,
    slug: "maybelline-eyeliner",
    name: "خط چشم میبلین",
    brand: "Maybelline",
    category: "لوازم آرایشی",
    price: 580000,
    image: "product25.png",
  }),

  createProduct({
    id: 26,
    slug: "mac-mascara",
    name: "ریمل مک",
    brand: "MAC",
    category: "لوازم آرایشی",
    price: 1900000,
    image: "product26.png",
    rating: 4.8,
  }),

  createProduct({
    id: 27,
    slug: "sheglam-powder",
    name: "پنکیک شیگلم",
    brand: "SHEGLAM",
    category: "لوازم آرایشی",
    price: 940000,
    image: "1sh(2).jpg",
  }),

  createProduct({
    id: 28,
    slug: "kiko-mascara",
    name: "ریمل کیکو",
    brand: "KIKO",
    category: "لوازم آرایشی",
    price: 920000,
    image: "1k(5).jpg",
  }),

  createProduct({
    id: 29,
    slug: "dior-eyeshadow",
    name: "پالت سایه دیور",
    brand: "Dior",
    category: "لوازم آرایشی",
    price: 4700000,
    image: "1d(11).jpg",
    rating: 4.9,
    discount: 10,
  }),

  createProduct({
    id: 30,
    slug: "chanel-blush",
    name: "رژگونه شنل",
    brand: "Chanel",
    category: "لوازم آرایشی",
    price: 3600000,
    image: "1c(1).jpg",
    rating: 4.9,
  }),

  // =====================================================
  // مراقبت پوست و مو
  // 27 محصول جدید → مجموع = 30
  // =====================================================

  createProduct({
    id: 31,
    slug: "ordinary-hyaluronic-acid",
    name: "سرم هیالورونیک اسید",
    brand: "The Ordinary",
    category: "مراقبت پوست و مو",
    price: 1200000,
    image: "product31.png",
    featured: true,
  }),

  createProduct({
    id: 32,
    slug: "neutrogena-cleanser",
    name: "ژل شستشوی صورت نوتروژینا",
    brand: "Neutrogena",
    category: "مراقبت پوست و مو",
    price: 780000,
    image: "product32.png",
  }),

  createProduct({
    id: 33,
    slug: "nivea-moisturizer",
    name: "کرم مرطوب‌کننده نیوآ",
    brand: "NIVEA",
    category: "مراقبت پوست و مو",
    price: 620000,
    image: "product33.png",
  }),

  createProduct({
    id: 34,
    slug: "loreal-hair-mask",
    name: "ماسک مو لورآل",
    brand: "L'Oréal",
    category: "مراقبت پوست و مو",
    price: 950000,
    image: "product34.png",
    discount: 10,
  }),

  createProduct({
    id: 35,
    slug: "la-roche-cleanser",
    name: "ژل شوینده پوست چرب",
    brand: "La Roche-Posay",
    category: "مراقبت پوست و مو",
    price: 1350000,
    image: "product35.png",
    rating: 4.9,
  }),

  createProduct({
    id: 36,
    slug: "ordinary-niacinamide",
    name: "سرم نیاسینامید",
    brand: "The Ordinary",
    category: "مراقبت پوست و مو",
    price: 1100000,
    image: "product36.png",
    bestseller: true,
  }),

  createProduct({
    id: 37,
    slug: "neutrogena-eye-cream",
    name: "کرم دور چشم نوتروژینا",
    brand: "Neutrogena",
    category: "مراقبت پوست و مو",
    price: 980000,
    image: "product37.png",
  }),

  createProduct({
    id: 38,
    slug: "nivea-sunscreen",
    name: "ضد آفتاب نیوآ",
    brand: "NIVEA",
    category: "مراقبت پوست و مو",
    price: 720000,
    image: "product38.png",
    discount: 10,
  }),

  createProduct({
    id: 39,
    slug: "loreal-shampoo",
    name: "شامپو ترمیم‌کننده لورآل",
    brand: "L'Oréal",
    category: "مراقبت پوست و مو",
    price: 890000,
    image: "product39.png",
  }),

  createProduct({
    id: 40,
    slug: "la-roche-moisturizer",
    name: "کرم مرطوب‌کننده La Roche-Posay",
    brand: "La Roche-Posay",
    category: "مراقبت پوست و مو",
    price: 1450000,
    image: "product40.png",
    rating: 4.8,
  }),

  createProduct({
    id: 41,
    slug: "ordinary-peeling",
    name: "محلول لایه‌بردار The Ordinary",
    brand: "The Ordinary",
    category: "مراقبت پوست و مو",
    price: 1250000,
    image: "product41.png",
    discount: 15,
  }),

  createProduct({
    id: 42,
    slug: "neutrogena-body-lotion",
    name: "لوسیون بدن نوتروژینا",
    brand: "Neutrogena",
    category: "مراقبت پوست و مو",
    price: 850000,
    image: "product42.png",
  }),

  createProduct({
    id: 43,
    slug: "nivea-body-lotion",
    name: "لوسیون بدن نیوآ",
    brand: "NIVEA",
    category: "مراقبت پوست و مو",
    price: 580000,
    image: "product43.png",
  }),

  createProduct({
    id: 44,
    slug: "loreal-conditioner",
    name: "نرم‌کننده مو لورآل",
    brand: "L'Oréal",
    category: "مراقبت پوست و مو",
    price: 780000,
    image: "product44.png",
  }),

  createProduct({
    id: 45,
    slug: "la-roche-serum",
    name: "سرم ضد لک لاروش پوزای",
    brand: "La Roche-Posay",
    category: "مراقبت پوست و مو",
    price: 1850000,
    image: "product45.png",
    rating: 4.9,
    featured: true,
  }),

  createProduct({
    id: 46,
    slug: "ordinary-caffeine",
    name: "سرم کافئین دور چشم",
    brand: "The Ordinary",
    category: "مراقبت پوست و مو",
    price: 1050000,
    image: "product46.png",
  }),

  createProduct({
    id: 47,
    slug: "neutrogena-hand-cream",
    name: "کرم دست نوتروژینا",
    brand: "Neutrogena",
    category: "مراقبت پوست و مو",
    price: 450000,
    image: "product47.png",
  }),

  createProduct({
    id: 48,
    slug: "nivea-face-wash",
    name: "فوم شستشوی صورت نیوآ",
    brand: "NIVEA",
    category: "مراقبت پوست و مو",
    price: 490000,
    image: "product48.png",
  }),

  createProduct({
    id: 49,
    slug: "loreal-hair-serum",
    name: "سرم مو لورآل",
    brand: "L'Oréal",
    category: "مراقبت پوست و مو",
    price: 1100000,
    image: "product49.png",
    discount: 10,
  }),

  createProduct({
    id: 50,
    slug: "la-roche-toner",
    name: "تونر پوست حساس",
    brand: "La Roche-Posay",
    category: "مراقبت پوست و مو",
    price: 1250000,
    image: "product50.png",
  }),

  createProduct({
    id: 51,
    slug: "ordinary-moisturizer",
    name: "کرم مرطوب‌کننده The Ordinary",
    brand: "The Ordinary",
    category: "مراقبت پوست و مو",
    price: 980000,
    image: "product51.png",
  }),

  createProduct({
    id: 52,
    slug: "neutrogena-night-cream",
    name: "کرم شب نوتروژینا",
    brand: "Neutrogena",
    category: "مراقبت پوست و مو",
    price: 1150000,
    image: "product52.png",
  }),

  createProduct({
    id: 53,
    slug: "nivea-night-cream",
    name: "کرم شب نیوآ",
    brand: "NIVEA",
    category: "مراقبت پوست و مو",
    price: 650000,
    image: "product53.png",
  }),

  createProduct({
    id: 54,
    slug: "loreal-hair-oil",
    name: "روغن مو لورآل",
    brand: "L'Oréal",
    category: "مراقبت پوست و مو",
    price: 920000,
    image: "product54.png",
  }),

  createProduct({
    id: 55,
    slug: "la-roche-mask",
    name: "ماسک آبرسان لاروش پوزای",
    brand: "La Roche-Posay",
    category: "مراقبت پوست و مو",
    price: 1300000,
    image: "product55.png",
    discount: 10,
  }),

  createProduct({
    id: 56,
    slug: "ordinary-squalane",
    name: "روغن اسکوالان",
    brand: "The Ordinary",
    category: "مراقبت پوست و مو",
    price: 1150000,
    image: "product56.png",
  }),

  createProduct({
    id: 57,
    slug: "neutrogena-gel-cream",
    name: "ژل کرم آبرسان نوتروژینا",
    brand: "Neutrogena",
    category: "مراقبت پوست و مو",
    price: 990000,
    image: "product57.png",
  }),

  // =====================================================
  // عطر و ادکلن
  // 29 محصول جدید → مجموع = 30
  // =====================================================

  createProduct({
    id: 58,
    slug: "dior-sauvage",
    name: "عطر Dior Sauvage",
    brand: "Dior",
    category: "عطر و ادکلن",
    price: 5800000,
    image: "1d(7).jpg",
    rating: 4.9,
    bestseller: true,
  }),

  createProduct({
    id: 59,
    slug: "chanel-chance",
    name: "عطر Chanel Chance",
    brand: "Chanel",
    category: "عطر و ادکلن",
    price: 6200000,
    image: "1c(8).jpg",
    rating: 4.9,
  }),

  createProduct({
    id: 60,
    slug: "ysl-libre",
    name: "عطر YSL Libre",
    brand: "YSL",
    category: "عطر و ادکلن",
    price: 5400000,
    image: "1y(9).jpg",
    discount: 10,
  }),

  createProduct({
    id: 61,
    slug: "gucci-bloom",
    name: "عطر Gucci Bloom",
    brand: "Gucci",
    category: "عطر و ادکلن",
    price: 5100000,
    image: "1g(8).jpg",
  }),

  createProduct({
    id: 62,
    slug: "louis-vuitton-imagination",
    name: "عطر Louis Vuitton Imagination",
    brand: "Louis Vuitton",
    category: "عطر و ادکلن",
    price: 8900000,
    image: "1l(1).jpg",
    rating: 4.9,
    featured: true,
  }),

  createProduct({
    id: 63,
    slug: "dior-miss-dior",
    name: "عطر Miss Dior",
    brand: "Dior",
    category: "عطر و ادکلن",
    price: 6100000,
    image: "1d(8).jpg",
  }),

  createProduct({
    id: 64,
    slug: "chanel-coco-mademoiselle",
    name: "عطر Coco Mademoiselle",
    brand: "Chanel",
    category: "عطر و ادکلن",
    price: 6500000,
    image: "1c(9).jpg",
    rating: 4.9,
    bestseller: true,
  }),

  createProduct({
    id: 65,
    slug: "ysl-black-opium",
    name: "عطر YSL Black Opium",
    brand: "YSL",
    category: "عطر و ادکلن",
    price: 5600000,
    image: "1y(7).jpg",
  }),

  createProduct({
    id: 66,
    slug: "gucci-flora",
    name: "عطر Gucci Flora",
    brand: "Gucci",
    category: "عطر و ادکلن",
    price: 4800000,
    image: "1g(9).jpg",
    discount: 15,
  }),

  createProduct({
    id: 67,
    slug: "louis-vuitton-rose",
    name: "عطر Louis Vuitton Rose",
    brand: "Louis Vuitton",
    category: "عطر و ادکلن",
    price: 8200000,
    image: "1l(5).jpg",
  }),

  createProduct({
    id: 68,
    slug: "dior-homme",
    name: "عطر Dior Homme",
    brand: "Dior",
    category: "عطر و ادکلن",
    price: 5900000,
    image: "1d(9).jpg",
  }),

  createProduct({
    id: 69,
    slug: "chanel-bleu",
    name: "عطر Bleu de Chanel",
    brand: "Chanel",
    category: "عطر و ادکلن",
    price: 6300000,
    image: "1c(2).jpg",
  }),

  createProduct({
    id: 70,
    slug: "ysl-y",
    name: "عطر YSL Y",
    brand: "YSL",
    category: "عطر و ادکلن",
    price: 5300000,
    image: "1y(8).jpg",
  }),

  createProduct({
    id: 71,
    slug: "gucci-guilty",
    name: "عطر Gucci Guilty",
    brand: "Gucci",
    category: "عطر و ادکلن",
    price: 5000000,
    image: "1g(10).jpg",
  }),

  createProduct({
    id: 72,
    slug: "dior-addict",
    name: "عطر Dior Addict",
    brand: "Dior",
    category: "عطر و ادکلن",
    price: 5700000,
    image: "1d(4).jpg",
    discount: 10,
  }),

  createProduct({
    id: 73,
    slug: "chanel-n5",
    name: "عطر Chanel N°5",
    brand: "Chanel",
    category: "عطر و ادکلن",
    price: 6800000,
    image: "1c(3).jpg",
    rating: 4.9,
  }),

  createProduct({
    id: 74,
    slug: "ysl-mon-paris",
    name: "عطر YSL Mon Paris",
    brand: "YSL",
    category: "عطر و ادکلن",
    price: 5200000,
    image: "1y(1).jpg",
  }),

  createProduct({
    id: 75,
    slug: "gucci-memoire",
    name: "عطر Gucci Memoire",
    brand: "Gucci",
    category: "عطر و ادکلن",
    price: 4700000,
    image: "1g(2).jpg",
  }),

  createProduct({
    id: 76,
    slug: "louis-vuitton-ombre",
    name: "عطر Louis Vuitton Ombre",
    brand: "Louis Vuitton",
    category: "عطر و ادکلن",
    price: 8500000,
    image: "1k(2).jpg",
  }),

  createProduct({
    id: 77,
    slug: "dior-jadore",
    name: "عطر Dior J'adore",
    brand: "Dior",
    category: "عطر و ادکلن",
    price: 6000000,
    image: "1d(3).jpg",
    bestseller: true,
  }),

  createProduct({
    id: 78,
    slug: "chanel-allure",
    name: "عطر Chanel Allure",
    brand: "Chanel",
    category: "عطر و ادکلن",
    price: 5900000,
    image: "1c(4).jpg",
  }),

  createProduct({
    id: 79,
    slug: "ysl-kouros",
    name: "عطر YSL Kouros",
    brand: "YSL",
    category: "عطر و ادکلن",
    price: 4800000,
    image: "1y(3).jpg",
  }),

  createProduct({
    id: 80,
    slug: "gucci-premiere",
    name: "عطر Gucci Premiere",
    brand: "Gucci",
    category: "عطر و ادکلن",
    price: 4900000,
    image: "1g(3).jpg",
  }),

  createProduct({
    id: 81,
    slug: "dior-hypnotic",
    name: "عطر Dior Hypnotic Poison",
    brand: "Dior",
    category: "عطر و ادکلن",
    price: 5500000,
    image: "1d(5).jpg",
  }),

  createProduct({
    id: 82,
    slug: "chanel-coco",
    name: "عطر Chanel Coco",
    brand: "Chanel",
    category: "عطر و ادکلن",
    price: 6100000,
    image: "1c(5).jpg",
  }),

  createProduct({
    id: 83,
    slug: "ysl-lhomme",
    name: "عطر YSL L'Homme",
    brand: "YSL",
    category: "عطر و ادکلن",
    price: 5100000,
    image: "1y(5).jpg",
  }),

  createProduct({
    id: 84,
    slug: "gucci-rush",
    name: "عطر Gucci Rush",
    brand: "Gucci",
    category: "عطر و ادکلن",
    price: 4600000,
    image: "1g(6).jpg",
  }),

  createProduct({
    id: 85,
    slug: "louis-vuitton-afternoon",
    name: "عطر Louis Vuitton Afternoon Swim",
    brand: "Louis Vuitton",
    category: "عطر و ادکلن",
    price: 9000000,
    image: "1l(6).jpg",
    rating: 4.9,
  }),

  createProduct({
    id: 86,
    slug: "dior-fahrenheit",
    name: "عطر Dior Fahrenheit",
    brand: "Dior",
    category: "عطر و ادکلن",
    price: 5400000,
    image: "1d(6).jpg",
  }),

  createProduct({
    id: 87,
    slug: "chanel-gabrielle",
    name: "عطر Chanel Gabrielle",
    brand: "Chanel",
    category: "عطر و ادکلن",
    price: 6300000,
    image: "1c(6).jpg",
  }),

  // =====================================================
  // اکسسوری
  // 30 محصول
  // =====================================================

  createProduct({
    id: 88,
    slug: "gucci-sunglasses",
    name: "عینک آفتابی گوچی",
    brand: "Gucci",
    category: "اکسسوری",
    price: 4200000,
    image: "1g(7).jpg",
    featured: true,
  }),

  createProduct({
    id: 89,
    slug: "chanel-bracelet",
    name: "دستبند ظریف شنل",
    brand: "Chanel",
    category: "اکسسوری",
    price: 2800000,
    image: "1c(7).jpg",
  }),

  createProduct({
    id: 90,
    slug: "dior-earrings",
    name: "گوشواره دیور",
    brand: "Dior",
    category: "اکسسوری",
    price: 3200000,
    image: "1d(2).jpg",
    rating: 4.9,
  }),

  createProduct({
    id: 91,
    slug: "kiko-hair-clip",
    name: "سایه چشم  کیکو",
    brand: "KIKO",
    category: "لوازم آرایشی",
    price: 480000,
    image: "product91.png",
  }),

  createProduct({
    id: 92,
    slug: "sheglam-scarf",
    name: " رژ لب شیگلم",
    brand: "SHEGLAM",
   category: "لوازم آرایشی",
    price: 650000,
    image: "product92.png",
  }),

  createProduct({
    id: 93,
    slug: "louis-vuitton-bracelet",
    name: "دستبند Louis Vuitton",
    brand: "Louis Vuitton",
    category: "اکسسوری",
    price: 3500000,
    image: "product93.png",
  }),

  createProduct({
    id: 94,
    slug: "ysl-necklace",
    name: "گردنبند YSL",
    brand: "YSL",
    category: "اکسسوری",
    price: 2900000,
    image: "product94.png",
  }),

  createProduct({
    id: 95,
    slug: "nivea-hair-tie",
    name: "کش موی فانتزی نیوآ",
    brand: "NIVEA",
    category: "اکسسوری",
    price: 280000,
    image: "product95.png",
  }),

  createProduct({
    id: 96,
    slug: "catrice-hair-clip",
    name: "گیره مو Catrice",
    brand: "Catrice",
    category: "اکسسوری",
    price: 350000,
    image: "product96.png",
  }),

  createProduct({
    id: 97,
    slug: "loreal-headband",
    name: "هدبند مو لورآل",
    brand: "L'Oréal",
    category: "اکسسوری",
    price: 420000,
    image: "product97.png",
  }),

  createProduct({
    id: 98,
    slug: "mac-makeup-bag",
    name: "کیف لوازم آرایش مک",
    brand: "MAC",
    category: "اکسسوری",
    price: 1250000,
    image: "product98.png",
  }),

  createProduct({
    id: 99,
    slug: "maybelline-makeup-bag",
    name: "کیف آرایشی میبلین",
    brand: "Maybelline",
    category: "اکسسوری",
    price: 850000,
    image: "product99.png",
  }),

  createProduct({
    id: 100,
    slug: "neutrogena-cosmetic-bag",
    name: "کیف کوچک نوتروژینا",
    brand: "Neutrogena",
    category: "اکسسوری",
    price: 780000,
    image: "product100.png",
  }),

  createProduct({
    id: 101,
    slug: "ordinary-pouch",
    name: "پوش آرایشی The Ordinary",
    brand: "The Ordinary",
    category: "اکسسوری",
    price: 720000,
    image: "product101.png",
  }),

  createProduct({
    id: 102,
    slug: "la-roche-headband",
    name: "هدبند مراقبت پوست",
    brand: "La Roche-Posay",
    category: "اکسسوری",
    price: 390000,
    image: "product102.png",
  }),

  createProduct({
    id: 103,
    slug: "dior-ring",
    name: "انگشتر ظریف دیور",
    brand: "Dior",
    category: "اکسسوری",
    price: 2700000,
    image: "product103.png",
  }),

  createProduct({
    id: 104,
    slug: "gucci-ring",
    name: "انگشتر گوچی",
    brand: "Gucci",
    category: "اکسسوری",
    price: 3100000,
    image: "product104.png",
  }),

  createProduct({
    id: 105,
    slug: "kiko-bracelet",
    name: " رژ گونه کیکو",
    brand: "KIKO",
   category: "لوازم آرایشی",
    price: 580000,
    image: "product105.png",
  }),

  createProduct({
    id: 106,
    slug: "sheglam-earrings",
    name: "پرایمر شیگلم",
    brand: "SHEGLAM",
    category: "لوازم آرایشی",
    price: 620000,
    image: "product106.png",
  }),

  createProduct({
    id: 107,
    slug: "chanel-ring",
    name: "انگشتر شنل",
    brand: "Chanel",
    category: "اکسسوری",
    price: 3000000,
    image: "product107.png",
    rating: 4.9,
  }),

  createProduct({
    id: 108,
    slug: "ysl-bracelet",
    name: "دستبند YSL",
    brand: "YSL",
    category: "اکسسوری",
    price: 2700000,
    image: "product108.png",
  }),

  createProduct({
    id: 109,
    slug: "louis-vuitton-scarf",
    name: "اسکارف لوکس Louis Vuitton",
    brand: "Louis Vuitton",
    category: "اکسسوری",
    price: 3900000,
    image: "product109.png",
  }),

  createProduct({
    id: 110,
    slug: "nivea-scarf",
    name: "اسکارف ساده نیوآ",
    brand: "NIVEA",
    category: "اکسسوری",
    price: 550000,
    image: "product110.png",
  }),

  createProduct({
    id: 111,
    slug: "catrice-earrings",
    name: "گوشواره Catrice",
    brand: "Catrice",
    category: "اکسسوری",
    price: 520000,
    image: "product111.png",
  }),

  createProduct({
    id: 112,
    slug: "loreal-bracelet",
    name: "دستبند لورآل",
    brand: "L'Oréal",
    category: "اکسسوری",
    price: 480000,
    image: "product112.png",
  }),

  createProduct({
    id: 113,
    slug: "mac-hair-clip",
    name: "کلیپس مو مک",
    brand: "MAC",
    category: "اکسسوری",
    price: 420000,
    image: "product113.png",
  }),

  createProduct({
    id: 114,
    slug: "maybelline-hair-tie",
    name: "کش مو میبلین",
    brand: "Maybelline",
    category: "اکسسوری",
    price: 290000,
    image: "product114.png",
  }),

  createProduct({
    id: 115,
    slug: "neutrogena-headband",
    name: "هدبند نوتروژینا",
    brand: "Neutrogena",
    category: "اکسسوری",
    price: 350000,
    image: "product115.png",
  }),

  createProduct({
    id: 116,
    slug: "ordinary-bracelet",
    name: "دستبند The Ordinary",
    brand: "The Ordinary",
    category: "اکسسوری",
    price: 520000,
    image: "product116.png",
  }),

  createProduct({
    id: 117,
    slug: "la-roche-pouch",
    name: "کیف کوچک La Roche-Posay",
    brand: "La Roche-Posay",
    category: "اکسسوری",
    price: 690000,
    image: "product117.png",
  }),

  createProduct({
    id: 118,
    slug: "dior-scarf",
    name: "اسکارف ابریشمی دیور",
    brand: "Dior",
    category: "اکسسوری",
    price: 3600000,
    image: "product118.png",
    featured: true,
  }),

  createProduct({
    id: 119,
    slug: "gucci-hair-clip",
    name: "کلیپس مو گوچی",
    brand: "Gucci",
    category: "اکسسوری",
    price: 1450000,
    image: "product119.png",
  }),

  createProduct({
    id: 120,
    slug: "chanel-sunglasses",
    name: "عینک آفتابی شنل",
    brand: "Chanel",
    category: "اکسسوری",
    price: 4500000,
    image: "product120.png",
    rating: 4.9,
    bestseller: true,
  }),
];