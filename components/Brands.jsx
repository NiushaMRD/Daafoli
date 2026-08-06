"use client";

import Image from "next/image";
import Link from "next/link";

const brands = [
  {
    id: 1,
    name: "Maybelline",
    image: "/images/brands/maybelline.png",
    href: "/brands/maybelline",
  },
  {
    id: 2,
    name: "L'Oréal",
    image: "/images/brands/loreal.png",
    href: "/brands/loreal",
  },
  {
    id: 3,
    name: "Catrice",
    image: "/images/brands/catrice.png",
    href: "/brands/catrice",
  },
  {
    id: 4,
    name: "Nivea",
    image: "/images/brands/nivea.png",
    href: "/brands/nivea",
  },
  {
    id: 5,
    name: "The Ordinary",
    image: "/images/brands/ordinary.png",
    href: "/brands/the-ordinary",
  },
  {
    id: 6,
    name: "Dior",
    image: "/images/brands/dior.png",
    href: "/brands/dior",
  },
   {
    id: 7,
    name: "Shiglam",
    image: "/images/brands/dior.png",
    href: "/brands/dior",
  },
   {
    id: 8,
    name: "Kiko",
    image: "/images/brands/dior.png",
    href: "/brands/dior",
  },
   {
    id: 9,
    name: "Gucci",
    image: "/images/brands/dior.png",
    href: "/brands/dior",
  },
  {
    id: 10,
    name: "Louis Vuitton",
    image: "/images/brands/dior.png",
    href: "/brands/dior",
  },
{
    id: 11,
    name: "Chanel",
    image: "/images/brands/dior.png",
    href: "/brands/dior",
  },
  {
    id: 12,
    name: "YSL",
    image: "/images/brands/dior.png",
    href: "/brands/dior",
  },
];

export default function Brands() {
  return (
    <section className="bg-[#FCFAFB] py-16">

      <div className="mx-auto max-w-7xl px-5">

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


        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">

          {brands.map((brand) => (

            <Link
              key={brand.id}
              href={brand.href}
              className="group flex h-32 items-center justify-center rounded-3xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <Image
                src={brand.image}
                alt={brand.name}
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