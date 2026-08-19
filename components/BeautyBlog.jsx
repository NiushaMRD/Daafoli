"use client";

import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "چطور روتین پوستی مناسب خودمان را پیدا کنیم؟",
    description:
      "راهنمای انتخاب محصولات مراقبت پوست بر اساس نوع پوست و نیازهای آن.",
    image: "/e(4).jpg",
    href: "/magazine",
  },
  {
    id: 2,
    title: "ترفندهای آرایش روزانه طبیعی و جذاب",
    description:
      "چند تکنیک ساده برای داشتن یک آرایش زیبا و ماندگار.",
    image: "/e(5).jpg",
    href: "/magazine",
  },
  {
    id: 3,
    title: "راهنمای انتخاب عطر مناسب شخصیت شما",
    description:
      "چطور رایحه‌ای انتخاب کنیم که با سبک ما هماهنگ باشد.",
    image: "/e(3).jpg",
    href: "/magazine",
  },
];

export default function BeautyBlog() {
  return (
    <section className="bg-[#FCFAFB] py-16">

      <div className="mx-auto max-w-7xl px-5">


        <div className="mb-10 flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-extrabold text-[#111111]">
              مجله زیبایی دافولی
            </h2>

            <p className="mt-2 text-[#444444]">
              آموزش‌ها و نکات زیبایی برای شما
            </p>

          </div>


          <Link
            href="/magazine"
            className="hidden rounded-full border border-[#D96C8A] px-6 py-3 font-medium text-[#D96C8A] transition duration-300 hover:bg-[#D96C8A] hover:text-white md:block"
          >
            مشاهده همه مقالات
          </Link>

        </div>


        <div className="grid gap-6 md:grid-cols-3">

          {articles.map((article) => (

            <Link
              key={article.id}
              href={article.href}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="relative h-56 overflow-hidden">

                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

              </div>


              <div className="p-6">

                <h3 className="mb-3 text-lg font-bold leading-8 text-[#111111] transition group-hover:text-[#D96C8A]">
                  {article.title}
                </h3>


                <p className="line-clamp-2 text-sm leading-7 text-[#444444]">
                  {article.description}
                </p>


              </div>

            </Link>

          ))}

        </div>


      </div>

    </section>
  );
}