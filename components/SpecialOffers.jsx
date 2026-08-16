"use client";

import Image from "next/image";
import Link from "next/link";

const offers = [
  {
    id: 1,
    title: "تخفیف ویژه آرایشی",
    subtitle: "تا ۴۰٪ تخفیف روی محصولات منتخب",
    button: "خرید کنید",
    image: "/images/offers/makeup-offer.jpg",
    href: "/products",
  },
  {
    id: 2,
    title: "روتین مراقبت پوست",
    subtitle: "محصولات اصل برای زیبایی پوست شما",
    button: "مشاهده محصولات",
    image: "/images/offers/skincare-offer.jpg",
    href: "/products",
  },
];

export default function SpecialOffers() {
  return (
    <section className="py-16">

      <div className="mx-auto max-w-7xl px-5">

        <div className="mb-10">

          <h2 className="text-3xl font-extrabold text-[#dca0a0]">
            پیشنهادهای ویژه
          </h2>

          <p className="mt-2 text-[#b27373]">
            بهترین فرصت‌ها برای خرید محصولات محبوب
          </p>

        </div>


        <div className="grid gap-6 lg:grid-cols-2">

          {offers.map((offer) => (

            <div
              key={offer.id}
              className="group relative h-70 overflow-hidden rounded-3xl"
            >

              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />


              <div className="absolute inset-0 bg-linear-to-l from-black/60 to-black/20" />


              <div className="absolute inset-0 flex items-center">

                <div className="mr-8 text-white md:mr-12">

                  <h3 className="mb-3 text-2xl font-extrabold">
                    {offer.title}
                  </h3>


                  <p className="mb-6 text-sm md:text-base">
                    {offer.subtitle}
                  </p>


                  <Link
                    href={offer.href}
                    className="inline-flex rounded-full bg-[#D96C8A] px-7 py-3 font-semibold text-white transition duration-300 hover:bg-[#C75577]"
                  >
                    {offer.button}
                  </Link>

                </div>

              </div>


            </div>

          ))}

        </div>


      </div>

    </section>
  );
}