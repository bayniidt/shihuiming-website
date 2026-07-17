export type Locale = "zh" | "en";

export const defaultLocale: Locale = "zh";

export const companyImages = [
  "/shihuiming-website/images/my-images/企业照片/大门牌.jpg",
  "/shihuiming-website/images/my-images/企业照片/企业大楼.jpg",
  "/shihuiming-website/images/my-images/企业照片/企业厂房.jpg",
  "/shihuiming-website/images/my-images/企业照片/企业厂房 2.jpg",
  "/shihuiming-website/images/my-images/企业照片/企业厂房 3.jpg",
  "/shihuiming-website/images/my-images/企业照片/企业厂房 4.jpg",
  "/shihuiming-website/images/my-images/企业照片/大门牌.jpg",
  "/shihuiming-website/images/my-images/企业照片/企业厂房 6.jpg",
  "/shihuiming-website/images/my-images/企业照片/企业厂房 7.jpg",
  "/shihuiming-website/images/my-images/企业照片/企业设备 1.jpg",
  "/shihuiming-website/images/my-images/企业照片/企业设备 2.jpg",
  "/shihuiming-website/images/my-images/企业照片/大门牌.jpg",
  "/shihuiming-website/images/my-images/企业照片/企业大楼.jpg",
  "/shihuiming-website/images/my-images/企业照片/企业厂房.jpg",
  "/shihuiming-website/images/my-images/企业照片/企业厂房 2.jpg",
] as const;

export const galleryImages = [
  "/shihuiming-website/images/my-images/企业照片/企业设备 1.jpg",
  "/shihuiming-website/images/my-images/企业照片/企业厂房.jpg",
  "/shihuiming-website/images/my-images/企业照片/企业厂房 7.jpg",
  "/shihuiming-website/images/my-images/企业照片/企业厂房 5.jpg",
] as const;

export interface ProductCategory {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  desc: string;
  details: string[];
  applications: string;
  standards?: string;
  images: string[];
  href: string;
}

export type ProductFocus = "stainless" | "copper" | "aluminum";

