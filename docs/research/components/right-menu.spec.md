# RightMenu Specification

## Overview
- **Target file:** `src/components/RightMenu.tsx`
- **Screenshot:** `docs/design-references/section-right_menu.png`
- **Interaction model:** hover-driven slide-in

## DOM Structure
```
.rightmenu (fixed, z-index 99999, right: -130px on init)
  ul
    li.r-top "返回顶部" (click = scroll to top)
    li.r-phone "0769-8763 3321"
    li.r-code "微信咨询"
      .img > img (ewm.jpg, 117x117)
```

## Computed Styles

### Container (.rightmenu)
- width: 185px
- position: fixed
- zIndex: 99999
- right: -130px (partially hidden)
- top: 210px
- cursor: pointer

### Menu items (li)
- height: 55px (expands to 185px for QR code)
- lineHeight: 55px
- borderRadius: 4px
- marginBottom: 1px
- backgroundColor: #F39800
- backgroundImage: url(rightmenu-icon.png) for icons
- fontSize: 16px
- color: #ffffff
- text-indent: 55px
- overflow: hidden

## States & Behaviors

### Hover slide-in
- **Trigger:** hover on .rightmenu
- **Before:** right: -130px (60px visible), r-code height: 55px
- **After:** right: 0 (fully visible), r-code height: 185px, top: -5px
- **Animation:** jQuery .animate() - ~300ms smooth slide
- **Implementation approach:** CSS transition with :hover, or JS with onMouseEnter/Leave

### Back to top click
- **Trigger:** click on li.r-top
- **Behavior:** Smooth scroll to top (500ms)
- **Implementation:** window.scrollTo({ top: 0, behavior: 'smooth' })

## Text Content (verbatim)
- "返回顶部"
- "0769-8763 3321"
- "微信咨询"

## Assets
- Right menu icon sprite: `public/images/rightmenu-icon.png`
- QR code: `public/images/ewm.jpg`

## Responsive Behavior
- **Desktop (1440px):** Visible on right side
- **Mobile (390px):** Hidden or replaced with different style
