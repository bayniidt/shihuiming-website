import Banner from "@/components/Banner";
import Link from "next/link";

const cateLinks = [
  { text: "不锈钢表面处理", href: "/list/190" },
  { text: "铜材表面处理", href: "/list/191", cur: true },
  { text: "铝材表面处理", href: "/list/192" },
];

export default function Page191() {
  return (
    <>
      <Banner title="铜材表面处理" bgImage="/images/banner-191.jpg" />
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
      <div className="section2 contain text-center py-[60px]">
        <div className="inner-tit black text-[32px] font-bold text-[#212121] mb-[10px]">铜材表面处理</div>
        <p className="text-[16px] text-[#666] mb-[40px]">为铜材提供专业的表面处理解决方案</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          <Link href="/show/595.html" className="group block bg-white shadow-[0_0_10px_#eee] transition-all duration-[0.3s] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]">
            <div className="overflow-hidden h-[260px]"><img src="https://www.zggt-group.com/public/uploads/images/20210813/02977b82018d6a4e921d72e932835800.jpg" alt="抛光技术" className="w-full h-full object-cover transition-transform duration-[0.4s] group-hover:scale-110" /></div>
            <div className="p-[20px]"><h3 className="text-[18px] font-bold text-[#333] mb-[10px]">抛光技术</h3><p className="text-[14px] text-[#666] leading-[24px] line-clamp-3">铜化学抛光是一种在铜及其合金表面进行的化学弱腐蚀的过程中达到光亮的抛光工艺。</p><span className="text-[var(--color-site-orange)] text-[14px]">查看详情</span></div>
          </Link>
          <Link href="/show/594.html" className="group block bg-white shadow-[0_0_10px_#eee] transition-all duration-[0.3s] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]">
            <div className="overflow-hidden h-[260px]"><img src="https://www.zggt-group.com/public/uploads/images/20210617/e090a4b55863a738c10ca0234cee4e64.jpg" alt="钝化技术" className="w-full h-full object-cover transition-transform duration-[0.4s] group-hover:scale-110" /></div>
            <div className="p-[20px]"><h3 className="text-[18px] font-bold text-[#333] mb-[10px]">钝化技术</h3><p className="text-[14px] text-[#666] leading-[24px] line-clamp-3">铜材工件未经处理极容易氧化变色腐蚀，通过钝化处理可有效提高铜材的耐腐蚀性能。</p><span className="text-[var(--color-site-orange)] text-[14px]">查看详情</span></div>
          </Link>
        </div>
      </div>
    </>
  );
}
