import Banner from "@/components/Banner";

const contactCards = [
  {
    icon: "/images/rtf_kf11.png",
    title: "全国统一客服热线",
    content: "电话：400 881 6105",
  },
  {
    icon: "/images/rtf_kf5.png",
    title: "业务咨询",
    content: "联系人：张璐\n联系电话：15817781550",
  },
  {
    icon: "/images/lxtelephone.png",
    title: "公司电话",
    content: "电话：0769-8763 3321\n0769-8763 3525",
  },
  {
    icon: "/images/rtf_kf8.png",
    title: "公司地址",
    content: "地址：广东省东莞市松山湖国际金融创新园D区44A",
  },
];

export default function Page179() {
  return (
    <>
      <Banner title="联系我们" bgImage="/images/banner-191.jpg" />
      <div className="Container-wrapper">
        <div className="pub_cate clearfix py-[30px]">
          <div className="contain"><ul /></div>
        </div>
      </div>

      <div className="ny_contant_bg bg-white pb-0">
        <div className="headliner h-[150px] mt-[30px] text-center">
          <b className="leading-[30px] text-[30px] pt-[27px] text-[#333] font-bold text-center tracking-[1px] relative">
            <em className="leading-[43px] block uppercase text-center font-bold text-[100px] text-[#f6f6f6] not-italic relative -z-10">contact</em>
            联系我们
          </b>
        </div>

        <div className="contactus mx-auto mb-[30px]" style={{ width: "99%", paddingRight: "1%" }}>
          <ul className="clearfix flex justify-center flex-wrap">
            {contactCards.map((card) => (
              <li
                key={card.title}
                className="float-left w-[23%] ml-[2%] min-h-[320px] text-center bg-white shadow-[0_0_10px_#eee] px-[15px] py-0 box-border transition-all duration-[0.6s] hover:scale-110 hover:shadow-[-7px_2px_20px_rgba(6,33,58,0.4)]"
              >
                <em className="h-[60px] mt-[60px] block">
                  <img src={card.icon} alt={card.title} className="block mx-auto" />
                </em>
                <i className="block not-italic text-[24px] font-bold text-[var(--color-site-orange)]">{card.title}</i>
                <span className="block text-[19px] text-[#999] py-[50px] leading-[25px] whitespace-pre-line">{card.content}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="cont_Sol relative w-full h-[700px] flex items-center justify-center" style={{ background: "url(/images/banner-191.jpg) no-repeat center", backgroundSize: "cover" }}>
          <div className="sol_box text-center text-white">
            <div className="sol_top">
              <em className="mb-[35px] leading-[80px] text-[80px] text-[#e4e4e4] block not-italic">CONTACT</em>
              <b className="block leading-[30px] text-[30px]">联系我们</b>
              <i className="bg-[var(--color-site-orange)] mb-[80px] h-[5px] w-[40px] my-[30px] inline-block" />
            </div>
            <div className="flex justify-center gap-[100px] mt-[40px]">
              <div className="sol-share-one relative group">
                <div className="call-img bg-[var(--color-site-orange)] rounded-full p-[15px] z-10 relative">
                  <img src="/images/ewm.jpg" alt="微信" className="w-[100px] h-[100px]" />
                </div>
                <div className="ss-one-qrcode absolute top-[80px] left-1/2 z-10 -translate-x-1/2 -translate-y-5 opacity-0 invisible group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-[0.35s]">
                  <span className="share-name text-[12px] text-[#dedede] leading-[30px] block">微信咨询</span>
                </div>
              </div>
              <a href="tel:4008816105" className="call relative inline-block h-[66px] leading-[66px] text-center group">
                <div className="call-img bg-[var(--color-site-orange)] rounded-full p-[21px] relative z-10">
                  <img src="/images/rtf_kf8.png" alt="电话" className="relative z-10 w-[24px] h-[24px]" />
                </div>
                <div className="call-desc absolute left-0 top-0 z-5 w-[66px] h-full rounded-[100px] bg-[#2e2e2e] text-right overflow-hidden transition-all duration-[0.55s] group-hover:w-[168px]">
                  <span className="desc relative top-0 pr-[12px] inline-block text-[14px] text-white">400 881 6105</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="py-[30px] text-center">
          <div className="contain">
            <h3 className="text-[24px] font-bold text-[#333] mb-[20px]">我们的地址</h3>
            <p className="text-[16px] text-[#666]">广东省东莞市松山湖国际金融创新园D区44A</p>
          </div>
        </div>
      </div>
    </>
  );
}
