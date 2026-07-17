import { productCategoryPath, type Locale, localizedPath, siteContent } from "@/lib/site-content"
import Image from "next/image"

interface FooterColumn {
  title: string;
  href: string;
  children: { label: string; href: string }[];
}

function getFooterColumns(locale: Locale): FooterColumn[] {
  const content = siteContent[locale];
  return [
    {
      title: content.nav[0].label,
      href: "/list/6",
      children: [
        { label: locale === "zh" ? "公司简介" : "Company Profile", href: "/list/6#about1" },
        { label: content.labels.coreValues, href: "/list/6#about2" },
        { label: content.labels.gallery, href: "/list/6#about3" },
      ],
    },
    {
      title: content.nav[1].label,
      href: "/list/190",
      children: (["stainless", "copper", "aluminum"] as const).map((category) => ({
        label: content.productCategories[category],
        href: productCategoryPath(category),
      })),
    },
    {
      title: content.labels.applications,
      href: "/list/194",
      children: content.applications
        .filter((item) => item.slug !== "193")
        .map((item) => ({
          label: item.title,
          href: `/list/${item.slug}`,
        })),
    },
  ];
}

export default function Footer({ locale = "zh" }: { locale?: Locale }) {
  const content = siteContent[locale];
  const footerColumns = getFooterColumns(locale);
  const contacts = [
    `${content.labels.phone}: ${content.contact.phone}`,
    content.contact.service,
    `${content.labels.address}: ${content.contact.address}`,
    `Email: ${content.contact.email}`,
  ];

  return (
    <footer>
      <div className="bg-[var(--color-site-footer-bg)] py-[60px]">
        <div className="container-site">
          <div className="flex flex-wrap">
            <div className="flex flex-wrap flex-1 gap-[40px]">
              {footerColumns.map((col) => (
                <dl key={col.title} className="min-w-[120px]">
                  <dt className="text-[#aaa] text-[16px] mb-[12px]">
                    <a href={localizedPath(col.href, locale)} className="hover:text-[var(--color-site-accent)] transition-colors duration-[0.3s]">
                      {col.title}
                    </a>
                  </dt>
                  {col.children.map((child) => (
                    <dd key={child.label} className="leading-[30px]">
                      <a
                        href={localizedPath(child.href, locale)}
                        className="text-[#aaa] text-[14px] hover:text-[var(--color-site-accent)] transition-colors duration-[0.3s]"
                      >
                        {child.label}
                      </a>
                    </dd>
                  ))}
                </dl>
              ))}
            </div>

            <div className="flex-1 min-w-[280px] mx-[30px]">
              <p className="text-[#aaa] text-[14px] mb-[10px]">
                {locale === "zh" ? "公司定位" : "Location"}: {locale === "zh" ? "广东省东莞市寮步镇泉和街2号" : "No.2 Quanhe Street, Liaobu Town, Dongguan, Guangdong"}
              </p>
              <div className="w-full h-[220px] overflow-hidden rounded-[4px]">
                <Image
                  src="/shihuiming-website/images/my-images/地图定位.png"
                  alt={locale === "zh" ? "公司位置" : "Company Location"}
                  width={1200}
                  height={660}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="flex gap-[40px] ml-auto">
              <div className="text-[#aaa] text-[14px] leading-[30px]">
                <strong className="text-[16px] text-[#ddd] block mb-[10px]">{content.labels.contactUs}</strong>
                {contacts.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="text-center">
                <p className="text-[#aaa] text-[14px] mb-[10px]">{content.labels.follow}</p>
                <Image
                  src="/shihuiming-website/images/wechat_qrcode.png"
                  alt={content.labels.wechat}
                  width={120}
                  height={120}
                  className="mx-auto w-[120px] h-[120px] object-contain bg-white p-[6px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#08252b] py-[20px]">
        <div className="container-site text-center">
          <div className="text-[#999] text-[12px] leading-[24px]">
            <span>COPYRIGHT © 2026 ALL RIGHTS RESERVED {content.brand.name}</span>
            <span className="mx-[10px]">|</span>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-[#999] hover:text-[var(--color-site-accent)]">
              ICP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
