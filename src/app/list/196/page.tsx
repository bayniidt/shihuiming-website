import Banner from "@/components/Banner";

const cateLinks = [
  { text: "医疗机械", href: "/list/193" },
  { text: "家用行业", href: "/list/194" },
  { text: "食品机械", href: "/list/195" },
  { text: "核电应用", href: "/list/196", cur: true },
  { text: "刀具应用", href: "/list/197" },
];

const contentHtml = `<p>核电做为低能、高效、清洁的资源。早已上升至国家战略层面，正面临着前所未有的发展大机遇，也迎来了核电设施高速发展的春天。随着核电技术的不断进步，同时对核电设施的防腐安全也提升至了前所未有的高度。凯盟通过与多家核电力设备厂家的合作，积累了丰富的核电设施表面防腐处理经验，针对核电散热器材、核电燃料棒储存设备等表面防腐处理有着丰富的经验。</p>
<h3>快速除氧化皮，在表面生成的银白哑亮的保护层</h3>
<p>所有的核电设施因考虑到安全性和时间的耐久性，往往所选用的材料都是耐蚀性较好的316和316L以上级别的奥氏体材料，甚至有不少是双相不锈钢。这些材料在加工和组装过程当中经过高温焊接或热处理等工序，表面会产生严重的甚至达到5~6mm厚的黑色氧化皮。去除致密的氧化皮对于普通的酸洗工艺来说是不可完成的任务。我们通过对核电材料的深入研究，开发了针对性较强的快速酸洗钝化液，能够有效的去除奥氏体和双相不锈钢表面顽固氧化皮，并且在表面可以生成一层银白哑亮的钝化膜，经久耐蚀，中性盐雾测试超过1000小时完全无锈。稳定可靠，值得信赖！</p>
<p style="text-align:center"><img src="/images/industry-196.jpg" alt="" style="max-width:100%; margin:0 auto" /></p>
<h3>耐高温、抗腐蚀的新选择，提高核电设备寿命</h3>
<p>提到核，我们通常会想到核反应，但是核能也可以造福人类，这里面最典型的一个应用就是核电。中国是一个人口大国，也是一个电能消耗的大国。提供清洁高效、可持续的电能供应是国家能源安全战略的重中之重。大力发展核电是国家为确保未来能源保障安全的重要途经之一。关注核电能源安全的同时自然也要关注核电设施的腐蚀与防护安全，甚至是核电原料的安全防护。我们为核电领域专门打造的腐蚀与防护方案或产品，将为您的设备提供最安全的表面防护，延长您设备的使用寿命，为核电安全贡献我们的力量。</p>`;

export default function Page196() {
  return (
    <>
      <Banner title="核电应用" bgImage="/images/banner-191.jpg" />
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
