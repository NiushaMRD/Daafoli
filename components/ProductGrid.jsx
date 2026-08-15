"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "./ProductCard";


export default function ProductGrid({
  products,
  search,
  setSearch,
  sort,
  setSort,

  // Wishlist
  wishlist,
  toggleWishlist,

  // Cart
  getCartQuantity,
  onAddToCart,
}) {
  return (
    <div className="min-w-0">

      {/* Top Bar */}

      <div className="mb-8 flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">

        {/* Search */}

        <div className="relative flex-1">

          <Search
            size={20}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555555]"
          />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="نام محصول یا برند را جستجو کنید..."
            className="h-12 w-full rounded-full border border-[#E5E5E5] bg-white pr-12 pl-5 text-right text-sm text-[#111111] outline-none transition placeholder:text-[#666666] focus:border-[#D96C8A]"
          />

        </div>

        {/* Sort */}

        <div className="flex items-center gap-3">

          <SlidersHorizontal
            size={20}
            className="text-[#333333]"
          />

          <label
            htmlFor="product-sort"
            className="sr-only"
          >
            مرتب‌سازی محصولات
          </label>

          <select
            id="product-sort"
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="h-12 min-w-42.5 rounded-full border border-[#E5E5E5] bg-white px-5 text-sm text-[#222222] outline-none transition focus:border-[#D96C8A]"
          >

            <option value="default">
              مرتب‌سازی
            </option>

            <option value="newest">
              جدیدترین
            </option>

            <option value="cheapest">
              ارزان‌ترین
            </option>

            <option value="expensive">
              گران‌ترین
            </option>

            <option value="rating">
              بالاترین امتیاز
            </option>

            <option value="discount">
              بیشترین تخفیف
            </option>

            <option value="bestseller">
              پرفروش‌ترین
            </option>

          </select>

        </div>

      </div>

      {/* Result Count */}

      <div className="mb-5 flex items-center justify-between">

        <p className="text-sm font-medium text-[#333333]">
          {products.length.toLocaleString("fa-IR")} محصول پیدا شد
        </p>

      </div>

      {/* Products */}

      {products.length > 0 ? (

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3">

          {products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}

              // Wishlist
              isWishlisted={wishlist.includes(product.id)}
              onToggleWishlist={() =>
                toggleWishlist(product.id)
              }

              // Cart
              cartQuantity={getCartQuantity(product.id)}
              onAddToCart={onAddToCart}
            />

          ))}

        </div>

      ) : (

        /* Empty State */

        <div className="rounded-3xl bg-white px-6 py-20 text-center shadow-sm">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#F8EDF1]">

            <Search
              size={28}
              className="text-[#D96C8A]"
            />

          </div>

          <h3 className="text-xl font-extrabold text-[#111111]">
            محصولی پیدا نشد
          </h3>

          <p className="mt-3 text-sm leading-7 text-[#444444]">
            محصول موردنظر شما با فیلترها یا عبارت جستجوی فعلی پیدا نشد.
          </p>

        </div>

      )}

    </div>
  );
}