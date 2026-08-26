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
      href: "/",
      children: [
        { label: locale === "zh" ? "公司简介" : "Company Profile", href: "/list/1#about1" },
        { label: content.labels.coreValues, href: "/list/1#about2" },
        { label: content.labels.gallery, href: "/list/1#about3" },
      ],
    },
    {
      title: content.nav[2].label,
      href: "/list/190",
      children: (["stainless", "copper", "aluminum"] as const).map((category) => ({
        label: content.productCategories[category],
        href: productCategoryPath(category),
      })),
    },
    {
      title: content.labels.applications,
      href: "/list/193",
      children: content.applications.map((item) => ({
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

            <div className="flex-[1.45] min-w-[420px] mx-[30px]">
              <div className="h-[320px] w-full overflow-hidden rounded-[4px] border border-white/10">
                <iframe
                  src="https://api.map.baidu.com/geocoder?address=%E5%B9%BF%E4%B8%9C%E7%9C%81%E4%B8%9C%E8%8E%9E%E5%B8%82%E6%B3%89%E5%92%8C%E8%A1%972%E5%8F%B7&output=html&src=shihuiming-website"
                  title={locale === "zh" ? "东莞市世蕙鸣科技有限公司位置" : "Shihuiming Technology location"}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
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
