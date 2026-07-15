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

  const iconSprite = (position: string): React.CSSProperties => ({
    backgroundImage: "url(/shihuiming-website/images/rightmenu-icon.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: position,
    backgroundSize: "auto",
  });

  return (
    <div
      className="fixed z-[99999] top-[210px] right-0"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <ul>
        {/* 返回顶部 */}
        <li
          className="h-[55px] rounded-[4px] mb-[1px] bg-[var(--color-site-orange)] text-white overflow-hidden cursor-pointer flex items-center"
          style={{
            width: expanded ? "180px" : "55px",
            transition: "width 0.3s ease",
            justifyContent: "flex-end",
          }}
          onClick={scrollToTop}
        >
          <span className="text-[16px] whitespace-nowrap mr-[10px] shrink-0">
            {content.labels.backToTop}
          </span>
          <div className="w-[55px] h-[55px] shrink-0" style={iconSprite("0 0")} />
        </li>

        {/* 电话 */}
        <li
          className="h-[55px] rounded-[4px] mb-[1px] bg-[var(--color-site-orange)] text-white overflow-hidden flex items-center"
          style={{
            width: expanded ? "220px" : "55px",
            transition: "width 0.3s ease",
            justifyContent: "flex-end",
          }}
        >
          <span className="text-[14px] whitespace-nowrap mr-[10px] shrink-0" style={{ fontFamily: "Arial" }}>
            {content.contact.phone}
          </span>
          <div className="w-[55px] h-[55px] shrink-0" style={iconSprite("0 -55px")} />
        </li>

        {/* 微信咨询 */}
        <li
          className="rounded-[4px] mb-[1px] bg-[var(--color-site-orange)] text-white overflow-hidden"
          style={{
            width: expanded ? "180px" : "55px",
            height: expanded ? "185px" : "55px",
            transition: "width 0.3s ease, height 0.3s ease",
          }}
        >
          <div className="h-[55px] flex items-center justify-end">
            <span className="text-[16px] whitespace-nowrap mr-[10px] shrink-0">
              {content.labels.wechat}
            </span>
            <div className="w-[55px] h-[55px] shrink-0" style={iconSprite("0 -220px")} />
          </div>
          <div className="w-[117px] mx-auto mt-[-5px]">
            <Image
              src="/shihuiming-website/images/wechat_qrcode.png"
              alt={content.labels.wechat}
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
