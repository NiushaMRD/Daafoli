"use client";

import Link from "next/link";
import ProductCard from "./ProductCard";


const products = [
  {
    id: 1,
    name: "رژ لب مات مک",
    brand: "MAC",
    slug: "mac-matte-lipstick",
    image: "/images/products/product1.png",
    price: "۱,۴۵۰,۰۰۰",
    oldPrice: "۱,۸۰۰,۰۰۰",
    discount: 20,
    rating: 4.8,
  },
  {
    id: 2,
    name: "کرم آبرسان نوتروژینا",
    brand: "Neutrogena",
    slug: "neutrogena-moisturizer",
    image: "/images/products/product2.png",
    price: "۸۵۰,۰۰۰",
    rating: 4.6,
  },
  {
    id: 3,
    name: "عطر زنانه دیور",
    brand: "Dior",
    slug: "dior-perfume",
    image: "/ah(2).jpg",
    price: "۵,۲۰۰,۰۰۰",
    discount: 15,
    rating: 4.9,
  },
  {
    id: 4,
    name: "ریمل حجم دهنده",
    brand: "Maybelline",
    slug: "maybelline-mascara",
    image: "/images/products/product4.png",
    price: "۹۵۰,۰۰۰",
    rating: 4.7,
  },
];


export default function ProductsSection() {
  return (
    <section className="py-16">

      <div className="mx-auto max-w-7xl px-5">


        <div className="mb-10 flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-extrabold text-[#e669c7]">
              پرفروش‌ترین محصولات
            </h2>

            <p className="mt-2 text-[#eda9db]">
              محبوب‌ترین انتخاب‌های کاربران دافولی
            </p>

          </div>


          <Link
            href="/products"
            className="hidden rounded-full border border-[#D96C8A] px-6 py-3 font-medium text-[#D96C8A] transition hover:bg-[#D96C8A] hover:text-white md:block"
          >
            مشاهده همه
          </Link>


        </div>


        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">

          {products.map((product) => (

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