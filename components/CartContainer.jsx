"use client";

import { useEffect, useMemo, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
    BsCart3,
    BsPlus,
    BsDash,
    BsTrash3,
} from "react-icons/bs";

import { products } from "@/data/products";

export default function CartContainer() {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(null);

    /* =====================================================
       خواندن Cart از LocalStorage
    ===================================================== */

    useEffect(() => {
        try {
            const savedCart = localStorage.getItem("daafoli_cart");

            if (!savedCart) {
                setCart([]);
                return;
            }

            const parsedCart = JSON.parse(savedCart);

            if (Array.isArray(parsedCart)) {
                setCart(parsedCart);
            }
        } catch (error) {
            console.error("خطا در خواندن Cart:", error);
            setCart([]);
        }
    }, []);

    /* =====================================================
       ذخیره Cart در LocalStorage
    ===================================================== */

    const saveCart = (newCart) => {
        try {
            localStorage.setItem(
                "daafoli_cart",
                JSON.stringify(newCart)
            );

            setCart(newCart);

            window.dispatchEvent(
                new Event("cartUpdated")
            );
        } catch (error) {
            console.error(
                "خطا در ذخیره Cart:",
                error
            );
        }
    };

    /* =====================================================
   خواندن وضعیت کاربر
===================================================== */

    useEffect(() => {
        const loadUser = () => {
            try {
                const savedUser = localStorage.getItem("daafoli_user");

                if (!savedUser) {
                    setUser(null);
                    return;
                }

                const parsedUser = JSON.parse(savedUser);

                if (parsedUser && typeof parsedUser === "object") {
                    setUser(parsedUser);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error(
                    "خطا در خواندن اطلاعات کاربر:",
                    error
                );

                setUser(null);
            }
        };

        // بار اول
        loadUser();

        // وقتی Login / Logout اتفاق می‌افتد
        window.addEventListener(
            "userUpdated",
            loadUser
        );

        // تغییر بین تب‌ها
        window.addEventListener(
            "storage",
            loadUser
        );

        return () => {
            window.removeEventListener(
                "userUpdated",
                loadUser
            );

            window.removeEventListener(
                "storage",
                loadUser
            );
        };
    }, []);

    /* =====================================================
       افزایش تعداد محصول
    ===================================================== */

    const increaseQuantity = (productId) => {
        const newCart = cart.map((item) =>
            item.id === productId
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                }
                : item
        );

        saveCart(newCart);
    };

    /* =====================================================
       کاهش تعداد محصول
    ===================================================== */

    const decreaseQuantity = (productId) => {
        const newCart = cart
            .map((item) =>
                item.id === productId
                    ? {
                        ...item,
                        quantity: item.quantity - 1,
                    }
                    : item
            )
            .filter((item) => item.quantity > 0);

        saveCart(newCart);
    };

    /* =====================================================
       حذف محصول
    ===================================================== */

    const removeFromCart = (productId) => {
        const newCart = cart.filter(
            (item) => item.id !== productId
        );

        saveCart(newCart);
    };

    /* =====================================================
       پاک کردن کل سبد
    ===================================================== */

    const clearCart = () => {
        saveCart([]);
    };

    /* =====================================================
       تبدیل Cart به Product
    ===================================================== */

    const cartProducts = useMemo(() => {
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

    /* =====================================================
       تعداد کل محصولات
    ===================================================== */

    const totalItems = useMemo(() => {
        return cartProducts.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );
    }, [cartProducts]);

    /* =====================================================
       مبلغ کل
    ===================================================== */

    const subtotal = useMemo(() => {
        return cartProducts.reduce(
            (total, item) =>
                total +
                item.price * item.quantity,
            0
        );
    }, [cartProducts]);

    /* =====================================================
       مبلغ تخفیف
    ===================================================== */

    const discount = useMemo(() => {
        return cartProducts.reduce(
            (total, item) => {
                if (!item.oldPrice) return total;

                return (
                    total +
                    (item.oldPrice - item.price) *
                    item.quantity
                );
            },
            0
        );
    }, [cartProducts]);

    /* =====================================================
       مبلغ نهایی
    ===================================================== */

    const totalPrice = subtotal;

    /* =====================================================
       Empty Cart
    ===================================================== */

    if (cartProducts.length === 0) {
        return (
            <section className="py-10">

                <div className="mx-auto max-w-4xl rounded-3xl bg-white px-6 py-20 text-center shadow-sm">

                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#F8EDF1]">

                        <BsCart3
                            size={36}
                            className="text-[#D96C8A]"
                        />

                    </div>

                    <h2 className="text-2xl font-extrabold text-[#111111]">
                        سبد خرید شما خالی است
                    </h2>

                    <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#555555]">
                        هنوز محصولی به سبد خرید اضافه نکرده‌اید.
                        محصولات موردنظر خود را انتخاب کنید و
                        سفارش خود را ثبت کنید.
                    </p>

                    <Link
                        href="/products"
                        className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#D96C8A] px-8 font-semibold text-white transition hover:bg-[#C45A78]"
                    >
                        مشاهده محصولات
                    </Link>

                </div>

            </section>
        );
    }

    /* =====================================================
       Cart
    ===================================================== */

    return (
        <section className="py-10">

            <div className="grid gap-8 lg:grid-cols-[1fr_360px]">

                {/* =================================================
            Cart Items
        ================================================= */}

                <div className="space-y-5">

                    <div className="flex items-center justify-between">

                        <div>

                            <h2 className="text-2xl font-extrabold text-[#111111]">
                                سبد خرید
                            </h2>

                            <p className="mt-2 text-sm text-[#666666]">
                                {totalItems.toLocaleString("fa-IR")} محصول
                            </p>

                        </div>

                        <button
                            type="button"
                            onClick={clearCart}
                            className="text-sm font-semibold text-red-500 transition hover:text-red-600"
                        >
                            پاک کردن سبد
                        </button>

                    </div>

                    {cartProducts.map((product) => (

                        <div
                            key={product.id}
                            className="rounded-3xl border border-[#EFE7EA] bg-white p-5 shadow-sm"
                        >

                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                                {/* Product Image */}

                                <Link
                                    href={`/products/${product.slug}`}
                                    className="relative h-32 w-full shrink-0 overflow-hidden rounded-2xl bg-[#FAF7F8] sm:h-32 sm:w-32"
                                >

                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-4"
                                    />

                                </Link>

                                {/* Product Info */}

                                <div className="min-w-0 flex-1">

                                    <p className="text-sm font-medium text-[#777777]">
                                        {product.brand}
                                    </p>

                                    <Link
                                        href={`/products/${product.slug}`}
                                    >

                                        <h3 className="mt-2 line-clamp-2 text-lg font-bold leading-7 text-[#111111] transition hover:text-[#D96C8A]">
                                            {product.name}
                                        </h3>

                                    </Link>

                                    <p className="mt-3 text-lg font-extrabold text-[#111111]">
                                        {product.price.toLocaleString("fa-IR")} تومان
                                    </p>

                                </div>

                                {/* Quantity */}

                                <div className="flex items-center justify-between gap-4 sm:flex-col">

                                    <div className="flex h-11 items-center overflow-hidden rounded-full border border-[#E5E5E5]">

                                        <button
                                            type="button"
                                            onClick={() =>
                                                increaseQuantity(product.id)
                                            }
                                            className="flex h-11 w-11 items-center justify-center text-[#333333] transition hover:bg-[#F8EDF1] hover:text-[#D96C8A]"
                                            aria-label="افزایش تعداد"
                                        >
                                            <BsPlus size={18} />
                                        </button>

                                        <span className="w-10 text-center text-sm font-bold">
                                            {product.quantity.toLocaleString("fa-IR")}
                                        </span>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                decreaseQuantity(product.id)
                                            }
                                            className="flex h-11 w-11 items-center justify-center text-[#333333] transition hover:bg-[#F8EDF1] hover:text-[#D96C8A]"
                                            aria-label="کاهش تعداد"
                                        >
                                            <BsDash size={18} />
                                        </button>

                                    </div>

                                    {/* Remove */}

                                    <button
                                        type="button"
                                        onClick={() =>
                                            removeFromCart(product.id)
                                        }
                                        className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition hover:bg-red-50 hover:text-red-500"
                                        aria-label="حذف محصول"
                                    >
                                        <BsTrash3 size={18} />
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

                {/* =================================================
            Order Summary
        ================================================= */}

                <aside className="h-fit rounded-3xl border border-[#EFE7EA] bg-white p-6 shadow-sm lg:sticky lg:top-28">

                    <h3 className="text-xl font-extrabold text-[#111111]">
                        خلاصه سفارش
                    </h3>

                    <div className="mt-6 space-y-4">

                        {/* Subtotal */}

                        <div className="flex items-center justify-between text-sm">

                            <span className="text-[#555555]">
                                مجموع قیمت
                            </span>

                            <span className="font-semibold text-[#111111]">
                                {subtotal.toLocaleString("fa-IR")} تومان
                            </span>

                        </div>

                        {/* Discount */}

                        {discount > 0 && (

                            <div className="flex items-center justify-between text-sm">

                                <span className="text-[#555555]">
                                    تخفیف
                                </span>

                                <span className="font-semibold text-[#D96C8A]">
                                    {discount.toLocaleString("fa-IR")} تومان
                                </span>

                            </div>

                        )}

                        <div className="border-t border-[#EEEEEE] pt-4">

                            <div className="flex items-center justify-between">

                                <span className="font-bold text-[#111111]">
                                    مبلغ نهایی
                                </span>

                                <span className="text-xl font-extrabold text-[#111111]">
                                    {totalPrice.toLocaleString("fa-IR")} تومان
                                </span>

                            </div>

                        </div>

                    </div>

                    <Link
                        href={
                            user
                                ? "/checkout"
                                : "/account?redirect=/checkout"
                        }
                        className="mt-6 flex h-13 w-full items-center justify-center rounded-full bg-[#D96C8A] font-bold text-white transition hover:bg-[#C45A78]"
                    >
                        {user
                            ? "ادامه فرآیند خرید"
                            : "ورود و ادامه خرید"}
                    </Link>

                    <Link
                        href="/products"
                        className="mt-3 flex h-12 w-full items-center justify-center rounded-full border border-[#222222] font-semibold text-[#222222] transition hover:border-[#D96C8A] hover:text-[#D96C8A]"
                    >
                        ادامه خرید
                    </Link>

                </aside>

            </div>

        </section>
    );
}