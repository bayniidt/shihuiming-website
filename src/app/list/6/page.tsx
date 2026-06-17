import Banner from "@/components/Banner";

const honorImages = [
  "/public/uploads/images/20210615/a553687a400038bbbb564d58a9a152a9.jpg",
  "/public/uploads/images/20210615/31311ed0f27553ed13d671839372de65.jpg",
  "/public/uploads/images/20210615/e80c67a2f7be57cf579caadf13994e3c.jpg",
  "/public/uploads/images/20210615/8109afd5d401419cc377bd3a0a73a658.jpg",
  "/public/uploads/images/20210615/0bfd66abacb0d4aac70f9e0ae6ff0bb6.jpg",
  "/public/uploads/images/20210615/e9894ab76843e8716a57b68b054fc771.jpg",
  "/public/uploads/images/20210615/75c13c354cef98f31a4fa9c1152dede2.jpg",
  "/public/uploads/images/20210615/a44e6b749bb7f072094b3b61ebe55fc4.jpg",
  "/public/uploads/images/20210615/079e996677362c911ce9b81d579dafbd.jpg",
].map(u => u.replace("/public/uploads", "https://www.zggt-group.com/public/uploads"));

const historyItems = [
  { year: "2005", title: "公司成立", desc: "凯盟研发室、实验室正式成立，致力于金属表面处理技术研发" },
  { year: "2008", title: "品牌创立", desc: "创立\"凯盟\"品牌，专注于不锈钢表面处理产品研发与销售" },
  { year: "2010", title: "技术突破", desc: "不锈钢钝化防锈技术取得重大突破，获得多项发明专利" },
  { year: "2012", title: "品牌扩展", desc: "创立\"美贝仕\"品牌，拓展铜材表面处理领域" },
  { year: "2015", title: "全国布局", desc: "宁波、苏州、温州、重庆、中山、青岛等地设立业务分部" },
  { year: "2018", title: "资质认证", desc: "获得质量管理体系认证、高新技术产品认定等多项荣誉" },
  { year: "2020", title: "产业升级", desc: "成立广东光泰防锈科技有限公司，实现产业化升级" },
  { year: "2021", title: "持续创新", desc: "获得13项专利技术，安全生产标准化企业认定" },
];

export default function Page6() {
  return (
    <>
      <Banner title="关于光泰" bgImage="/images/about_pic.jpg" />

      <div className="Container-wrapper">
        <div className="pub_cate clearfix py-[30px]">
          <div className="contain">
            <ul>
              <li className="float-left mr-[25px] text-[18px] relative">
                <a href="#about1" className="text-[#333] border-r border-[#e1e1e1] pr-[25px] pl-[20px]">
                  <span className="absolute left-0 top-1/2 -mt-[3px] h-[7px] w-[7px] bg-[var(--color-site-orange)]" />
                  广东光泰防锈科技有限公司
                </a>
              </li>
              <li className="float-left mr-[25px] text-[18px] relative">
                <a href="#about3" className="text-[#888] border-r border-[#e1e1e1] pr-[25px]">发展历程</a>
              </li>
              <li className="float-left mr-[25px] text-[18px] relative">
                <a href="#about2" className="text-[#888] border-r border-[#e1e1e1] pr-[25px]">公司风采</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ background: "linear-gradient(180deg, #fff 0%, #f8f8f8 100%)" }}>
        <section id="about1" className="py-[80px]">
          <div className="contain">
            <div className="text-center mb-[50px]">
              <h3 className="text-[36px] font-bold text-[#212121] mb-[10px]">广东光泰防锈科技有限公司</h3>
              <h6 className="text-[16px] text-[#999] tracking-[4px] uppercase">GT-GROUP</h6>
            </div>
            <div className="flex flex-col md:flex-row gap-[40px] items-stretch">
              <div className="md:w-[650px] h-[400px] bg-cover bg-center flex-shrink-0" style={{ backgroundImage: "url(/images/abouttt.jpg)" }} />
              <div className="flex-1 p-[20px_20px_20px_40px]">
                <p className="text-[16px] leading-[32px] text-[#595656] mt-[20px]">广东光泰防锈科技有限公司是一家以不锈钢、不锈铁、铜材、铝材高盐雾钝化防锈和电解抛光材料为方向的研发、生产型企业，服务网络辐射全国。为全国范围内的金属制品企业提供优质产品和高效服务。</p>
                 <p className="text-[16px] leading-[32px] text-[#595656] mt-[20px]">旗下有广东凯盟钝化防锈技术有限公司(下称&ldquo;凯盟公司&rdquo;)和东莞市美贝仕铜材处理剂开发有限公司(下称&ldquo;美贝仕&rdquo;)两大品牌公司，12年专注于金属表面处理研发生产，获得了质量管理体系认证、13项专利技术、高新技术产品产业、安全生产标准化企业等多项荣誉。</p>
                <p className="text-[16px] leading-[32px] text-[#595656] mt-[20px]">&ldquo;美贝仕&rdquo;和&ldquo;凯盟公司&rdquo;总部位于东莞市松山湖国际金融创新园，并在宁波、苏州、温州、重庆、中山和青岛等地设有业务分部，服务于全国各区域的客户。&ldquo;凯盟公司&rdquo;专注研发和销售不锈钢、不锈铁、铝金属表面的抛光、除油及钝化防锈药水和设备。&ldquo;美贝仕&rdquo;作为铜材表面处理领域里的专业品牌，为客户提供多种符合脱脂清洗、化学抛光、酸洗和钝化抗变色等铜材表面处理产品。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about4" className="py-[80px] bg-white">
          <div className="contain">
            <div className="text-center mb-[50px]">
              <h3 className="text-[36px] font-bold text-[#212121] mb-[10px]">荣誉时刻</h3>
              <h6 className="text-[16px] text-[#999] tracking-[4px] uppercase">MOMENT OF HONOR</h6>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[25px]">
              {honorImages.map((img, i) => (
                <div key={i} className="bg-[#f9f9f9] p-[14px] shadow-sm hover:shadow-md transition-shadow duration-[0.3s]">
                  <div className="relative overflow-hidden">
                    <img src={img} alt={`荣誉 ${i + 1}`} className="w-full h-[185px] object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about3" className="py-[80px]">
          <div className="contain">
            <div className="text-center mb-[50px]">
              <h3 className="text-[36px] font-bold text-[#212121] mb-[10px]">发展历程</h3>
              <h6 className="text-[16px] text-[#999] tracking-[4px] uppercase">DEVELOPMENT HISTORY</h6>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-[1px] bg-[#ddd] -translate-x-1/2" />
              {historyItems.map((item, i) => (
                <div key={item.year} className={`flex mb-[40px] ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden md:flex flex-1" />
                  <div className="relative z-10 flex items-center justify-center mx-[20px]">
                    <div className={`w-[16px] h-[16px] rounded-full border-2 border-[#ddd] bg-white flex items-center justify-center group-hover:border-[var(--color-site-orange)] transition-colors duration-[0.3s]`}>
                      <div className="w-[8px] h-[8px] rounded-full bg-[#666] group-hover:bg-[var(--color-site-orange)] transition-colors duration-[0.3s]" />
                    </div>
                  </div>
                  <div className="flex-1 cursor-pointer group">
                    <div className={`px-[30px] ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="text-[30px] font-bold text-[#333] group-hover:text-[var(--color-site-orange)] transition-colors duration-[0.3s] leading-none mb-[10px]">{item.year}</div>
                      <div className="text-[18px] text-[#5f5f5f] font-bold mb-[10px]">{item.title}</div>
                      <p className="text-[16px] text-[#666] leading-[1.8]">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
