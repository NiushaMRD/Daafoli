"use client";

import Link from "next/link";
import ProductCard from "./ProductCard";

const newProducts = [
  {
    id: 1,
    name: "سرم ویتامین C روشن‌کننده پوست",
    brand: "The Ordinary",
    slug: "vitamin-c-serum",
    image: "/vitamin-c-serum.jpg",
    price: "۱,۳۵۰,۰۰۰",
    rating: 4.8,
  },
  {
    id: 2,
    name: "پالت سایه چشم نود",
    brand: "Dior",
    slug: "nude-eyeshadow-palette",
    image: "/ah(4).jpg",
    price: "۲,۸۰۰,۰۰۰",
    rating: 4.9,
  },
  {
    id: 3,
    name: "شامپوترمیم‌کننده",
    brand: "L'Oréal",
    slug: "loreal-hair-mask",
    image: "/loreal-shampoo.jpeg",
    price: "۹۵۰,۰۰۰",
    rating: 4.7,
  },
  {
    id: 4,
    name: "اسپری بدن زنانه",
    brand: "Victoria's Secret",
    slug: "body-spray",
    image: "/e(13).jpg",
    price: "۷۵۰,۰۰۰",
    rating: 4.6,
  },
];


export default function NewProducts() {
  return (
    <section className="bg-[#FCFAFB] py-16">

      <div className="mx-auto max-w-7xl px-5">


        <div className="mb-10 flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-extrabold text-[#111111]">
              جدیدترین محصولات
            </h2>

            <p className="mt-2 text-[#444444]">
              تازه‌ترین محصولات اضافه شده به دافولی
            </p>

          </div>


          <Link
            href="/products?sort=newest"
            className="hidden rounded-full border border-[#D96C8A] px-6 py-3 font-medium text-[#D96C8A] transition duration-300 hover:bg-[#D96C8A] hover:text-white md:block"
          >
            مشاهده همه
          </Link>

        </div>


        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">

          {newProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>


      </div>

    </section>
  );
}