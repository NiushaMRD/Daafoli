import CheckoutContainer from "@/components/CheckoutContainer";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F8] py-12">
      <div className="mx-auto max-w-7xl px-5">

        {/* Header */}

        <div className="mb-10">

          <p className="mb-2 text-sm font-medium text-[#D96C8A]">
            Daafoli
          </p>

          <h1 className="text-3xl font-extrabold text-[#111111] md:text-4xl">
            تکمیل سفارش
          </h1>

          <p className="mt-3 text-sm leading-7 text-[#666666]">
            اطلاعات ارسال و سفارش خود را بررسی و ثبت کنید.
          </p>

        </div>

        <CheckoutContainer />

      </div>
    </main>
  );
}