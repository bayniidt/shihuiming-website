export type Locale = "zh" | "en";

export const defaultLocale: Locale = "zh";

export const companyImages = [
  "/shihuiming-website/images/my-images/web/IMG_5845.jpg",
  "/shihuiming-website/images/my-images/web/IMG_5846.jpg",
  "/shihuiming-website/images/my-images/web/IMG_5847.jpg",
  "/shihuiming-website/images/my-images/web/IMG_5848.jpg",
  "/shihuiming-website/images/my-images/web/IMG_5849.jpg",
  "/shihuiming-website/images/my-images/web/IMG_5850.jpg",
  "/shihuiming-website/images/my-images/web/IMG_5851.jpg",
  "/shihuiming-website/images/my-images/web/IMG_5852.jpg",
  "/shihuiming-website/images/my-images/web/IMG_5853.jpg",
  "/shihuiming-website/images/my-images/web/IMG_5898.jpg",
  "/shihuiming-website/images/my-images/web/IMG_5899.jpg",
  "/shihuiming-website/images/my-images/web/IMG_5900.jpg",
  "/shihuiming-website/images/my-images/web/IMG_5901.jpg",
  "/shihuiming-website/images/my-images/web/IMG_5902.jpg",
  "/shihuiming-website/images/my-images/web/IMG_5903.jpg",
] as const;

export interface ProductCategory {
  slug: string;
  title: string;
  subtitle: string;
  desc: string;
  details: string[];
  applications: string;
  standards?: string;
  images: string[];
  href: string;
}

export function localizedPath(path: string, locale: Locale) {
  if (!path.startsWith("/")) {
    return path;
  }

  if (locale === "en") {
    return path === "/" ? "/en" : `/en${path}`;
  }

  return path;
}

export function productDetailPath(slug: string) {
  return `/list/products/${slug}`;
}

