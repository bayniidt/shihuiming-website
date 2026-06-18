import { notFound } from "next/navigation";
import { ProductsPage } from "@/components/pages/CompanyPages";
import { siteContent } from "@/lib/site-content";

export function generateStaticParams() {
  return siteContent.zh.products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!siteContent.zh.products.some((product) => product.slug === slug)) {
    notFound();
  }

  return <ProductsPage locale="zh" productSlug={slug} />;
}
