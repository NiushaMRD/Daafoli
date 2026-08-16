"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    title: "لوازم آرایشی",
    image: "/m22.jpg",
    href: "/products?category=لوازم آرایشی",
  },
  {
    id: 2,
    title: "مراقبت پوست و مو",
    image: "/s11.jpg",
    href: "/products?category=مراقبت پوست و مو",
  },
  {
    id: 3,
    title: "عطر و ادکلن",
    image: "/p11.jpg",
    href: "/products?category=عطر و ادکلن",
  },
  {
    id: 4,
    title: "اکسسوری",
    image: "/a1.jpg",
    href: "/products?category=اکسسوری",
  },
];

export default function Categories() {
  return (
    <section
      dir="rtl"
      className="py-16"
    >

      <div className="mx-auto max-w-7xl px-5">

        {/* Header */}

        <div className="mb-10 flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-extrabold text-[#D68F8F]">
              دسته‌بندی محصولات
            </h2>

            <p className="mt-2 text-[#DEAEAC]">
              هر چیزی که برای زیبایی نیاز دارید.
            </p>

          </div>

          <Link
            href="/products"
            className="hidden rounded-full border border-[#D96C8A] px-6 py-3 font-medium text-[#D96C8A] transition hover:bg-[#D96C8A] hover:text-white md:block"
          >
            مشاهده همه
          </Link>

        </div>

        {/* Categories */}

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">

          {categories.map((category) => (

            <Link
              key={category.id}
              href={category.href}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="relative h-52 overflow-hidden">

                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-5 text-center">

                <h3 className="text-lg font-bold text-[#1F1F1F]">
                  {category.title}
                </h3>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}