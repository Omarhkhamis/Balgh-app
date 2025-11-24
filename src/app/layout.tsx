import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "مبادرة مكافحة خطاب العنف والكراهية",
  description: "أداة تحليل تعتمد على الذكاء الاصطناعي لرصد وتصنيف خطاب الكراهية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
