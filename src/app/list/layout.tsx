import SiteShell from "@/components/SiteShell";

export default function ListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteShell locale="zh">{children}</SiteShell>;
}
