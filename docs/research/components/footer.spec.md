# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/section-footer.png`
- **Interaction model:** static

## DOM Structure
```
.km_footer
  .foot1.clearfix (background: #2a2a2a, padding: 60px 0 40px)
    .container.clearfix
      .ft_nav (float left)
        dl (each footer column)
          dt a (column title)
          dd a (column links)
      .ft_more.clearfix (float right)
        .lxfs (contact info)
          strong "联系我们"
          p (phone, address, etc.)
        .ewm_box (QR code)
          p "关注光泰公众号"
          img (ewm.jpg, 100x99)
  .foot2 (background: #222)
    .container
      .a_box "友情链接" + links
      .info_more copyright + ICP + tech support
```

## Computed Styles

### Foot1 (.foot1)
- backgroundColor: #2a2a2a
- padding: 60px 0 40px

### Footer nav columns (.ft_nav dl)
- float: left, text color: #aaa

### Column title (dt a)
- color: #aaa, on hover: #F39800

### Contact section (.lxfs)
- color: #aaa
- strong: font-size larger, margin-bottom

### Foot2 (.foot2)
- backgroundColor: #222222
- color: #aaa/#999
- lineHeight: taller
- fontSize: ~12px

### Links
- color: #999
- hover: #F39800

## States & Behaviors

### Hover states
- **All links:** color -> #F39800
- **Transition:** 0.3s

## Text Content (verbatim)

Footer columns:
1. 关于光泰: 公司简介, 公司愿景, 发展历程, 荣誉资质, 公司风采
2. 公司产业: 不锈钢表面处理, 铜材表面处理, 铝材表面处理
3. 行业应用: 医疗机械, 家用行业, 食品机械, 核电应用, 刀具应用
4. 新闻资讯: 公司公告, 光泰动态, 行业焦点, 子公司新闻
5. 人力资源: 招贤纳士

Contact:
- 联系人：张璐
- 联系电话：15817781550
- 全国统一客服热线：400 881 6105
- 电话：0769-8763 3321 / 0769-8763 3525
- 微信：15817781550
- 地址：广东省东莞市松山湖国际金融创新园D区44A

Copyright:
- COPYRIGHT © 2021 ALL RIGHTS RESERVED 广东光泰防锈科技有限公司
- 粤ICP备12076215号
- 技术支持：米可网络
- 友情链接: 米可网络

## Assets
- QR code: `public/images/ewm.jpg`

## Responsive Behavior
- **Desktop (1440px):** Multi-column footer nav, contact on right
- **Tablet (768px):** Columns may wrap
- **Mobile (390px):** Full stack, nav becomes accordion or vertical list
