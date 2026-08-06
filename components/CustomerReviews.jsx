"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "سارا احمدی",
    text: "محصولات کاملاً اصل بودن و بسته‌بندی خیلی قشنگی داشت. تجربه خرید عالی بود.",
    rating: 5,
  },
  {
    id: 2,
    name: "نگار محمدی",
    text: "تنوع برندها خیلی خوبه و سایت هم خیلی راحت و سریع کار می‌کنه.",
    rating: 5,
  },
  {
    id: 3,
    name: "مریم کریمی",
    text: "کرم پوستی که خریدم واقعاً کیفیت بالایی داشت. دوباره خرید می‌کنم.",
    rating: 4,
  },
];

export default function CustomerReviews() {
  return (
    <section className="bg-[#FCFAFB] py-16">

      <div className="mx-auto max-w-7xl px-5">

        <div className="mb-10 text-center">

          <h2 className="text-3xl font-extrabold text-[#111111]">
            نظر مشتریان دافولی
          </h2>

          <p className="mt-3 text-[#444444]">
            تجربه خرید کاربران ما
          </p>

        </div>


        <div className="grid gap-6 md:grid-cols-3">

          {reviews.map((review) => (

            <div
              key={review.id}
              className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
            >

              <div className="mb-5 flex gap-1">

                {[...Array(5)].map((_, index) => (

                  <Star
                    key={index}
                    size={18}
                    className={
                      index < review.rating
                        ? "fill-[#F59E0B] text-[#F59E0B]"
                        : "text-[#DADADA]"
                    }
                  />

                ))}

              </div>


              <p className="mb-6 leading-8 text-[#2A2A2A]">
                {review.text}
              </p>


              <h3 className="font-bold text-[#111111]">
                {review.name}
              </h3>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}