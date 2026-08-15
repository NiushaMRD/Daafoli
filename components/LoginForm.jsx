"use client";

import { useState } from "react";
import { Eye, EyeOff, ArrowLeft, LogIn } from "lucide-react";

export default function LoginForm({
  onLogin,
  onRegisterClick,
}) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // =====================================================
  // Login
  // =====================================================

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    // Validation
    if (!phone.trim()) {
      setError("لطفاً شماره موبایل خود را وارد کنید.");
      return;
    }

    if (!/^09\d{9}$/.test(phone.trim())) {
      setError("شماره موبایل واردشده صحیح نیست.");
      return;
    }

    if (!password.trim()) {
      setError("لطفاً رمز عبور خود را وارد کنید.");
      return;
    }

    if (password.length < 6) {
      setError(
        "رمز عبور باید حداقل ۶ کاراکتر باشد."
      );
      return;
    }

    // =================================================
    // ساخت اطلاعات کاربر
    // =================================================

    const userData = {
      id: `user_${Date.now()}`,
      phone: phone.trim(),
      name: "کاربر دافولی",
      createdAt: new Date().toISOString(),
    };

    // ارسال اطلاعات به AccountContainer
    onLogin(userData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >

      {/* =================================================
          Title
      ================================================= */}

      <div>

        <h2 className="text-xl font-extrabold text-[#111111]">
          ورود به حساب
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          برای ادامه، اطلاعات حساب خود را وارد کنید.
        </p>

      </div>

      {/* =================================================
          Phone
      ================================================= */}

      <div>

        <label
          htmlFor="login-phone"
          className="mb-2 block text-sm font-bold text-[#222222]"
        >
          شماره موبایل
        </label>

        <input
          id="login-phone"
          type="tel"
          dir="ltr"
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
            setError("");
          }}
          placeholder="09123456789"
          autoComplete="tel"
          className="h-12 w-full rounded-2xl border border-[#E5DDE0] bg-[#FCFAFB] px-4 text-left text-sm text-black outline-none transition focus:border-[#D96C8A] focus:ring-2 focus:ring-[#D96C8A]/10"
        />

      </div>

      {/* =================================================
          Password
      ================================================= */}

      <div>

        <label
          htmlFor="login-password"
          className="mb-2 block text-sm font-bold text-[#222222]"
        >
          رمز عبور
        </label>

        <div className="relative">

          <input
            id="login-password"
            type={showPassword ? "text" : "password"}
            dir="ltr"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError("");
            }}
            placeholder="رمز عبور خود را وارد کنید"
            autoComplete="current-password"
            className="h-12 w-full rounded-2xl border border-[#E5DDE0] bg-[#FCFAFB] px-4 pl-12 text-left text-sm text-black outline-none transition focus:border-[#D96C8A] focus:ring-2 focus:ring-[#D96C8A]/10"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword((current) => !current)
            }
            aria-label={
              showPassword
                ? "مخفی کردن رمز عبور"
                : "نمایش رمز عبور"
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-[#D96C8A]"
          >

            {showPassword ? (
              <EyeOff size={19} />
            ) : (
              <Eye size={19} />
            )}

          </button>

        </div>

      </div>

      {/* =================================================
          Error
      ================================================= */}

      {error && (

        <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm leading-6 text-red-600">
          {error}
        </div>

      )}

      {/* =================================================
          Submit
      ================================================= */}

      <button
        type="submit"
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#D96C8A] font-bold text-white transition hover:bg-[#C45A78]"
      >

        <LogIn size={19} />

        ورود به حساب

      </button>

      {/* =================================================
          Register
      ================================================= */}

      <div className="pt-2 text-center">

        <p className="text-sm text-gray-500">
          هنوز حساب کاربری ندارید؟
        </p>

        <button
          type="button"
          onClick={onRegisterClick}
          className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-[#D96C8A] transition hover:text-[#C45A78]"
        >

          ساخت حساب جدید

          <ArrowLeft size={16} />

        </button>

      </div>

    </form>
  );
}