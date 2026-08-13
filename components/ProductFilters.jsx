"use client";

import { RotateCcw, SlidersHorizontal, Star } from "lucide-react";

const categories = [
  "همه",
  "لوازم آرایشی",
  "مراقبت پوست و مو",
  "عطر و ادکلن",
  "اکسسوری",
];

const brands = [
  "همه",
  "MAC",
  "Maybelline",
  "Neutrogena",
  "Dior",
  "The Ordinary",
  "La Roche-Posay",
  "Gucci",
  "KIKO",
  "SHEGLAM",
  "Louis Vuitton",
  "Chanel",
  "YSL",
  "NIVEA",
  "Catrice",
  "L'Oréal",
];

const ratings = [
  { value: 4, label: "۴ ستاره و بیشتر" },
  { value: 3, label: "۳ ستاره و بیشتر" },
  { value: 2, label: "۲ ستاره و بیشتر" },
];

export default function ProductFilters({
  category,
  setCategory,
  brand,
  setBrand,
  inStock,
  setInStock,
  onlyDiscounted,
  setOnlyDiscounted,
  minRating,
  setMinRating,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  resetFilters,
}) {
  return (
    <aside className="h-fit rounded-3xl bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div className="flex items-center gap-2">

          <SlidersHorizontal
            size={20}
            className="text-[#D96C8A]"
          />

          <h2 className="text-lg font-extrabold text-[#111111]">
            فیلتر محصولات
          </h2>

        </div>

        <button
          type="button"
          onClick={resetFilters}
          className="flex items-center gap-1 text-xs font-semibold text-[#D96C8A] transition hover:text-[#B94F6E]"
        >
          <RotateCcw size={14} />
          حذف فیلترها
        </button>

      </div>

      {/* Category */}

      <div className="mb-8">

        <h3 className="mb-4 font-bold text-[#111111]">
          دسته‌بندی
        </h3>

        <div className="space-y-3">

          {categories.map((item) => (

            <label
              key={item}
              className="flex cursor-pointer items-center gap-3 text-sm text-[#333333]"
            >

              <input
                type="radio"
                name="category"
                value={item}
                checked={category === item}
                onChange={() => setCategory(item)}
                className="h-4 w-4 accent-[#D96C8A]"
              />

              <span>{item}</span>

            </label>

          ))}

        </div>

      </div>

      {/* Brand */}

      <div className="mb-8">

        <h3 className="mb-4 font-bold text-[#111111]">
          برند
        </h3>

        <select
          value={brand}
          onChange={(event) => setBrand(event.target.value)}
          className="h-11 w-full rounded-xl border border-[#E5E5E5] bg-white px-3 text-sm text-[#222222] outline-none transition focus:border-[#D96C8A]"
        >

          {brands.map((item) => (

            <option
              key={item}
              value={item}
            >
              {item}
            </option>

          ))}

        </select>

      </div>

      {/* Availability */}

      <div className="mb-8 border-t border-[#EEEEEE] pt-6">

        <label className="flex cursor-pointer items-center justify-between gap-3">

          <span className="text-sm font-semibold text-[#222222]">
            فقط کالاهای موجود
          </span>

          <input
            type="checkbox"
            checked={inStock}
            onChange={(event) => setInStock(event.target.checked)}
            className="h-5 w-5 accent-[#D96C8A]"
          />

        </label>

      </div>

      {/* Discount */}

      <div className="mb-8 border-t border-[#EEEEEE] pt-6">

        <label className="flex cursor-pointer items-center justify-between gap-3">

          <span className="text-sm font-semibold text-[#222222]">
            فقط کالاهای تخفیف‌دار
          </span>

          <input
            type="checkbox"
            checked={onlyDiscounted}
            onChange={(event) =>
              setOnlyDiscounted(event.target.checked)
            }
            className="h-5 w-5 accent-[#D96C8A]"
          />

        </label>

      </div>

      {/* Rating */}

      <div className="mb-8 border-t border-[#EEEEEE] pt-6">

        <h3 className="mb-4 font-bold text-[#111111]">
          امتیاز کاربران
        </h3>

        <div className="space-y-3">

          <label className="flex cursor-pointer items-center gap-3 text-sm text-black">

            <input
              type="radio"
              name="rating"
              checked={minRating === 0}
              onChange={() => setMinRating(0)}
              className="h-4 w-4 accent-[#D96C8A]"
            />

            <span>همه امتیازها</span>

          </label>

          {ratings.map((rating) => (

            <label
              key={rating.value}
              className="flex cursor-pointer items-center gap-2 text-sm text-black"
            >

              <input
                type="radio"
                name="rating"
                checked={minRating === rating.value}
                onChange={() => setMinRating(rating.value)}
                className="h-4 w-4 accent-[#D96C8A]"
              />

              <span className="flex items-center gap-1">

                <Star
                  size={15}
                  className="fill-[#F5B700] text-[#F5B700]"
                />

                {rating.label}

              </span>

            </label>

          ))}

        </div>

      </div>

      {/* Price */}

      <div className="border-t border-[#EEEEEE] pt-6">

        <h3 className="mb-4 font-bold text-[#111111]">
          محدوده قیمت
        </h3>

        <div className="space-y-3">

          <div>

            <label className="mb-2 block text-xs font-medium text-[#555555]">
              حداقل قیمت
            </label>

            <input
              type="number"
              min="0"
              value={minPrice}
              onChange={(event) =>
                setMinPrice(Number(event.target.value))
              }
              className="h-11 w-full rounded-xl border border-[#E5E5E5] px-3 text-sm text-black outline-none focus:border-[#D96C8A]"
              placeholder="۰"
            />

          </div>

          <div>

            <label className="mb-2 block text-xs font-medium text-[#555555]">
              حداکثر قیمت
            </label>

            <input
              type="number"
              min="0"
              value={maxPrice}
              onChange={(event) =>
                setMaxPrice(Number(event.target.value))
              }
              className="h-11 w-full rounded-xl border border-[#E5E5E5] px-3 text-sm text-black outline-none focus:border-[#D96C8A]"
              placeholder="۱۰,۰۰۰,۰۰۰"
            />

          </div>

        </div>

      </div>

    </aside>
  );
}