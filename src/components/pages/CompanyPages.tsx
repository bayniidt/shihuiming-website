import Banner from "@/components/Banner"
import { companyImages, galleryImages, localizedPath, productCategoryPath, siteContent, type Locale, type ProductCategory } from "@/lib/site-content"
import { BadgeCheck, Building2, Factory, Globe2, ShieldCheck, UsersRound, type LucideIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
                <Link
                  href={localizedPath(link.href, locale)}
                  style={{
                    color: link.cur ? "#333" : "#888",
                    borderRight: "1px solid var(--color-site-border)",
                    paddingRight: "25px",
                    paddingLeft: link.cur ? "20px" : "0",
                  }}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const missionIcons: LucideIcon[] = [Building2, ShieldCheck, BadgeCheck, Factory, UsersRound, Globe2];

function MissionSection({ locale }: { locale: Locale }) {
  const content = siteContent[locale];

  return (
    <section id="mission" className="scroll-mt-[170px] bg-white py-[86px] lg:py-[106px]">
      <div className="contain">
        <div className="mb-[58px] text-center">
          <p className="mb-[12px] text-[14px] font-medium uppercase tracking-[4px] text-[var(--color-site-primary)]">
            {content.brand.slogan}
          </p>
          <h2 className="text-[34px] font-bold leading-[1.25] text-[#2b2f2e] md:text-[42px]">{content.labels.mission}</h2>
        </div>
        <div className="grid grid-cols-1 gap-x-[56px] gap-y-[58px] sm:grid-cols-2 lg:grid-cols-3">
          {content.missions.map((item, index) => {
            const Icon = missionIcons[index] ?? BadgeCheck;

            return (
              <article
                key={item.title}
                className="group flex min-h-[236px] flex-col items-center text-center transition-transform duration-300 hover:-translate-y-[4px]"
              >
                <div className="mb-[30px] flex h-[88px] w-[88px] items-center justify-center text-[var(--color-site-primary)] transition-colors duration-300 group-hover:text-[var(--color-site-blue)]">
                  <Icon strokeWidth={1.8} className="h-[72px] w-[72px]" aria-hidden="true" />
                </div>
                <h3 className="mb-[16px] text-[25px] font-bold leading-[1.25] text-[#666] md:text-[27px]">{item.title}</h3>
                <p className="max-w-[390px] text-[16px] font-semibold leading-[30px] text-[#6b6f6e] text-pretty">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function AboutPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  return (
    <>
      <Banner title={content.nav[0].label} subtitle={content.brand.slogan} bgImage={companyImages[6]} />
      <Subnav
        locale={locale}
        links={[
          { text: locale === "zh" ? "公司简介" : "Company Profile", href: "/list/6#about1", cur: true },
          { text: content.labels.mission, href: "/list/6#mission" },
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
              {[companyImages[12]].map((image, index) => (
                <Image
                  key={image}
                  src={image}
                  alt={`${content.brand.shortName} ${index + 1}`}
                  width={960}
                  height={600}
                  className={`w-full object-cover ${index === 0 ? "col-span-2 h-[280px]" : "h-[180px]"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <MissionSection locale={locale} />

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
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
            {galleryImages.map((image, index) => (
              <Image
                key={image}
                src={image}
                alt={`${content.labels.gallery} ${index + 1}`}
                width={640}
                height={480}
                sizes="(min-width: 640px) 50vw, 100vw"
                className="w-full h-[260px] object-cover"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function getCategoryBgImage(focus?: string) {
  return focus === "copper" ? companyImages[11] : focus === "aluminum" ? companyImages[4] : companyImages[0];
}

export function ProductsPage({ locale, focus, productSlug }: { locale: Locale; focus?: "stainless" | "copper" | "aluminum"; productSlug?: string }) {
  const content = siteContent[locale];
  const focusProduct = productSlug ? content.products.find((product) => product.slug === productSlug) : undefined;
  const isCategoryLanding = Boolean(focus && !focusProduct);
  const products = focusProduct
    ? [focusProduct]
    : focus
      ? content.products.filter((p) => p.category === focus)
      : content.products;
  const title = focusProduct?.title ?? (focus ? content.productCategories[focus] : content.labels.productMatrix);

  // Group products by category when showing the full list (not single product view)
  const groupedProducts = new Map<string, ProductCategory[]>();
  if (!focusProduct) {
    for (const product of products) {
      const group = groupedProducts.get(product.category) || [];
      group.push(product);
      groupedProducts.set(product.category, group);
    }
  }

  return (
    <>
      <Banner title={title} subtitle={focusProduct?.subtitle ?? content.brand.slogan} bgImage={getCategoryBgImage(focus)} />
      <Subnav
        locale={locale}
        links={(["stainless", "copper", "aluminum"] as const).map((category) => ({
            text: content.productCategories[category],
            href: productCategoryPath(category),
            cur: !focusProduct && focus === category,
          }))}
      />
      <SectionIntro title={title} eyebrow={content.brand.shortName} />
      <section className="py-[66px] bg-white">
        <div className="contain">
          {focusProduct ? (
            <div className="space-y-[30px]">
              <ProductCategoryCard
                product={focusProduct}
                locale={locale}
                index={content.products.findIndex((item) => item.slug === focusProduct.slug)}
                compact
                href={localizedPath(focusProduct.href, locale)}
              />
            </div>
          ) : isCategoryLanding ? (
            <div className="grid grid-cols-1 gap-[26px] md:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <CategoryLandingCard
                  key={product.slug}
                  product={product}
                  locale={locale}
                  href={localizedPath(product.href, locale)}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-[60px]">
              {Array.from(groupedProducts.entries()).map(([category, categoryProducts]) => (
                <div key={category}>
                  <h2 className="text-[32px] font-bold text-[#212121] mb-[30px] pb-[16px] border-b-2 border-[var(--color-site-orange)]">
                    {content.productCategories[category as "stainless" | "copper" | "aluminum"]}
                  </h2>
                  <div className="space-y-[30px]">
                    {categoryProducts.map((product) => (
                      <ProductCategoryCard
                        key={product.slug}
                        product={product}
                        locale={locale}
                        index={content.products.findIndex((item) => item.slug === product.slug)}
                        compact={categoryProducts.length === 1}
                        href={localizedPath(product.href, locale)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function CategoryLandingCard({
  product,
  locale,
  href,
}: {
  product: ProductCategory;
  locale: Locale;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group overflow-hidden border border-[#edf1ef] bg-white shadow-[0_14px_34px_rgba(0,0,0,0.05)] transition-all duration-[0.3s] hover:-translate-y-[4px] hover:shadow-[0_22px_40px_rgba(0,0,0,0.1)]"
    >
      <div className="overflow-hidden bg-[#f5f8f7]">
        <Image
          src={product.images[0] ?? companyImages[0]}
          alt={product.title}
          width={960}
          height={640}
          className="h-[220px] w-full object-cover transition-transform duration-[0.5s] group-hover:scale-105"
        />
      </div>
      <div className="p-[22px]">
        <h3 className="mb-[12px] text-[22px] font-bold leading-[1.3] text-[#212121]">{product.title}</h3>
        <p className="mb-[16px] line-clamp-3 text-[15px] leading-[28px] text-[#6a706d]">{product.desc}</p>
        <span className="inline-flex items-center text-[14px] font-medium text-[var(--color-site-primary)] transition-colors duration-[0.3s] group-hover:text-[var(--color-site-blue)]">
          {locale === "zh" ? "查看详情" : "View details"}
        </span>
      </div>
    </Link>
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
      <Banner title={content.nav[3].label} subtitle={content.brand.slogan} bgImage={companyImages[9]} />
      <SectionIntro title={content.innovationHeadline} eyebrow={content.labels.technology} />
      <section className="py-[66px] bg-white">
        <div className="w1140">
          <p className="text-[16px] text-[#212121] leading-[32px] mb-[36px]">{content.innovationIntro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            {content.technology.map((item, index) => (
              <article key={item.title} className="group">
                <div className="overflow-hidden">
                  <Image src={companyImages[index + 10]} alt={item.title} width={960} height={540} className="w-full h-[320px] object-cover transition-transform duration-[0.5s] group-hover:scale-105" />
                </div>
                <div className="pt-[18px] pb-[24px]">
                  <h3 className="mb-[10px] text-[22px] font-bold text-[var(--color-site-primary)]">{item.title}</h3>
                  <p className="whitespace-pre-line text-[15px] leading-[28px] text-[#666]">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const applicationImages = {
  "194": "/shihuiming-website/images/my-images/网站修改3/行业应用-家电制造.jpeg",
  "195": "/shihuiming-website/images/my-images/网站修改3/行业应用-医疗器械.jpg",
  "196": "/shihuiming-website/images/my-images/网站修改3/行业应用-紧固件.jpeg",
} as const;

export function ApplicationsPage({ locale, slug }: { locale: Locale; slug: string }) {
  const content = siteContent[locale];
  const visibleApplications = content.applications.filter((item) => item.slug !== "193");
  const app = visibleApplications.find((item) => item.slug === slug) ?? visibleApplications[0];
  const appImage = applicationImages[app.slug as keyof typeof applicationImages] ?? companyImages[0];
  return (
    <>
      <Banner title={app.title} subtitle={content.labels.applications} bgImage={appImage} />
      <Subnav
        locale={locale}
        links={visibleApplications.map((item) => ({
          text: item.title,
          href: `/list/${item.slug}`,
          cur: item.slug === app.slug,
        }))}
      />
      <SectionIntro title={app.title} eyebrow={content.labels.applications} />
      <section className="py-[66px] bg-white">
        <div className="w1140">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-[42px] items-start mb-[48px]">
            <Image src={appImage} alt={app.title} width={960} height={540} className="w-full h-[420px] object-cover" />
            <div>
              <h3 className="text-[28px] font-bold text-[#212121] mb-[18px]">{app.title}</h3>
              <p className="text-[17px] leading-[34px] text-[#555] mb-[24px]">{app.text}</p>
            </div>
          </div>
          <div className="space-y-[40px]">
            {app.details.map((detail, i) => (
              <div key={i} className="bg-[var(--color-site-light-bg)] p-[32px]">
                {detail.heading && (
                  <h4 className="text-[22px] font-bold text-[var(--color-site-orange)] mb-[16px] flex items-center gap-[12px]">
                    <span className="inline-flex items-center justify-center w-[32px] h-[32px] bg-[var(--color-site-primary)] text-white text-[14px] font-bold rounded-full shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {detail.heading}
                  </h4>
                )}
                <p className="text-[16px] leading-[32px] text-[#555]">{detail.body}</p>
              </div>
            ))}
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
      <section className="relative min-h-[520px] flex items-center" style={{ background: `linear-gradient(rgba(0,0,0,0.46), rgba(0,0,0,0.5)), url('${encodeURI(companyImages[14])}') center / cover` }}>
        <div className="contain text-white">
          <p className="text-[18px] tracking-[4px] uppercase mb-[14px]">{content.brand.slogan}</p>
          <h2 className="text-[42px] font-bold mb-[18px]">{content.brand.name}</h2>
          <p className="text-[18px] leading-[34px] max-w-[780px] text-white/90">{content.brand.vision}</p>
        </div>
      </section>
    </>
  );
}
