import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "科技创新 - 广东光泰防锈科技有限公司",
  description: "科技创新 - 广东光泰防锈科技有限公司",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
