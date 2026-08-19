"use client";

import Link from "next/link";
import ProductCard from "./ProductCard";

const perfumeProducts = [
  {
    id: 1,
    name: "ادو پرفیوم زنانه لانکوم",
    brand: "Lancôme",
    slug: "lancome-la-vie-est-belle",
    image: "/e(10).jpg",
    price: "۴,۸۰۰,۰۰۰",
    rating: 4.9,
  },
  {
    id: 2,
    name: "عطر زنانه ساواج",
    brand: "Dior",
    slug: "dior-sauvage",
    image: "/e(11).jpg",
    price: "۵,۶۰۰,۰۰۰",
    discount: 10,
    oldPrice: "۶,۲۰۰,۰۰۰",
    rating: 4.8,
  },
  {
    id: 3,
    name: "بادی اسپلش زنانه",
    brand: "Victoria's Secret",
    slug: "victoria-secret-body-mist",
    image: "/e(13).jpg",
    price: "۱,۲۰۰,۰۰۰",
    rating: 4.7,
  },
  {
    id: 4,
    name: "اسپری بدن مردانه",
    brand: "Nivea",
    slug: "nivea-body-spray",
    image: "/images/products/perfume4.png",
    price: "۷۵۰,۰۰۰",
    rating: 4.6,
  },
];


const accessories = [
  {
    id: 5,
    name: "براش حرفه‌ای آرایشی",
    brand: "Real Techniques",
    slug: "makeup-brush",
    image: "/e(9).jpg",
    price: "۹۵۰,۰۰۰",
    rating: 4.8,
  },
  {
    id: 6,
    name: "آینه جیبی لوکس",
    brand: "Daafoli",
    slug: "luxury-mirror",
    image: "/e(12).jpg",
    price: "۴۵۰,۰۰۰",
    rating: 4.5,
  },
  {
    id: 7,
    name: "کیف لوازم آرایش",
    brand: "Beauty Case",
    slug: "beauty-case",
    image: "/e(8).jpg",
    price: "۸۰۰,۰۰۰",
    rating: 4.7,
  },
  {
    id: 8,
    name: "ست پد آرایشی",
    brand: "Premium",
    slug: "makeup-pads",
    image: "/e(6).jpg",
    price: "۳۵۰,۰۰۰",
    rating: 4.6,
  },
];


export default function PerfumeAccessorySection() {
  return (
    <>
      {/* PERFUME */}

      <section className="py-16">

        <div className="mx-auto max-w-7xl px-5">

          <div className="mb-10 flex items-center justify-between">

            <div>

              <h2 className="text-3xl font-extrabold text-[#ee4572]">
                عطر، ادکلن و اسپری
              </h2>

              <p className="mt-2 text-[#f0adad]">
                رایحه‌ای که شخصیت شما را کامل می‌کند
              </p>

            </div>


            <Link
              href="/products?category=عطر و ادکلن"
              className="hidden rounded-full border border-[#D96C8A] px-6 py-3 font-medium text-[#D96C8A] transition hover:bg-[#D96C8A] hover:text-white md:block"
            >
              مشاهده همه
            </Link>

          </div>


          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">

            {perfumeProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        </div>

      </section>


      {/* ACCESSORIES */}

      <section className="bg-[#FCFAFB] py-16">

        <div className="mx-auto max-w-7xl px-5">

          <div className="mb-10 flex items-center justify-between">

            <div>

              <h2 className="text-3xl font-extrabold text-[#111111]">
                اکسسوری زیبایی
              </h2>

              <p className="mt-2 text-[#444444]">
                ابزارهای کوچک برای زیبایی بزرگ‌تر
              </p>

            </div>


            <Link
              href="/products?category=اکسسوری"
              className="hidden rounded-full border border-[#D96C8A] px-6 py-3 font-medium text-[#D96C8A] transition hover:bg-[#D96C8A] hover:text-white md:block"
            >
              مشاهده همه
            </Link>

          </div>


          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">

            {accessories.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        </div>

      </section>

    </>
  );
}