"use client";

import Image from "next/image";
import { useState } from "react";
import { type Locale, siteContent } from "@/lib/site-content";

export default function RightMenu({ locale = "zh" }: { locale?: Locale }) {
  const [expanded, setExpanded] = useState(false);
  const content = siteContent[locale];

  function scrollToTop() {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div
      className="fixed z-[99999] top-[210px] cursor-pointer"
      style={{
        right: expanded ? "0" : "-130px",
        transition: "right 0.3s ease",
      }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <ul>
        <li
          className="h-[55px] leading-[55px] rounded-[4px] mb-[1px] bg-[var(--color-site-orange)] text-[16px] text-white overflow-hidden cursor-pointer"
          style={{
            textIndent: "55px",
            backgroundImage: "url(/images/rightmenu-icon.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 0",
          }}
          onClick={scrollToTop}
        >
          {content.labels.backToTop}
        </li>
        <li
          className="h-[55px] leading-[55px] rounded-[4px] mb-[1px] bg-[var(--color-site-orange)] text-[16px] text-white overflow-hidden"
          style={{
            textIndent: "55px",
            backgroundImage: "url(/images/rightmenu-icon.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 -55px",
            fontFamily: "Arial",
          }}
        >
          {content.contact.phone}
        </li>
        <li
          className="leading-[55px] rounded-[4px] mb-[1px] bg-[var(--color-site-orange)] text-[16px] text-white overflow-hidden"
          style={{
            height: expanded ? "185px" : "55px",
            top: expanded ? "-5px" : "0",
            transition: "height 0.3s ease, top 0.3s ease",
            textIndent: "55px",
            backgroundImage: "url(/images/rightmenu-icon.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 -220px",
            position: "relative",
          }}
        >
          {content.labels.wechat}
          <div className="w-[117px] mx-auto relative mt-[-10px]">
            <Image
              src={content.brand.logo}
              alt={content.brand.shortName}
              width={117}
              height={117}
              className="block w-[117px] h-[117px] object-contain bg-white p-[8px]"
            />
          </div>
        </li>
      </ul>
    </div>
  );
}
