import Banner from "@/components/Banner";

const cateLinks = [
  { text: "医疗机械", href: "/list/193" },
  { text: "家用行业", href: "/list/194" },
  { text: "食品机械", href: "/list/195", cur: true },
  { text: "核电应用", href: "/list/196" },
  { text: "刀具应用", href: "/list/197" },
];

const contentHtml = `<p>食品安全始终是消费者和食品生产企业永恒关注不变的课题。作为食品生产的食品生产设备：如何实现其安全环保的防锈功能，显得尤为重要，事关食品设备的使用寿命与直接关系所生产食品的安全。</p>
<p>凯盟针对食品机械设备行业，可量身订制适合的清洗、抛光与钝化防锈等组合工艺。产品安全环保，经处理过的设备零件完全可以达到FDA级食品卫生安全要求。为食品安全，与延长设备的使用寿命保驾护航！</p>
<h3>快速去披锋(Burr)，提高表面的光亮度</h3>
<p>刀具餐具在成型、开齿、刃口等加工时往往需要经过冲压或机械加工，不可避免会产生大量的披锋(Burr)，这些批锋如果不做仔细的清理既容易划伤手也不利于美观。历来生产企业会采用人工进行打磨去披锋，耗费大量的时间与人力成本。我们有一款适合不锈钢材料快速去披锋和出光的产品，满足快速的去除毛刺并提高光亮度的要求，成本远远低于传统手工打磨。</p>
<p style="text-align:center"><img src="/images/industry-195.jpg" alt="" style="max-width:100%; margin:0 auto" /></p>
<h3>食机械防锈与食品安全是一对共同体</h3>
<p>民以食为天，食以安为先。食品机械的防锈历来是一个比较棘手的问题，这是因为食品机械一方面要面临各种不同食品物料的酸碱腐蚀，还要经受生产过程中高温清洗、消毒的考验，而且不能使用有毒有害的防锈油。因此食品行业里机械设备的生锈问题就一直困扰着众多设备使用单位。我们针对上述情况，开发了一款完全水溶性的钝化防锈剂，不含铬，无任何有毒害物质，符合美国FDA食品卫生安全标准。可在设备或零件的表面形成一层薄而致密的氧化膜。从而可以杜绝零件在长期使用过程当中不会产生任何的锈蚀风险，安全环保，值得信赖！</p>`;

export default function Page195() {
  return (
    <>
      <Banner title="食品机械" bgImage="/images/banner-191.jpg" />
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
