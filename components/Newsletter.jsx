"use client";

import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-16">

      <div className="mx-auto max-w-7xl px-5">

        <div className="rounded-3xl bg-[#F7E9EE] px-6 py-12 text-center md:px-16">


          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#D96C8A]">

            <Mail size={28} />

          </div>


          <h2 className="mb-3 text-3xl font-extrabold text-[#111111]">
            همیشه باخبر باشید
          </h2>


          <p className="mx-auto mb-8 max-w-xl text-[#444444]">
            جدیدترین محصولات، تخفیف‌ها و اخبار زیبایی را دریافت کنید.
          </p>


          <div className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row">


            <input
              type="email"
              placeholder="ایمیل شما"
              className="h-12 flex-1 rounded-full border border-[#E8DDE2] bg-white px-6 text-right outline-none transition focus:border-[#D96C8A]"
            />


            <button
              className="h-12 rounded-full bg-[#D96C8A] px-8 font-semibold text-white transition duration-300 hover:bg-[#C75577]"
            >
              عضویت
            </button>


          </div>


        </div>

      </div>

    </section>
  );
}