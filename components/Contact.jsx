"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MessageCircle,
  Send,
  MapPin,
  Clock3,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const contactMethods = [
  {
    icon: Phone,
    title: "تماس تلفنی",
    value: "۰۲۱-۱۲۳۴۵۶۷۸",
    href: "tel:+982112345678",
  },
  {
    icon: MessageCircle,
    title: "واتساپ",
    value: "۰۹۱۲۱۲۳۴۵۶۷",
    href: "https://wa.me/989121234567",
  },
  {
    icon: Send,
    title: "اینستاگرام",
    value: "@daafoli",
    href: "https://instagram.com/daafoli",
  },
  {
    icon: Mail,
    title: "ایمیل",
    value: "hello@daafoli.ir",
    href: "mailto:hello@daafoli.ir",
  },
];

const faqs = [
  {
    question: "چطور می‌توانم سفارشم را پیگیری کنم؟",
    answer:
      "بعد از ثبت سفارش، اطلاعات مربوط به وضعیت سفارش برای شما ارسال می‌شود و می‌توانید از بخش سفارش‌های حساب کاربری آن را پیگیری کنید.",
  },
  {
    question: "چطور می‌توانم با پشتیبانی دافولی تماس بگیرم؟",
    answer:
      "می‌توانید از طریق تماس تلفنی، واتساپ، اینستاگرام یا ایمیل با تیم دافولی در ارتباط باشید.",
  },
  {
    question: "آیا محصولات دافولی قابل مرجوعی هستند؟",
    answer:
      "شرایط مرجوعی برای هر سفارش بر اساس قوانین فروشگاه مشخص می‌شود. برای اطلاع دقیق‌تر می‌توانید با پشتیبانی تماس بگیرید.",
  },
  {
    question: "چقدر طول می‌کشد به پیام من پاسخ داده شود؟",
    answer:
      "تلاش می‌کنیم پیام‌های شما را در سریع‌ترین زمان ممکن بررسی کنیم. معمولاً پاسخگویی در ساعات کاری انجام می‌شود.",
  },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#FCFAFB] text-[#111111]"
    >
      {/* Hero */}

      <section className="px-5 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-bold text-[#8F183D]">
            تماس با دافولی
          </span>

          <h1 className="mt-5 text-5xl font-black leading-[1.3] md:text-7xl">
            حرفی داری؟
            <br />
            <span className="text-[#8F183D]">
              با ما در میون بذار            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-9 text-[#333333] md:text-lg">
            سوالی داری، پیشنهادی به ذهنت رسیده یا فقط می‌خوای با
            دافولی حرف بزنی؟ ما اینجاییم که صدات رو بشنویم.
          </p>
        </div>
      </section>

      {/* Contact Methods */}

      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((method) => {
            const Icon = method.icon;

            return (
              <a
                key={method.title}
                href={method.href}
                target={
                  method.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group rounded-4xl border border-[#EEE1E5] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D9B4BF] hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7E7EC] text-[#8F183D] transition group-hover:bg-[#8F183D] group-hover:text-white">
                  <Icon size={22} />
                </div>

                <h2 className="mt-6 text-lg font-black">
                  {method.title}
                </h2>

                <p className="mt-2 text-sm font-semibold text-[#333333]">
                  {method.value}
                </p>
              </a>
            );
          })}
        </div>
      </section>

      {/* Contact Form */}

      <section className="bg-white px-5 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr]">

          <div>
            <span className="text-sm font-bold text-[#8F183D]">
              پیام بفرست
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              با ما در ارتباط باش
            </h2>

            <p className="mt-4 leading-8 text-[#333333]">
              فرم زیر را پر کن و پیامت را برای ما بفرست.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-bold">
                    نام و نام خانوادگی
                  </label>

                  <input
                    type="text"
                    placeholder="نام شما"
                    className="h-14 w-full rounded-2xl border border-[#E5DADF] bg-[#FCFAFB] px-5 text-[#111111] outline-none transition placeholder:text-[#555555] focus:border-[#8F183D]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold">
                    شماره موبایل
                  </label>

                  <input
                    type="tel"
                    placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                    className="h-14 w-full rounded-2xl border border-[#E5DADF] bg-[#FCFAFB] px-5 text-[#111111] outline-none transition placeholder:text-[#555555] focus:border-[#8F183D]"
                  />
                </div>

              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  ایمیل
                </label>

                <input
                  type="email"
                  placeholder="example@email.com"
                  className="h-14 w-full rounded-2xl border border-[#E5DADF] bg-[#FCFAFB] px-5 text-[#111111] outline-none transition placeholder:text-[#555555] focus:border-[#8F183D]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  موضوع پیام
                </label>

                <input
                  type="text"
                  placeholder="موضوع پیام شما"
                  className="h-14 w-full rounded-2xl border border-[#E5DADF] bg-[#FCFAFB] px-5 text-[#111111] outline-none transition placeholder:text-[#555555] focus:border-[#8F183D]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  پیام شما
                </label>

                <textarea
                  rows="6"
                  placeholder="پیامت رو اینجا بنویس..."
                  className="w-full resize-none rounded-2xl border border-[#E5DADF] bg-[#FCFAFB] p-5 text-[#111111] outline-none transition placeholder:text-[#555555] focus:border-[#8F183D]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#8F183D] px-8 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#74132F] hover:shadow-lg"
              >
                ارسال پیام
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Information */}

          <div className="rounded-[2.5rem] bg-[#8F183D] p-8 text-white md:p-10">

            <h2 className="text-3xl font-black">
              دافولی همیشه اینجاست.
            </h2>

            <p className="mt-5 leading-8 text-white">
              چه سوالی درباره محصولات داشته باشی، چه برای سفارش
              به راهنمایی نیاز داشته باشی، می‌تونی با ما در ارتباط باشی.
            </p>

            <div className="mt-10 space-y-7">

              <div className="flex gap-4">
                <Clock3
                  size={24}
                  className="mt-1 shrink-0 text-[#F8DDE5]"
                />

                <div>
                  <h3 className="font-black">
                    ساعات پاسخگویی
                  </h3>

                  <p className="mt-2 leading-7 text-white">
                    شنبه تا پنجشنبه
                    <br />
                    ۹ صبح تا ۹ شب
                  </p>
                </div>
              </div>

              <div className="flex gap-4">

                <MapPin
                  size={24}
                  className="mt-1 shrink-0 text-[#F8DDE5]"
                />

                <div>
                  <h3 className="font-black">
                    آدرس
                  </h3>

                  <p className="mt-2 leading-7 text-white">
                    تهران، خیابان دافولی، کوچه زیبایی،
                    پلاک ۲۴؛ دفتر مرکزی خیالی دافولی!
                  </p>
                </div>

              </div>

            </div>

            <div className="mt-10 border-t border-white/20 pt-8">
              <p className="font-bold">
                با ما همیشه و همه جا داف باشید
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="px-5 py-20 md:py-28">

        <div className="mx-auto max-w-4xl">

          <div className="mb-10 text-center">

            <span className="text-sm font-bold text-[#8F183D]">
              سوالات متداول
            </span>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              شاید سوال تو هم اینجا باشد
            </h2>

          </div>

          <div className="space-y-4">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-[#EEE1E5] bg-white"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 p-6 text-right"
                  >

                    <span className="font-bold text-[#111111]">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#8F183D] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />

                  </button>

                  {isOpen && (
                    <div className="border-t border-[#EEE1E5] px-6 pb-6 pt-5">

                      <p className="text-sm leading-8 text-[#333333]">
                        {faq.answer}
                      </p>

                    </div>
                  )}

                </div>
              );

            })}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-[#F7E7EC] px-5 py-20 text-center">

        <div className="mx-auto max-w-3xl">

          <h2 className="text-3xl font-black md:text-4xl">
            هنوز سوالی داری؟
          </h2>

          <p className="mt-4 leading-8 text-[#333333]">
            ما فقط یک پیام با تو فاصله داریم.
          </p>

          <Link
            href="/products"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#8F183D] px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#74132F]"
          >
            رفتن به فروشگاه
            <Send size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}