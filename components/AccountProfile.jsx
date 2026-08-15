"use client";

import Link from "next/link";

import {
  User,
  Phone,
  ShoppingBag,
  Heart,
  MapPin,
  LogOut,
  ChevronLeft,
} from "lucide-react";

export default function AccountProfile({
  user,
  onLogout,
}) {
  return (
    <section className="min-h-[70vh] bg-[#FAF7F8] px-5 py-12 md:py-16">

      <div className="mx-auto max-w-6xl">

        {/* =====================================================
            Header
        ===================================================== */}

        <div className="mb-8">

          <div className="flex flex-col gap-5 rounded-3xl bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-4">

              {/* Avatar */}

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#F8EDF1]">

                <User
                  size={30}
                  className="text-[#D96C8A]"
                />

              </div>

              {/* User Info */}

              <div>

                <p className="text-sm text-gray-500">
                  خوش آمدید
                </p>

                <h1 className="mt-1 text-xl font-extrabold text-[#111111]">
                  {user?.name || "کاربر دافولی"}
                </h1>

                <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">

                  <Phone size={15} />

                  <span dir="ltr">
                    {user?.phone || "شماره ثبت نشده"}
                  </span>

                </div>

              </div>

            </div>

            {/* Logout */}

            <button
              type="button"
              onClick={onLogout}
              className="flex h-11 items-center justify-center gap-2 rounded-full border border-red-200 px-5 text-sm font-bold text-red-500 transition hover:bg-red-50"
            >

              <LogOut size={18} />

              خروج از حساب

            </button>

          </div>

        </div>

        {/* =====================================================
            Account Grid
        ===================================================== */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* =================================================
              Orders
          ================================================= */}

          <Link
            href="/account/orders"
            className="group rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="flex items-center justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8EDF1]">

                <ShoppingBag
                  size={23}
                  className="text-[#D96C8A]"
                />

              </div>

              <ChevronLeft
                size={20}
                className="text-gray-400 transition group-hover:-translate-x-1 group-hover:text-[#D96C8A]"
              />

            </div>

            <h2 className="mt-5 text-lg font-extrabold text-[#111111]">
              سفارش‌های من
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              مشاهده سفارش‌ها و پیگیری وضعیت خریدهای شما
            </p>

          </Link>

          {/* =================================================
              Wishlist
          ================================================= */}

          <Link
            href="/wishlist"
            className="group rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="flex items-center justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8EDF1]">

                <Heart
                  size={23}
                  className="text-[#D96C8A]"
                />

              </div>

              <ChevronLeft
                size={20}
                className="text-gray-400 transition group-hover:-translate-x-1 group-hover:text-[#D96C8A]"
              />

            </div>

            <h2 className="mt-5 text-lg font-extrabold text-[#111111]">
              علاقه‌مندی‌ها
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              محصولاتی که برای خرید بعدی ذخیره کرده‌اید
            </p>

          </Link>

          {/* =================================================
              Addresses
          ================================================= */}

          <Link
            href="/account/addresses"
            className="group rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="flex items-center justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8EDF1]">

                <MapPin
                  size={23}
                  className="text-[#D96C8A]"
                />

              </div>

              <ChevronLeft
                size={20}
                className="text-gray-400 transition group-hover:-translate-x-1 group-hover:text-[#D96C8A]"
              />

            </div>

            <h2 className="mt-5 text-lg font-extrabold text-[#111111]">
              آدرس‌های من
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              مدیریت آدرس‌های ارسال سفارش
            </p>

          </Link>

        </div>

        {/* =====================================================
            Quick Actions
        ===================================================== */}

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">

          <h2 className="text-lg font-extrabold text-[#111111]">
            دسترسی سریع
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">

            {/* Cart */}

            <Link
              href="/cart"
              className="flex items-center justify-between rounded-2xl border border-[#EFE7EA] p-4 transition hover:border-[#D96C8A] hover:bg-[#FDF8FA]"
            >

              <div className="flex items-center gap-3">

                <ShoppingBag
                  size={20}
                  className="text-[#D96C8A]"
                />

                <span className="text-sm font-bold text-[#222222]">
                  مشاهده سبد خرید
                </span>

              </div>

              <ChevronLeft
                size={18}
                className="text-gray-400"
              />

            </Link>

            {/* Products */}

            <Link
              href="/products"
              className="flex items-center justify-between rounded-2xl border border-[#EFE7EA] p-4 transition hover:border-[#D96C8A] hover:bg-[#FDF8FA]"
            >

              <div className="flex items-center gap-3">

                <ShoppingBag
                  size={20}
                  className="text-[#D96C8A]"
                />

                <span className="text-sm font-bold text-[#222222]">
                  مشاهده محصولات
                </span>

              </div>

              <ChevronLeft
                size={18}
                className="text-gray-400"
              />

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}