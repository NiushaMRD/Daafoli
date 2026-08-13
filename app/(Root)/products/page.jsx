import { Suspense } from "react";
import ProductsContainer from "@/components/ProductsContainer";

export const metadata = {
  title: "فروشگاه | دافولی",
  description:
    "خرید آنلاین محصولات آرایشی، مراقبت پوست و مو، عطر و ادکلن و اکسسوری از دافولی.",
};

export default function ProductsPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#FCFAFB] py-10 md:py-14"
    >
      <div className="mx-auto max-w-7xl px-5">

        <div className="mb-10">
          <p className="mb-3 text-sm font-bold text-[#D96C8A]">
            فروشگاه دافولی
          </p>

          <h1 className="text-3xl font-extrabold text-[#111111] md:text-4xl">
            همه محصولات
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#444444] md:text-base">
            محصولات مورد علاقه‌ات را از بین مجموعه‌ای از لوازم آرایشی،
            مراقبت پوست و مو، عطر و ادکلن و اکسسوری پیدا کن.
          </p>
        </div>

        <Suspense fallback={<div>در حال بارگذاری...</div>}>
          <ProductsContainer />
        </Suspense>

      </div>
    </main>
  );
}