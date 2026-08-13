"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Gem,
  Heart,
  Sparkles,
  ShoppingBag,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "ترند بودن",
    text: "همیشه دنبال چیزهای تازه، جذاب و ترند دنیای زیبایی هستیم.",
  },
  {
    icon: Gem,
    title: "جذابیت",
    text: "زیبایی برای ما فقط ظاهر نیست؛ بخشی از استایل و اعتمادبه‌نفس توست.",
  },
  {
    icon: TrendingUp,
    title: "جسارت",
    text: "دافولی برای دخترهایی است که از متفاوت بودن نمی‌ترسند.",
  },
  {
    icon: Heart,
    title: "خودت باش",
    text: "قرار نیست شبیه کسی باشی؛ استایل زیبایی خودت را پیدا کن.",
  },
];

const features = [
  {
    icon: ShoppingBag,
    title: "تنوع انتخاب",
    text: "از آرایش و مراقبت پوست و مو تا عطر و اکسسوری؛ همه‌چیز برای ساختن استایل خودت.",
  },
  {
    icon: TrendingUp,
    title: "انتخاب‌های ترند",
    text: "محصولات و سبک‌هایی که با دنیای امروز زیبایی و سلیقه نسل جدید هماهنگ هستند.",
  },
  {
    icon: ShieldCheck,
    title: "خرید با خیال راحت",
    text: "اطلاعات محصولات را شفاف ارائه می‌کنیم تا انتخاب آگاهانه‌تری داشته باشی.",
  },
  {
    icon: Sparkles,
    title: "تجربه‌ای متفاوت",
    text: "دافولی فقط یک فروشگاه نیست؛ قرار است خرید کردن هم بخشی از حس خوب زیبایی باشد.",
  },
];

export default function About() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#FCFAFB] text-[#111111]"
    >

      {/* Hero */}

      <section className="relative overflow-hidden px-5 pb-20 pt-20 md:pb-28 md:pt-28">

        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#F4DCE3] opacity-60 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#EBD0D8] opacity-50 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">

          <span className="text-sm font-bold tracking-wide text-[#8F183D]">
            درباره دافولی
          </span>

          <h1 className="mt-5 text-5xl font-black leading-tight text-[#111111] md:text-7xl">
          مکانی برای 
            <br />
            <span className="text-[#8F183D]">
                   بیدار کردن داف درونت      </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-9 text-[#333333] md:text-lg">
            دافولی از یک ایده ساده متولد شد؛
            اینکه زیبایی فقط درباره ظاهر نباشد،
            بلکه درباره اعتمادبه‌نفس، جسارت و
            جرئتِ خودت بودن باشد.
          </p>

        </div>

      </section>

      {/* Story */}

      <section className="bg-white px-5 py-20 md:py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-20">

          <div className="relative aspect-4/5 overflow-hidden rounded-[2.5rem] bg-[#F3E7EA]">

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="text-center">

                <Sparkles
                  size={48}
                  className="mx-auto text-[#8F183D]"
                />

                <p className="mt-5 text-xl font-black text-[#8F183D]">
                  DAAFOLI
                </p>

              </div>

            </div>

            {/*
              بعداً تصویر اصلی برند را اینجا قرار بده:

              <Image
                src="/images/about/daafoli.jpg"
                alt="دافولی"
                fill
                className="object-cover"
              />
            */}

          </div>

          <div>

            <span className="text-sm font-bold text-[#8F183D]">
              داستان ما
            </span>

            <h2 className="mt-4 text-3xl font-black leading-normal md:text-4xl">
              یک ایده،
              <br />
              یک حس،
              <br />
              یک سبک زندگی.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-9 text-[#333333]">

              <p>
                دافولی یک برند تازه‌تأسیس و متولدشده از یک ایده است؛
                ایده‌ای برای ساختن فضایی که دخترهای نوجوان و جوان
                بتوانند زیبایی را با سبک و شخصیت خودشان تجربه کنند.
              </p>

              <p>
                ما فکر می‌کنیم لازم نیست برای زیبا بودن شبیه کسی
                دیگر باشی. می‌توانی جسور باشی، متفاوت باشی،
                ترندها را امتحان کنی و در نهایت چیزی را انتخاب کنی
                که واقعاً خودت را نشان می‌دهد.
              </p>

              <p className="font-bold text-[#111111]">
                دافولی یعنی زیبایی با صدایی بلند؛
             جذاب، جسور و کمی زرشکی.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Why Daafoli */}

      <section className="px-5 py-20 md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <span className="text-sm font-bold text-[#8F183D]">
              چرا دافولی؟
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
       چون زیبایی شما
              <span className="text-[#8F183D]">
             <br /> وظیفه ی ماست</span>
            </h2>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => {

              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-4xl border border-[#EEE1E5] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7E7EC] text-[#8F183D]">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-lg font-black">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-8 text-[#333333]">
                    {feature.text}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </section>

      {/* Values */}

      <section className="bg-[#8F183D] px-5 py-20 text-white md:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12">

            <span className="text-sm font-bold text-[#F8DDE5]">
              DNA دافولی
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              چیزهایی که به آن‌ها باور داریم
            </h2>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => {

              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-4xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm transition duration-300 hover:bg-white/15"
                >

                  <Icon
                    size={28}
                    className="text-[#F8DDE5]"
                  />

                  <h3 className="mt-6 text-xl font-black">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-8 text-white">
                    {value.text}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </section>

      {/* Final CTA */}

      <section className="px-5 py-24 text-center md:py-32">

        <div className="mx-auto max-w-3xl">

          <Sparkles
            size={32}
            className="mx-auto text-[#8F183D]"
          />

          <h2 className="mt-6 text-4xl font-black leading-normal md:text-5xl">
            آماده‌ای داف‌تر باشی؟
          </h2>

          <p className="mt-5 text-base leading-8 text-[#333333]">
            استایل خودت را پیدا کن، جسور باش و زیبایی را
            آن‌طور که خودت دوست داری زندگی کن.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#8F183D] px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#74132F] hover:shadow-lg"
          >
            شروع خرید
            <ArrowLeft size={18} />
          </Link>

          <p className="mt-8 text-lg font-black text-[#8F183D]">
            با ما همیشه و همه جا داف باشید
          </p>

        </div>

      </section>

    </main>
  );
}