"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import {
  User,
  LogIn,
  UserPlus,
  LogOut,
} from "lucide-react";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import AccountProfile from "./AccountProfile";


export default function AccountContainer() {
    const searchParams = useSearchParams();

    const redirectTo = searchParams.get("redirect");

    const [user, setUser] = useState(null);
    const [mode, setMode] = useState("login");
    const [loading, setLoading] = useState(true);

    // =====================================================
    // خواندن کاربر
    // =====================================================

    useEffect(() => {
        try {
            const savedUser = localStorage.getItem("daafoli_user");

            if (savedUser) {
                const parsedUser = JSON.parse(savedUser);

                if (parsedUser && typeof parsedUser === "object") {
                    setUser(parsedUser);
                }
            }
        } catch (error) {
            console.error("خطا در خواندن اطلاعات کاربر:", error);

            localStorage.removeItem("daafoli_user");
        } finally {
            setLoading(false);
        }
    }, []);

    // =====================================================
    // Login
    // =====================================================

    const handleLogin = (userData) => {
        try {
            localStorage.setItem(
                "daafoli_user",
                JSON.stringify(userData)
            );

            setUser(userData);

            window.dispatchEvent(
                new Event("userUpdated")
            );

            if (redirectTo) {
                window.location.href = redirectTo;
            }
        } catch (error) {
            console.error(
                "خطا در ورود کاربر:",
                error
            );
        }
    };

    // =====================================================
    // Register
    // =====================================================

    const handleRegister = (userData) => {
        try {
            localStorage.setItem(
                "daafoli_user",
                JSON.stringify(userData)
            );

            setUser(userData);

            window.dispatchEvent(
                new Event("userUpdated")
            );

            if (redirectTo) {
                window.location.href = redirectTo;
            }
        } catch (error) {
            console.error(
                "خطا در ثبت‌نام کاربر:",
                error
            );
        }
    };

    // =====================================================
    // Logout
    // =====================================================

    const handleLogout = () => {
        localStorage.removeItem("daafoli_user");

        setUser(null);
        setMode("login");

        window.dispatchEvent(
            new Event("userUpdated")
        );
    };

    // =====================================================
    // Loading
    // =====================================================

    if (loading) {
        return (
            <section className="min-h-[60vh] bg-[#FAF7F8] px-5 py-16">

                <div className="mx-auto max-w-5xl">

                    <div className="rounded-3xl bg-white p-10 text-center shadow-sm">

                        <div className="mx-auto h-10 w-10 animate-pulse rounded-full bg-[#F8EDF1]" />

                        <p className="mt-4 text-sm text-gray-500">
                            در حال بارگذاری حساب کاربری...
                        </p>

                    </div>

                </div>

            </section>
        );
    }

    // =====================================================
    // Logged In
    // =====================================================

    if (user) {
        return (
            <AccountProfile
                user={user}
                onLogout={handleLogout}
            />
        );
    }

    // =====================================================
    // Login / Register
    // =====================================================

    return (
        <section className="min-h-[70vh] bg-[#FAF7F8] px-5 py-16">

            <div className="mx-auto max-w-md">

                {/* Header */}

                <div className="mb-8 text-center">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F8EDF1]">

                        <User
                            size={30}
                            className="text-[#D96C8A]"
                        />

                    </div>

                    <h1 className="mt-5 text-3xl font-extrabold text-[#111111]">
                        حساب کاربری
                    </h1>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                        برای ادامه خرید یا مدیریت سفارش‌ها وارد حساب خود شوید.
                    </p>

                </div>

                {/* Card */}

                <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

                    {/* Tabs */}

                    <div className="grid grid-cols-2 border-b border-[#EFE7EA]">

                        <button
                            type="button"
                            onClick={() => setMode("login")}
                            className={`flex items-center justify-center gap-2 py-5 text-sm font-bold transition ${mode === "login"
                                ? "border-b-2 border-[#D96C8A] text-[#D96C8A]"
                                : "text-gray-500 hover:text-[#D96C8A]"
                                }`}
                        >

                            <LogIn size={18} />

                            ورود

                        </button>

                        <button
                            type="button"
                            onClick={() => setMode("register")}
                            className={`flex items-center justify-center gap-2 py-5 text-sm font-bold transition ${mode === "register"
                                ? "border-b-2 border-[#D96C8A] text-[#D96C8A]"
                                : "text-gray-500 hover:text-[#D96C8A]"
                                }`}
                        >

                            <UserPlus size={18} />

                            ثبت‌نام

                        </button>

                    </div>

                    {/* Form */}

                    <div className="p-6 md:p-8">

                        {mode === "login" ? (

                            <LoginForm
                                onLogin={handleLogin}
                                onRegisterClick={() =>
                                    setMode("register")
                                }
                            />

                        ) : (

                            <RegisterForm
                                onRegister={handleRegister}
                                onLoginClick={() =>
                                    setMode("login")
                                }
                            />

                        )}

                    </div>

                </div>

            </div>

        </section>
    );
}