"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { productCategoryPath, type Locale, localizedPath, siteContent } from "@/lib/site-content";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; internal: boolean }[];
}

const navChildren = {
  about: {
    zh: [
      { label: "公司简介", href: "/list/1#about1", internal: true },
      { label: "核心价值", href: "/list/1#about2", internal: true },
      { label: "企业实景", href: "/list/1#about3", internal: true },
    ],
    en: [
      { label: "Company Profile", href: "/list/1#about1", internal: true },
      { label: "Core Values", href: "/list/1#about2", internal: true },
      { label: "Factory Gallery", href: "/list/1#about3", internal: true },
    ],
  },
  applications: {
    zh: [
      { label: "家居五金", href: "/list/193", internal: true },
      { label: "家电制造", href: "/list/194", internal: true },
      { label: "医疗器械", href: "/list/195", internal: true },
      { label: "紧固件与精密机加工", href: "/list/196", internal: true },
    ],
    en: [
      { label: "Home Hardware", href: "/list/193", internal: true },
      { label: "Home Appliances", href: "/list/194", internal: true },
      { label: "Medical Devices", href: "/list/195", internal: true },
      { label: "Fasteners & Machining", href: "/list/196", internal: true },
    ],
  },
} satisfies Record<string, Record<Locale, { label: string; href: string; internal: boolean }[]>>;

const navToParentMap: Record<string, number> = {
  "/list/6": 1,
  "/list/1": 1,
  "/list/190": 2,
  "/list/191": 2,
  "/list/192": 2,
  "/list/193": 3,
  "/list/194": 3,
  "/list/195": 3,
  "/list/196": 3,
  "/list/184": 4,
  "/list/179": 5,
};

function stripLocale(pathname: string) {
  if (pathname === "/en") {
    return "/";
  }
  if (pathname.startsWith("/en/")) {
    return pathname.slice(3);
  }
  return pathname;
}

function NavLink({ href, internal, locale, children, className, style }: { href: string; internal: boolean; locale: Locale; children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  if (internal) {
    return <Link href={localizedPath(href, locale)} className={className} style={style}>{children}</Link>;
  }
  return <a href={href} className={className} style={style}>{children}</a>;
}

export default function Header({ locale = "zh" }: { locale?: Locale }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchClosing, setSearchClosing] = useState(false);
  const pathname = usePathname();
  const content = siteContent[locale];

  const normalPath = stripLocale(pathname);
  const activeIndex = normalPath.startsWith("/list/products/") ? 2 : navToParentMap[normalPath] ?? (normalPath === "/" ? 0 : -1);
  const otherLocale: Locale = locale === "zh" ? "en" : "zh";
  const altPath = normalPath === "/" ? "/" : normalPath;
  const languageHref = localizedPath(altPath, otherLocale);

  const navItems: NavItem[] = content.nav.map((item, index) => {
    if (index === 1) {
      return { ...item, children: navChildren.about[locale] };
    }
    if (index === 2) {
      return {
        ...item,
        children: (["stainless", "copper", "aluminum"] as const).map((category) => ({
          label: content.productCategories[category],
          href: productCategoryPath(category),
          internal: true,
        })),
      };
    }
    if (index === 3) {
      return { ...item, children: navChildren.applications[locale] };
    }
    return item;
  });

  function openSearch() {
    setSearchOpen(true);
    setSearchClosing(false);
  }

  function closeSearch() {
    setSearchClosing(true);
    setTimeout(() => {
      setSearchOpen(false);
      setSearchClosing(false);
    }, 300);
  }

  return (
    <>
      <div className="h-[140px]" />
      <header className="fixed top-0 left-0 w-full h-[140px] bg-white z-[9999999] transition-all duration-[0.3s] min-w-[1180px]">
        <div className="container-site h-[140px]">
          <div className="float-left mt-[43px] transition-all duration-[0.3s]">
            <Link href={localizedPath("/", locale)} className="block">
              <Image src={content.brand.logo} alt={content.brand.shortName} width={171} height={92} priority className="h-[57px] w-auto object-contain" />
            </Link>
          </div>

          <div className="float-right mt-[61px] relative transition-all duration-[0.3s]">
            <i
              className="block w-[20px] h-[20px] cursor-pointer ml-[40px]"
              style={{ background: "url(/shihuiming-website/images/search.png) no-repeat", backgroundSize: "100%" }}
              onClick={openSearch}
            />
            {searchOpen && (
              <div className="w-[320px] box-border p-[10px] h-[60px] overflow-hidden absolute top-[-22px] right-[-10px] z-[999]">
                <form action="/search.html" method="get">
                  <div
                    className="h-[40px] bg-white w-[300px] shadow-[2px_4px_10px_2px_rgba(0,0,0,0.1)] transition-all duration-[0.3s] flex"
                    style={{ marginLeft: searchClosing ? "300px" : "0" }}
                  >
                    <input className="w-[270px] h-[40px] float-left box-border px-[10px] text-[14px] outline-none" name="keywords" type="text" placeholder="请输入" />
                    <i
                      className="h-[40px] w-[30px] float-left cursor-pointer"
                      style={{ background: "url(/shihuiming-website/images/close.png) no-repeat", backgroundSize: "25px", backgroundPosition: "center" }}
                      onClick={closeSearch}
                    />
                  </div>
                </form>
              </div>
            )}
          </div>

          <nav className="float-right">
            <ul className="clearfix">
              {navItems.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <li key={item.label} className="group float-left mx-[15px] h-[140px] leading-[140px] relative transition-all duration-[0.3s]">
                    <NavLink
                      href={item.href}
                      internal
                      locale={locale}
                      className="block h-full text-[17px] relative transition-none"
                      style={isActive ? { color: "var(--color-site-orange)" } : undefined}
                    >
                      {item.label}
                    </NavLink>
                    {item.children && item.children.length > 0 && (
                      <div className="w-[220px] bg-white text-[12px] text-left absolute left-[-70px] top-full h-0 overflow-hidden opacity-0 invisible group-hover:h-auto group-hover:opacity-100 group-hover:visible group-hover:mt-0 shadow-[0_0_16px_-4px_rgba(0,0,0,0.3)] mt-[20px] transition-all duration-[0.3s] z-40">
                        <ol className="py-[12px]">
                          {item.children.map((child) => (
                            <li key={child.label} className="w-full m-0">
                              <NavLink
                                href={child.href}
                                internal={child.internal}
                                locale={locale}
                                className="flex min-h-[48px] w-full items-center justify-center px-[14px] py-[10px] text-[#333] text-[14px] leading-[20px] text-center hover:text-white transition-all duration-[0.3s] hover:bg-[var(--color-site-orange)]"
                              >
                                {child.label}
                              </NavLink>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </li>
                );
              })}
              <li className="float-left mx-[15px] h-[140px] leading-[140px] relative transition-all duration-[0.3s]">
                <Link href={languageHref} className="block h-full text-[15px] text-[#666] hover:text-[var(--color-site-orange)]">
                  {content.alternateLocaleName}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
