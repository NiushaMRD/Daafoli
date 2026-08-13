import Brandss from "@/components/Brandss";

export const metadata = {
  title: "برندها | دافولی",
  description: "برندهای محبوب و معتبر دافولی",
};

export default function BrandsPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#FCFAFB]"
    >
      <Brandss />
    </main>
  );
}