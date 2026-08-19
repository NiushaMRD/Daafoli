"use client";

import Image from "next/image";
import Link from "next/link";

const brands = [

  {
    id: 2,
    name: "L'Oréal",
    image: "/n(151).jpg",
  },
  {
    id: 4,
    name: "NIVEA",
    image: "/n(9).jpg",

  },
  {
    id: 5,
    name: "The Ordinary",
   image: "/n(8).jpg",

  },
  {
    id: 7,
    name: "SHEGLAM",
    image: "/n(111).jpg",

  },
  {
    id: 8,
    name: "KIKO",
     image: "/n(117).jpg",

  },
 

    {
    id: 15,
    name: "La Roche-Posay",
    image: "/n(71).jpg",

  },

];

export default function Brands() {
  return (
    <section
      dir="rtl"
      className="bg-[#FCFAFB] py-16"
    >
      <div className="mx-auto max-w-7xl px-5">

        {/* Header */}

        <div className="mb-10 flex items-center justify-between">

          <div>
            <h2 className="text-3xl font-extrabold text-[#111111]">
              برندهای محبوب
            </h2>

            <p className="mt-2 text-[#444444]">
              بهترین برندهای آرایشی و مراقبتی دنیا
            </p>
          </div>

          <Link
            href="/brands"
            className="hidden rounded-full border border-[#D96C8A] px-6 py-3 font-medium text-[#D96C8A] transition duration-300 hover:bg-[#D96C8A] hover:text-white md:block"
          >
            مشاهده همه برندها
          </Link>

        </div>

        {/* Brands */}

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">

          {brands.map((brand) => (

            <Link
              key={brand.id}
              href={`/products?brand=${encodeURIComponent(brand.name)}`}
              className="group flex h-32 items-center justify-center rounded-3xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <Image
                src={brand.image}
                alt={`برند ${brand.name}`}
                width={130}
                height={70}
                className="max-h-14 w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0"
              />

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}