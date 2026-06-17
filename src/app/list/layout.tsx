import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RightMenu from "@/components/RightMenu";

export default function ListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <RightMenu />
    </>
  );
}
