"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Search,
  Heart,
  ShoppingBag,
  User,
  ChevronDown,
  ChevronLeft,
} from "lucide-react";

const menuItems = [
  {
    title: "محصولات",
    href: "/products",
    mega: true,
  },
  {
    title: "برندها",
    href: "/brands",
  },
  {
    title: "مجله",
    href: "/blog",
  },
  {
    title: "درباره ما",
    href: "/about",
  },
  {
    title: "تماس با ما",
    href: "/contact",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-md"
            : "bg-red-300"
        }`}
      >
        {/* TOP HEADER */}

        <div className="border-b border-[#df9f95]">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-8 px-5">

            {/* LOGO */}

            <Link href="/" className="shrink-0">

              <div className="flex items-center gap-3">

                <Image
                  src="/logo/logo.png"
                  alt="Daafoli"
                  width={48}
                  height={48}
                  priority
                />

                <div className="hidden md:block">

                  <h1 className="text-xl font-extrabold text-[#111111]">
                   دافولی
                  </h1>

                  <p className="text-xs text-[#666]">
                    با ما همیشه داف باشید
                  </p>

                </div>

              </div>

            </Link>

            {/* SEARCH */}

            <div className="hidden flex-1 lg:block">

              <div className="relative">

                <Search
                  size={20}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-[#7d0c0c]"
                />

                <input
                  type="text"
                  placeholder="جستجوی محصولات، برندها..."
                  className="h-12 w-full rounded-full border border-[#E8DDE2] bg-[#FCFAFB] pr-14 pl-5 text-[15px] outline-none transition-all duration-300 focus:border-[#D96C8A] text-black"
                />

              </div>

            </div>

            {/* ICONS */}

            <div className="flex items-center gap-5">

              <button className="relative transition duration-300 hover:text-[#D96C8A]">

                <Heart size={24} />

                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#D96C8A] text-[10px] text-white">
                  2
                </span>

              </button>

              <button className="transition duration-300 hover:text-[#D96C8A]">
                <User size={24} />
              </button>

              <button className="relative transition duration-300 hover:text-[#D96C8A]">

                <ShoppingBag size={24} />

                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#D96C8A] text-[10px] text-white">
                  3
                </span>

              </button>

            </div>

          </div>
        </div>

        {/* NAVBAR */}

        <nav className="border-b border-[#E8DDE2] bg-red-300">

          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">

            {/* DESKTOP MENU */}

            <ul className="hidden h-full items-center gap-10 lg:flex">

              {menuItems.map((item) => (
                <li
                  key={item.title}
                  className="group relative h-full"
                >
                  <Link
                    href={item.href}
                    className="flex h-full items-center gap-1 text-[15px] font-semibold text-[#1F1F1F] transition-all duration-300 hover:text-[#D96C8A]"
                  >
                    {item.title}

                    {item.mega && (
                      <ChevronDown size={17} />
                    )}
                  </Link>

                  <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-[#D96C8A] transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}

            </ul>

            {/* MOBILE BUTTON */}

            <button
              onClick={() => setMobileMenu(true)}
              className="lg:hidden"
            >
              <Menu size={28} />
            </button>

          </div>

        </nav>
      </header>

      {/* MOBILE MENU */}

      <div
        className={`fixed top-0 right-0 z-999 h-screen w-[82%] bg-white transition-all duration-300 lg:hidden ${
          mobileMenu
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#E8DDE2] p-5">

          <h2 className="text-xl font-bold">
            Daafoli
          </h2>

          <button onClick={() => setMobileMenu(false)}>
            <X />
          </button>

        </div>

        <div className="p-5">

          <div className="relative mb-8">

            <Search
              size={20}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[#777]"
            />

            <input
              type="text"
              placeholder="جستجو..."
              className="h-12 w-full rounded-full border border-[#E8DDE2] bg-[#FCFAFB] pr-14 pl-5 outline-none focus:border-[#D96C8A]"
            />

          </div>

          <ul>

            {menuItems.map((item) => (
              <li key={item.title}>

                <Link
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center justify-between border-b border-[#F2F2F2] py-5 text-[15px] font-medium text-[#1F1F1F]"
                >
                  {item.title}

                  <ChevronLeft size={18} />

                </Link>

              </li>
            ))}

          </ul>

        </div>

      </div>

      {mobileMenu && (
        <div
          onClick={() => setMobileMenu(false)}
          className="fixed inset-0 z-998 bg-black/40 lg:hidden"
        />
      )}
    </>
  );
}