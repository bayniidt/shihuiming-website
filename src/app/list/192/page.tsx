import Banner from "@/components/Banner";
import Link from "next/link";

const cateLinks = [
  { text: "不锈钢表面处理", href: "/list/190" },
  { text: "铜材表面处理", href: "/list/191" },
  { text: "铝材表面处理", href: "/list/192", cur: true },
];

export default function Page192() {
  return (
    <>
      <Banner title="铝材表面处理" bgImage="/images/banner-191.jpg" />
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
        <div className="inner-tit black text-[32px] font-bold text-[#212121] mb-[10px]">铝材表面处理</div>
        <p className="text-[16px] text-[#666] mb-[40px]">为铝材提供专业的表面处理解决方案</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          <Link href="/show/593.html" className="group block bg-white shadow-[0_0_10px_#eee] transition-all duration-[0.3s] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]">
            <div className="overflow-hidden h-[260px]"><img src="https://www.zggt-group.com/public/uploads/images/20210813/396f2128edcb1be85f63467a39d2e94f.jpg" alt="钝化技术" className="w-full h-full object-cover transition-transform duration-[0.4s] group-hover:scale-110" /></div>
            <div className="p-[20px]"><h3 className="text-[18px] font-bold text-[#333] mb-[10px]">钝化技术</h3><p className="text-[14px] text-[#666] leading-[24px] line-clamp-3">通过化学或电化学方法使铝及铝合金表面状态发生变化，使其溶解速度急剧下降，使耐蚀性提高。</p><span className="text-[var(--color-site-orange)] text-[14px]">查看详情</span></div>
          </Link>
        </div>
      </div>
    </>
  );
}
