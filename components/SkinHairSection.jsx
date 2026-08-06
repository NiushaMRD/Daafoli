"use client";

import Link from "next/link";
import ProductCard from "./ProductCard";

const skinHairProducts = [
  {
    id: 1,
    name: "کرم آبرسان هیالورونیک اسید",
    brand: "CeraVe",
    slug: "cerave-hyaluronic-moisturizer",
    image: "/images/products/skin1.png",
    price: "۱,۶۵۰,۰۰۰",
    rating: 4.8,
  },
  {
    id: 2,
    name: "ضد آفتاب بی‌رنگ پوست چرب",
    brand: "La Roche-Posay",
    slug: "la-roche-posay-sunscreen",
    image: "/images/products/skin2.png",
    price: "۱,۲۰۰,۰۰۰",
    discount: 15,
    oldPrice: "۱,۴۰۰,۰۰۰",
    rating: 4.9,
  },
  {
    id: 3,
    name: "شامپو ترمیم کننده مو",
    brand: "Kérastase",
    slug: "kerastase-shampoo",
    image: "/images/products/hair1.png",
    price: "۲,۳۰۰,۰۰۰",
    rating: 4.7,
  },
  {
    id: 4,
    name: "ماسک مو تغذیه کننده",
    brand: "L'Oréal",
    slug: "loreal-hair-mask",
    image: "/images/products/hair2.png",
    price: "۸۵۰,۰۰۰",
    rating: 4.6,
  },
];

export default function SkinHairSection() {
  return (
    <section className="py-16">

      <div className="mx-auto max-w-7xl px-5">


        <div className="mb-10 flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-extrabold text-[#111111]">
              مراقبت پوست و مو
            </h2>

            <p className="mt-2 text-[#444444]">
              روتین زیبایی خودت را با بهترین محصولات بساز
            </p>

          </div>


          <Link
            href="/products/skincare"
            className="hidden rounded-full border border-[#D96C8A] px-6 py-3 font-medium text-[#D96C8A] transition duration-300 hover:bg-[#D96C8A] hover:text-white md:block"
          >
            مشاهده همه
          </Link>

        </div>


        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">

          {skinHairProducts.map((product) => (

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