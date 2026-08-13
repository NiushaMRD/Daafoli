"use client";

import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { useMemo, useState } from "react";

const brands = [
  { name: "MAC", slug: "mac" },
  { name: "Maybelline", slug: "maybelline" },
  { name: "Neutrogena", slug: "neutrogena" },
  { name: "The Ordinary", slug: "the-ordinary" },
  { name: "Dior", slug: "dior" },
  { name: "La Roche-Posay", slug: "la-roche-posay" },
];

export default function Brands() {
  const [search, setSearch] = useState("");

  const filteredBrands = useMemo(() => {
    return brands.filter((brand) =>
      brand.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <section className="mx-auto max-w-7xl px-5 py-16">

      {/* Header */}

      <div className="mb-12 text-center">

        <span className="text-sm font-bold text-[#D96C8A]">
          Daafoli Brands
        </span>

        <h1 className="mt-3 text-3xl font-extrabold text-[#111111] md:text-5xl">
          برندهای محبوب
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#444444] md:text-base">
          برند مورد علاقه‌ات را پیدا کن و محصولاتش را در دافولی ببین.
        </p>

      </div>

      {/* Search */}

      <div className="mx-auto mb-12 max-w-xl">

        <div className="relative">

          <Search
            size={20}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-[#555]"
          />

          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="جستجوی برند..."
            className="h-14 w-full rounded-full border border-[#E8E0E3] bg-white pr-12 pl-5 text-right text-[#111] outline-none transition focus:border-[#D96C8A]"
          />

        </div>

      </div>

      {/* Brands */}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

        {filteredBrands.map((brand) => (

          <Link
            key={brand.slug}
            href={`/products?brand=${encodeURIComponent(brand.name)}`}
            className="group flex min-h-37.5 items-center justify-center rounded-3xl border border-[#EEE6E9] bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#D96C8A] hover:shadow-lg"
          >

            <div>

              <h2 className="text-xl font-extrabold text-[#111111] transition group-hover:text-[#D96C8A]">
                {brand.name}
              </h2>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-[#555] transition group-hover:text-[#D96C8A]">

                مشاهده محصولات

                <ArrowLeft
                  size={15}
                  className="transition-transform group-hover:-translate-x-1"
                />

              </div>

            </div>

          </Link>

        ))}

      </div>

      {filteredBrands.length === 0 && (

        <div className="py-16 text-center">

          <p className="font-bold text-[#111111]">
            برندی با این نام پیدا نشد.
          </p>

        </div>

      )}

    </section>
  );
}