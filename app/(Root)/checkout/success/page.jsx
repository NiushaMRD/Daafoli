import CheckoutSuccess from "@/components/CheckoutSuccess";
import { Suspense } from "react";

export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <section className="min-h-[70vh] bg-[#FAF7F8] px-5 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
              <div className="mx-auto h-12 w-12 animate-pulse rounded-full bg-[#F8EDF1]" />

              <p className="mt-5 text-sm text-gray-500">
                در حال دریافت اطلاعات سفارش...
              </p>
            </div>
          </div>
        </section>
      }
    >
      <CheckoutSuccess />
    </Suspense>
  );
}