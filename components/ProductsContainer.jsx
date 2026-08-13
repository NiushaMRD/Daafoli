"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { products } from "@/data/products";
import ProductFilters from "./ProductFilters";
import ProductGrid from "./ProductGrid";

export default function ProductsContainer() {
  const searchParams = useSearchParams();

  const brandFromUrl = searchParams.get("brand");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("همه");
  const [brand, setBrand] = useState("همه");
  const [inStock, setInStock] = useState(false);
  const [onlyDiscounted, setOnlyDiscounted] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [sort, setSort] = useState("default");

  // فعال کردن خودکار فیلتر برند از URL
  useEffect(() => {
    if (!brandFromUrl) {
      setBrand("همه");
      return;
    }

    const brandExists = products.some(
      (product) => product.brand === brandFromUrl
    );

    if (brandExists) {
      setBrand(brandFromUrl);
    } else {
      setBrand("همه");
    }
  }, [brandFromUrl]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // جستجو
    if (search.trim()) {
      const value = search.trim().toLowerCase();

      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(value) ||
          product.brand.toLowerCase().includes(value)
      );
    }

    // دسته‌بندی
    if (category !== "همه") {
      result = result.filter(
        (product) => product.category === category
      );
    }

    // برند
    if (brand !== "همه") {
      result = result.filter(
        (product) => product.brand === brand
      );
    }

    // موجودی
    if (inStock) {
      result = result.filter(
        (product) => product.stock === true
      );
    }

    // تخفیف
    if (onlyDiscounted) {
      result = result.filter(
        (product) => product.discount > 0
      );
    }

    // امتیاز
    if (minRating > 0) {
      result = result.filter(
        (product) => product.rating >= minRating
      );
    }

    // قیمت
    result = result.filter(
      (product) =>
        product.price >= minPrice &&
        product.price <= maxPrice
    );

    // مرتب‌سازی
    switch (sort) {
      case "newest":
        result.sort(
          (a, b) => Number(b.isNew) - Number(a.isNew)
        );
        break;

      case "cheapest":
        result.sort(
          (a, b) => a.price - b.price
        );
        break;

      case "expensive":
        result.sort(
          (a, b) => b.price - a.price
        );
        break;

      case "rating":
        result.sort(
          (a, b) => b.rating - a.rating
        );
        break;

      case "discount":
        result.sort(
          (a, b) => b.discount - a.discount
        );
        break;

      case "bestseller":
        result.sort(
          (a, b) =>
            Number(b.bestseller) -
            Number(a.bestseller)
        );
        break;

      default:
        break;
    }

    return result;
  }, [
    search,
    category,
    brand,
    inStock,
    onlyDiscounted,
    minRating,
    minPrice,
    maxPrice,
    sort,
  ]);

  const resetFilters = () => {
    setSearch("");
    setCategory("همه");
    setBrand("همه");
    setInStock(false);
    setOnlyDiscounted(false);
    setMinRating(0);
    setMinPrice(0);
    setMaxPrice(10000000);
    setSort("default");
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">

      <ProductFilters
        category={category}
        setCategory={setCategory}
        brand={brand}
        setBrand={setBrand}
        inStock={inStock}
        setInStock={setInStock}
        onlyDiscounted={onlyDiscounted}
        setOnlyDiscounted={setOnlyDiscounted}
        minRating={minRating}
        setMinRating={setMinRating}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        resetFilters={resetFilters}
      />

      <ProductGrid
        products={filteredProducts}
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />

    </div>
  );
}