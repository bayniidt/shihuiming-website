"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  internal: boolean;
  children?: { label: string; href: string; internal: boolean }[];
}

const navItems: NavItem[] = [
  { label: "网站首页", href: "/", internal: true },
  {
    label: "关于光泰",
    href: "/list/6",
    internal: true,
    children: [
      { label: "公司简介", href: "/list/6#about1", internal: true },
      { label: "公司愿景", href: "/list/6#about2", internal: true },
      { label: "发展历程", href: "/list/187", internal: false },
      { label: "荣誉资质", href: "/list/6#about4", internal: true },
      { label: "公司风采", href: "/list/189", internal: false },
    ],
  },
  {
    label: "公司产业",
    href: "/list/1",
    internal: true,
    children: [
      { label: "不锈钢表面处理", href: "/list/190", internal: false },
      { label: "铜材表面处理", href: "/list/191", internal: true },
      { label: "铝材表面处理", href: "/list/192", internal: true },
    ],
  },
  {
    label: "行业应用",
    href: "/list/193",
    internal: true,
    children: [
      { label: "医疗机械", href: "/list/193", internal: true },
      { label: "家用行业", href: "/list/194", internal: true },
      { label: "食品机械", href: "/list/195", internal: true },
      { label: "核电应用", href: "/list/196", internal: true },
      { label: "刀具应用", href: "/list/197", internal: true },
    ],
  },

  { label: "科技创新", href: "/list/184", internal: true },

  { label: "联系我们", href: "/list/179", internal: true },
  {
    label: "语言",
    href: "#",
    internal: false,
    children: [
      { label: "中文", href: "http://zggt-group.com/", internal: false },
      { label: "英语", href: "http://en.zggt-group.com/", internal: false },
    ],
  },
];

const navToParentMap: Record<string, string> = {
  "/list/6": "关于光泰",
  "/list/1": "公司产业",
  "/list/190": "公司产业",
  "/list/191": "公司产业",
  "/list/192": "公司产业",
  "/list/193": "行业应用",
  "/list/194": "行业应用",
  "/list/195": "行业应用",
  "/list/196": "行业应用",
  "/list/197": "行业应用",
  "/list/184": "科技创新",
  "/list/179": "联系我们",
  "/list/11": "新闻资讯",
  "/list/200": "人力资源",
};

function NavLink({ href, internal, children, className, style }: { href: string; internal: boolean; children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  if (internal) {
    return <Link href={href} className={className} style={style}>{children}</Link>;
  }
  const externalHref = href.startsWith("http") ? href : `https://www.zggt-group.com${href}.html`;
  return <a href={externalHref} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={className} style={style}>{children}</a>;
}

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchClosing, setSearchClosing] = useState(false);
  const pathname = usePathname();

  const activeLabel = navToParentMap[pathname] || (pathname === "/" ? "网站首页" : "");

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
            <Link href="/">
              <Image src="/images/logo.png" alt="光泰" width={171} height={57} priority />
            </Link>
          </div>

          <div className="float-right mt-[61px] relative transition-all duration-[0.3s]">
            <i
              className="block w-[20px] h-[20px] cursor-pointer ml-[40px]"
              style={{ background: "url(/images/search.png) no-repeat", backgroundSize: "100%" }}
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
                      style={{ background: "url(/images/close.png) no-repeat", backgroundSize: "25px", backgroundPosition: "center" }}
                      onClick={closeSearch}
                    />
                  </div>
                </form>
              </div>
            )}
          </div>

          <nav className="float-right">
            <ul className="clearfix">
              {navItems.map((item) => {
                const isActive = item.label === activeLabel;
                return (
                  <li key={item.label} className="group float-left mx-[15px] h-[140px] leading-[140px] relative transition-all duration-[0.3s]">
                    <NavLink
                      href={item.href}
                      internal={item.internal}
                      className="block h-full text-[17px] relative transition-none"
                      style={isActive ? { color: "var(--color-site-orange)" } : undefined}
                    >
                      {item.label}
                    </NavLink>
                    {item.children && item.children.length > 0 && (
                      <div className="w-[150px] bg-white text-[12px] text-left absolute left-[-35px] top-full h-0 overflow-hidden opacity-0 invisible group-hover:h-auto group-hover:opacity-100 group-hover:visible group-hover:mt-0 shadow-[0_0_16px_-4px_rgba(0,0,0,0.3)] mt-[20px] transition-all duration-[0.3s] z-40">
                        <ol className="py-[12px]">
                          {item.children.map((child) => (
                            <li key={child.label} className="w-full m-0">
                              <NavLink
                                href={child.href}
                                internal={child.internal}
                                className="block px-[10px] w-full h-[50px] leading-[50px] text-[#333] text-[14px] text-center hover:text-white transition-all duration-[0.3s] hover:bg-[var(--color-site-orange)]"
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
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
