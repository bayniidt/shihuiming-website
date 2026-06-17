import Banner from "@/components/Banner";

const pageData = {
  title: "医疗机械",
  subtitle: "",
  contentTitle: "广东光泰防锈科技有限公司 精于专业 工于匠心",
  contentHtml: `<p>随着医疗技术的不断进步与发展，医疗器械行业迎来了大发展时期。同时也对医疗器械的无毒环保、防腐性、表面反光颜色等方面提出了更高的要求。凯盟产品在医疗机械行业哑光处理、清洗、抛光、钝化防锈等方面有着非常丰富的应用经验。可满足您不同个性化的表面处理需求。</p>

<h3>医疗器械管道内部生锈的处理</h3>

<p>我们所熟知的医疗器械，尤其是制药罐、医疗管道在制造完成交付用户使用之前，或者是这些设备运行一段时间以后都需要进行运维处理，由于医疗管道容器的特殊环境的原因，运行一段时间以后在氯离子或者是高温的作用下，容易在管道的内壁产生一些锈蚀物，通常的表象就是流出的水体会略带混浊或者是经过过滤的时候会产生甚至红锈的这种现象，那其实就是我们所理解的锈蚀。这种锈蚀如果采用传统的盐酸或者强酸的工艺尽管能够处理，但是会对设备尤其是医疗器械会带来一定的风险。另外根据我们的经验，由于这些设备通常使用的环境会长期处于120度以上的高温，它所生成的氧化物是非常致密的，即使采用强酸（磷酸、硫酸、盐酸）之类的体系剂进行处理，仍然存在有处理不彻底的这种风险，根据这种问题我们开发了一款中性的除锈清洗剂。这种清洗剂工作的条件是按照一定的比例添加到水体里后保持在70~90度的温度，循环1~2小时就可以彻底的把各种严重程度的锈蚀清除干净，由于药水是呈中性，不论是对设备还是对操作的环境，都有了巨大的保护和提升。</p>

<h3>手术器械的消光处理</h3>

<p>手术器械比如手术刀、捏子、内窥镜等之类的部件，由于手术操作时需要在聚光灯下面进行，因此如果提供的这些器械光泽度太高，容易对医护人员的眼睛产生一定的伤害，那么特殊环境就要求这一类产品必须是处于消光，我们的专业术语叫哑光状态。我们针对这样的零部件所采用的工艺是用一种特殊的哑光电解抛光，对零部件先进行电解处理，然后再对这些器械进行钝化处理，这样既达到消除光泽保护医护人员用眼安全需要的同时也提高了这些零部件在长期和人体的血液或者汗液接触过程当中所产生腐蚀风险的可能性。作为一家对社会负有责任的企业，我们时刻在践行这一点。</p>

<p style="text-align:center"><img src="/images/industry-193.jpg" alt="" style="max-width:100%; margin:0 auto" /></p>

<h3>提高耐蚀能力和CIP定位</h3>

<p>所有的医疗器械由于都是要和人体打交道，人权至上、生命至上的要求，因此对医疗器械的耐腐蚀能力是有较高的要求。大多数的医疗器械在成为成品之前需要经过一系列的工艺进行加工制造才能完成，其中就包括焊接、挤压、打磨以及人工抛光等一系列的工序，在这些工艺的制作过程当中，零件会不断的受到油污、挤压变形、高温等影响，导致材料的整体耐蚀能力降低，点蚀电位也会发生较大的变化，如果不进行相应的钝化处理会带来巨大的风险。经过实证明，只有对这些零部件进行有效的钝化，国外在这方面走的就比我们国内要早很多，我们现在和国内知名的一些医疗器械企业也有建立合作，我们提供的这个不锈钢钝化工艺可以有效的提升它的CIP和耐中性盐雾测试能力达到2000小时以上，点蚀电位达到1100毫伏，经过绝大多数厂商的验证，我们的工艺是成熟而且完全可以满足客户的环境需要。</p>

<h3>医疗容器的内外壁镜面抛光</h3>

<p>医疗器械的容器比较常见的是生理盐水储存罐和制药反应釜，这些容器在交付使用前都会进行电化学抛光处理，但是通常这些零件的体型或者个头通常都比较大，对于它的外壁和内壁处理看似很简单，但其实是有许多的讲究的。这些零件面临最大的问题有2点。第一是如何保持在电解以后表面能获得均匀一致的表面和不产生麻点之类的缺陷；第二是如何获得近似镜面的处理效果。我们针对这些特殊的要求，有开发一款不锈钢镜面抛光液KM0304，这款产品最大的特性是导电性能非常好，不含铬，绿色环保，如果表面处理的粗糙度RA在0.2以下的粗糙度，在20~30分钟的时间里可以获得RA0.005左右的光泽度，近似人工抛光镜面效果，这种工艺同时也适用于压铸件的精密处理。</p>`,
  cateLinks: [
    { text: "医疗机械", href: "/list/193", cur: true },
    { text: "家用行业", href: "/list/194" },
    { text: "食品机械", href: "/list/195" },
    { text: "核电应用", href: "/list/196" },
    { text: "刀具应用", href: "/list/197" },
  ],
};

export default function Page193() {
  return (
    <>
      <Banner title={pageData.title} subtitle={pageData.subtitle} bgImage="/images/banner-191.jpg" />
      <div className="Container-wrapper">
        <div className="pub_cate clearfix py-[30px]">
          <div className="contain">
            <ul>
              {pageData.cateLinks.map((link) => (
                <li key={link.text} className={link.cur ? "cur" : ""}>
                  <a
                    href={link.href}
                    className={link.cur ? "text-[#333] pl-[20px] border-r border-[#e1e1e1] pr-[25px]" : "text-[#888] border-r-[1px] border-[#e1e1e1] pr-[25px]"}
                    style={{
                      color: link.cur ? "#333" : "#888",
                      paddingLeft: link.cur ? "20px" : "",
                      position: "relative",
                    }}
                  >
                    {link.cur && (
                      <span className="absolute left-0 top-1/2 -mt-[3px] h-[7px] w-[7px] bg-[var(--color-site-orange)]" />
                    )}
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F7F7F7] h-[200px] flex items-center">
        <div className="w1140">
          <h2 className="text-[40px] font-bold text-[#212121]" style={{ fontFamily: '"Microsoft YaHei"' }}>
            {pageData.contentTitle}
          </h2>
        </div>
      </div>

      <div className="pb-[66px]">
        <div className="w1140">
          <div className="mt-[20px]" style={{ fontFamily: '"Microsoft YaHei"', fontSize: "16px", color: "#212121", lineHeight: "30px" }}>
            <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
          </div>
        </div>
      </div>
    </>
  );
}
