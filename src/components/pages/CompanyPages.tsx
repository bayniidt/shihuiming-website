import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/Banner";
import { type Locale, type ProductCategory, companyImages, localizedPath, siteContent } from "@/lib/site-content";

function SectionIntro({ title, eyebrow }: { title: string; eyebrow: string }) {
  return (
    <div className="w-full bg-[var(--color-site-light-bg)] min-h-[200px] flex items-center py-[46px]">
      <div className="w1140">
        <p className="text-[14px] tracking-[4px] uppercase text-[var(--color-site-orange)] mb-[10px]">{eyebrow}</p>
        <h2 className="text-[40px] leading-[1.2] font-bold text-[#212121]" style={{ fontFamily: '"Microsoft YaHei"' }}>
          {title}
        </h2>
      </div>
    </div>
  );
}

function Subnav({
  locale,
  links,
}: {
  locale: Locale;
  links: { text: string; href: string; cur?: boolean }[];
}) {
  return (
    <div className="Container-wrapper">
      <div className="pub_cate clearfix py-[30px]">
        <div className="contain">
          <ul>
            {links.map((link) => (
              <li key={link.text} className="float-left mr-[25px] text-[18px] relative mb-[12px]">
                {link.cur && <span className="absolute left-0 top-1/2 -mt-[3px] h-[7px] w-[7px] bg-[var(--color-site-orange)]" />}
                <a
                  href={localizedPath(link.href, locale)}
                  style={{
                    color: link.cur ? "#333" : "#888",
                    borderRight: "1px solid var(--color-site-border)",
                    paddingRight: "25px",
                    paddingLeft: link.cur ? "20px" : "0",
                  }}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function AboutPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  return (
    <>
      <Banner title={content.nav[1].label} subtitle={content.brand.slogan} bgImage={companyImages[6]} />
      <Subnav
        locale={locale}
        links={[
          { text: locale === "zh" ? "公司简介" : "Company Profile", href: "/list/6#about1", cur: true },
          { text: content.labels.coreValues, href: "/list/6#about2" },
          { text: content.labels.gallery, href: "/list/6#about3" },
        ]}
      />
      <section id="about1" className="py-[80px] bg-white">
        <div className="contain">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-[48px] items-center">
            <div>
              <p className="text-[15px] tracking-[4px] uppercase text-[var(--color-site-orange)] mb-[12px]">{content.brand.slogan}</p>
              <h1 className="text-[38px] leading-[1.25] font-bold text-[#212121] mb-[24px]">{content.brand.name}</h1>
              <p className="text-[16px] leading-[32px] text-[#595656] mb-[24px]">{content.intro}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-[18px] pt-[10px]">
                {[content.brand.founded, content.brand.headquarters, "15,000+"].map((stat, index) => (
                  <div key={stat} className="bg-[var(--color-site-light-bg)] px-[22px] py-[20px]">
                    <strong className="block text-[26px] text-[#212121]">{stat}</strong>
                    <span className="text-[13px] text-[#777]">
                      {index === 0 ? (locale === "zh" ? "创立时间" : "Established") : index === 1 ? (locale === "zh" ? "总部所在地" : "Headquarters") : locale === "zh" ? "服务企业" : "Customers Served"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[14px]">
              {[companyImages[6], companyImages[7], companyImages[0], companyImages[12]].map((image, index) => (
                <Image
                  key={image}
                  src={image}
                  alt={`${content.brand.shortName} ${index + 1}`}
                  width={960}
                  height={540}
                  className={`w-full object-cover ${index === 0 ? "col-span-2 h-[280px]" : "h-[180px]"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about2" className="py-[76px] bg-[var(--color-site-light-bg)]">
        <div className="contain">
          <div className="mb-[42px]">
            <h2 className="text-[34px] font-bold text-[#212121] mb-[12px]">{content.labels.coreValues}</h2>
            <p className="text-[17px] leading-[30px] text-[#666] max-w-[860px]">{content.brand.vision}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[22px]">
            {content.values.map((value, index) => (
              <article key={value.title} className="bg-white p-[26px] min-h-[220px] shadow-[0_0_12px_rgba(0,0,0,0.04)]">
                <span className="text-[28px] font-bold text-[var(--color-site-orange)]">0{index + 1}</span>
                <h3 className="text-[20px] font-bold text-[#212121] mt-[18px] mb-[12px]">{value.title}</h3>
                <p className="text-[15px] leading-[28px] text-[#666]">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about3" className="py-[76px] bg-white">
        <div className="contain">
          <div className="flex items-end justify-between gap-[30px] mb-[36px]">
            <div>
              <h2 className="text-[34px] font-bold text-[#212121] mb-[10px]">{content.labels.gallery}</h2>
              <p className="text-[16px] text-[#666]">{content.market}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
            {companyImages.map((image, index) => (
              <Image
                key={image}
                src={image}
                alt={`${content.labels.gallery} ${index + 1}`}
                width={960}
                height={540}
                className={`w-full object-cover ${index % 5 === 0 ? "md:col-span-2 h-[360px]" : "h-[260px]"}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function ProductsPage({ locale, focus, productSlug }: { locale: Locale; focus?: "copper" | "aluminum"; productSlug?: string }) {
  const content = siteContent[locale];
  const focusSlug = productSlug ?? (focus === "copper" ? "copper-polishing" : focus === "aluminum" ? "aluminum-chromium-free-passivation" : undefined);
  const focusProduct = focusSlug ? content.products.find((product) => product.slug === focusSlug) : undefined;
  const products = focusProduct ? [focusProduct] : content.products;
  const title = focusProduct?.title ?? content.labels.productMatrix;

  return (
    <>
      <Banner title={title} subtitle={focusProduct?.subtitle ?? content.brand.slogan} bgImage={focus === "copper" ? companyImages[11] : focus === "aluminum" ? companyImages[4] : companyImages[0]} />
      <Subnav
        locale={locale}
        links={[
          { text: content.labels.productMatrix, href: "/list/1", cur: !focusProduct },
          ...content.products.map((product) => ({
            text: product.title,
            href: product.href,
            cur: focusProduct?.slug === product.slug,
          })),
        ]}
      />
      <SectionIntro title={title} eyebrow={content.brand.shortName} />
      <section className="py-[66px] bg-white">
        <div className="contain">
          <div className="space-y-[30px]">
            {products.map((product) => (
              <ProductCategoryCard
                key={product.slug}
                product={product}
                locale={locale}
                index={content.products.findIndex((item) => item.slug === product.slug)}
                compact={products.length === 1}
                href={localizedPath(product.href, locale)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCategoryCard({
  product,
  locale,
  index,
  compact,
  href,
}: {
  product: ProductCategory;
  locale: Locale;
  index: number;
  compact: boolean;
  href: string;
}) {
  const hasImages = product.images.length > 0;
  const displayIndex = index >= 0 ? index + 1 : 1;
  const overviewLabel = locale === "zh" ? "核心定位" : "Positioning";
  const featureLabel = locale === "zh" ? "产品特点" : "Features";
  const applicationLabel = locale === "zh" ? "典型应用" : "Applications";
  const standardLabel = locale === "zh" ? "符合标准" : "Standards";
  const profileLabel = locale === "zh" ? "资料介绍" : "Profile";

  const card = (
    <article
      id={product.slug}
      className={`scroll-mt-[170px] bg-white border border-[#e5efec] shadow-[0_10px_28px_rgba(0,87,68,0.06)] transition-all duration-[0.3s] hover:shadow-[0_18px_42px_rgba(0,122,80,0.14)] ${
        compact ? "lg:grid lg:grid-cols-[430px_1fr]" : "lg:grid lg:grid-cols-[390px_1fr]"
      }`}
    >
      {hasImages ? (
        <div className="bg-[var(--color-site-light-bg)] p-[18px]">
          <div className="bg-white h-[290px] flex items-center justify-center overflow-hidden">
            <Image src={product.images[0]} alt={product.title} width={384} height={288} className="max-h-full w-full object-contain p-[8px]" />
          </div>
          <div className="grid grid-cols-3 gap-[10px] mt-[12px]">
            {product.images.map((image, imageIndex) => (
              <div key={image} className="bg-white h-[86px] flex items-center justify-center overflow-hidden">
                <Image src={image} alt={`${product.title} ${imageIndex + 1}`} width={384} height={288} className="max-h-full w-full object-contain p-[6px]" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-[linear-gradient(135deg,rgba(0,122,80,0.11),rgba(8,120,214,0.10))] p-[30px] flex flex-col justify-between min-h-[250px]">
          <div>
            <span className="inline-flex h-[42px] w-[42px] items-center justify-center bg-white text-[var(--color-site-primary)] text-[18px] font-bold">
              {String(displayIndex).padStart(2, "0")}
            </span>
            <p className="mt-[28px] text-[14px] tracking-[4px] uppercase text-[var(--color-site-primary)]">{profileLabel}</p>
          </div>
        </div>
      )}
      <div className="p-[28px] lg:p-[34px]">
        <div className="flex flex-wrap items-center gap-[12px] mb-[12px]">
          <span className="text-[13px] font-bold tracking-[2px] text-[var(--color-site-blue)]">SHM-{String(displayIndex).padStart(2, "0")}</span>
          <span className="h-[1px] w-[46px] bg-[var(--color-site-green)]" />
        </div>
        <h3 className="text-[26px] leading-[1.25] font-bold text-[#212121] mb-[8px]">{product.title}</h3>
        <p className="text-[16px] leading-[28px] text-[var(--color-site-primary)] font-medium mb-[18px]">{product.subtitle}</p>
        <div className="space-y-[18px] text-[15px] leading-[28px] text-[#5d6663]">
          <div>
            <h4 className="text-[16px] font-bold text-[#26302d] mb-[6px]">{overviewLabel}</h4>
            <p>{product.desc}</p>
          </div>
          <div>
            <h4 className="text-[16px] font-bold text-[#26302d] mb-[8px]">{featureLabel}</h4>
            <ul className="space-y-[8px]">
              {product.details.map((detail) => (
                <li key={detail} className="relative pl-[18px] before:absolute before:left-0 before:top-[11px] before:h-[6px] before:w-[6px] before:bg-[var(--color-site-green)]">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] pt-[4px]">
            <div className="bg-[var(--color-site-light-bg)] px-[18px] py-[16px]">
              <h4 className="text-[15px] font-bold text-[#26302d] mb-[6px]">{applicationLabel}</h4>
              <p>{product.applications}</p>
            </div>
            {product.standards && (
              <div className="bg-[var(--color-site-light-bg)] px-[18px] py-[16px]">
                <h4 className="text-[15px] font-bold text-[#26302d] mb-[6px]">{standardLabel}</h4>
                <p>{product.standards}</p>
              </div>
            )}
          </div>
          {!compact && (
            <span className="inline-flex mt-[4px] px-[20px] py-[10px] bg-[var(--color-site-primary)] text-white text-[14px] font-medium transition-colors duration-[0.3s] group-hover:bg-[var(--color-site-blue)]">
              {locale === "zh" ? "查看详情" : "View details"}
            </span>
          )}
        </div>
      </div>
    </article>
  );

  if (compact) {
    return card;
  }

  return (
    <Link href={href} className="group block">
      {card}
    </Link>
  );
}

export function InnovationPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  return (
    <>
      <Banner title={content.nav[4].label} subtitle={content.brand.slogan} bgImage={companyImages[9]} />
      <SectionIntro title={content.brand.tagline} eyebrow={content.labels.technology} />
      <section className="py-[66px] bg-white">
        <div className="w1140">
          <p className="text-[16px] text-[#212121] leading-[32px] mb-[36px]">{content.market}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            {content.technology.map((item, index) => (
              <article key={item.title} className="group">
                <div className="overflow-hidden">
                  <Image src={companyImages[index + 10]} alt={item.title} width={960} height={540} className="w-full h-[320px] object-cover transition-transform duration-[0.5s] group-hover:scale-105" />
                </div>
                <div className="pt-[18px] pb-[24px]">
                  <h3 className="text-[22px] font-bold text-[#212121] mb-[10px]">{item.title}</h3>
                  <p className="text-[15px] leading-[28px] text-[#666]">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function ApplicationsPage({ locale, slug }: { locale: Locale; slug: string }) {
  const content = siteContent[locale];
  const app = content.applications.find((item) => item.slug === slug) ?? content.applications[0];
  const index = content.applications.findIndex((item) => item.slug === app.slug);
  return (
    <>
      <Banner title={app.title} subtitle={content.labels.applications} bgImage={companyImages[(index + 3) % companyImages.length]} />
      <Subnav
        locale={locale}
        links={content.applications.map((item) => ({
          text: item.title,
          href: `/list/${item.slug}`,
          cur: item.slug === app.slug,
        }))}
      />
      <SectionIntro title={app.title} eyebrow={content.labels.applications} />
      <section className="py-[66px] bg-white">
        <div className="w1140">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-[42px] items-start">
            <Image src={companyImages[(index + 5) % companyImages.length]} alt={app.title} width={960} height={540} className="w-full h-[420px] object-cover" />
            <div>
              <h3 className="text-[28px] font-bold text-[#212121] mb-[18px]">{app.title}</h3>
              <p className="text-[17px] leading-[34px] text-[#555] mb-[24px]">{app.text}</p>
              <p className="text-[16px] leading-[32px] text-[#666]">{content.intro}</p>
              <div className="mt-[30px] grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
                {content.technology.slice(0, 2).map((item) => (
                  <div key={item.title} className="bg-[var(--color-site-light-bg)] p-[22px]">
                    <h4 className="text-[18px] font-bold text-[#212121] mb-[8px]">{item.title}</h4>
                    <p className="text-[14px] leading-[24px] text-[#666]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function ContactPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  const cards = [
    { title: content.labels.phone, text: content.contact.phone },
    { title: content.labels.address, text: content.contact.address },
    { title: "Email", text: content.contact.email },
    { title: locale === "zh" ? "服务承诺" : "Service Promise", text: content.contact.service },
  ];
  return (
    <>
      <Banner title={content.labels.contactUs} subtitle={content.brand.slogan} bgImage={companyImages[8]} />
      <section className="py-[76px] bg-white">
        <div className="contain">
          <div className="text-center mb-[42px]">
            <p className="text-[14px] tracking-[5px] uppercase text-[var(--color-site-orange)] mb-[10px]">{content.brand.shortName}</p>
            <h1 className="text-[38px] font-bold text-[#212121]">{content.labels.contactUs}</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[22px]">
            {cards.map((card) => (
              <article key={card.title} className="min-h-[210px] text-center bg-white shadow-[0_0_10px_var(--color-site-eee)] px-[18px] py-[42px] transition-all duration-[0.3s] hover:-translate-y-[6px] hover:shadow-[0_12px_28px_rgba(0,122,80,0.14)]">
                <h3 className="text-[22px] font-bold text-[var(--color-site-orange)] mb-[20px]">{card.title}</h3>
                <p className="text-[17px] leading-[28px] text-[#666]">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="relative min-h-[520px] flex items-center" style={{ background: `linear-gradient(rgba(0,0,0,0.46), rgba(0,0,0,0.5)), url(${companyImages[14]}) center / cover` }}>
        <div className="contain text-white">
          <p className="text-[18px] tracking-[4px] uppercase mb-[14px]">{content.brand.slogan}</p>
          <h2 className="text-[42px] font-bold mb-[18px]">{content.brand.name}</h2>
          <p className="text-[18px] leading-[34px] max-w-[780px] text-white/90">{content.brand.vision}</p>
        </div>
      </section>
    </>
  );
}
