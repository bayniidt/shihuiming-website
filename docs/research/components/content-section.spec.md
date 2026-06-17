# ContentSection Specification (Youshi)

## Overview
- **Target file:** `src/components/ContentSection.tsx`
- **Screenshot:** `docs/design-references/section-youshi_part.png` and `section-youshi_top.png`
- **Interaction model:** static with WOW.js scroll-triggered fadeInUp animations

## DOM Structure
```
.youshi-top.youshi (200px height, #F7F7F7 bg, display: table)
  .box (display: table-cell, vertical-align: middle)
    .w1140 (1140px centered)
      .title (40px, bold, #212121)

.youshi-part.youshi (padding-bottom: 66px)
  .w1140
    .part.part1 (margin-top: 20px)
      .text.wow.fadeInUp (16px, #212121, line-height: 30px, margin-bottom: 22px)
      .imgs-list2.clearfix (padding-top: 28px, margin: 0 -20px, 4 columns)
        .col-md-6.col-sm-6.col-xs-12.wow.fadeInUp (50% width, 590px)
          .item
            .img
              img (550x410)
              .title2 (overlay label at bottom)
```

## Computed Styles

### Youshi Top (.youshi-top)
- height: 200px
- backgroundColor: #F7F7F7
- width: 100%
- display: table

### Youshi Top Title (.title)
- fontSize: 40px
- fontWeight: bold (700)
- fontFamily: "Microsoft YaHei"
- color: #212121

### Youshi Part (.youshi-part)
- paddingBottom: 66px

### Text (.text)
- fontSize: 16px
- fontFamily: "Microsoft YaHei"
- color: #212121
- lineHeight: 30px
- marginBottom: 22px

### Image grid (.imgs-list2)
- paddingTop: 28px
- margin: 0 -20px (negative margin for gutter)
- width: 1180px (1140 + 40px negative margin)

### Card column (.col-md-6)
- width: 590px (50% of 1180px)
- height: ~460px
- float: left

### Card image (img)
- naturalWidth: 550, naturalHeight: 410
- width: 100% display

### Card title overlay (.title2)
- Positioned at bottom of image area
- Text: "实验室1", "实验室2", "研发室1", "研发室2"

## States & Behaviors

### WOW.js scroll animations
- **Trigger:** element enters viewport (IntersectionObserver / scroll position)
- **.text:** fadeInUp (opacity 0->1, translateY upward)
- **.col-md-6:** fadeInUp with staggered delays (0.1s, 0.15s, 0.1s, 0.15s)
- **Implementation approach:** CSS animation classes + IntersectionObserver (replacing WOW.js)

### Hover states
- **Card images:** image scale(1.1) on hover with 0.4s transition
- **Links:** color change to #F39800

## Text Content (verbatim)
- Youshi title: "广东光泰防锈科技有限公司 精于专业 工于匠心"
- Text: "凯盟研发室、实验室成立于2005年，一直致力于金属表面处理与绿色环保的新技术、新工艺和前瞻性技术研究与开发，自主创新能力强。成立以来，"两室"承担了公司大量的表面处理课题研发任务，并且在科研项目中与各高校院所等合作，实现人才、专业、试验装备优势互补，各项科研成果攻克了诸多行业技术难题，为行业关键、共性技术研究和瓶颈技术突破作出了较大贡献。"
- Lab titles: ["实验室1", "实验室2", "研发室1", "研发室2"]

## Assets
- Lab images: `public/images/keyan1.jpg`, `keyan2.jpg`, `keyan3.jpg`, `keyan4.jpg`

## Responsive Behavior
- **Desktop (1440px):** 2-column grid (col-md-6), 590px each
- **Tablet (768px):** 2-column grid (col-sm-6), narrower
- **Mobile (390px):** Single column (col-xs-12), full width
- **Breakpoint:** switches at ~768px
