"use client";

import Link from "next/link";
import {
  Send,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";

import {
  FaInstagram,
} from "react-icons/fa";

const footerLinks = [
  {
    title: "خرید",
    links: [
      {
        title: "همه محصولات",
        href: "/products",
      },
      {
        title: "لوازم آرایشی",
        href: "/products?category=لوازم آرایشی",
      },
      {
        title: "مراقبت پوست و مو",
        href: "/products?category=مراقبت پوست و مو",
      },
      {
        title: "عطر و ادکلن",
        href: "/products?category=عطر و ادکلن",
      },
    ],
  },
  {
    title: "دافولی",
    links: [
      {
        title: "درباره ما",
        href: "/about",
      },
      {
        title: "تماس با ما",
        href: "/contact",
      },
      {
        title: "مجله زیبایی",
        href: "/magazine",
      },
      {
        title: "سوالات متداول",
        href: "/contact#faq",
      },
    ],
  },
  {
    title: "خدمات مشتریان",
    links: [
      {
        title: "پیگیری سفارش",
        href: "/orders",
      },
      {
        title: "شرایط بازگشت کالا",
        href: "/return-policy",
      },
      {
        title: "قوانین و مقررات",
        href: "/rules",
      },
      {
        title: "حریم خصوصی",
        href: "/privacy",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4">

        {/* =====================================================
            BRAND
        ===================================================== */}

        <div>

          <h2 className="mb-4 text-3xl font-extrabold">
            Daafoli
          </h2>

          <p className="mb-6 leading-8 text-[#E5E5E5]">
            فروشگاه آنلاین محصولات آرایشی، مراقبت پوست و مو،
            عطر و اکسسوری.
            <br />
            با ما همیشه داف باشید.
          </p>

          {/* SOCIAL */}

          <div className="flex gap-3">

            <a
              href="#"
              aria-label="اینستاگرام دافولی"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#D96C8A]"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="#"
              aria-label="تلگرام دافولی"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#D96C8A]"
            >
              <Send size={20} />
            </a>

          </div>

        </div>

        {/* =====================================================
            FOOTER LINKS
        ===================================================== */}

        {footerLinks.map((column) => (

          <div key={column.title}>

            <h3 className="mb-5 text-lg font-bold">
              {column.title}
            </h3>

            <ul className="space-y-4">

              {column.links.map((link) => (

                <li key={link.title}>

                  <Link
                    href={link.href}
                    className="text-[#E5E5E5] transition hover:text-[#D96C8A]"
                  >
                    {link.title}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

        ))}

      </div>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-[#E5E5E5] md:flex-row md:items-center md:justify-between">

          {/* PHONE */}

          <a
            href="tel:02112345678"
            className="flex items-center gap-2 transition hover:text-[#D96C8A]"
          >
            <Phone size={18} />

            <span>
              ۰۲۱-۱۲۳۴۵۶۷۸
            </span>
          </a>

          {/* EMAIL */}

          <a
            href="mailto:info@daafoli.com"
            className="flex items-center gap-2 transition hover:text-[#D96C8A]"
          >
            <Mail size={18} />

            <span>
              info@daafoli.com
            </span>
          </a>

          {/* SHIPPING */}

          <div className="flex items-center gap-2">

            <MapPin size={18} />

            <span>
              ارسال به سراسر کشور
            </span>

          </div>

        </div>

      </div>

      {/* =====================================================
          COPYRIGHT
      ===================================================== */}

      <div className="border-t border-white/10 py-5 text-center text-sm text-[#E5E5E5]">

         ♥ 2026 Daafoli ♥ با دافولی همیشه داف باشید  ♥

      </div>

    </footer>
  );
}