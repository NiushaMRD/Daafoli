"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  MapPin,
  CreditCard,
  ArrowRight,
  User,
} from "lucide-react";

import { products } from "@/data/products";

export default function CheckoutContainer() {
  const handleSubmitOrder = () => {
    setError("");

    if (!shippingInfo.name.trim()) {
      setError("لطفاً نام و نام خانوادگی را وارد کنید.");
      return;
    }

    if (!shippingInfo.phone.trim()) {
      setError("لطفاً شماره موبایل را وارد کنید.");
      return;
    }

    if (!shippingInfo.address.trim()) {
      setError("لطفاً آدرس را وارد کنید.");
      return;
    }

    if (!shippingInfo.postalCode.trim()) {
      setError("لطفاً کد پستی را وارد کنید.");
      return;
    }

    if (cartItems.length === 0) {
      setError("سبد خرید شما خالی است.");
      return;
    }

    try {
      setSubmitting(true);

      const savedOrders =
        localStorage.getItem("daafoli_orders");

      let orders = [];

      if (savedOrders) {
        const parsedOrders = JSON.parse(savedOrders);

        if (Array.isArray(parsedOrders)) {
          orders = parsedOrders;
        }
      }

      const order = {
        id: `ORD-${Date.now()}`,

        user: {
          name: user.name || "",
          phone: user.phone || "",
        },

        shipping: {
          name: shippingInfo.name,
          phone: shippingInfo.phone,
          address: shippingInfo.address,
          postalCode: shippingInfo.postalCode,
        },

        items: cartItems.map((item) => ({
          id: item.id,
          name: item.name,
          image: item.image,
          price: item.price,
          quantity: item.quantity,
        })),

        subtotal,
        shipping,
        total,

        paymentMethod,

        status: "pending",

        createdAt: new Date().toISOString(),
      };

      orders.push(order);

      localStorage.setItem(
        "daafoli_orders",
        JSON.stringify(orders)
      );

      // پاک کردن سبد خرید
      localStorage.removeItem("daafoli_cart");

      // اطلاع‌رسانی به هدر و سایر بخش‌ها
      window.dispatchEvent(
        new Event("cartUpdated")
      );

      // انتقال به صفحه موفقیت
      router.push(
        `/checkout/success?orderId=${order.id}`
      );
    } catch (error) {
      console.error(
        "خطا در ثبت سفارش:",
        error
      );

      setError(
        "ثبت سفارش با خطا مواجه شد. لطفاً دوباره تلاش کنید."
      );

      setSubmitting(false);
    }
  };

  const router = useRouter();

  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);
  const [checkingUser, setCheckingUser] = useState(true);

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    phone: "",
    address: "",
    postalCode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("online");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");


  // =====================================================
  // بررسی کاربر
  // =====================================================

  useEffect(() => {
    const checkUser = () => {
      try {
        const savedUser =
          localStorage.getItem("daafoli_user");

        if (!savedUser) {
          setUser(null);
          return;
        }

        const parsedUser = JSON.parse(savedUser);

        if (
          parsedUser &&
          typeof parsedUser === "object"
        ) {
          setUser(parsedUser);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error(
          "خطا در بررسی کاربر:",
          error
        );

        setUser(null);
      } finally {
        setCheckingUser(false);
      }
    };

    checkUser();

    window.addEventListener(
      "userUpdated",
      checkUser
    );

    return () => {
      window.removeEventListener(
        "userUpdated",
        checkUser
      );
    };
  }, []);



  useEffect(() => {
    if (!user) return;

    setShippingInfo((current) => ({
      ...current,
      name: user.name || "",
      phone: user.phone || "",
    }));
  }, [user]);

  // =====================================================
  // اگر کاربر وارد نشده
  // =====================================================

  useEffect(() => {
    if (!checkingUser && !user) {
      router.replace("/account?redirect=/checkout");
    }
  }, [checkingUser, user, router]);

  // =====================================================
  // خواندن Cart
  // =====================================================

  useEffect(() => {
    try {
      const savedCart =
        localStorage.getItem("daafoli_cart");

      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        }
      }
    } catch (error) {
      console.error(
        "خطا در خواندن سبد خرید:",
        error
      );
    } finally {
      setLoading(false);
    }
  }, []);

  // =====================================================
  // محصولات سبد خرید
  // =====================================================

  const cartItems = useMemo(() => {
    return cart
      .map((item) => {
        const product = products.find(
          (product) => product.id === item.id
        );

        if (!product) return null;

        return {
          ...product,
          quantity: item.quantity,
        };
      })
      .filter(Boolean);
  }, [cart]);

  // =====================================================
  // محاسبه مبلغ
  // =====================================================

  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const shipping = 0;
  const total = subtotal + shipping;

  // =====================================================
  // Loading / Checking
  // =====================================================

  if (checkingUser || loading) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow-sm">

        <div className="mx-auto h-10 w-10 animate-pulse rounded-full bg-[#F8EDF1]" />

        <p className="mt-4 text-sm text-gray-500">
          در حال بررسی اطلاعات...
        </p>

      </div>
    );
  }

  // =====================================================
  // کاربر وارد نشده
  // =====================================================

  if (!user) {
    return (
      <div className="rounded-3xl bg-white px-6 py-20 text-center shadow-sm">

        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#F8EDF1]">

          <User
            size={28}
            className="text-[#D96C8A]"
          />

        </div>

        <h2 className="text-2xl font-extrabold text-[#111111]">
          ورود به حساب کاربری
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500">
          برای ادامه فرایند خرید ابتدا وارد حساب کاربری خود شوید یا حساب جدید ایجاد کنید.
        </p>

        <Link
          href="/account?redirect=/checkout"
          className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-[#D96C8A] px-8 font-bold text-white transition hover:bg-[#C45A78]"
        >
          ورود / ثبت‌نام
        </Link>

      </div>
    );
  }

  // =====================================================
  // Empty Cart
  // =====================================================

  if (cartItems.length === 0) {
    return (
      <div className="rounded-3xl bg-white px-6 py-20 text-center shadow-sm">

        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#F8EDF1]">
          <CreditCard
            size={28}
            className="text-[#D96C8A]"
          />
        </div>

        <h2 className="text-2xl font-extrabold text-[#111111]">
          سبد خرید شما خالی است
        </h2>

        <p className="mt-3 text-sm text-gray-500">
          برای ادامه فرایند خرید ابتدا محصولی به سبد خرید اضافه کنید.
        </p>

        <Link
          href="/products"
          className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-[#D96C8A] px-8 font-semibold text-white transition hover:bg-[#C45A78]"
        >
          مشاهده محصولات
        </Link>

      </div>
    );
  }

  // =====================================================
  // Checkout
  // =====================================================

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

      {/* =================================================
          اطلاعات ارسال
      ================================================= */}

      <div className="space-y-6">

        <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">

          <div className="mb-7 flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8EDF1]">
              <MapPin
                size={21}
                className="text-[#D96C8A]"
              />
            </div>

            <div>

              <h2 className="text-xl font-extrabold text-[#111111]">
                اطلاعات ارسال
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                اطلاعات دریافت سفارش را وارد کنید.
              </p>

            </div>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <div>

              <label className="mb-2 block text-sm font-semibold text-[#222222]">
                نام و نام خانوادگی
              </label>

              <input
                type="text"
                value={shippingInfo.name}
                onChange={(event) =>
                  setShippingInfo((current) => ({
                    ...current,
                    name: event.target.value,
                  }))
                }
                placeholder="نام و نام خانوادگی"
                className="h-12 w-full rounded-2xl border border-[#E8DDE2] bg-white px-4 text-sm outline-none transition focus:border-[#D96C8A]"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-semibold text-[#222222]">
                شماره موبایل
              </label>

              <input
                type="tel"
                value={shippingInfo.phone}
                onChange={(event) =>
                  setShippingInfo((current) => ({
                    ...current,
                    phone: event.target.value,
                  }))
                }
                placeholder="09xxxxxxxxx"
                className="h-12 w-full rounded-2xl border border-[#E8DDE2] bg-white px-4 text-sm outline-none transition focus:border-[#D96C8A]"
              />

            </div>

            <div className="md:col-span-2">

              <label className="mb-2 block text-sm font-semibold text-[#222222]">
                آدرس
              </label>

              <textarea
                rows={4}
                value={shippingInfo.address}
                onChange={(event) =>
                  setShippingInfo((current) => ({
                    ...current,
                    address: event.target.value,
                  }))
                }
                placeholder="آدرس کامل خود را وارد کنید..."
                className="w-full resize-none rounded-2xl border border-[#E8DDE2] bg-white p-4 text-sm leading-7 outline-none transition focus:border-[#D96C8A]"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-semibold text-[#222222]">
                کد پستی
              </label>

              <input
                type="text"
                value={shippingInfo.postalCode}
                onChange={(event) =>
                  setShippingInfo((current) => ({
                    ...current,
                    postalCode: event.target.value,
                  }))
                }
                placeholder="کد پستی"
                className="h-12 w-full rounded-2xl border border-[#E8DDE2] bg-white px-4 text-sm outline-none transition focus:border-[#D96C8A]"
              />

            </div>

          </div>

        </section>

        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-sm font-medium text-red-600">
            {error}
          </div>
        )}
        {/* =================================================
            روش پرداخت
        ================================================= */}

        <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">

          <div className="mb-6 flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8EDF1]">

              <CreditCard
                size={21}
                className="text-[#D96C8A]"
              />

            </div>

            <div>

              <h2 className="text-xl font-extrabold text-[#111111]">
                روش پرداخت
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                روش پرداخت سفارش خود را انتخاب کنید.
              </p>

            </div>

          </div>

          <label className="flex cursor-pointer items-center gap-4 rounded-2xl border border-[#D96C8A] bg-[#FFF8FA] p-5">

            <input
              type="radio"
              name="payment"
              value="online"
              checked={paymentMethod === "online"}
              onChange={(event) =>
                setPaymentMethod(event.target.value)
              }
              className="h-5 w-5 accent-[#D96C8A]"
            />

            <div>

              <p className="font-bold text-[#222222]">
                پرداخت آنلاین
              </p>

              <p className="mt-1 text-xs text-gray-500">
                پرداخت امن از طریق درگاه بانکی
              </p>

            </div>

          </label>

        </section>

      </div>

      {/* =================================================
          خلاصه سفارش
      ================================================= */}

      <aside className="h-fit rounded-3xl bg-white p-6 shadow-sm lg:sticky lg:top-28">

        <h2 className="mb-6 text-xl font-extrabold text-[#111111]">
          خلاصه سفارش
        </h2>

        <div className="space-y-4">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="flex items-center justify-between gap-4 border-b border-[#F0EAEC] pb-4"
            >

              <div className="min-w-0">

                <p className="line-clamp-1 text-sm font-bold text-[#222222]">
                  {item.name}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  تعداد:{" "}
                  {item.quantity.toLocaleString("fa-IR")}
                </p>

              </div>

              <p className="shrink-0 text-sm font-bold text-[#222222]">
                {(
                  item.price * item.quantity
                ).toLocaleString("fa-IR")}{" "}
                تومان
              </p>

            </div>

          ))}

        </div>

        <div className="mt-6 space-y-4">

          <div className="flex items-center justify-between text-sm">

            <span className="text-gray-500">
              مبلغ کالاها
            </span>

            <span className="font-semibold text-[#222222]">
              {subtotal.toLocaleString("fa-IR")} تومان
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

          <div className="border-t border-[#EDE7E9] pt-5">

            <div className="flex items-center justify-between">

              <span className="font-bold text-[#222222]">
                مبلغ نهایی
              </span>

              <span className="text-xl font-extrabold text-[#D96C8A]">
                {total.toLocaleString("fa-IR")} تومان
              </span>

            </div>

          </div>

        </div>

        <button
          type="button"
          onClick={handleSubmitOrder}
          disabled={submitting}
          className={`mt-7 flex h-13 w-full items-center justify-center gap-2 rounded-full font-bold text-white transition ${submitting
              ? "cursor-not-allowed bg-gray-400"
              : "bg-[#D96C8A] hover:bg-[#C45A78]"
            }`}
        >
          {submitting
            ? "در حال ثبت سفارش..."
            : "پرداخت و ثبت سفارش"}

          {!submitting && (
            <ArrowRight
              size={19}
              className="rotate-180"
            />
          )}
        </button>

        <Link
          href="/cart"
          className="mt-4 flex items-center justify-center text-sm font-medium text-gray-500 transition hover:text-[#D96C8A]"
        >
          بازگشت به سبد خرید
        </Link>

      </aside>

    </div>
  );
}