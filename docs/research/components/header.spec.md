# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/section-header.png`
- **Interaction model:** static (with hover-driven dropdowns and click-driven search)

## DOM Structure
```
.header (fixed, 140px, white bg)
  .container.clearfix (1720px max-width, padding 0 50px)
    .logo.fl (logo image 171x57, margin-top 43px)
      a > img (logo.png)
    .search_box.fr (margin-top 61px)
      i.icon (search icon, 20x20, bg image)
      .ss_big_box (hidden, absolute, 320px, z-index 999)
        form > .ss_box (300px, white bg, shadow)
          input.int (search text input)
          i.close (close icon)
    .nav.fr
      ul.clearfix > li (float left, 140px height/line-height, margin 0 31px)
        a (17px font-size)
        .subnav (hidden dropdown, 150px, shadow, appears on hover)
```

## Computed Styles

### Container (.header)
- minWidth: 1180px
- height: 140px
- backgroundColor: #ffffff
- position: fixed, top: 0, left: 0
- width: 100%
- zIndex: 9999999
- transition: 0.3s

### Logo (.logo)
- marginTop: 43px
- height: 57px
- width: 171px

### Nav items (ul > li)
- float: left
- margin: 0 31px
- height: 140px
- lineHeight: 140px
- font-size: 17px
- color: #333333

### Active nav item
- color: #F39800

### Search icon (.search_box .icon)
- width: 20px, height: 20px
- background: url(search.png) no-repeat / 100%
- marginLeft: 40px
- cursor: pointer

### Dropdown (.subnav)
- width: 150px
- background: #ffffff
- position: absolute
- left: -35px
- top: 100%
- height: 0, overflow: hidden, opacity: 0
- visibility: hidden
- transition: 0.3s
- boxShadow: 0 0 16px -4px rgba(0,0,0,0.3)
- marginTop: 20px -> 0 on hover

### Dropdown links
- height: 50px, lineHeight: 50px
- fontSize: 14px
- textAlign: center
- hover background: #F39800, color: #ffffff

### Search panel (.ss_big_box)
- display: none
- width: 320px, padding: 10px
- position: absolute, top: -22px, right: -10px
- zIndex: 999

### Search input (.ss_box)
- width: 300px, height: 40px
- background: #fff
- boxShadow: 2px 4px 10px 2px rgba(0,0,0,0.1)

## States & Behaviors

### Scroll-triggered shrink (on pages with .active class)
- **Trigger:** scroll position detection (JS)
- **State A (normal):** height: 140px, logo marginTop: 43px, nav li height/lineHeight: 140px, search marginTop: 61px
- **State B (.active):** height: 100px, logo marginTop: 21px, nav li height/lineHeight: 100px, search marginTop: 42px
- **Transition:** 0.3s
- **Implementation approach:** CSS transition + IntersectionObserver / scroll listener

### Navigation hover dropdown
- **Trigger:** hover on li
- **Before:** height: 0, opacity: 0, visibility: hidden, marginTop: 20px
- **After:** height: auto, opacity: 1, visibility: visible, marginTop: 0
- **Transition:** 0.3s

### Search toggle
- **Trigger:** click on .icon (open), click on .close (close)
- **Open:** fadeIn search panel
- **Close:** slide search box right, then fadeOut
- **Transition:** 0.3s margin-left transition

### Hover states
- **Nav links:** color: #333 -> color: #F39800
- **Dropdown links:** background: #fff -> background: #F39800, color: #fff
- **All links:** transition: 0.3s

## Text Content (verbatim)
- Nav items: ["网站首页", "关于光泰", "公司产业", "行业应用", "新闻资讯", "科技创新", "人力资源", "联系我们", "语言"]
- Active nav: "科技创新"
- Dropdowns: Various sub-items for each parent nav

## Assets
- Logo: `public/images/logo.png`
- Search icon: `public/images/search.png`
- Close icon: `public/images/close.png`

## Responsive Behavior
- **Desktop (1440px):** Full horizontal nav, all items visible
- **Mobile (390px):** Header collapses, nav becomes hamburger menu
- **Breakpoint:** ~768px for mobile nav
