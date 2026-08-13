"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { useMemo, useState } from "react";

import {
  magazineArticles,
  magazineCategories,
} from "@/data/magazine";

export default function Magazine() {
  const [activeCategory, setActiveCategory] = useState("all");

  const featuredArticle = magazineArticles.find(
    (article) => article.featured
  );

  const filteredArticles = useMemo(() => {
    if (activeCategory === "all") {
      return magazineArticles.filter(
        (article) => !article.featured
      );
    }

    return magazineArticles.filter(
      (article) =>
        article.categorySlug === activeCategory
    );
  }, [activeCategory]);

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#FCFAFB]"
    >

      {/* Hero */}

      <section className="px-5 pb-16 pt-20 md:pt-28">
        <div className="mx-auto max-w-7xl text-center">

          <span className="text-sm font-bold text-[#D96C8A]">
            مجله دافولی
          </span>

          <h1 className="mt-5 text-5xl font-black leading-tight text-[#111111] md:text-7xl">
            چگونه داف باشیم؟!
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-[#444444] md:text-base">
            دنیای زیبایی، ترندهای جدید، ترفندهای میکاپ و هر چیزی
            که برای خوش‌استایل‌تر بودن لازم داری.
          </p>

        </div>
      </section>

      {/* Categories / Filter */}

      <section className="border-y border-[#EEE6E9] bg-white">

        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-5 py-5">

          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
              activeCategory === "all"
                ? "border-[#D96C8A] bg-[#D96C8A] text-white"
                : "border-[#E8DDE1] bg-white text-[#222222] hover:border-[#D96C8A] hover:text-[#D96C8A]"
            }`}
          >
            همه مطالب
          </button>

          {magazineCategories.map((category) => (

            <button
              key={category.id}
              type="button"
              onClick={() =>
                setActiveCategory(category.slug)
              }
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                activeCategory === category.slug
                  ? "border-[#D96C8A] bg-[#D96C8A] text-white"
                  : "border-[#E8DDE1] bg-white text-[#222222] hover:border-[#D96C8A] hover:text-[#D96C8A]"
              }`}
            >
              {category.title}
            </button>

          ))}

        </div>

      </section>

      {/* Featured */}

      {activeCategory === "all" && featuredArticle && (

        <section className="mx-auto max-w-7xl px-5 py-16">

          <div className="mb-7">

            <span className="text-sm font-bold text-[#D96C8A]">
              پیشنهاد ویژه
            </span>

            <h2 className="mt-2 text-2xl font-extrabold text-[#111111]">
              مقاله ویژه
            </h2>

          </div>

          <Link
            href={`/magazine/${featuredArticle.slug}`}
            className="group grid overflow-hidden rounded-4xl bg-white shadow-sm transition duration-300 hover:shadow-xl md:grid-cols-2"
          >

            <div className="relative min-h-75 md:min-h-107.5">

              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

            </div>

            <div className="flex flex-col justify-center p-7 md:p-12">

              <span className="text-sm font-bold text-[#D96C8A]">
                {featuredArticle.category}
              </span>

              <h3 className="mt-4 text-2xl font-black leading-10 text-[#111111] md:text-4xl">
                {featuredArticle.title}
              </h3>

              <p className="mt-5 leading-8 text-[#444444]">
                {featuredArticle.excerpt}
              </p>

              <div className="mt-7 flex items-center gap-4 text-sm text-[#555555]">

                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {featuredArticle.readTime}
                </span>

                <span>
                  {featuredArticle.date}
                </span>

              </div>

              <div className="mt-8 flex items-center gap-2 font-bold text-[#D96C8A]">
                مطالعه مقاله
                <ArrowLeft
                  size={18}
                  className="transition-transform group-hover:-translate-x-1"
                />
              </div>

            </div>

          </Link>

        </section>

      )}

      {/* Articles */}

      <section className="mx-auto max-w-7xl px-5 pb-20">

        <div className="mb-8">

          <span className="text-sm font-bold text-[#D96C8A]">
            {activeCategory === "all"
              ? "تازه‌ترین مطالب"
              : "مطالب این دسته"}
          </span>

          <h2 className="mt-2 text-2xl font-extrabold text-[#111111] md:text-3xl">
            {activeCategory === "all"
              ? "جدیدترین مطالب مجله"
              : magazineCategories.find(
                  (category) =>
                    category.slug === activeCategory
                )?.title}
          </h2>

        </div>

        {filteredArticles.length > 0 ? (

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredArticles.map((article) => (

              <Link
                key={article.id}
                href={`/magazine/${article.slug}`}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="relative aspect-16/10 overflow-hidden">

                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="p-6">

                  <span className="text-xs font-bold text-[#D96C8A]">
                    {article.category}
                  </span>

                  <h3 className="mt-3 text-lg font-extrabold leading-8 text-[#111111]">
                    {article.title}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-sm leading-7 text-[#444444]">
                    {article.excerpt}
                  </p>

                  <div className="mt-5 flex items-center justify-between text-xs text-[#555555]">

                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {article.readTime}
                    </span>

                    <span className="font-bold text-[#D96C8A]">
                      مطالعه مقاله ←
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        ) : (

          <div className="rounded-3xl bg-white py-20 text-center">

            <p className="font-bold text-[#111111]">
              هنوز مقاله‌ای در این دسته وجود ندارد.
            </p>

          </div>

        )}

      </section>

    </main>
  );
}