import "./globals.css";

export const metadata = {
  title: "دافولی | با ما همیشه و همه جا داف باشید",
  description:
    "دافولی؛ فروشگاه آنلاین لوازم آرایشی، مراقبت پوست و مو، عطر و ادکلن و اکسسوری.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}