import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { magazineArticles } from "@/data/magazine";

export function generateStaticParams() {
  return magazineArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const article = magazineArticles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return {
      title: "مقاله پیدا نشد | دافولی",
    };
  }

  return {
    title: `${article.title} | مجله دافولی`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;

  const article = magazineArticles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return (
      <main
        dir="rtl"
        className="flex min-h-screen items-center justify-center bg-[#FCFAFB] px-5"
      >
        <div className="text-center">

          <h1 className="text-3xl font-black text-[#111111]">
            مقاله پیدا نشد
          </h1>

          <p className="mt-4 text-[#444444]">
            متأسفانه مقاله‌ای با این آدرس وجود ندارد.
          </p>

          <Link
            href="/magazine"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#D96C8A] px-6 py-3 font-bold text-white transition hover:bg-[#c85c7a]"
          >
            <ArrowRight size={18} />
            بازگشت به مجله
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#FCFAFB]"
    >

      {/* Article Header */}

      <article className="mx-auto max-w-5xl px-5 py-12 md:py-20">

        <Link
          href="/magazine"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-[#D96C8A] transition hover:text-[#111111]"
        >
          <ArrowRight size={18} />
          بازگشت به مجله
        </Link>

        <div className="mb-8">

          <span className="text-sm font-bold text-[#D96C8A]">
            {article.category}
          </span>

          <h1 className="mt-4 text-3xl font-black leading-normal text-[#111111] md:text-5xl">
            {article.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#444444] md:text-lg">
            {article.excerpt}
          </p>

          <div className="mt-6 flex items-center gap-5 text-sm text-[#555555]">

            <span>
              {article.date}
            </span>

            <span className="flex items-center gap-2">
              <Clock size={16} />
              {article.readTime}
            </span>

          </div>

        </div>

        {/* Cover */}

        <div className="relative aspect-video overflow-hidden rounded-4xl">

          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />

        </div>

        {/* Content */}

        <div className="mx-auto max-w-3xl py-12">

          <p className="text-lg leading-[2.2] text-[#222222]">
            دنیای زیبایی همیشه در حال تغییر است و هر فصل ترندهای
            جدیدی وارد دنیای میکاپ، مراقبت پوست و استایل می‌شوند.
            در این مقاله از مجله دافولی با جدیدترین نکات و
            ترندهای مرتبط با این موضوع آشنا می‌شویم.
          </p>

          <h2 className="mt-12 text-2xl font-black text-[#111111]">
            چیزهایی که باید بدانیم
          </h2>

          <p className="mt-5 text-base leading-[2.2] text-[#333333]">
            انتخاب محصولات مناسب، شناخت نیازهای پوست و توجه به
            سبک شخصی می‌تواند تفاوت زیادی در نتیجه نهایی ایجاد کند.
            لازم نیست همیشه از تمام ترندها استفاده کنیم؛ مهم این
            است که ترند مناسب خودمان را پیدا کنیم.
          </p>

          <h2 className="mt-12 text-2xl font-black text-[#111111]">
            دافولی چه پیشنهادی دارد؟
          </h2>

          <p className="mt-5 text-base leading-[2.2] text-[#333333]">
            قبل از خرید هر محصول، ترکیبات، نوع پوست، کاربرد محصول
            و نیاز واقعی خودتان را بررسی کنید. انتخاب آگاهانه همیشه
            بهتر از دنبال کردن صرف ترندهاست.
          </p>

        </div>

      </article>

      {/* Back */}

      <div className="border-t border-[#EEE6E9] py-10 text-center">

        <Link
          href="/magazine"
          className="inline-flex items-center gap-2 rounded-full border border-[#D96C8A] px-7 py-3 font-bold text-[#D96C8A] transition hover:bg-[#D96C8A] hover:text-white"
        >
          مشاهده سایر مطالب مجله
          <ArrowRight size={18} />
        </Link>

      </div>

    </main>
  );
}