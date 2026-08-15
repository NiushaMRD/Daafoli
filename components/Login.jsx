"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff, Lock, User } from "lucide-react";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    setError("");

    if (!phone.trim() || !password.trim()) {
      setError("لطفاً شماره موبایل و رمز عبور را وارد کنید.");
      return;
    }

    setLoading(true);

    try {
      /*
       * فعلاً Login واقعی نداریم.
       * وضعیت ورود را برای اتصال به Checkout ذخیره می‌کنیم.
       */

      const user = {
        phone: phone.trim(),
        isLoggedIn: true,
      };

      localStorage.setItem(
        "daafoli_user",
        JSON.stringify(user)
      );

      /*
       * اطلاع‌رسانی به سایر بخش‌های سایت
       */
      window.dispatchEvent(
        new Event("authUpdated")
      );

      /*
       * اگر کاربر از Checkout آمده باشد،
       * بعد از ورود دوباره به Checkout برمی‌گردد.
       */

      const params = new URLSearchParams(
        window.location.search
      );

      const redirectTo =
        params.get("redirect") || "/checkout";

      window.location.href = redirectTo;
    } catch (error) {
      console.error("خطا در ورود:", error);

      setError(
        "در ورود مشکلی ایجاد شد. دوباره تلاش کنید."
      );

      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF7F8]">

      {/* =====================================================
          Header
      ===================================================== */}

      <div className="mx-auto flex max-w-7xl items-center px-5 py-6">

        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium text-[#333333] transition hover:text-[#D96C8A]"
        >
          <ArrowRight size={18} />

          بازگشت به فروشگاه
        </Link>

      </div>

      {/* =====================================================
          Login
      ===================================================== */}

      <section className="flex min-h-[calc(100vh-100px)] items-center justify-center px-5 pb-16">

        <div className="w-full max-w-md">

          {/* Title */}

          <div className="mb-8 text-center">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#F8E9EE]">

              <User
                size={28}
                className="text-[#D96C8A]"
              />

            </div>

            <h1 className="text-3xl font-extrabold text-[#111111]">
              ورود به حساب کاربری
            </h1>

            <p className="mt-3 text-sm leading-7 text-[#666666]">
              برای ادامه فرایند خرید وارد حساب کاربری خود شوید.
            </p>

          </div>

          {/* Card */}

          <div className="rounded-3xl border border-[#EFE7EA] bg-white p-6 shadow-sm md:p-8">

            <form
              onSubmit={handleLogin}
              className="space-y-5"
            >

              {/* Phone */}

              <div>

                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-[#222222]"
                >
                  شماره موبایل
                </label>

                <div className="relative">

                  <User
                    size={19}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888888]"
                  />

                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(event) =>
                      setPhone(event.target.value)
                    }
                    placeholder="مثلاً 09123456789"
                    dir="ltr"
                    className="h-12 w-full rounded-2xl border border-[#E5E5E5] bg-white pr-12 pl-4 text-left text-sm text-[#111111] outline-none transition focus:border-[#D96C8A]"
                  />

                </div>

              </div>

              {/* Password */}

              <div>

                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-[#222222]"
                >
                  رمز عبور
                </label>

                <div className="relative">

                  <Lock
                    size={19}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888888]"
                  />

                  <input
                    id="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    placeholder="رمز عبور خود را وارد کنید"
                    className="h-12 w-full rounded-2xl border border-[#E5E5E5] bg-white px-12 text-right text-sm text-[#111111] outline-none transition focus:border-[#D96C8A]"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        (current) => !current
                      )
                    }
                    aria-label={
                      showPassword
                        ? "مخفی کردن رمز عبور"
                        : "نمایش رمز عبور"
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#777777] transition hover:text-[#D96C8A]"
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>

                </div>

              </div>

              {/* Error */}

              {error && (

                <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm leading-6 text-red-600">
                  {error}
                </div>

              )}

              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                className={`h-12 w-full rounded-full font-bold text-white transition ${
                  loading
                    ? "cursor-not-allowed bg-gray-400"
                    : "bg-[#D96C8A] hover:bg-[#C45A78]"
                }`}
              >

                {loading
                  ? "در حال ورود..."
                  : "ورود به حساب"}

              </button>

            </form>

            {/* Register */}

            <div className="mt-6 border-t border-[#F0E8EB] pt-6 text-center">

              <p className="text-sm text-[#666666]">

                حساب کاربری ندارید؟

                <Link
                  href="/account/register"
                  className="mr-2 font-bold text-[#D96C8A] transition hover:text-[#C45A78]"
                >
                  ثبت‌نام کنید
                </Link>

              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}