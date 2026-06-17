interface FooterColumn {
  title: string;
  href: string;
  children: { label: string; href: string }[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "关于光泰",
    href: "/list/6.html",
    children: [
      { label: "公司简介", href: "/list/185.html#about1" },
      { label: "公司愿景", href: "/list/186.html#about2" },
      { label: "发展历程", href: "/list/187.html#about3" },
      { label: "荣誉资质", href: "/list/188.html#about4" },
      { label: "公司风采", href: "/list/189.html#about5" },
    ],
  },
  {
    title: "公司产业",
    href: "/list/1.html",
    children: [
      { label: "不锈钢表面处理", href: "/list/190.html" },
      { label: "铜材表面处理", href: "/list/191.html" },
      { label: "铝材表面处理", href: "/list/192.html" },
    ],
  },
  {
    title: "行业应用",
    href: "/list/2.html",
    children: [
      { label: "医疗机械", href: "/list/193.html" },
      { label: "家用行业", href: "/list/194.html" },
      { label: "食品机械", href: "/list/195.html" },
      { label: "核电应用", href: "/list/196.html" },
      { label: "刀具应用", href: "/list/197.html" },
    ],
  },
  {
    title: "新闻资讯",
    href: "/list/11.html",
    children: [
      { label: "公司公告", href: "/list/181.html" },
      { label: "光泰动态", href: "/list/182.html" },
      { label: "行业焦点", href: "/list/198.html" },
      { label: "子公司新闻", href: "/list/199.html" },
    ],
  },
  {
    title: "人力资源",
    href: "/list/200.html",
    children: [
      { label: "招贤纳士", href: "/list/203.html" },
    ],
  },
];

const contacts = [
  "联系人：张璐",
  "联系电话：15817781550",
  "全国统一客服热线：400 881 6105",
  "电话：0769-8763 3321 / 0769-8763 3525",
  "微信：15817781550",
  "地址：广东省东莞市松山湖国际金融创新园D区44A",
];

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#2a2a2a] py-[60px]">
        <div className="container-site">
          <div className="flex flex-wrap">
            <div className="flex flex-wrap flex-1 gap-[40px]">
              {footerColumns.map((col) => (
                <dl key={col.title} className="min-w-[120px]">
                  <dt className="text-[#aaa] text-[16px] mb-[12px]">
                    <a href={col.href} className="hover:text-[var(--color-site-orange)] transition-colors duration-[0.3s]">
                      {col.title}
                    </a>
                  </dt>
                  {col.children.map((child) => (
                    <dd key={child.label} className="leading-[30px]">
                      <a
                        href={child.href}
                        className="text-[#aaa] text-[14px] hover:text-[var(--color-site-orange)] transition-colors duration-[0.3s]"
                      >
                        {child.label}
                      </a>
                    </dd>
                  ))}
                </dl>
              ))}
            </div>

            <div className="flex gap-[40px] ml-auto">
              <div className="text-[#aaa] text-[14px] leading-[30px]">
                <strong className="text-[16px] text-[#ddd] block mb-[10px]">联系我们</strong>
                {contacts.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="text-center">
                <p className="text-[#aaa] text-[14px] mb-[10px]">关注光泰公众号</p>
                <img
                  src="/images/ewm.jpg"
                  alt="微信公众号"
                  className="mx-auto w-[100px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#222] py-[20px]">
        <div className="container-site text-center">
          <div className="mb-[10px]">
            <span className="text-[#999] mr-[10px]">友情链接</span>
            <a href="http://www.mikeidea.com/" className="text-[#999] hover:text-[var(--color-site-orange)] transition-colors duration-[0.3s]">
              米可网络
            </a>
          </div>
          <div className="text-[#999] text-[12px] leading-[24px]">
            <span>COPYRIGHT © 2021 ALL RIGHTS RESERVED 广东光泰防锈科技有限公司</span>
            <span className="mx-[10px]">|</span>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-[#999] hover:text-[var(--color-site-orange)]">
              粤ICP备12076215号
            </a>
            <span className="mx-[10px]">|</span>
            <a href="http://www.mikeidea.com/" className="text-[#999] hover:text-[var(--color-site-orange)]">
              技术支持：米可网络
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
