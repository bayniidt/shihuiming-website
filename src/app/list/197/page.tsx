import Banner from "@/components/Banner";

const cateLinks = [
  { text: "医疗机械", href: "/list/193" },
  { text: "家用行业", href: "/list/194" },
  { text: "食品机械", href: "/list/195" },
  { text: "核电应用", href: "/list/196" },
  { text: "刀具应用", href: "/list/197", cur: true },
];

const contentHtml = `<p>随着生活水平的不断提高、消费观念的改变。&ldquo;高端、智能、安全、环保、耐用&rdquo;已成为消费者对整体厨卫行业的消费关注重点。特别是&ldquo;食品安全&rdquo;已受到消费者和国家层面的高度关注，厨卫企业一方面在适应当前&ldquo;高人力物力生产成本、高市场竞争&rdquo;的同时，如何实现&ldquo;在不提高原生产成本的基础上，达到产品安全、环保、耐用的性能，提高市场竞争能力&rdquo;已成为当下企业都在思考的问题。</p>
<p>凯盟凭着多年的厨卫行业从业经验，能够为厨卫行业提供&ldquo;除油、除锈、抛光、钝化防锈&rdquo;一站式保姆式的服务。其中不锈钢电解抛光、铜材化学抛光与不锈钢钝化防锈技术更是行业的领航者。我们与国内众多的厨卫大型企业一直坚定友好的深度合作。凯盟助您产品提升，我们一直在路上。</p>
<h3>替代传统机械抛光，实现零排放</h3>
<p>不锈钢水壶是不锈钢制品中抛光要求比较高的一个产品。由于壶胆有一定的深度，长期以来的生产工艺只能采用手工进行抛光。人工抛光既辛苦、耗时并且对抛光技术工人的依赖比较大，尤其是目前的技术工越来越难找，并且用工成本越来越高。另外传统的机械抛光还存在高噪音、高粉尘的污染，对环境和职工身体均存有潜在的风险。凯盟开发了一款不锈钢电解抛光液，通过将水壶挂在阳极的方法，接上电源浸泡在70~80度的药水里经过3~5分钟，就可以快速的实现对水壶内外壁镜面般的光泽度，不仅省时，而且能够实现零排放，保护环境，杜绝粉尘污染。</p>
<h3>黄铜精密零件消光与保护</h3>
<p>水龙头是居家卫浴生活当中必不可少的一部分。其中黄铜水龙头在做好的前处理以后，根据用户的要求有时需要做旧处理（消光或仿古发黑）。传统的方法表面发黑是采用碱性的发黑液进行处理，虽然能够在较短的时间里让黄铜表面发黑，但是由于碱性的发黑液对黄铜材质里面的锌和铅有较强的选择性腐蚀，会造成材质里面的锌和铅优先溶解从而破坏黄铜表面的结构，使黄铜的耐腐蚀性能急剧下降，为品质安全埋下了相当大的隐患。我们针对黄铜水龙头表面做旧或仿古要求，开发了一款酸性的抛光与仿古发黑液，既能完全满足发黑的效果，又能够保持黄铜材质的完整、安全，告别选择性腐蚀。</p>
<p style="text-align:center"><img src="/images/industry-197.jpg" alt="" style="max-width:100%; margin:0 auto" /></p>`;

export default function Page197() {
  return (
    <>
      <Banner title="刀具应用" bgImage="/images/banner-191.jpg" />
      <div className="Container-wrapper">
        <div className="pub_cate clearfix py-[30px]">
          <div className="contain">
            <ul>
              {cateLinks.map((link) => (
                <li key={link.text} className="float-left mr-[25px] text-[18px] relative">
                  {link.cur && <span className="absolute left-0 top-1/2 -mt-[3px] h-[7px] w-[7px] bg-[var(--color-site-orange)]" />}
                  <a href={link.href} style={{ color: link.cur ? "#333" : "#888", borderRight: "1px solid #e1e1e1", paddingRight: "25px", paddingLeft: link.cur ? "20px" : "0" }}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F7F7F7] h-[200px] flex items-center">
        <div className="w1140"><h2 className="text-[40px] font-bold text-[#212121]" style={{ fontFamily: '"Microsoft YaHei"' }}>广东光泰防锈科技有限公司 精于专业 工于匠心</h2></div>
      </div>
      <div className="pb-[66px]"><div className="w1140"><div className="mt-[20px]" style={{ fontFamily: '"Microsoft YaHei"', fontSize: "16px", color: "#212121", lineHeight: "30px" }}><div dangerouslySetInnerHTML={{ __html: contentHtml }} /></div></div></div>
    </>
  );
}
