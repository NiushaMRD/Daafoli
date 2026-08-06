"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "زیبایی از اینجا شروع می‌شود",
    subtitle: "جدیدترین محصولات آرایشی و مراقبت پوست",
    button: "مشاهده محصولات",
    image: "/images/hero/hero1.jpg",
  },
  {
    id: 2,
    title: "تخفیف‌های ویژه دافولی",
    subtitle: "تا ۵۰٪ تخفیف روی برندهای منتخب",
    button: "خرید با تخفیف",
    image: "/images/hero/hero2.jpg",
  },
  {
    id: 3,
    title: "برندهای محبوب دنیا",
    subtitle: "ایرانی و خارجی، همه در یک جا",
    button: "مشاهده برندها",
    image: "/images/hero/hero3.jpg",
  },
];

export default function Hero() {
  return (
    <section className="w-full bg-[#FCFAFB]">
      <div className="mx-auto max-w-7xl px-5 py-8">

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          loop
          className="rounded-3xl"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative overflow-hidden rounded-3xl">

                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={1600}
                  height={700}
                  priority={slide.id === 1}
                  className="h-60 w-full object-cover sm:h-87.5 lg:h-130"
                />

                <div className="absolute inset-0 bg-linear-to-l from-black/60 via-black/25 to-transparent" />

                <div className="absolute inset-0 flex items-center">

                  <div className="mr-8 max-w-xl text-white md:mr-16">

                    <h1 className="mb-4 text-3xl font-extrabold leading-tight md:text-5xl">
                      {slide.title}
                    </h1>

                    <p className="mb-8 text-base md:text-xl">
                      {slide.subtitle}
                    </p>

                    <Link
                      href="/products"
                      className="inline-flex h-12 items-center rounded-full bg-[#D96C8A] px-8 font-semibold text-white transition-all duration-300 hover:bg-[#C75577]"
                    >
                      {slide.button}
                    </Link>

                  </div>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}