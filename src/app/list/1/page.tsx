import Banner from "@/components/Banner";
import Link from "next/link";

const cateLinks = [
  { text: "不锈钢表面处理", href: "/list/190" },
  { text: "铜材表面处理", href: "/list/191" },
  { text: "铝材表面处理", href: "/list/192" },
];

const products = [
  {
    href: "/show/595.html",
    image: "https://www.zggt-group.com/public/uploads/images/20210813/02977b82018d6a4e921d72e932835800.jpg",
    title: "抛光技术",
    desc: "铜化学抛光是一种在铜及其合金表面进行的化学弱腐蚀的过程中达到光亮的抛光工艺。经过化学抛光后铜表面非常光滑光亮，尽显铜本色，甚至可以使铜表面产生镜面反射。铜化学抛光液维护方便、操作安全、无有害气体逸出。",
  },
  {
    href: "/show/594.html",
    image: "https://www.zggt-group.com/public/uploads/images/20210617/e090a4b55863a738c10ca0234cee4e64.jpg",
    title: "钝化技术",
    desc: "铜材工件未经处理极容易氧化变色腐蚀，这是由于铜元素的最外层电子轨道为非饱满的稳定状态，容易失去1、2个电子而被氧化。",
  },
  {
    href: "/show/593.html",
    image: "https://www.zggt-group.com/public/uploads/images/20210813/396f2128edcb1be85f63467a39d2e94f.jpg",
    title: "钝化技术",
    desc: "一般来说，易离子化的金属容易氧化，即容易腐蚀，而事实上并非完全如此，有些金属如铝、镁、铬等虽然易离子化，但由于它们在大气或水中容易生成一层腐蚀产物的薄膜，从而却提高了耐蚀性。通过化学或电化学方法使铝及铝合金属表面状态发生变化，使其溶解速度急剧下降，使耐蚀性提高，此种工艺过程称为铝材钝化处理。",
  },
  {
    href: "/show/592.html",
    image: "https://www.zggt-group.com/public/uploads/images/20210617/9d8ac3e4c479b7903f424355be8f1563.jpg",
    title: "酸洗技术",
    desc: "利用酸溶液去除钢铁表面上的氧化皮和锈蚀物的方法称为酸洗。是清洁金属表面的一种方法。通常与预膜（pre-passivating treatment）一起进行。酸洗用酸有硫酸、盐酸、磷酸、硝酸、铬酸、氢氟酸和混合酸等。常用的是硫酸和盐酸。",
  },
  {
    href: "/show/591.html",
    image: "https://www.zggt-group.com/public/uploads/images/20210617/0114934ce20c38662ec6a66bdacd83ef.jpg",
    title: "清洗技术",
    desc: "金属清洗是指在通过一定的技术手段将金属表面的污垢（油污，锈斑，表面氧化层等）清除掉，从而使工件表面的洁净度达到预期的要求。一般包括除油、除锈和除垢等。目前常用的除油方法有有机溶剂除油、化学除油和电化学除油等。除锈的方法有化学除锈和喷砂除锈等。",
  },
  {
    href: "/show/590.html",
    image: "https://www.zggt-group.com/public/uploads/images/20210617/1f277d8feba9165df579b213c71f377d.jpg",
    title: "电解技术",
    desc: "电解抛光是一种利用阳极在适当的电解液中和控制的工艺参数下，对金属零件进行阳极处理，而使零件表面得到近似镜面光泽的工艺。电解抛光具有效率高、一致性好、可以处理外形复杂零件及尺寸较小的精密五金件等优点。",
  },
];

export default function Page1() {
  return (
    <>
      <Banner title="公司产业" bgImage="/images/banner-1.jpg" />
      <div className="Container-wrapper">
        <div className="pub_cate clearfix py-[30px]">
          <div className="contain">
            <ul>
              {cateLinks.map((link) => (
                <li key={link.text} className="float-left mr-[25px] text-[18px] relative">
                  <a href={link.href} className="text-[#888] border-r border-[#e1e1e1] pr-[25px] hover:text-[#333]">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="inner-page product-list">
        <div className="section2">
          <div className="contain">
            <div className="inner-tit black text-[32px] font-bold text-[#212121] mb-[30px]">公司产业</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {products.map((product) => (
                <Link key={product.title} href={product.href} className="group block bg-white shadow-[0_0_10px_#eee] transition-all duration-[0.3s] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]">
                  <div className="img-box overflow-hidden h-[260px] bg-gray-100 flex items-center justify-center">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-[0.4s] group-hover:scale-110" />
                  </div>
                  <div className="p-[20px]">
                    <h3 className="text-[18px] font-bold text-[#333] mb-[10px]">{product.title}</h3>
                    <p className="text-[14px] text-[#666] leading-[24px] line-clamp-3 mb-[10px]">{product.desc}</p>
                    <span className="text-[var(--color-site-orange)] text-[14px]">查看详情</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
