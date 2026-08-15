"use client";

import Image from "next/image";
import Link from "next/link";

import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";

export default function ProductCard({
  product,

  // Wishlist
  isWishlisted,
  onToggleWishlist,

  // Cart
  cartQuantity,
  onAddToCart,
}) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-[#EFE7EA] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* =====================================================
          Image
      ===================================================== */}

      <Link href={`/products/${product.slug}`}>

        <div className="relative h-72 overflow-hidden bg-[#FAF7F8]">

          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-6 transition duration-500 group-hover:scale-105"
          />

          {/* Discount */}

          {product.discount > 0 && (
            <div className="absolute right-4 top-4 rounded-full bg-[#D96C8A] px-3 py-1 text-xs font-bold text-white">
              %{product.discount}
            </div>
          )}

          {/* Stock */}

          {!product.stock && (
            <div className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
              ناموجود
            </div>
          )}

        </div>

      </Link>

      {/* =====================================================
          Body
      ===================================================== */}

      <div className="p-5">

        {/* Brand */}

        <p className="mb-2 text-sm font-medium text-gray-800">
          {product.brand}
        </p>

        {/* Product Name */}

        <Link href={`/products/${product.slug}`}>

          <h3 className="line-clamp-2 h-14 text-[16px] font-bold leading-7 text-black transition group-hover:text-[#D96C8A]">
            {product.name}
          </h3>

        </Link>

        {/* =====================================================
            Rating
        ===================================================== */}

        <div className="mt-4 flex items-center justify-between">

          <div className="flex items-center gap-1">

            <FaStar
              size={15}
              className="text-yellow-400"
            />

            <span className="text-sm font-semibold text-black">
              {product.rating}
            </span>

          </div>

          <span className="rounded-full bg-[#F8EDF1] px-3 py-1 text-xs text-[#D96C8A]">
            {product.category}
          </span>

        </div>

        {/* =====================================================
            Price
        ===================================================== */}

        <div className="mt-5">

          {product.oldPrice && (
            <p className="text-sm text-gray-400 line-through">
              {product.oldPrice.toLocaleString("fa-IR")} تومان
            </p>
          )}

          <p className="mt-1 text-xl font-extrabold text-[#111111]">
            {product.price.toLocaleString("fa-IR")} تومان
          </p>

        </div>

        {/* =====================================================
            Buttons
        ===================================================== */}

        <div className="mt-6 flex gap-3">

          {/* =================================================
              Cart
          ================================================= */}

          <button
            type="button"
            onClick={() => onAddToCart(product.id)}
            disabled={!product.stock}
            className={`relative flex h-12 flex-1 items-center justify-center rounded-full font-semibold text-white transition ${
              !product.stock
                ? "cursor-not-allowed bg-gray-400"
                : "bg-[#D96C8A] hover:bg-[#C45A78]"
            }`}
          >

            <BsCart3 size={20} />

            <span className="mr-2">
              {!product.stock
                ? "ناموجود"
                : cartQuantity > 0
                  ? `افزودن (${cartQuantity})`
                  : "افزودن"}
            </span>

          </button>

          {/* =================================================
              Wishlist
          ================================================= */}

          <button
            type="button"
            onClick={onToggleWishlist}
            aria-label={
              isWishlisted
                ? "حذف از علاقه‌مندی‌ها"
                : "افزودن به علاقه‌مندی‌ها"
            }
            className={`flex h-12 w-12 items-center justify-center rounded-full border transition ${
              isWishlisted
                ? "border-[#D96C8A] bg-[#D96C8A] text-white"
                : "border-gray-800 text-gray-800 hover:border-[#D96C8A] hover:text-[#D96C8A]"
            }`}
          >

            <FiHeart
              size={20}
              className={
                isWishlisted
                  ? "fill-current"
                  : ""
              }
            />

          </button>

        </div>

      </div>

    </div>
  );
}