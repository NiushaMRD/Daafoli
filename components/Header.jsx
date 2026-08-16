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
    mega: true,
  },
  {
    title: "مجله",
    href: "/magazine",
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

  // Wishlist
  const [wishlistCount, setWishlistCount] = useState(0);

  // Cart
  const [cartCount, setCartCount] = useState(0);

  // =====================================================
  // Scroll
  // =====================================================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  // =====================================================
  // خواندن تعداد Cart
  // =====================================================

  useEffect(() => {
    const updateCartCount = () => {
      try {
        const savedCart =
          localStorage.getItem("daafoli_cart");

        if (!savedCart) {
          setCartCount(0);
          return;
        }

        const cart = JSON.parse(savedCart);

        if (Array.isArray(cart)) {
          const totalQuantity = cart.reduce(
            (total, item) =>
              total + (Number(item.quantity) || 0),
            0
          );

          setCartCount(totalQuantity);
        } else {
          setCartCount(0);
        }
      } catch (error) {
        console.error(
          "خطا در خواندن Cart:",
          error
        );

        setCartCount(0);
      }
    };

    // بار اول
    updateCartCount();

    // وقتی Cart تغییر می‌کند
    window.addEventListener(
      "cartUpdated",
      updateCartCount
    );

    // تغییرات localStorage بین تب‌ها
    window.addEventListener(
      "storage",
      updateCartCount
    );

    return () => {
      window.removeEventListener(
        "cartUpdated",
        updateCartCount
      );

      window.removeEventListener(
        "storage",
        updateCartCount
      );
    };
  }, []);

  // =====================================================
  // خواندن تعداد Wishlist
  // =====================================================

  useEffect(() => {
    const updateWishlistCount = () => {
      try {
        const savedWishlist =
          localStorage.getItem("daafoli_wishlist");

        if (!savedWishlist) {
          setWishlistCount(0);
          return;
        }

        const wishlist = JSON.parse(savedWishlist);

        if (Array.isArray(wishlist)) {
          setWishlistCount(wishlist.length);
        } else {
          setWishlistCount(0);
        }
      } catch (error) {
        console.error(
          "خطا در خواندن Wishlist:",
          error
        );

        setWishlistCount(0);
      }
    };

    // بار اول
    updateWishlistCount();

    // وقتی Wishlist تغییر می‌کند
    window.addEventListener(
      "wishlistUpdated",
      updateWishlistCount
    );

    // برای تغییرات localStorage بین تب‌ها
    window.addEventListener(
      "storage",
      updateWishlistCount
    );

    return () => {
      window.removeEventListener(
        "wishlistUpdated",
        updateWishlistCount
      );

      window.removeEventListener(
        "storage",
        updateWishlistCount
      );
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-md"
          : "bg-[#e7a8b9ce]"
          }`}
      >

        {/* =====================================================
            TOP HEADER
        ===================================================== */}

        <div className="border-b border-[#450909]">

          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-8 px-5">

            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              href="/"
              className="shrink-0"
            >

              <div className="flex items-center gap-3">

                <Image
                  src="/ww.png"
                  alt="Daafoli"
                  width={48}
                  height={48}
                  priority
                />

                <div className="hidden md:block">

                  <h1 className="text-xl font-extrabold text-[#111111]">
                    دافولی
                  </h1>

                  <p className="text-xs text-[#0a0a0a]">
                    با ما همیشه داف باشید
                  </p>

                </div>

              </div>

            </Link>

            {/* =================================================
                SEARCH
            ================================================= */}

            <div className="hidden flex-1 lg:block">

              <div className="relative">

                <Search
                  size={20}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-[#7d0c0c]"
                />

                <input
                  type="text"
                  placeholder="جستجوی محصولات، برندها..."
                  className="h-12 w-full rounded-full border border-[#E8DDE2] bg-[#FCFAFB] pr-14 pl-5 text-[15px] text-black outline-none transition-all duration-300 focus:border-[#D96C8A]"
                />

              </div>

            </div>

            {/* =================================================
                ICONS
            ================================================= */}

            <div className="flex items-center gap-5">

              {/* =================================================
                  WISHLIST
              ================================================= */}

              <Link
                href="/wishlist"
                aria-label="علاقه‌مندی‌ها"
                className="relative text-black transition duration-300 hover:text-[#D96C8A]"
              >

                <Heart
                  size={24}
                  className={
                    wishlistCount > 0
                      ? "fill-[#D96C8A] text-[#D96C8A]"
                      : ""
                  }
                />

                {/* فقط وقتی محصول وجود دارد نمایش داده شود */}

                {wishlistCount > 0 && (

                  <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#D96C8A] px-1 text-[10px] font-bold text-white">

                    {wishlistCount > 99
                      ? "99+"
                      : wishlistCount}

                  </span>

                )}

              </Link>

              {/* =================================================
                  USER
              ================================================= */}

              <Link
                href="/account"
                aria-label="حساب کاربری"
                className="text-black transition duration-300 hover:text-[#D96C8A]"
              >

                <User size={24} />

              </Link>

              {/* =================================================
                  CART
              ================================================= */}

              <Link
                href="/cart"
                aria-label="سبد خرید"
                className="relative text-black transition duration-300 hover:text-[#D96C8A]"
              >

                <ShoppingBag
                  size={24}
                  className={
                    cartCount > 0
                      ? "text-[#D96C8A]"
                      : ""
                  }
                />

                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#D96C8A] px-1 text-[10px] font-bold text-white">

                    {cartCount > 99
                      ? "99+"
                      : cartCount}

                  </span>
                )}

              </Link>

            </div>

          </div>

        </div>

        {/* =====================================================
            NAVBAR
        ===================================================== */}

        <nav className="border-b border-[#E8DDE2] bg-[#792038ce]">

          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">

            {/* =================================================
                DESKTOP MENU
            ================================================= */}

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

                  <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-[#600a0a] transition-all duration-300 group-hover:w-full" />

                </li>

              ))}

            </ul>

            {/* =================================================
                MOBILE BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() => setMobileMenu(true)}
              className="text-black lg:hidden"
              aria-label="باز کردن منو"
            >

              <Menu size={28} />

            </button>

          </div>

        </nav>

      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`fixed top-0 right-0 z-999 h-screen w-[82%] bg-white transition-all duration-300 lg:hidden ${mobileMenu
          ? "translate-x-0"
          : "translate-x-full"
          }`}
      >

        <div className="flex items-center justify-between border-b border-[#E8DDE2] p-5">

          <h2 className="text-xl font-bold">
            Daafoli
          </h2>

          <button
            type="button"
            onClick={() => setMobileMenu(false)}
            aria-label="بستن منو"
          >

            <X />

          </button>

        </div>

        <div className="p-5">

          {/* Search */}

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

          {/* Mobile Menu */}

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

            {/* Wishlist Mobile */}

            <li>

              <Link
                href="/wishlist"
                onClick={() => setMobileMenu(false)}
                className="flex items-center justify-between border-b border-[#F2F2F2] py-5 text-[15px] font-medium text-[#1F1F1F]"
              >

                <span className="flex items-center gap-3">

                  <Heart
                    size={19}
                    className={
                      wishlistCount > 0
                        ? "fill-[#D96C8A] text-[#D96C8A]"
                        : ""
                    }
                  />

                  علاقه‌مندی‌ها

                  {wishlistCount > 0 && (

                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#D96C8A] px-1 text-[10px] font-bold text-white">

                      {wishlistCount}

                    </span>

                  )}

                </span>

                <ChevronLeft size={18} />

              </Link>

            </li>

          </ul>

        </div>

      </div>

      {/* =====================================================
          OVERLAY
      ===================================================== */}

      {mobileMenu && (

        <div
          onClick={() => setMobileMenu(false)}
          className="fixed inset-0 z-998 bg-black/40 lg:hidden"
        />

      )}

    </>
  );
}