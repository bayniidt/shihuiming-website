import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "东莞市世蕙鸣科技有限公司",
  description: "专注金属表面处理领域，赋能制造业高质量发展。",
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
