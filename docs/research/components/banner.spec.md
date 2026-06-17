# Banner Specification

## Overview
- **Target file:** `src/components/Banner.tsx`
- **Screenshot:** `docs/design-references/section-banner.png`
- **Interaction model:** static (with entrance animation)

## DOM Structure
```
.main > .bann (380px height, background image, 160px padding-top)
  .contain (1200px centered)
    h2 (42px, white, centered, slide-down animation)
    h3 (24px, white, uppercase, centered, slide-up animation - empty on this page)
```

## Computed Styles

### Container (.bann)
- height: 380px
- paddingTop: 160px
- color: #ffffff
- background: url(banner-bg.jpg) center/cover
- width: 100%

### Title (h2)
- fontSize: 42px
- textAlign: center
- color: #ffffff
- marginBottom: 10px
- fontWeight: normal (400)
- fontFamily: Arial, "Microsoft YaHei"

### Subtitle (h3)
- fontSize: 24px
- fontWeight: lighter (100)
- fontFamily: "Microsoft yahei"
- textTransform: uppercase
- textAlign: center
- color: #ffffff

## States & Behaviors

### Entrance animation
- **h2:** animation: mymove 1s (translateY from -50px to 0), iteration-count: 1
- **h3:** animation: mymovet 1.5s (translateY from 50px to 0), iteration-count: 1
- **Implementation approach:** CSS keyframe animations, trigger on page load

## Text Content (verbatim)
- Title: "科技创新"
- Subtitle: "" (empty on this page)

## Assets
- Background image: `public/images/banner-bg.jpg`

## Responsive Behavior
- **Desktop (1440px):** Full width, 380px height
- **Tablet (768px):** Height may reduce, title font-size smaller
- **Mobile (390px):** Reduced height, smaller title font
- **Breakpoint:** Banner height adjusts at ~768px
