import Banner from "@/components/Banner";

const cateLinks = [
  { text: "医疗机械", href: "/list/193" },
  { text: "家用行业", href: "/list/194", cur: true },
  { text: "食品机械", href: "/list/195" },
  { text: "核电应用", href: "/list/196" },
  { text: "刀具应用", href: "/list/197" },
];

const contentHtml = `<p>伴随改革开放的不断深入，家用电器已深入千家万户，成为了家庭生活中不可或缺的一部分。各家电企业的发展过程也由当初供不应求转变为了精细化、个性化的服务。&ldquo;价格、质量&rdquo;成为白热化的竞争</p>
<p>如何在降低成本的同时，实现质量的提升？凯盟产品通过在家电行业的应用经验，特别是在铜、铝、不锈钢、不锈铁等材料应用的产品上，拥有丰富化学的抛光、钝化防锈、清洗等成功应用。</p>
<h3>替代人工打磨除焊斑的新方法</h3>
<p>众所周知，现代家居皆以实用、美观、大气为出发点，目前在家用电器中小家电是最常见应用到不锈钢材料的，尤以不锈钢水壶、不锈钢锅具、不锈钢灶台等最为常见。这类零件在最终的装配之前经过了一系列的加工，比如冲压、拉伸、焊接等，尤其是在焊缝的位置经过高温烧焊以后会产生比较严重的难以清除的氧化皮。传统抛光工艺采用人工的方式进行打磨，即便是熟练的技工也需要耗时较长，并且处理的效果还不太理想。如果改用我司开发的快速的环保洗钢水，可以在很短的时间内能够获得非常理想的效果。</p>
<p style="text-align:center"><img src="/images/industry-194.jpg" alt="" style="max-width:100%; margin:0 auto" /></p>
<h3>替换不锈钢铜焊料焊接件快速抛光</h3>
<p>家庭不锈钢用品尤其是锅具的把手、壶嘴、汤勺等经常会需要有焊接组装的工艺，材料是不锈钢，但是焊接的焊料通常为铜焊料，铜焊料在高温焊接以后局部会严重的发黑，表面形成一层厚厚的氧化皮，这对于后续的电解抛光是一个极大的挑战。一方面要求对不锈钢表面能够快速的出光，另一方面也要求对铜的焊接区域的氧化皮完全清除，并且还不能够损伤到基材，要做到既均匀又光亮，并且还能满足过盐雾的要求，这个在行业里面曾经一直是一个难以攻克的问题。凯盟公司通过行业应用经验，并与专业的科研院校合作，开发了一款适合不锈钢铜焊料焊接件快速出光的环保电解抛光液，适合加热管、汤勺、锅具把手、壶嘴等不锈钢铜焊接件的快速电解抛光，工件只需要经过10~15分钟的处理，即可得到近似于镜面的光亮效果，并将局部黑皮完全清除，外观均匀一致，耐盐雾测试也可以轻松的达到200~1000小时以上，通过欧盟RoHS和无PFOS的检测要求，可完全回收，远比手工打磨省时、省力并更环保。</p>`;

export default function Page194() {
  return (
    <>
      <Banner title="家用行业" bgImage="/images/banner-191.jpg" />
      <div className="Container-wrapper">
        <div className="pub_cate clearfix py-[30px]">
          <div className="contain">
            <ul>
              {cateLinks.map((link) => (
                <li key={link.text} className="float-left mr-[25px] text-[18px] relative">
                  {link.cur && <span className="absolute left-0 top-1/2 -mt-[3px] h-[7px] w-[7px] bg-[var(--color-site-orange)]" />}
                  <a href={link.href} style={{
                    color: link.cur ? "#333" : "#888",
                    borderRight: "1px solid #e1e1e1",
                    paddingRight: "25px",
                    paddingLeft: link.cur ? "20px" : "0",
                  }}>{link.text}</a>
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