export const siteContent = {
  zh: {
    localeName: "中文",
    alternateLocaleName: "EN",
    seoTitle: "东莞市世蕙鸣科技有限公司",
    seoDescription: "专注金属表面处理领域，赋能制造业高质量发展。",
    brand: {
      name: "东莞市世蕙鸣科技有限公司",
      shortName: "世蕙鸣",
      logo: "/shihuiming-website/images/my-images/logo.png",
      tagline: "专注金属表面处理领域，赋能制造业高质量发展",
      slogan: "精于表面，固于内在",
      founded: "2000年",
      headquarters: "中国·广东东莞",
      headquartersDetail: "粤港澳大湾区先进制造核心枢纽",
      vision:
        "为全国金属制品企业提供优质产品和高效服务，持续钻研金属表面处理技术，努力向国际先进水平看齐。",
    },
    nav: [
      { label: "网站首页", href: "/list/184" },
      { label: "关于世蕙鸣", href: "/list/6" },
      { label: "公司产业", href: "/list/1" },
      { label: "行业应用", href: "/list/193" },
      { label: "科技创新", href: "/list/184" },
      { label: "联系我们", href: "/list/179" },
    ],
    labels: {
      viewMore: "查看详情",
      contactUs: "联系我们",
      backToTop: "返回顶部",
      phone: "电话",
      wechat: "微信咨询",
      follow: "关注世蕙鸣",
      address: "公司地址",
      quickLinks: "快速导航",
      language: "语言",
      gallery: "企业实景",
      applications: "行业应用",
      productMatrix: "产品与服务矩阵",
      mission: "我们的使命",
      coreValues: "核心价值观",
      market: "市场影响力",
      technology: "技术突破",
    },
    intro:
      "自2000年创立以来，东莞市世蕙鸣科技有限公司始终锚定先进制造业的底层核心环节，深耕金属表面处理新材料的研发与制造。作为一家集研发、生产、销售、技术服务于一体的高新技术企业，世蕙鸣为全国范围内的金属制品企业提供优质产品和高效服务，推动中国金属制品产业链向高端化、绿色化转型。",
    market:
      "在过去的24年中，世蕙鸣在竞争激烈的表面处理市场中构建了深厚的技术与服务护城河。通过打造“高盐雾、长寿命、环保合规”的标准化产品矩阵，公司已累计服务超过15,000家制造企业，服务网络覆盖长三角、珠三角等核心工业地带。",
    missions: [
      {
        title: "始于2000",
        text: "世蕙鸣持续深耕金属表面处理领域，以研发、生产、销售和技术服务为一体，服务先进制造关键环节。",
      },
      {
        title: "质量保证",
        text: "把产品稳定性视为企业生命线，围绕高盐雾、长寿命、环保合规建立标准化产品矩阵。",
      },
      {
        title: "高品质服务",
        text: "以客户工艺效果为交付目标，提供从产品选型、工艺优化到现场指导的高效服务。",
      },
      {
        title: "稳定生产供应",
        text: "依托东莞制造基地和成熟供应体系，保障表面处理新材料的稳定量产与及时交付。",
      },
      {
        title: "客户定制",
        text: "按照不同材质、工件结构和盐雾要求匹配配方方案，帮助客户降低不良率与综合成本。",
      },
      {
        title: "服务全国",
        text: "服务网络覆盖长三角、珠三角等核心工业地带，以稳定可靠的产品赢得制造企业信任。",
      },
    ],
    values: [
      {
        title: "技术立本",
        text: "视研发为企业生命线，坚持投入核心技术攻关。",
      },
      {
        title: "客户共赢",
        text: "围绕高盐雾、长寿命、低成本的客户痛点，提供超越化学品供应的工艺优化服务。",
      },
      {
        title: "极致响应",
        text: "依托东莞总部构建全国化服务网络，承诺24小时内专家级技术响应。",
      },
      {
        title: "绿色未来",
        text: "以环保合规为底线，持续开发替代传统强酸、高污染工艺的绿色方案。",
      },
    ],
    products: [
      {
        slug: "stainless-passivation",
        title: "不锈钢钝化防锈系列",
        subtitle: "满足严苛盐雾要求，保持金属原生质感",
        desc: "专门用于不锈钢（奥氏体）及不锈铁（马氏体/铁素体）的表面钝化处理，通过在金属表面重构致密的富铬保护膜，从根本上解决工件加工后易生锈、长霉点的痛点。",
        details: [
          "长效抗腐蚀：304、316等不锈钢中性盐雾测试可稳步提升至240至1000小时以上，400系列不锈铁盐雾提升数倍。",
          "尺寸及外观零影响：属于原色钝化，不改变工件原有尺寸、色泽与光洁度，不影响精密度。",
          "操作简便：药水性能稳定、寿命长、槽液维护简单，适合浸泡、喷淋等多种工艺。",
        ],
        applications: "医疗器械、食品机械、户外五金制品、紧固件、通讯基站零部件。",
        standards: "符合欧盟RoHS、REACH环保标准，通过SGS无毒检测。",
        images: [
          "/shihuiming-website/images/my-images/product-categories/stainless-passivation-1.png",
          "/shihuiming-website/images/my-images/product-categories/stainless-passivation-2.png",
          "/shihuiming-website/images/my-images/product-categories/stainless-passivation-3.png",
        ],
        href: productDetailPath("stainless-passivation"),
      },
      {
        slug: "eco-cleaning",
        title: "环保清洗系列",
        subtitle: "无黄烟工艺，高效除锈去氧化皮",
        desc: "针对金属焊接、精铸、热处理或冲压后产生的顽固氧化皮、焊缝蓝黑斑及锈迹，提供快速、安全的表面清洗与活化。",
        details: [
          "环境与员工友好：新型复合配方酸洗过程无浓烈黄烟、无刺激性酸雾，大幅改善车间作业环境。",
          "反应温和可控：快速剥离氧化皮的同时内置高效缓蚀剂，防止基体过蚀或氢脆。",
          "综合成本低：相比传统强酸，药剂消耗量低、洗净率高，综合使用寿命延长30%以上。",
        ],
        applications: "不锈钢压力容器、管件焊接处清洗、金属铸锻件去氧化皮、电镀/钝化前处理。",
        images: [
          "/shihuiming-website/images/my-images/product-categories/eco-cleaning-1.png",
          "/shihuiming-website/images/my-images/product-categories/eco-cleaning-2.png",
          "/shihuiming-website/images/my-images/product-categories/eco-cleaning-3.png",
        ],
        href: productDetailPath("eco-cleaning"),
      },
      {
        slug: "electropolishing",
        title: "精密电解抛光系列",
        subtitle: "实现纳米级平整度，全面提升微观光洁度",
        desc: "利用电化学原理，对复杂异型件进行表面微观整平与提亮，消除微观毛刺，使金属表面达到镜面般的光泽。",
        details: [
          "无死角抛光：CNC、冲压件、盲孔、内孔等复杂结构均能实现均匀抛光。",
          "提升抗腐蚀力：抛光的同时在金属表面形成富铬层，抛光与防腐同步完成。",
          "工艺稳定：药水导电性能优异，槽渣少、电流分布均匀，有效控制产品不良率。",
        ],
        applications: "医药与半导体管道、高端餐具、精密弹簧、精细饰品、汽车金属饰条。",
        images: [
          "/shihuiming-website/images/my-images/product-categories/electropolishing-1.png",
          "/shihuiming-website/images/my-images/product-categories/electropolishing-2.png",
          "/shihuiming-website/images/my-images/product-categories/electropolishing-3.png",
        ],
        href: productDetailPath("electropolishing"),
      },
      {
        slug: "aluminum-chromium-free-passivation",
        title: "铝材无铬钝化系列",
        subtitle: "绿色环保替代，兼顾耐蚀与电导性能",
        desc: "专为铝及铝合金表面设计的环保转化膜工艺，淘汰传统六价铬和三价铬，助力企业对接国际环保标准。",
        details: [
          "纯无铬配方：100%不含铬及其他重金属，废水处理简单，符合RoHS及绿色供应链采购要求。",
          "涂装附着力优异：转化膜能与喷涂、粉末涂装、粘合剂良好结合，防止漆膜脱落。",
          "低接触电阻：钝化后仍保持良好导电性能，满足电子产品接地与电磁屏蔽需求。",
        ],
        applications: "新能源汽车电池托盘、3C电子压铸机壳、建筑铝型材。",
        images: [
          "/shihuiming-website/images/my-images/product-categories/stainless-passivation-1.png",
          "/shihuiming-website/images/my-images/product-categories/stainless-passivation-2.png",
          "/shihuiming-website/images/my-images/product-categories/stainless-passivation-3.png",
        ],
        href: productDetailPath("aluminum-chromium-free-passivation"),
      },
      {
        slug: "industrial-degreasing-dewaxing",
        title: "工业清洗系列",
        subtitle: "快速除油除蜡，确保工件极净表面",
        desc: "解决不锈钢、铝材等金属制品在切削、冲压、抛光等加工后续阶段，表面残留油污、拉伸油、切削液及抛光蜡的清洗难题。",
        details: [
          "渗透力强，洗净率高：高效表面活性剂迅速乳化、分散顽固油垢和蜂蜡，洗后表面无残留。",
          "基材零损伤：配方温和，对不锈钢、铜、铝等敏感金属均无腐蚀，洗后不发黑、不长斑。",
          "适应性广：覆盖超声波清洗、喷淋清洗及手工擦洗等针对性型号，泡沫低，易漂洗。",
        ],
        applications: "五金冲压件去油、精密五金抛光后除蜡、金属加工中转清洗。",
        images: [
          "/shihuiming-website/images/my-images/product-categories/eco-cleaning-1.png",
          "/shihuiming-website/images/my-images/product-categories/eco-cleaning-2.png",
          "/shihuiming-website/images/my-images/product-categories/eco-cleaning-3.png",
        ],
        href: productDetailPath("industrial-degreasing-dewaxing"),
      },
      {
        slug: "rust-prevention-sealing",
        title: "防锈封闭系列",
        subtitle: "纳米级二次封孔，赋予极限防腐保障",
        desc: "作为金属表面处理的最后一道防线，用于钝化、电镀或清洗后的辅助封闭，通过填充金属微观孔隙，大幅叠加防锈效果。",
        details: [
          "超薄通透膜层：形成仅数微米的纳米级保护膜，抗划伤，不影响螺纹装配与配合公差。",
          "防指纹与抗污：部分型号具备优异防指纹效果，减少日常接触污渍，提升外观质感。",
          "耐湿热老化：增强工件在高温、高湿、海运出口等恶劣仓储运输环境下的耐候能力。",
        ],
        applications: "发黑工件后处理、紧固件外层封闭、电子五金件防油污/防指纹、海运出口五金件保护。",
        images: [
          "/shihuiming-website/images/my-images/product-categories/electropolishing-1.png",
          "/shihuiming-website/images/my-images/product-categories/electropolishing-2.png",
          "/shihuiming-website/images/my-images/product-categories/electropolishing-3.png",
        ],
        href: productDetailPath("rust-prevention-sealing"),
      },
      {
        slug: "copper-polishing",
        title: "铜材抛光系列",
        subtitle: "快速镜面提亮，长效锁定铜件原生光泽",
        desc: "专为纯铜、黄铜、紫铜等各类铜合金设计的化学/电化学抛光及防变色系统，解决铜件加工后黯淡、划痕、易氧化发黑和长绿斑等难题。",
        details: [
          "快速镜面提亮：短时间内消除铜件表面微观毛刺及氧化层，呈现均匀耀眼的金属光泽或镜面效果。",
          "复杂结构无死角：铜接头、盲孔、密集散热片等机械抛光难触及结构也能整体均匀抛光。",
          "不损伤尺寸精密度：反应温和、损耗量微观可控，保护精密铜螺纹和电子插针配合公差。",
        ],
        applications: "卫浴五金龙头、电子接插件/弹片、电力输配电铜排、高档铜制工艺品、散热模组、乐器组件。",
        images: [],
        href: productDetailPath("copper-polishing"),
      },
    ],
    technology: [
      {
        title: "一站式表面处理闭环",
        text: "提供从诊断、研发、生产到驻场指导的一站式解决方案，覆盖不锈钢、不锈铁、铜材、铝材等多种高壁垒基材。",
      },
      {
        title: "无铬钝化技术突破",
        text: "面向RoHS、REACH等环保法规，研发高稳定性铝材无铬钝化技术与环保酸洗工艺。",
      },
      {
        title: "高盐雾极限挑战",
        text: "在不锈钢及不锈铁钝化防锈领域突破传统防锈时效，帮助特定金属材质远超常规工业件要求。",
      },
      {
        title: "场景化配方能力",
        text: "根据CNC、冲压、压铸等客户加工工艺精准匹配产品，降低不良率和综合制造成本。",
      },
    ],
    applications: [
      {
        slug: "193",
        title: "医疗器械",
        text: "为精密医疗器械提供清洗、抛光、钝化防锈等表面处理方案，兼顾耐蚀、环保与长期服役安全。",
      },
      {
        slug: "194",
        title: "消费电子与家用行业",
        text: "服务家电、3C电子及日用金属制品，提升产品外观一致性、防腐能力和绿色制造水平。",
      },
      {
        slug: "195",
        title: "食品机械",
        text: "围绕食品设备的防锈、清洁和卫生安全要求，提供环保型清洗、抛光与钝化组合工艺。",
      },
      {
        slug: "196",
        title: "汽车与新能源",
        text: "面向新能源汽车、汽车制造及高端装备供应链，提供符合环保标准的金属表面防护方案。",
      },
      {
        slug: "197",
        title: "精密五金与刀具",
        text: "为刀具、厨卫和精密五金件提供去毛刺、抛光、钝化和防锈方案，提升耐用性与外观品质。",
      },
    ],
    contact: {
      phone: "0769-8763 3321",
      service: "24小时内专家级技术响应",
      address: "广东省东莞市",
      email: "info@shihuiming.com",
    },
  },
  en: {
    localeName: "English",
    alternateLocaleName: "中文",
    seoTitle: "Dongguan Shihuiming Technology Co., Ltd.",
    seoDescription:
      "Dedicated to metal surface treatment and high-quality manufacturing.",
    brand: {
      name: "Dongguan Shihuiming Technology Co., Ltd.",
      shortName: "Shihuiming",
      logo: "/shihuiming-website/images/my-images/logo.png",
      tagline:
        "Dedicated to metal surface treatment, empowering high-quality manufacturing",
      slogan: "Refining the Surface, Fortifying the Core",
      founded: "Founded in 2000",
      headquarters: "Dongguan, Guangdong, China",
      headquartersDetail:
        "Core hub of advanced manufacturing in the Greater Bay Area",
      vision:
        "To provide premium products and efficient services for metal product enterprises nationwide, continuously delve into metal surface treatment technologies, and align with advanced international standards.",
    },
    nav: [
      { label: "Home", href: "/list/184" },
      { label: "About", href: "/list/6" },
      { label: "Industries", href: "/list/1" },
      { label: "Applications", href: "/list/193" },
      { label: "Innovation", href: "/list/184" },
      { label: "Contact", href: "/list/179" },
    ],
    labels: {
      viewMore: "View more",
      contactUs: "Contact us",
      backToTop: "Back to top",
      phone: "Phone",
      wechat: "Consultation",
      follow: "Follow Shihuiming",
      address: "Address",
      quickLinks: "Quick links",
      language: "Language",
      gallery: "Factory Gallery",
      applications: "Applications",
      productMatrix: "Product & Service Portfolio",
      mission: "Our Mission",
      coreValues: "Core Values",
      market: "Market Leadership",
      technology: "Technological Breakthroughs",
    },
    intro:
      "Since its establishment in 2000, Dongguan Shihuiming Technology Co., Ltd. has anchored itself in the core links of advanced manufacturing, deeply cultivating the R&D and manufacturing of new materials for metal surface treatment. As a high-tech enterprise integrating R&D, production, sales, and technical services, Shihuiming provides premium products and efficient services for metal product enterprises nationwide.",
    market:
      "Over the past 24 years, Shihuiming has built a deep competitive moat in the surface treatment market. With a standardized product matrix characterized by high salt-spray resistance, long lifespan, and environmental compliance, the company has cumulatively served over 15,000 manufacturing enterprises across key industrial zones.",
    missions: [
      {
        title: "Since 2000",
        text: "Shihuiming has focused on metal surface treatment, integrating R&D, production, sales, and technical service for advanced manufacturing.",
      },
      {
        title: "Quality Assurance",
        text: "Product stability is treated as the enterprise lifeline, with standardized systems for corrosion resistance, durability, and compliance.",
      },
      {
        title: "Premium Service",
        text: "We deliver around customer process results, from product selection and process optimization to on-site technical guidance.",
      },
      {
        title: "Stable Supply",
        text: "Backed by Dongguan manufacturing and a mature supply system, we support stable production and timely delivery.",
      },
      {
        title: "Customer Customization",
        text: "Formulas are matched to material, workpiece structure, and salt-spray requirements to reduce defects and total cost.",
      },
      {
        title: "Nationwide Reach",
        text: "Our service network covers key industrial zones, earning manufacturer trust through reliable products and support.",
      },
    ],
    values: [
      {
        title: "Technology as the Foundation",
        text: "We view R&D as the lifeline of the enterprise and consistently invest in core technology breakthroughs.",
      },
      {
        title: "Win-Win with Customers",
        text: "We solve customer pain points around high salt-spray resistance, long lifespan, and low cost with process optimization services.",
      },
      {
        title: "Ultimate Responsiveness",
        text: "Backed by our Dongguan headquarters, we provide expert-level technical response within 24 hours.",
      },
      {
        title: "Green Future",
        text: "Environmental compliance is our bottom line as we develop green alternatives to strong-acid and high-pollution processes.",
      },
    ],
    products: [
      {
        slug: "stainless-passivation",
        title: "Stainless Steel Passivation & Rust Prevention",
        subtitle: "Built for demanding salt-spray requirements while preserving the metal's original finish",
        desc: "A passivation system for austenitic stainless steel and martensitic/ferritic stainless iron. It rebuilds a dense chromium-rich protective film on the metal surface to solve post-machining rust and mildew spotting at the source.",
        details: [
          "Long-term corrosion resistance: 304 and 316 stainless steel can reach 240 to 1,000+ hours in NSS testing, while 400-series stainless iron gains multiple-fold improvement.",
          "No dimensional or appearance impact: original-color passivation preserves size, finish, gloss, and precision.",
          "Easy operation: stable chemistry, long bath life, simple tank maintenance, and compatibility with immersion or spray processes.",
        ],
        applications: "Medical devices, food machinery, outdoor hardware, fasteners, and communication base-station components.",
        standards: "Compliant with RoHS and REACH standards and verified by SGS non-toxic testing.",
        images: [],
        href: productDetailPath("stainless-passivation"),
      },
      {
        slug: "eco-cleaning",
        title: "Eco-Friendly Acid Washing",
        subtitle: "No-yellow-smoke process for efficient rust and oxide-scale removal",
        desc: "Designed for stubborn oxide scale, blue-black weld discoloration, and rust generated after welding, precision casting, heat treatment, or stamping. It provides fast and safer surface cleaning and activation.",
        details: [
          "Workshop-friendly: new compound formulas reduce yellow smoke and irritating acid mist, improving operating conditions and lowering treatment pressure.",
          "Mild and controllable reaction: built-in inhibitors prevent over-etching and hydrogen embrittlement while removing oxide scale quickly.",
          "Lower total cost: lower consumption, higher cleaning rate, and more than 30% longer comprehensive service life compared with traditional strong acids.",
        ],
        applications: "Stainless steel pressure vessels, welded pipe fittings, cast and forged metal oxide-scale removal, and pretreatment before plating or passivation.",
        images: [],
        href: productDetailPath("eco-cleaning"),
      },
      {
        slug: "electropolishing",
        title: "Precision Electropolishing",
        subtitle: "Nano-level leveling that improves microscopic surface smoothness",
        desc: "Using electrochemical principles, this series levels and brightens complex special-shaped parts, removes microscopic burrs, and brings metal surfaces to a mirror-like finish.",
        details: [
          "Uniform polishing without blind spots: complex CNC and stamped parts, blind holes, and inner bores can be polished evenly.",
          "Improved corrosion resistance: a chromium-rich layer forms during polishing, combining brightening and protection.",
          "Stable process: strong conductivity, low sludge, and even current distribution help control defect rates.",
        ],
        applications: "Pharmaceutical and semiconductor piping, premium tableware, precision springs, fine accessories, and automotive metal trim.",
        images: [],
        href: productDetailPath("electropolishing"),
      },
      {
        slug: "aluminum-chromium-free-passivation",
        title: "Chromium-Free Aluminum Passivation",
        subtitle: "A green replacement that balances corrosion resistance and conductivity",
        desc: "An environmentally friendly conversion-film process for aluminum and aluminum alloys. It eliminates hexavalent and trivalent chromium to help manufacturers meet international environmental standards.",
        details: [
          "Fully chromium-free formula: no chromium or other heavy metals, simpler wastewater treatment, and direct alignment with RoHS and green supply-chain requirements.",
          "Excellent coating adhesion: the conversion film bonds well with spray coating, powder coating, and adhesives to prevent paint film peeling.",
          "Low contact resistance: treated metal maintains conductivity for grounding and EMI shielding requirements.",
        ],
        applications: "New energy vehicle battery trays, 3C die-cast housings, and architectural aluminum profiles.",
        images: [],
        href: productDetailPath("aluminum-chromium-free-passivation"),
      },
      {
        slug: "industrial-degreasing-dewaxing",
        title: "Industrial Cleaning, Degreasing & Dewaxing",
        subtitle: "Fast oil and wax removal for extremely clean workpiece surfaces",
        desc: "Solves cleaning challenges caused by residual oil, drawing oil, cutting fluid, and polishing wax on stainless steel, aluminum, and other metal products after cutting, stamping, and polishing.",
        details: [
          "Strong penetration and high cleaning rate: efficient surfactants emulsify and disperse stubborn grease and wax with no surface residue after washing.",
          "No substrate damage: mild formulas avoid corrosion on stainless steel, copper, aluminum, and other sensitive metals.",
          "Wide process coverage: tailored models for ultrasonic, spray, and manual cleaning with low foam and easy rinsing.",
        ],
        applications: "Oil removal for stamped hardware, dewaxing after precision hardware polishing, and intermediate cleaning in metal processing.",
        images: [],
        href: productDetailPath("industrial-degreasing-dewaxing"),
      },
      {
        slug: "rust-prevention-sealing",
        title: "Rust Prevention & Sealing",
        subtitle: "Nano-level secondary sealing for extreme anti-corrosion protection",
        desc: "The final protective line after passivation, plating, or cleaning. It fills microscopic metal pores and significantly adds to rust-prevention performance.",
        details: [
          "Ultra-thin transparent film: a micron-level nano protective layer resists scratches without affecting thread assembly or fit tolerance.",
          "Anti-fingerprint and stain resistance: selected models reduce touch marks and improve surface appearance.",
          "Humidity and heat aging resistance: improves durability under high temperature, high humidity, sea freight, and harsh storage conditions.",
        ],
        applications: "Post-treatment for blackened parts, fastener sealing, anti-oil and anti-fingerprint protection for electronic hardware, and export hardware protection.",
        images: [],
        href: productDetailPath("rust-prevention-sealing"),
      },
      {
        slug: "copper-polishing",
        title: "Copper Polishing",
        subtitle: "Fast mirror brightening with long-lasting protection of copper's original luster",
        desc: "A chemical/electrochemical polishing and anti-discoloration system for pure copper, brass, red copper, and other copper alloys. It addresses dullness, scratches, oxidation blackening, and green spots after processing.",
        details: [
          "Fast mirror brightening: quickly removes microscopic burrs and oxide layers to create an even golden metallic gloss or mirror finish.",
          "No dead corners on complex parts: penetrates copper fittings with threads, blind holes, and dense heat-sink fins for uniform polishing.",
          "Protects precision dimensions: mild, microscopically controllable reaction protects copper threads and electronic pin tolerances.",
        ],
        applications: "Bathroom hardware faucets, electronic connectors and springs, power-distribution copper bars, premium copper crafts, heat-sink modules, and musical instrument components.",
        images: [],
        href: productDetailPath("copper-polishing"),
      },
    ],
    technology: [
      {
        title: "One-Stop Surface Treatment Loop",
        text: "A full lifecycle solution from diagnosis, R&D, and production to on-site guidance, covering stainless steel, stainless iron, copper, and aluminum.",
      },
      {
        title: "Chromium-Free Passivation",
        text: "Stable aluminum chromium-free passivation and eco-friendly acid washing processes aligned with RoHS and REACH.",
      },
      {
        title: "High Salt-Spray Benchmarks",
        text: "Core formulas break traditional rust-prevention limits and help selected materials exceed standard industrial requirements.",
      },
      {
        title: "Scenario-Based Formulation",
        text: "Products are precisely matched to CNC, stamping, die-casting, and other customer processes to reduce defects and total cost.",
      },
    ],
    applications: [
      {
        slug: "193",
        title: "Precision Medical Devices",
        text: "Cleaning, polishing, passivation, and rust-prevention solutions balancing corrosion resistance, environmental safety, and long service life.",
      },
      {
        slug: "194",
        title: "Consumer Electronics & Home Appliances",
        text: "Surface treatment solutions for appliance, 3C electronics, and daily-use metal products, improving appearance and corrosion protection.",
      },
      {
        slug: "195",
        title: "Food Machinery",
        text: "Environmentally friendly cleaning, polishing, and passivation processes for food equipment hygiene and rust prevention.",
      },
      {
        slug: "196",
        title: "Automotive & New Energy",
        text: "Metal surface protection for automotive manufacturing, new energy vehicles, and high-end equipment supply chains.",
      },
      {
        slug: "197",
        title: "Precision Hardware & Tools",
        text: "Deburring, polishing, passivation, and rust-prevention solutions for tools, kitchen and bath products, and precision hardware.",
      },
    ],
    contact: {
      phone: "0769-8763 3321",
      service: "Expert technical response within 24 hours",
      address: "Dongguan, Guangdong, China",
      email: "info@shihuiming.com",
    },
  },
} satisfies Record<Locale, {
  localeName: string;
  alternateLocaleName: string;
  seoTitle: string;
  seoDescription: string;
  brand: {
    name: string;
    shortName: string;
    logo: string;
    tagline: string;
    slogan: string;
    founded: string;
    headquarters: string;
    headquartersDetail: string;
    vision: string;
  };
  nav: { label: string; href: string }[];
  labels: Record<string, string>;
  intro: string;
  market: string;
  missions: { title: string; text: string }[];
  values: { title: string; text: string }[];
  products: ProductCategory[];
  technology: { title: string; text: string }[];
  applications: { slug: string; title: string; text: string }[];
  contact: { phone: string; service: string; address: string; email: string };
}>;
