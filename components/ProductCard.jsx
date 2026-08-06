"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShoppingBag,
  Star,
} from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="group relative rounded-3xl bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Discount */}

      {product.discount && (
        <span className="absolute right-5 top-5 z-10 rounded-full bg-[#D96C8A] px-3 py-1 text-xs font-bold text-white">
          {product.discount}٪
        </span>
      )}


      {/* Wishlist */}

      <button
        className="absolute left-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition duration-300 hover:text-[#D96C8A]"
      >
        <Heart size={18} />
      </button>


      {/* Image */}

      <Link href={`/products/${product.slug}`}>

        <div className="relative mb-5 h-64 overflow-hidden rounded-2xl bg-[#FCFAFB]">

          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transition duration-500 group-hover:scale-110"
          />

        </div>

      </Link>


      {/* Brand */}

      <p className="mb-2 text-sm text-[#777777]">
        {product.brand}
      </p>


      {/* Title */}

      <Link href={`/products/${product.slug}`}>

        <h3 className="mb-3 line-clamp-2 min-h-12 text-base font-bold text-[#1F1F1F] transition hover:text-[#D96C8A]">
          {product.name}
        </h3>

      </Link>


      {/* Rating */}

      <div className="mb-4 flex items-center gap-1">

        <Star
          size={16}
          className="fill-[#F59E0B] text-[#F59E0B]"
        />

        <span className="text-sm font-medium text-[#333333]">
          {product.rating}
        </span>

      </div>


      {/* Price */}

      <div className="flex items-center justify-between">

        <div>

          {product.oldPrice && (
            <del className="block text-sm text-[#777777]">
              {product.oldPrice} تومان
            </del>
          )}

          <span className="text-lg font-extrabold text-[#111111]">
            {product.price} تومان
          </span>

        </div>


        <button
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D96C8A] text-white transition duration-300 hover:bg-[#C75577]"
        >
          <ShoppingBag size={20} />
        </button>

      </div>

    </div>
  );
}