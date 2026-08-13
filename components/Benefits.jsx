"use client";

import {
  ShieldCheck,
  Truck,
  Headphones,
  RefreshCcw,
} from "lucide-react";


const benefits = [
  {
    id: 1,
    title: "ضمانت اصالت کالا",
    text: "تمام محصولات از برندهای معتبر ارائه می‌شوند.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "ارسال سریع",
    text: "ارسال سفارش‌ها به سراسر کشور.",
    icon: Truck,
  },
  {
    id: 3,
    title: "پشتیبانی آنلاین",
    text: "همیشه همراه شما برای پاسخگویی.",
    icon: Headphones,
  },
  {
    id: 4,
    title: "تضمین رضایت",
    text: "خریدی امن و مطمئن.",
    icon: RefreshCcw,
  },
];


export default function Benefits() {
  return (
    <section className="py-16">

      <div className="mx-auto max-w-7xl px-5">

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">

          {benefits.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.id}
                className="rounded-3xl bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
              >

                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F7E9EE] text-[#D96C8A]">

                  <Icon size={28} />

                </div>


                <h3 className="mb-2 text-lg font-bold text-[#111111]">
                  {item.title}
                </h3>


                <p className="text-sm leading-7 text-[#444444]">
                  {item.text}
                </p>


              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}