export function productCategoryPath(category: ProductFocus) {
  if (category === "stainless") {
    return "/list/190";
  }
  if (category === "copper") {
    return "/list/191";
  }
  return "/list/192";
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
      { label: "关于世蕙鸣", href: "/list/6" },
      { label: "公司产业", href: "/list/190" },
      { label: "行业应用", href: "/list/194" },
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
    innovationHeadline: "科技创新：突破表面处理边界，赋能高端制造",
    innovationIntro:
      "我们始终致力于将前沿的化学与材料科学应用于金属表面处理领域。通过持续的配方革新与工艺突破，我们为不锈钢、铜材及铝合金等金属基材提供兼顾“极限性能”与“绿色环保”的系统化解决方案，全面满足医疗、食品、精密电子及高端五金等领域的严苛标准。",
    intro:
      "自2000年创立以来，东莞市世蕙鸣科技有限公司始终锚定先进制造业的底层核心环节，深耕金属表面处理新材料的研发与制造。作为一家集研发、生产、销售、技术服务于一体的高新技术企业，世蕙鸣为全国范围内的金属制品企业提供优质产品和高效服务，推动中国金属制品产业链向高端化、绿色化转型。",
    market:
      "在过去的26年中，世蕙鸣在竞争激烈的表面处理市场中构建了深厚的技术与服务护城河。通过打造“高盐雾、长寿命、环保合规”的标准化产品矩阵，公司已累计服务超过15,000家制造企业，服务网络覆盖长三角、珠三角等核心工业地带。",
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
    productCategories: {
      stainless: "不锈钢表面处理",
      copper: "铜材表面处理",
      aluminum: "铝材表面处理",
    },
    products: [
      {
        slug: "stainless-degreasing-derusting",
        category: "stainless",
        title: "不锈钢除油除锈系列",
        subtitle: "高效渗透乳化，强力去污不伤基体",
        desc: "专为不锈钢加工后的油污、粉尘与轻度锈迹设计。采用高效渗透与乳化技术，可快速剥离冲压油、拉伸油、抛光蜡及焊接飞溅物，同时清除表面因存放产生的浮锈与轻微氧化。",
        details: ["配方温和：在强力去污的同时不腐蚀不锈钢基体，不产生氢脆风险。", "高洁净度：优异的漂洗性能，清洗后表面润湿均匀、无挂灰，为后续酸洗、钝化或电镀提供洁净的基底，是保障最终处理品质的基石工序。"],
        applications: "不锈钢冲压件、焊接件、精密五金件的前处理清洗。",
        standards: "符合欧盟RoHS、REACH环保标准。",
        images: [
          "/shihuiming-website/images/my-images/网站修改3/公司产业-不锈钢除油.jpeg",
          "/shihuiming-website/images/my-images/web/IMG_5903.jpg",
          "/shihuiming-website/images/my-images/web/IMG_5850.jpg",
        ],
        href: "/list/products/stainless-degreasing-derusting",
      },
      {
        slug: "stainless-pickling-passivation",
        category: "stainless",
        title: "不锈钢酸洗钝化系列",
        subtitle: "集清除氧化皮、焊斑与钝化防锈于一体",
        desc: "集清除氧化皮、焊斑与钝化防锈于一体的核心工艺。在清除焊接氧化皮、高温色斑及顽固锈皮的同时，通过微观化学反应，在不锈钢表面重构一层致密的富铬保护膜（氧化膜），从根源上切断腐蚀介质与基体的接触。",
        details: ["极限防腐：经处理的工件，中性盐雾测试（NSS）寿命可大幅提升至数百乃至1000小时以上。", "零尺寸改变：属于原色微观钝化，绝对不改变高精密工件的原有尺寸、配合公差及表面粗糙度。处理后工件呈均匀银白色，无花斑，满足食品、医疗、卫浴等高洁净等级要求。", "绿色车间：革新性无黄烟配方，作业环境无刺激性酸雾，符合国家环保排放及职业健康标准。"],
        applications: "食品机械、医疗器械、卫浴五金、户外不锈钢制品。",
        standards: "符合欧盟RoHS、REACH环保标准，通过SGS无毒检测。",
        images: [
          "/shihuiming-website/images/my-images/网站修改3/公司产业-不锈钢钝化.jpeg",
          "/shihuiming-website/images/my-images/web/IMG_5852.jpg",
          "/shihuiming-website/images/my-images/web/IMG_5898.jpg",
        ],
        href: "/list/products/stainless-pickling-passivation",
      },
      {
        slug: "stainless-electropolishing",
        category: "stainless",
        title: "不锈钢电解抛光系列",
        subtitle: "微观整平至镜面光亮，提升抗腐蚀性能",
        desc: `通过电化学选择性溶解作用，对不锈钢表面进行微观整平与抛光，使工件粗糙度大幅降低，直抵镜面光亮效果。广泛适用于高精密零件、流体设备、医疗器械及装饰件的表面升级，是实现\u201c医用级\u201d与\u201c食品级\u201d表面标准的关键工艺药剂。`,
        details: ["镜面级光洁度：大幅降低表面粗糙度（Ra值），呈现均匀一致的镜面光泽或亚光质感。表面缺陷被去除，抗点蚀与缝隙腐蚀能力显著增强。", "无死角处理：完美解决复杂异型件、内孔、盲孔及精密细螺纹等机械抛光无法触及的技术死角。"],
        applications: "医药与半导体管道、高端餐具、精密弹簧、汽车金属饰条。",
        images: [
          "/shihuiming-website/images/my-images/网站修改3/公司产业-不锈钢电解抛光.jpeg",
          "/shihuiming-website/images/my-images/web/IMG_5901.jpg",
          "/shihuiming-website/images/my-images/web/IMG_5902.jpg",
        ],
        href: "/list/products/stainless-electropolishing",
      },
      {
        slug: "copper-cleaning",
        category: "copper",
        title: "铜材清洗系列",
        subtitle: "环保温和配方，恢复铜材鲜亮本色",
        desc: "专为纯铜、黄铜、紫铜及铍铜等敏感材质研发的环保清洗剂，可去除工件上的加工油污、指纹、尘埃与轻微氧化层，不损伤基材、不改变工件尺寸。适合电子接插件、铜管、铜艺装饰件等对表面洁净度与精密度要求高的场景。",
        details: ["清洗后铜材恢复鲜亮本色，表面无残留、润湿性好，可无缝衔接后续电镀、焊接或钝化工序。"],
        applications: "电子接插件、铜管、铜艺装饰件、精密铜制零件。",
        images: [
          "/shihuiming-website/images/my-images/网站修改3/公司产业-铜材清洗.webp",
          "/shihuiming-website/images/my-images/企业照片/企业设备 2.jpg",
          "/shihuiming-website/images/my-images/企业照片/企业厂房 6.jpg",
        ],
        href: "/list/products/copper-cleaning",
      },
      {
        slug: "copper-pickling-polishing",
        category: "copper",
        title: "铜材酸洗抛光系列",
        subtitle: "极速出光整平，环保无重金属",
        desc: "专用于清除铜材在热处理、焊接或长期存放后形成的厚重氧化皮、黑色斑痕及表面暗膜。通过化学抛光作用，迅速将铜面整平、抛亮，呈现均匀光亮的金属质感，不产生过腐蚀或麻点。为后续的防变色处理、涂装或直接作为成品外观提供理想的表面状态，尤其适用于铜标牌、铜制五金卫浴与工艺品。",
        details: ["出光迅速：极速恢复铜件原生金属光泽，色泽均匀亮丽。", "环保无重金属：彻底摒弃传统配方中的铬酸、硝酸等高污染成分，废水处理简单合规。"],
        applications: "铜标牌、铜制五金卫浴、铜工艺品、电子散热模组。",
        images: [
          "/shihuiming-website/images/my-images/网站修改3/公司产业-铜材抛光.webp",
          "/shihuiming-website/images/my-images/企业照片/企业厂房 5.jpg",
          "/shihuiming-website/images/my-images/企业照片/企业大楼.jpg",
        ],
        href: "/list/products/copper-pickling-polishing",
      },
      {
        slug: "copper-passivation-anti-tarnish",
        category: "copper",
        title: "铜材钝化防变色系列",
        subtitle: "纳米钝化技术，长效抗氧不变色",
        desc: "采用环保型纳米钝化技术，在铜表面定向生成一层无色透明的保护膜，有效隔绝氧气、湿气、汗渍等腐蚀介质。",
        details: ["长效抗氧：经该钝化处理后，铜材的抗变色周期可延长数倍乃至十数倍，同时保持基材良好的导电性、导热性和可焊性。膜层不影响焊接与后续装配，是解决铜件氧化发黑、保证长期外观与功能稳定性的长效方案。"],
        applications: "电子接插件、铜排、铜制艺术品、卫浴五金。",
        images: [
          "/shihuiming-website/images/my-images/网站修改3/公司产业-铜材钝化.jpg",
          "/shihuiming-website/images/my-images/企业照片/企业厂房 3.jpg",
          "/shihuiming-website/images/my-images/企业照片/企业厂房 2.jpg",
        ],
        href: "/list/products/copper-passivation-anti-tarnish",
      },
      {
        slug: "aluminum-degreasing-acid-cleaning",
        category: "aluminum",
        title: "铝合金除油酸洗系列",
        subtitle: "深度活化基面，解决发黑过腐蚀难题",
        desc: "重点针对压铸铝、型材铝表面的脱模剂、硅灰（黑灰）及自然氧化膜进行深度活化，可一步去除铝及铝合金件在机加工、冲压、存放中产生的各类油污和自然氧化层。",
        details: [`处理过程中不产生酸雾抑制性残留，不腐蚀基体，彻底解决压铸铝件在常规清洗中容易\u201c发黑\u201d、\u201c过腐蚀\u201d的难题，暴露出均匀、活泼的纯铝层，为后续钝化、阳极氧化、喷涂等提供高度活化的洁净基面，显著提升结合力与膜层均匀性。`],
        applications: "压铸铝件、铝型材、铝铸件的前处理清洗与活化。",
        images: [
          "/shihuiming-website/images/my-images/网站修改3/公司产业-铝材清洗.webp",
          "/shihuiming-website/images/my-images/web/IMG_5845.jpg",
          "/shihuiming-website/images/my-images/web/IMG_5846.jpg",
        ],
        href: "/list/products/aluminum-degreasing-acid-cleaning",
      },
      {
        slug: "aluminum-passivation-rust-prevention",
        category: "aluminum",
        title: "铝合金钝化防锈系列",
        subtitle: "无铬环保配方，兼顾防腐与涂装附着力",
        desc: "采用不含六价铬的环保配方，通过化学反应在铝表面原位构建一层均匀致密的转化膜。该钝化膜能大幅提高铝合金的抗盐雾能力和防锈等级，同时作为有机涂层的优异底层，可使喷涂附着力提升一个等级。适用于铝型材、压铸件、铝铸件等在苛刻环境下的功能性防护，兼顾防腐与预涂装双重需求。",
        details: ["绿色环保：不含任何铬离子及重金属，直通全球最高级别的RoHS和REACH检测。", "卓越涂装附着力：在铝材表面形成的保护膜不仅具备强大的裸膜防腐力，更能与喷涂、粉末涂装、烤漆层形成极强的化学键合，彻底消除涂层起泡、脱落隐患。"],
        applications: "新能源汽车电池托盘、3C电子压铸机壳、建筑铝型材。",
        images: [
          "/shihuiming-website/images/my-images/网站修改3/公司产业-铝材钝化.webp",
          "/shihuiming-website/images/my-images/web/IMG_5853.jpg",
          "/shihuiming-website/images/my-images/web/IMG_5900.jpg",
        ],
        href: "/list/products/aluminum-passivation-rust-prevention",
      },
      {
        slug: "aluminum-polishing",
        category: "aluminum",
        title: "铝材抛光系列",
        subtitle: "化学与电解抛光，光洁细腻富光泽",
        desc: "包含化学抛光与电解抛光工艺用药水，通过选择性溶解使铝表面微观峰谷平整，获得光洁、细腻且富有光泽的外观。抛光后铝件反射率大幅提升，手感顺滑，并能消除细微毛刺。",
        details: ["药水使用寿命长、带出损耗低，可用于各种铝材，是对表面观赏性与功能性同时提出较高要求的铝制零部件、装饰条及电子产品外壳的理想选择。"],
        applications: "铝制零部件、装饰条、电子产品外壳。",
        images: [
          "/shihuiming-website/images/my-images/网站修改3/公司产业-铝材抛光.png",
          "/shihuiming-website/images/my-images/web/IMG_5901.jpg",
          "/shihuiming-website/images/my-images/web/IMG_5902.jpg",
        ],
        href: "/list/products/aluminum-polishing",
      },
    ],
    technology: [
      {
        title: "绿色化学与可持续发展技术",
        text: "我们坚持将环保作为技术创新的第一准则，通过革新性配方从根源上消除传统表面处理的高污染痛点，助力企业打造“绿色车间”。\n\n革新性无黄烟/无酸雾配方：突破传统不锈钢酸洗钝化工艺的环保瓶颈，彻底消除作业环境中的刺激性酸雾及黄烟污染，全面保障职业健康与合规排放。\n\n100% 无重金属与无铬化处理：全面摒弃传统配方中的铬酸、硝酸等成分。铝合金钝化采用环保无六价铬原位成膜技术，铜材处理实现完全无重金属化，全线产品直通全球最高级别的 RoHS 和 REACH 环保标准。",
      },
      {
        title: "微观纳米级防护与极限防腐技术",
        text: "针对严苛环境下的应用需求，我们运用纳米级成膜与微观化学反应，为金属表面构建坚不可摧的防护屏障。\n\n纳米定向钝化技术：在铜材表面定向生成无色透明的纳米级保护膜，有效隔绝腐蚀介质。在将抗变色周期延长十数倍的同时，完全不影响基材的原有导电性、导热性与可焊性。\n\n富铬保护膜重构技术：针对不锈钢基体，通过微观反应在表面重构致密的富铬氧化膜，将抗点蚀与缝隙腐蚀能力推向极致，中性盐雾测试（NSS）寿命可大幅提升至 1000 小时以上。",
      },
      {
        title: "无损精密控制与微观整平技术",
        text: "针对高精密零部件的严格公差要求，我们的药剂实现了“只去污除锈、不伤及基材”的完美平衡。\n\n原色微观钝化（零尺寸改变）：药剂配方温和且靶向性强，在强力去除氧化皮与焊斑的同时，绝不改变高精密工件的原有尺寸、配合公差及表面粗糙度，同时彻底杜绝氢脆风险。\n\n电化学选择性溶解技术：突破传统机械抛光的物理局限，药剂能够深入复杂异型件、内孔、盲孔及精密细螺纹等“技术死角”。通过选择性溶解微观峰谷，大幅降低粗糙度（Ra值），直抵均匀一致的镜面级或高质感亚光效果。",
      },
      {
        title: "界面深度活化与化学键合技术",
        text: "良好的表面预处理是后续工艺的基石。我们的活化技术不仅解决清洁问题，更为后续涂装与电镀提供完美的界面环境。\n\n抗黑化深度活化配方：攻克压铸铝在常规清洗中极易“发黑”或“过腐蚀”的行业难题。高效剥离脱模剂与硅灰，暴露出均匀、活泼的纯铝层，为后续工艺提供绝佳基面。\n\n强效化学键合底层技术：在铝材表面生成的环保转化膜，不仅具备卓越的裸膜防腐能力，更能与后续的喷涂、粉末涂装或烤漆层形成极强的化学键合，彻底消除涂层起泡、脱落的隐患，实现涂装附着力的跨越式提升。",
      },
    ],
    applications: [
      {
        slug: "193",
        title: "家居五金行业应用方案",
        text: "随着消费升级，现代家庭对厨卫五金、高端门锁等家居产品的外观质感和使用寿命提出了更高期望。长期处于潮湿、油污、以及日化洗涤剂环境下的家居五金，面临着极易氧化发暗、长水锈或镀层脱落的挑战。世蕙鸣在家居五金行业的基材清洗、出光提亮及长效抗氧化方面，沉淀了系统的解决方案。",
        details: [
          {
            heading: "铜质卫浴配件的长效防变色保护",
            body: "高档水龙头、花洒及阀芯大量采用纯铜或黄铜材质。铜件在抛光后，如果在空气中暴露或在后续的仓储、海运过程中遇到湿热环境，极易发生氧化发黑、甚至长出绿斑。传统的机械抛光加防锈油工艺不仅容易沾灰，且防变色时间极短。针对这一痛点，我们开发了铜材高效酸洗抛光与纳米防变色系统。仅需短暂的化学浸泡，即可让黯淡的铜件迅速焕发均匀的黄金般光泽；紧接着使用世蕙鸣铜材钝化剂进行封闭，能在铜表面形成一层无色透明的致密保护膜。经过处理的铜件，在模拟浴室高湿热环境中能长期保持光亮如新，大大提升了卫浴品牌的高端质感与用户口碑。",
          },
          {
            heading: "不锈钢厨卫挂件的抗污与光亮处理",
            body: "厨房水槽、置物架及卫浴挂件在日常使用中极易残留水渍和油污。这些不锈钢线材或板件在焊接成型后，焊缝处常伴有黑蓝色的氧化皮。采用传统的强酸洗不仅气味刺鼻、污染车间，还容易造成工件表面发灰发暗。世蕙鸣推广的无黄烟环保酸洗工艺，在快速清除焊斑的同时保护了基材原色。针对需要高亮外观的置物架，我们配合使用电解抛光工艺，不仅让不锈钢线材呈现出闪亮的镜面效果，更极大降低了表面的摩擦系数，使得油污和水垢难以附着，实现了家居产品\u201c一擦即净\u201d的易清洁特性。",
          },
        ],
      },
      {
        slug: "194",
        title: "家电制造行业应用方案",
        text: "全球家电市场竞争激烈，除了追求产品的耐用性和成本控制，家电整机出口还面临着欧盟RoHS、REACH等极其严格的国际环保指令限制。世蕙鸣在家电内部结构件的环保转化、低成本防锈除油领域，为众多知名家电制造商提供了可靠的工艺支撑。",
        details: [
          {
            heading: "铝制散热器与结构件的无铬环保转化",
            body: "空调的铝制散热片、冰箱背板及洗衣机内部的压铸铝电机壳，在喷涂或装配前必须进行表面防腐处理。世蕙鸣顺应环保趋势，成功攻克了铝材无铬钝化技术。该工艺100%不含铬离子，能够在铝材表面快速生成稳定的转化膜。经过测试，不仅能轻松通过各大环保检测，且该转化膜与后续的粉末涂装、烤漆层具有极强的化学结合力，彻底解决了家电外壳在使用数年后漆皮起泡、脱落的顽疾，同时丝毫不影响散热器本身的导热性能。",
          },
          {
            heading: "冲压件的大批量除油与环保酸洗",
            body: "家电产品内部有大量的不锈钢、铁质冲压支架和五金配件。在成型过程中，工件表面会残留大量的拉伸油、切削液。如果前处理不彻底，不仅影响装配，还会导致内部生锈缩短家电寿命。由于这类配件体量巨大，世蕙鸣为客户提供了低泡、高渗透力的工业除油清洗剂，能够适应高节拍的流水线喷淋或超声波清洗。同时，配合世蕙鸣无烟环保酸洗液，不仅彻底杜绝了传统酸洗车间浓烈的\u201c黄烟\u201d排放，改善了工人的作业环境，还有效降低了污水处理的综合成本，帮助家电企业实现真正的绿色智造。",
          },
        ],
      },
      {
        slug: "195",
        title: "医疗器械行业应用方案",
        text: "随着医疗技术的不断进步与发展，医疗器械行业迎来了大发展时期。同时也对器械的生物相容性、无毒环保、极限防腐性以及表面洁净度提出了更为严苛的要求。世蕙鸣产品在医疗机械行业的高洁净抛光、焊缝处理、钝化防锈等方面有着非常丰富的应用经验，可满足您各类个性化的表面处理需求。",
        details: [
          {
            heading: "手术器械及植入物的无损高抗腐处理",
            body: "所有的医疗器械由于都要和人体组织、血液或体液打交道，出于生命至上的考量，对其耐腐蚀能力有极高的要求。手术刀、镊子、骨科植入物在成为成品前，需要经过冲压、切削、打磨等一系列工序。在这些加工过程中，零件不可避免地会受到高温、形变及机械铁屑污染的影响，导致不锈钢材料的整体耐蚀能力大幅降低。如果不进行深度的化学处理，在后期的高温高压灭菌或接触体液时会带来巨大的生锈风险。我们与国内多家知名医疗器械企业建立了深度合作，世蕙鸣提供的高纯度不锈钢钝化工艺，不含任何有毒重金属，能有效提升医疗级不锈钢的耐中性盐雾测试能力。经过绝大多数厂商的严格生物毒性验证，企业产品工艺成熟且完全满足医疗环境的严苛需要。",
          },
          {
            heading: "医疗容器与管道的内外壁镜面抛光",
            body: "医疗器械中常见的大型制药反应釜、生理盐水储存罐及输送管道，在交付使用前必须进行表面处理。由于内部常常会长期处于高温或含有氯离子的环境中，如果表面不够平滑，极易滋生细菌或产生红锈。这些零部件看似结构简单，但要获得均匀且不产生麻点的近似镜面效果有许多讲究。针对这些特殊要求，世蕙鸣开发了专用的精密电解抛光液。这款产品导电性能极佳，绿色环保，能够在20~30分钟内有效溶解表面的微观凸起，消除机械抛光留下的死角与划痕，使不锈钢表面粗糙度大幅降低，达到极高的卫生级别标准，彻底杜绝了药液残留与细菌附着的风险。",
          },
        ],
      },
      {
        slug: "196",
        title: "紧固件与精密机加工行业应用方案",
        text: "螺丝、螺母、垫圈以及CNC精密车件被称为\u201c工业之米\u201d，广泛应用于通讯基站、汽车制造、船舶及航天等关键领域。这类产品体积虽小，但往往要面对户外高盐雾、极端温差等严酷环境，且对螺纹的配合公差要求达到了\u201c毫厘不差\u201d的地步。世蕙鸣在解决紧固件\u201c既要极限防腐、又要零尺寸变化\u201d的技术冲突上，具有行业领先的实战经验。",
        details: [
          {
            heading: "零公差的微观高盐雾钝化防锈",
            body: "传统的紧固件防锈多采用电镀锌或涂覆工艺，但这不可避免地会在螺纹表面增加几微米到十几微米的厚度，经常导致高精密的螺栓无法拧入、滑丝或者破坏装配精度。为了解决这一致命痛点，世蕙鸣推出了专为精密件研发的不锈钢原色微观钝化工艺。这种钝化技术不属于\u201c涂层添加\u201d，而是通过原子级别的化学反应，在基材表面重构富铬层。不仅能将304、316等紧固件的中性盐雾测试成绩稳步提升至数百乃至上千小时，更重要的是，绝对不会改变工件原有的任何尺寸与螺纹公差。无论是M2的微型电子螺丝，还是大型风电螺栓，处理后均能保持完美的机械配合。",
          },
          {
            heading: "盲孔与细牙螺纹的深层脱脂清洗",
            body: "冷镦、打头及CNC机加工后的紧固件，其细牙螺纹和盲孔深处往往包裹着大量顽固的极压切削油和铁屑。如果清洗不净，在高温下极易碳化发黑。世蕙鸣开发的专用清洗剂具有极低的表面张力，能够瞬间深入盲孔与螺纹底部，迅速乳化剥离顽固油垢。清洗后的工件表面干爽、洁净，为最终的出厂打包或后续的钝化处理提供了完美、可靠的表面基底。结合世蕙鸣纳米防锈封闭剂，还能为需要远洋海运出口的五金件提供抗高温高湿的二次保护，彻底免除海外退货的后顾之忧。",
          },
        ],
      },
    ],
    contact: {
      phone: "13600258452",
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
      { label: "About", href: "/list/6" },
      { label: "Industries", href: "/list/190" },
      { label: "Applications", href: "/list/194" },
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
    innovationHeadline: "Technology Innovation: Expanding the Boundaries of Surface Treatment",
    innovationIntro:
      "We continuously apply advances in chemistry and materials science to metal surface treatment, building systematic solutions that balance extreme performance with greener manufacturing requirements.",
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
    productCategories: {
      stainless: "Stainless Steel Surface Treatment",
      copper: "Copper Surface Treatment",
      aluminum: "Aluminum Surface Treatment",
    },
    products: [
      {
        slug: "stainless-degreasing-derusting",
        category: "stainless",
        title: "Stainless Steel Degreasing & Derusting Series",
        subtitle: "Efficient penetration and emulsification for powerful cleaning without substrate damage",
        desc: "Designed for oil stains, dust, and mild rust after stainless steel processing. Utilizes efficient penetration and emulsification technology to quickly remove stamping oil, drawing oil, polishing wax, and welding spatter, while eliminating surface rust and slight oxidation from storage.",
        details: ["Mild formula: Effectively removes contaminants without corroding the stainless steel substrate and without risk of hydrogen embrittlement.", "High cleanliness: Excellent rinsing performance leaves surfaces uniformly wetted and residue-free, providing a clean base for subsequent pickling, passivation, or electroplating \u2014 a cornerstone process for ensuring final treatment quality."],
        applications: "Pre-cleaning of stainless steel stamped parts, welded components, and precision hardware.",
        standards: "Compliant with EU RoHS and REACH environmental standards.",
        images: [
          "/shihuiming-website/images/my-images/网站修改3/公司产业-不锈钢除油.jpeg",
          "/shihuiming-website/images/my-images/web/IMG_5903.jpg",
          "/shihuiming-website/images/my-images/web/IMG_5850.jpg",
        ],
        href: "/list/products/stainless-degreasing-derusting",
      },
      {
        slug: "stainless-pickling-passivation",
        category: "stainless",
        title: "Stainless Steel Pickling & Passivation Series",
        subtitle: "Integrated oxide scale removal, weld spot treatment, and passivation rust prevention",
        desc: "A core process that integrates oxide scale removal, weld spot elimination, and passivation rust prevention. While removing welding oxide scale, high-temperature discoloration, and stubborn rust scale, it reconstructs a dense chromium-rich protective film (oxide layer) on the stainless steel surface through micro-chemical reactions, cutting off contact between corrosive media and the substrate at the source.",
        details: ["Ultimate corrosion protection: Treated workpieces can achieve significantly enhanced neutral salt spray test (NSS) lifespan, reaching hundreds to over 1,000 hours.", "Zero dimensional change: As an original-color micro-passivation, it absolutely preserves the original dimensions, fit tolerances, and surface roughness of high-precision workpieces. The treated surface is uniformly silver-white and spot-free, meeting the high cleanliness requirements of food, medical, and sanitary applications.", "Green workshop: Innovative no-yellow-smoke formula with no irritating acid mist in the work environment, compliant with national environmental emission and occupational health standards."],
        applications: "Food machinery, medical devices, sanitary hardware, and outdoor stainless steel products.",
        standards: "Compliant with EU RoHS and REACH standards, verified by SGS non-toxic testing.",
        images: [
          "/shihuiming-website/images/my-images/网站修改3/公司产业-不锈钢钝化.jpeg",
          "/shihuiming-website/images/my-images/web/IMG_5852.jpg",
          "/shihuiming-website/images/my-images/web/IMG_5898.jpg",
        ],
        href: "/list/products/stainless-pickling-passivation",
      },
      {
        slug: "stainless-electropolishing",
        category: "stainless",
        title: "Stainless Steel Electropolishing Series",
        subtitle: "Micro-leveling to mirror brightness with enhanced corrosion resistance",
        desc: "Through electrochemical selective dissolution, it micro-levels and polishes the stainless steel surface, dramatically reducing surface roughness to achieve a mirror-bright finish. Widely applicable for surface upgrading of high-precision parts, fluid equipment, medical devices, and decorative components \u2014 a key process chemical for achieving 'medical-grade' and 'food-grade' surface standards.",
        details: ["Mirror-grade finish: Significantly reduces surface roughness (Ra value), presenting uniformly brilliant mirror gloss or matte texture. Surface defects are removed, and resistance to pitting and crevice corrosion is markedly enhanced.", "No dead corners: Perfectly addresses complex irregular parts, inner holes, blind holes, and precision fine threads \u2014 technical blind spots that mechanical polishing cannot reach."],
        applications: "Pharmaceutical and semiconductor piping, premium tableware, precision springs, and automotive metal trim.",
        images: [
          "/shihuiming-website/images/my-images/网站修改3/公司产业-不锈钢电解抛光.jpeg",
          "/shihuiming-website/images/my-images/web/IMG_5901.jpg",
          "/shihuiming-website/images/my-images/web/IMG_5902.jpg",
        ],
        href: "/list/products/stainless-electropolishing",
      },
      {
        slug: "copper-cleaning",
        category: "copper",
        title: "Copper Cleaning Series",
        subtitle: "Eco-friendly mild formula that restores copper's bright natural color",
        desc: "An environmentally friendly cleaning agent developed for sensitive materials such as pure copper, brass, red copper, and beryllium copper. It removes processing oil, fingerprints, dust, and mild oxidation layers from workpieces without damaging the substrate or altering dimensions. Ideal for electronic connectors, copper tubing, and copper decorative parts requiring high surface cleanliness and precision.",
        details: ["After cleaning, copper materials regain their bright natural color with no residue and good wettability, seamlessly transitioning to subsequent electroplating, welding, or passivation processes."],
        applications: "Electronic connectors, copper tubing, copper decorative parts, and precision copper components.",
        images: [
          "/shihuiming-website/images/my-images/网站修改3/公司产业-铜材清洗.webp",
          "/shihuiming-website/images/my-images/企业照片/企业设备 2.jpg",
          "/shihuiming-website/images/my-images/企业照片/企业厂房 6.jpg",
        ],
        href: "/list/products/copper-cleaning",
      },
      {
        slug: "copper-pickling-polishing",
        category: "copper",
        title: "Copper Pickling & Polishing Series",
        subtitle: "Rapid brightening and leveling, eco-friendly with no heavy metals",
        desc: "Specifically designed to remove heavy oxide scale, black stains, and surface dark films formed on copper after heat treatment, welding, or long-term storage. Through chemical polishing action, it rapidly levels and brightens the copper surface, presenting a uniformly bright metallic texture without over-etching or pitting. Provides the ideal surface state for subsequent anti-tarnish treatment, coating, or direct finished appearance \u2014 particularly suitable for copper nameplates, copper hardware, sanitary ware, and crafts.",
        details: ["Rapid brightening: Quickly restores the native metallic luster of copper parts with uniform and brilliant color.", "Eco-friendly, no heavy metals: Completely eliminates highly polluting components such as chromic acid and nitric acid from traditional formulations, with simple and compliant wastewater treatment."],
        applications: "Copper nameplates, copper hardware and sanitary ware, copper crafts, and electronic heat-sink modules.",
        images: [
          "/shihuiming-website/images/my-images/网站修改3/公司产业-铜材抛光.webp",
          "/shihuiming-website/images/my-images/企业照片/企业厂房 5.jpg",
          "/shihuiming-website/images/my-images/企业照片/企业大楼.jpg",
        ],
        href: "/list/products/copper-pickling-polishing",
      },
      {
        slug: "copper-passivation-anti-tarnish",
        category: "copper",
        title: "Copper Passivation & Anti-Tarnish Series",
        subtitle: "Nano passivation technology for long-lasting oxidation and tarnish resistance",
        desc: "Utilizes environmentally friendly nano passivation technology to directionally form a colorless transparent protective film on the copper surface, effectively isolating corrosive media such as oxygen, moisture, and perspiration.",
        details: ["Long-lasting oxidation resistance: After this passivation treatment, the anti-tarnish period of copper materials can be extended several times to over ten times, while maintaining good conductivity, thermal conductivity, and solderability of the substrate. The film does not affect welding or subsequent assembly \u2014 a long-term solution for preventing copper oxidation blackening and ensuring lasting appearance and functional stability."],
        applications: "Electronic connectors, copper busbars, copper artworks, and sanitary hardware.",
        images: [
          "/shihuiming-website/images/my-images/网站修改3/公司产业-铜材钝化.jpg",
          "/shihuiming-website/images/my-images/企业照片/企业厂房 3.jpg",
          "/shihuiming-website/images/my-images/企业照片/企业厂房 2.jpg",
        ],
        href: "/list/products/copper-passivation-anti-tarnish",
      },
      {
        slug: "aluminum-degreasing-acid-cleaning",
        category: "aluminum",
        title: "Aluminum Degreasing & Acid Cleaning Series",
        subtitle: "Deep substrate activation that solves blackening and over-etching problems",
        desc: "Focuses on deep activation of mold release agents, silica ash (black ash), and natural oxide films on die-cast and extruded aluminum surfaces. Removes all types of oil stains and natural oxide layers generated during machining, stamping, and storage of aluminum and aluminum alloy parts in a single step.",
        details: ["Produces no acid-mist inhibitory residues during treatment and does not corrode the substrate, thoroughly solving the common problems of 'blackening' and 'over-etching' of die-cast aluminum parts in conventional cleaning. Exposes a uniform, active pure aluminum layer, providing a highly activated clean base for subsequent passivation, anodizing, and spray coating, significantly improving adhesion and film uniformity."],
        applications: "Pre-treatment cleaning and activation of die-cast aluminum parts, aluminum profiles, and aluminum castings.",
        images: [
          "/shihuiming-website/images/my-images/网站修改3/公司产业-铝材清洗.webp",
          "/shihuiming-website/images/my-images/web/IMG_5845.jpg",
          "/shihuiming-website/images/my-images/web/IMG_5846.jpg",
        ],
        href: "/list/products/aluminum-degreasing-acid-cleaning",
      },
      {
        slug: "aluminum-passivation-rust-prevention",
        category: "aluminum",
        title: "Aluminum Passivation & Rust Prevention Series",
        subtitle: "Chromium-free eco-friendly formula balancing corrosion resistance and coating adhesion",
        desc: "Uses a chromium-free environmentally friendly formula to construct a uniform and dense conversion film on the aluminum surface through chemical reaction. This passivation film significantly improves the salt-spray resistance and rust prevention level of aluminum alloys, while serving as an excellent base for organic coatings, enhancing spray coating adhesion by one grade. Suitable for functional protection of aluminum profiles, die-cast parts, and aluminum castings in demanding environments.",
        details: ["Green and eco-friendly: Contains absolutely no chromium ions or heavy metals, passing the world's highest-level RoHS and REACH testing.", "Excellent coating adhesion: The protective film formed on the aluminum surface not only provides strong bare-film corrosion resistance but also forms powerful chemical bonds with spray coating, powder coating, and baked paint layers, thoroughly eliminating risks of coating blistering and peeling."],
        applications: "New energy vehicle battery trays, 3C electronic die-cast housings, and architectural aluminum profiles.",
        images: [
          "/shihuiming-website/images/my-images/网站修改3/公司产业-铝材钝化.webp",
          "/shihuiming-website/images/my-images/web/IMG_5853.jpg",
          "/shihuiming-website/images/my-images/web/IMG_5900.jpg",
        ],
        href: "/list/products/aluminum-passivation-rust-prevention",
      },
      {
        slug: "aluminum-polishing",
        category: "aluminum",
        title: "Aluminum Polishing Series",
        subtitle: "Chemical and electrolytic polishing for a smooth, refined, and lustrous finish",
        desc: "Includes chemical polishing and electrolytic polishing process solutions that flatten microscopic peaks and valleys on the aluminum surface through selective dissolution, achieving a smooth, refined, and lustrous appearance. After polishing, aluminum parts have significantly improved reflectivity and smooth tactile feel, with fine burrs eliminated.",
        details: ["Long solution life with low drag-out loss, applicable to various aluminum materials \u2014 an ideal choice for aluminum components, decorative strips, and electronic product housings that require both high surface aesthetics and functionality."],
        applications: "Aluminum components, decorative strips, and electronic product housings.",
        images: [
          "/shihuiming-website/images/my-images/网站修改3/公司产业-铝材抛光.png",
          "/shihuiming-website/images/my-images/web/IMG_5901.jpg",
          "/shihuiming-website/images/my-images/web/IMG_5902.jpg",
        ],
        href: "/list/products/aluminum-polishing",
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
        title: "Home Hardware Industry Solutions",
        text: "With the rise of consumer spending, modern households have higher expectations for the appearance and service life of kitchen and bathroom hardware, high-end door locks, and other home products. Home hardware that is constantly exposed to moisture, oil, and household detergents faces the risk of rapid oxidation, water stains, and plating delamination. Shihuiming has developed systematic solutions for substrate cleaning, brightening, and long-term oxidation resistance in the home hardware industry.",
        details: [
          {
            heading: "Long-Term Anti-Tarnish Protection for Copper Bathroom Fittings",
            body: "High-end faucets, shower heads, and valve cores extensively use pure copper or brass. After polishing, copper parts exposed to air or encountering humid and hot conditions during warehousing and shipping will quickly oxidize, turn black, or even develop green spots. The traditional process of mechanical polishing with anti-rust oil not only attracts dust but also provides only very short-term tarnish protection. To address this challenge, we have developed an efficient copper chemical polishing and nano anti-tarnish system. A brief chemical immersion quickly restores a uniform golden luster to dull copper parts; subsequent sealing with Shihuiming copper passivation agent forms a colorless, transparent, dense protective film on the copper surface. Treated copper parts maintain a bright, new appearance over long periods in simulated bathroom high-humidity, high-temperature environments, significantly enhancing the premium feel and user reputation of bathroom brands.",
          },
          {
            heading: "Anti-Stain and Brightening Treatment for Stainless Steel Kitchen & Bathroom Accessories",
            body: "Kitchen sinks, shelves, and bathroom accessories easily retain water spots and oil stains during daily use. After welding and forming, these stainless steel wire or sheet metal parts often have black-blue oxide scale at the weld seams. Traditional strong-acid cleaning not only produces irritating odors and pollutes the workshop but also easily causes the workpiece surface to turn gray and dull. Shihuiming promotes a no-yellow-smoke, eco-friendly acid cleaning process that quickly removes weld stains while preserving the original color of the substrate. For shelves requiring a high-gloss appearance, we combine electropolishing technology, which not only gives stainless steel wire a brilliant mirror finish but also greatly reduces the surface friction coefficient, making oil and scale difficult to adhere to and achieving an easy-to-clean characteristic for home products.",
          },
        ],
      },
      {
        slug: "194",
        title: "Home Appliance Manufacturing Solutions",
        text: "Competition in the global home appliance market is intense. In addition to pursuing product durability and cost control, appliance exports face extremely stringent international environmental directives such as EU RoHS and REACH. Shihuiming provides reliable process support in eco-friendly conversion and low-cost rust prevention and degreasing for appliance internal structural parts, serving numerous well-known appliance manufacturers.",
        details: [
          {
            heading: "Chromium-Free Eco-Friendly Conversion for Aluminum Radiators and Structural Parts",
            body: "Aluminum radiator fins in air conditioners, refrigerator back panels, and die-cast aluminum motor housings inside washing machines all require surface anti-corrosion treatment before coating or assembly. Aligned with environmental trends, Shihuiming has successfully mastered chromium-free aluminum passivation technology. This process is 100% free of chromium ions and rapidly forms a stable conversion film on the aluminum surface. Testing confirms it not only easily passes all major environmental inspections but also that the conversion film forms extremely strong chemical bonds with subsequent powder coating and baked paint layers, thoroughly solving the persistent problem of paint blistering and peeling on appliance housings after years of use, while having no impact on the thermal conductivity performance of the radiator itself.",
          },
          {
            heading: "High-Volume Degreasing and Eco-Friendly Acid Cleaning for Stamped Parts",
            body: "The interiors of home appliances contain large quantities of stainless steel and iron stamped brackets and hardware fittings. During the forming process, significant amounts of drawing oil and cutting fluid remain on workpiece surfaces. If pre-treatment is inadequate, it not only affects assembly but also leads to internal rusting that shortens appliance life. Given the massive volume of such parts, Shihuiming provides customers with low-foam, high-penetration industrial degreasing cleaners suitable for high-speed assembly line spray or ultrasonic cleaning. Combined with Shihuiming smoke-free eco-friendly acid cleaning solution, this not only eliminates the dense 'yellow smoke' emissions of traditional acid cleaning workshops and improves working conditions, but also effectively reduces overall wastewater treatment costs, helping appliance manufacturers achieve truly green intelligent manufacturing.",
          },
        ],
      },
      {
        slug: "195",
        title: "Medical Device Industry Solutions",
        text: "As medical technology continues to advance, the medical device industry is entering a period of significant growth. At the same time, it faces increasingly stringent requirements for biocompatibility, non-toxicity, environmental friendliness, extreme corrosion resistance, and surface cleanliness. Shihuiming products have extensive application experience in high-purity cleaning and polishing, weld treatment, and passivation rust prevention for the medical device industry, and can meet a wide range of customized surface treatment needs.",
        details: [
          {
            heading: "Non-Destructive High Corrosion Resistance Treatment for Surgical Instruments and Implants",
            body: "All medical devices, due to their contact with human tissue, blood, or bodily fluids, require extremely high corrosion resistance out of life-critical considerations. Before becoming finished products, scalpels, forceps, and orthopedic implants undergo a series of processes including stamping, cutting, and grinding. During these processes, parts are inevitably affected by high temperatures, deformation, and ferrous metal contamination, significantly reducing the overall corrosion resistance of the stainless steel material. Without deep chemical treatment, there is a substantial rust risk during subsequent high-temperature, high-pressure sterilization or contact with bodily fluids. We have established deep cooperation with numerous well-known domestic medical device manufacturers. Shihuiming's high-purity stainless steel passivation process, free of any toxic heavy metals, effectively enhances the neutral salt spray resistance of medical-grade stainless steel. Having passed the rigorous biocompatibility verification of the vast majority of manufacturers, our processes are mature and fully meet the demanding requirements of medical environments.",
          },
          {
            heading: "Internal and External Mirror Polishing for Medical Containers and Piping",
            body: "Large pharmaceutical reactors, saline storage tanks, and transfer piping commonly found in medical equipment must undergo surface treatment before delivery. Since the interiors often operate long-term in high-temperature or chloride-ion-containing environments, bacterial growth or red rust can easily occur if the surface is not sufficiently smooth. While these components may appear structurally simple, achieving a uniform, pit-free near-mirror finish involves many considerations. For these special requirements, Shihuiming has developed a dedicated precision electropolishing solution. This product offers excellent conductivity, is environmentally friendly, and can effectively dissolve microscopic surface protrusions within 20-30 minutes, eliminating dead spots and scratches left by mechanical polishing, substantially reducing stainless steel surface roughness to meet the highest hygiene-grade standards, and thoroughly preventing the risk of chemical residue and bacterial adhesion.",
          },
        ],
      },
      {
        slug: "196",
        title: "Fasteners & Precision Machining Industry Solutions",
        text: "Screws, nuts, washers, and CNC precision turned parts are known as the 'rice of industry,' widely used in communication base stations, automotive manufacturing, marine, aerospace, and other critical fields. Though small in size, these products often face harsh environments with outdoor high salt spray and extreme temperature differences, and require thread fit tolerances to the level of 'absolute precision.' Shihuiming has industry-leading practical experience in solving the technical conflict of 'both extreme corrosion protection and zero dimensional change' for fasteners.",
        details: [
          {
            heading: "Zero-Tolerance Micro High Salt Spray Passivation Rust Prevention",
            body: "Traditional fastener rust prevention mostly uses electro-galvanizing or coating processes, which inevitably add several to over ten microns of thickness to the thread surface, frequently causing high-precision bolts to fail to screw in, strip threads, or compromise assembly precision. To solve this critical problem, Shihuiming has introduced a stainless steel original-color micro passivation process specifically developed for precision parts. This passivation technology is not a 'coating addition' but reconstructs a chromium-rich layer on the substrate surface through atomic-level chemical reactions. It not only steadily improves the neutral salt spray test results of 304, 316, and other fasteners to hundreds or even over a thousand hours, but more importantly, absolutely preserves all original dimensions and thread tolerances of the workpiece. Whether M2 miniature electronic screws or large wind-power bolts, perfect mechanical fit is maintained after treatment.",
          },
          {
            heading: "Deep Degreasing and Cleaning for Blind Holes and Fine Threads",
            body: "After cold heading, heading, and CNC machining, the fine threads and blind hole depths of fasteners are often wrapped in large amounts of stubborn extreme-pressure cutting oil and metal chips. If not thoroughly cleaned, these can easily carbonize and turn black under high temperatures. The specialized cleaning agent developed by Shihuiming has extremely low surface tension, enabling instant penetration into blind holes and thread bottoms to rapidly emulsify and remove stubborn oil residues. After cleaning, workpiece surfaces are dry and clean, providing a perfect, reliable surface base for final packaging or subsequent passivation treatment. Combined with Shihuiming nano anti-rust sealant, it also provides secondary protection against high temperature and high humidity for hardware destined for ocean freight export, completely eliminating the concern of overseas returns.",
          },
        ],
      },
    ],
    contact: {
      phone: "13600258452",
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
  innovationHeadline: string;
  innovationIntro: string;
  intro: string;
  market: string;
  missions: { title: string; text: string }[];
  values: { title: string; text: string }[];
  productCategories: Record<string, string>;
  products: ProductCategory[];
  technology: { title: string; text: string }[];
  applications: { slug: string; title: string; text: string; details: { heading?: string; body: string }[] }[];
  contact: { phone: string; service: string; address: string; email: string };
}>;
