import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RightMenu from "@/components/RightMenu";
import { type Locale } from "@/lib/site-content";

export default function SiteShell({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  return (
    <>
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
      <RightMenu locale={locale} />
    </>
  );
}
