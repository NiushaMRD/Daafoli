"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import {
    User,
    LogIn,
    UserPlus,
} from "lucide-react";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import AccountProfile from "./AccountProfile";

const CURRENT_USER_KEY = "daafoli_user";
const USERS_KEY = "daafoli_users";

export default function AccountContainer() {
    const searchParams = useSearchParams();

    const redirectTo = searchParams.get("redirect");

    const [user, setUser] = useState(null);
    const [mode, setMode] = useState("login");
    const [loading, setLoading] = useState(true);

    // =====================================================
    // Helpers
    // =====================================================

    const getSavedUsers = () => {
        try {
            const savedUsers = localStorage.getItem(USERS_KEY);

            if (!savedUsers) {
                return [];
            }

            const parsedUsers = JSON.parse(savedUsers);

            if (!Array.isArray(parsedUsers)) {
                return [];
            }

            return parsedUsers;
        } catch (error) {
            console.error(
                "خطا در خواندن لیست کاربران:",
                error
            );

            return [];
        }
    };

    const saveUsers = (users) => {
        try {
            localStorage.setItem(
                USERS_KEY,
                JSON.stringify(users)
            );

            return true;
        } catch (error) {
            console.error(
                "خطا در ذخیره کاربران:",
                error
            );

            return false;
        }
    };

    const saveCurrentUser = (userData) => {
        try {
            localStorage.setItem(
                CURRENT_USER_KEY,
                JSON.stringify(userData)
            );

            return true;
        } catch (error) {
            console.error(
                "خطا در ذخیره کاربر فعلی:",
                error
            );

            return false;
        }
    };

    const getCurrentUser = () => {
        try {
            const savedUser = localStorage.getItem(
                CURRENT_USER_KEY
            );

            if (!savedUser) {
                return null;
            }

            const parsedUser = JSON.parse(savedUser);

            if (
                parsedUser &&
                typeof parsedUser === "object" &&
                parsedUser.phone
            ) {
                return parsedUser;
            }

            localStorage.removeItem(CURRENT_USER_KEY);

            return null;
        } catch (error) {
            console.error(
                "خطا در خواندن اطلاعات کاربر:",
                error
            );

            localStorage.removeItem(CURRENT_USER_KEY);

            return null;
        }
    };

    const dispatchUserUpdate = () => {
        window.dispatchEvent(
            new Event("userUpdated")
        );
    };

    const handleRedirect = () => {
        if (!redirectTo) {
            return;
        }

        // فقط مسیرهای داخلی سایت مجاز هستند.
        if (!redirectTo.startsWith("/")) {
            return;
        }

        window.location.assign(redirectTo);
    };

    // =====================================================
    // خواندن کاربر
    // =====================================================

    useEffect(() => {
        const loadUser = () => {
            try {
                const savedUser = getCurrentUser();

                if (savedUser) {
                    setUser(savedUser);
                }
            } catch (error) {
                console.error(
                    "خطا در بارگذاری حساب کاربری:",
                    error
                );
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, []);

    // =====================================================
    // Login
    // =====================================================

    const handleLogin = ({
        phone,
        password,
    }) => {
        try {
            const users = getSavedUsers();

            const normalizedPhone = phone.trim();

            const foundUser = users.find(
                (item) =>
                    item &&
                    item.phone === normalizedPhone &&
                    item.password === password
            );

            if (!foundUser) {
                return {
                    success: false,
                    message:
                        "شماره موبایل یا رمز عبور اشتباه است.",
                };
            }

            const userData = {
                id: foundUser.id,
                name: foundUser.name,
                phone: foundUser.phone,
                createdAt: foundUser.createdAt,
            };

            const saved = saveCurrentUser(
                userData
            );

            if (!saved) {
                return {
                    success: false,
                    message:
                        "ذخیره اطلاعات حساب انجام نشد. لطفاً دوباره تلاش کنید.",
                };
            }

            setUser(userData);

            dispatchUserUpdate();

            handleRedirect();

            return {
                success: true,
            };
        } catch (error) {
            console.error(
                "خطا در ورود کاربر:",
                error
            );

            return {
                success: false,
                message:
                    "خطایی هنگام ورود رخ داد. لطفاً دوباره تلاش کنید.",
            };
        }
    };

    // =====================================================
    // Register
    // =====================================================

    const handleRegister = ({
        name,
        phone,
        password,
    }) => {
        try {
            const users = getSavedUsers();

            const normalizedPhone = phone.trim();

            const existingUser = users.find(
                (item) =>
                    item &&
                    item.phone === normalizedPhone
            );

            if (existingUser) {
                return {
                    success: false,
                    message:
                        "با این شماره موبایل قبلاً حساب کاربری ساخته شده است.",
                };
            }

            const userData = {
                id: `user_${Date.now()}_${Math.random()
                    .toString(36)
                    .slice(2, 8)}`,

                name: name.trim(),

                phone: normalizedPhone,

                password,

                createdAt:
                    new Date().toISOString(),
            };

            const updatedUsers = [
                ...users,
                userData,
            ];

            const saved = saveUsers(
                updatedUsers
            );

            if (!saved) {
                return {
                    success: false,
                    message:
                        "ذخیره اطلاعات حساب انجام نشد. لطفاً دوباره تلاش کنید.",
                };
            }

            const currentUser = {
                id: userData.id,
                name: userData.name,
                phone: userData.phone,
                createdAt:
                    userData.createdAt,
            };

            const currentUserSaved =
                saveCurrentUser(
                    currentUser
                );

            if (!currentUserSaved) {
                return {
                    success: false,
                    message:
                        "حساب ساخته شد اما ورود خودکار انجام نشد. لطفاً دوباره وارد شوید.",
                };
            }

            setUser(currentUser);

            dispatchUserUpdate();

            handleRedirect();

            return {
                success: true,
            };
        } catch (error) {
            console.error(
                "خطا در ثبت‌نام کاربر:",
                error
            );

            return {
                success: false,
                message:
                    "خطایی هنگام ثبت‌نام رخ داد. لطفاً دوباره تلاش کنید.",
            };
        }
    };

    // =====================================================
    // Logout
    // =====================================================

    const handleLogout = () => {
        try {
            localStorage.removeItem(
                CURRENT_USER_KEY
            );

            setUser(null);

            setMode("login");

            dispatchUserUpdate();
        } catch (error) {
            console.error(
                "خطا در خروج از حساب:",
                error
            );
        }
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
                            onClick={() =>
                                setMode("login")
                            }
                            className={`flex items-center justify-center gap-2 py-5 text-sm font-bold transition ${
                                mode === "login"
                                    ? "border-b-2 border-[#D96C8A] text-[#D96C8A]"
                                    : "text-gray-500 hover:text-[#D96C8A]"
                            }`}
                        >
                            <LogIn size={18} />

                            ورود
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                setMode("register")
                            }
                            className={`flex items-center justify-center gap-2 py-5 text-sm font-bold transition ${
                                mode === "register"
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
                                onRegister={
                                    handleRegister
                                }
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