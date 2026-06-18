import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: siteContent.en.seoTitle,
  description: siteContent.en.seoDescription,
};

export default function EnglishListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
