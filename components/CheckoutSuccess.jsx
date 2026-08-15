"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import {
  CheckCircle2,
  Package,
  MapPin,
  CreditCard,
  ArrowLeft,
  ShoppingBag,
} from "lucide-react";

export default function CheckoutSuccess() {
  const searchParams = useSearchParams();

  const orderId = searchParams.get("orderId");

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  // =====================================================
  // خواندن سفارش
  // =====================================================

  useEffect(() => {
    try {
      const savedOrders =
        localStorage.getItem("daafoli_orders");

      if (!savedOrders) {
        setOrder(null);
        return;
      }

      const parsedOrders = JSON.parse(savedOrders);

      if (!Array.isArray(parsedOrders)) {
        setOrder(null);
        return;
      }

      const foundOrder = parsedOrders.find(
        (item) => item.id === orderId
      );

      setOrder(foundOrder || null);
    } catch (error) {
      console.error(
        "خطا در خواندن سفارش:",
        error
      );

      setOrder(null);
    } finally {
      setLoading(false);
    }
  }, [orderId]);

  // =====================================================
  // Loading
  // =====================================================

  if (loading) {
    return (
      <section className="min-h-[70vh] bg-[#FAF7F8] px-5 py-16">

        <div className="mx-auto max-w-4xl">

          <div className="rounded-3xl bg-white p-10 text-center shadow-sm">

            <div className="mx-auto h-12 w-12 animate-pulse rounded-full bg-[#F8EDF1]" />

            <p className="mt-5 text-sm text-gray-500">
              در حال دریافت اطلاعات سفارش...
            </p>

          </div>

        </div>

      </section>
    );
  }

  // =====================================================
  // سفارش پیدا نشد
  // =====================================================

  if (!order) {
    return (
      <section className="min-h-[70vh] bg-[#FAF7F8] px-5 py-16">

        <div className="mx-auto max-w-2xl">

          <div className="rounded-3xl bg-white px-6 py-16 text-center shadow-sm">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#F8EDF1]">

              <Package
                size={30}
                className="text-[#D96C8A]"
              />

            </div>

            <h1 className="text-2xl font-extrabold text-[#111111]">
              سفارش پیدا نشد
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500">
              اطلاعات سفارش موردنظر در سیستم پیدا نشد.
              ممکن است سفارش وجود نداشته باشد یا اطلاعات آن حذف شده باشد.
            </p>

            <Link
              href="/products"
              className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#D96C8A] px-8 font-bold text-white transition hover:bg-[#C45A78]"
            >
              مشاهده محصولات

              <ArrowLeft
                size={18}
              />

            </Link>

          </div>

        </div>

      </section>
    );
  }

  // =====================================================
  // Success
  // =====================================================

  return (
    <section className="min-h-[70vh] bg-[#FAF7F8] px-5 py-12 md:py-16">

      <div className="mx-auto max-w-5xl">

        {/* =================================================
            Success Header
        ================================================= */}

        <div className="mb-8 rounded-3xl bg-white px-6 py-10 text-center shadow-sm md:px-10">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EAF7EE]">

            <CheckCircle2
              size={44}
              className="text-green-600"
            />

          </div>

          <h1 className="mt-6 text-3xl font-extrabold text-[#111111] md:text-4xl">
            سفارش شما با موفقیت ثبت شد
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
            از خرید شما از دافولی متشکریم.
            سفارش شما با موفقیت ثبت شده و در حال آماده‌سازی است.
          </p>

          {/* Order ID */}

          <div className="mx-auto mt-7 inline-flex flex-col items-center rounded-2xl bg-[#F8EDF1] px-7 py-4">

            <span className="text-xs text-gray-500">
              شماره سفارش
            </span>

            <span className="mt-1 text-lg font-extrabold tracking-wide text-[#D96C8A]">
              {order.id}
            </span>

          </div>

        </div>

        {/* =================================================
            Main Grid
        ================================================= */}

        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">

          {/* =================================================
              Products
          ================================================= */}

          <div className="rounded-3xl bg-white p-6 shadow-sm md:p-8">

            <div className="mb-6 flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8EDF1]">

                <ShoppingBag
                  size={21}
                  className="text-[#D96C8A]"
                />

              </div>

              <div>

                <h2 className="text-xl font-extrabold text-[#111111]">
                  محصولات سفارش
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  {order.items.length.toLocaleString("fa-IR")} محصول
                </p>

              </div>

            </div>

            <div className="space-y-4">

              {order.items.map((item) => (

                <div
                  key={item.id}
                  className="flex gap-4 rounded-2xl border border-[#EFE7EA] p-4"
                >

                  {/* Image */}

                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-[#FAF7F8]">

                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-2"
                      />
                    )}

                  </div>

                  {/* Info */}

                  <div className="min-w-0 flex-1">

                    <h3 className="line-clamp-2 text-sm font-bold leading-6 text-[#222222]">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-xs text-gray-500">
                      تعداد:{" "}
                      {item.quantity.toLocaleString("fa-IR")}
                    </p>

                  </div>

                  {/* Price */}

                  <div className="shrink-0 text-left">

                    <p className="text-sm font-extrabold text-[#222222]">
                      {(
                        item.price * item.quantity
                      ).toLocaleString("fa-IR")}
                    </p>

                    <span className="text-[11px] text-gray-400">
                      تومان
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* =================================================
              Order Information
          ================================================= */}

          <div className="space-y-6">

            {/* Shipping */}

            <div className="rounded-3xl bg-white p-6 shadow-sm">

              <div className="mb-5 flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8EDF1]">

                  <MapPin
                    size={19}
                    className="text-[#D96C8A]"
                  />

                </div>

                <h2 className="font-extrabold text-[#111111]">
                  اطلاعات ارسال
                </h2>

              </div>

              <div className="space-y-4 text-sm">

                <div>

                  <p className="text-xs text-gray-500">
                    تحویل گیرنده
                  </p>

                  <p className="mt-1 font-semibold text-[#222222]">
                    {order.shipping.name}
                  </p>

                </div>

                <div>

                  <p className="text-xs text-gray-500">
                    شماره موبایل
                  </p>

                  <p className="mt-1 font-semibold text-[#222222]">
                    {order.shipping.phone}
                  </p>

                </div>

                <div>

                  <p className="text-xs text-gray-500">
                    آدرس
                  </p>

                  <p className="mt-1 leading-7 text-[#333333]">
                    {order.shipping.address}
                  </p>

                </div>

                <div>

                  <p className="text-xs text-gray-500">
                    کد پستی
                  </p>

                  <p className="mt-1 font-semibold text-[#222222]">
                    {order.shipping.postalCode}
                  </p>

                </div>

              </div>

            </div>

            {/* Payment & Price */}

            <div className="rounded-3xl bg-white p-6 shadow-sm">

              <div className="mb-5 flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8EDF1]">

                  <CreditCard
                    size={19}
                    className="text-[#D96C8A]"
                  />

                </div>

                <h2 className="font-extrabold text-[#111111]">
                  خلاصه پرداخت
                </h2>

              </div>

              <div className="space-y-4">

                <div className="flex items-center justify-between text-sm">

                  <span className="text-gray-500">
                    مبلغ کالاها
                  </span>

                  <span className="font-semibold text-[#222222]">
                    {order.subtotal.toLocaleString("fa-IR")} تومان
                  </span>

                </div>

                <div className="flex items-center justify-between text-sm">

                  <span className="text-gray-500">
                    هزینه ارسال
                  </span>

                  <span className="font-semibold text-green-600">
                    رایگان
                  </span>

                </div>

                <div className="border-t border-[#EFE7EA] pt-4">

                  <div className="flex items-center justify-between">

                    <span className="font-bold text-[#222222]">
                      مبلغ نهایی
                    </span>

                    <span className="text-xl font-extrabold text-[#D96C8A]">
                      {order.total.toLocaleString("fa-IR")} تومان
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =================================================
            Actions
        ================================================= */}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

          <Link
            href="/products"
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#D96C8A] px-8 font-bold text-white transition hover:bg-[#C45A78]"
          >

            ادامه خرید

            <ArrowLeft
              size={18}
            />

          </Link>

          <Link
            href="/account"
            className="flex h-12 items-center justify-center rounded-full border border-[#E8DDE2] bg-white px-8 font-bold text-[#333333] transition hover:border-[#D96C8A] hover:text-[#D96C8A]"
          >
            مشاهده حساب کاربری
          </Link>

        </div>

      </div>

    </section>
  );
}