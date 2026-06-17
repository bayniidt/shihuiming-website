import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = "/Users/cc/Library/Caches/ms-playwright/chromium-1208/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing";
const URL = 'https://www.zggt-group.com/list/184.html';
const OUT_DIR = path.resolve('docs/design-references');
const CSS_OUT = path.resolve('docs/research');

async function extractCSS(page, selector) {
  return page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (!el) return { error: `Element not found: ${sel}` };
    const props = [
      'fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color',
      'textTransform','textDecoration','backgroundColor','background',
      'padding','paddingTop','paddingRight','paddingBottom','paddingLeft',
      'margin','marginTop','marginRight','marginBottom','marginLeft',
      'width','height','maxWidth','minWidth','maxHeight','minHeight',
      'display','flexDirection','justifyContent','alignItems','gap',
      'gridTemplateColumns','gridTemplateRows',
      'borderRadius','border','borderTop','borderBottom','borderLeft','borderRight',
      'boxShadow','overflow','overflowX','overflowY',
      'position','top','right','bottom','left','zIndex',
      'opacity','transform','transition','cursor',
      'objectFit','objectPosition','mixBlendMode','filter','backdropFilter',
      'whiteSpace','textOverflow','WebkitLineClamp'
    ];
    function extractStyles(element) {
      const cs = getComputedStyle(element);
      const styles = {};
      props.forEach(p => {
        const v = cs[p];
        if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== '0px' && v !== 'rgba(0, 0, 0, 0)')
          styles[p] = v;
      });
      return styles;
    }
    function walk(element, depth) {
      if (depth > 4) return null;
      const children = [...element.children];
      return {
        tag: element.tagName.toLowerCase(),
        classes: element.className?.toString().split(' ').slice(0, 5).join(' '),
        text: element.childNodes.length === 1 && element.childNodes[0].nodeType === 3
          ? element.textContent.trim().slice(0, 200) : null,
        styles: extractStyles(element),
        images: element.tagName === 'IMG' ? {
          src: element.src, alt: element.alt,
          naturalWidth: element.naturalWidth, naturalHeight: element.naturalHeight
        } : null,
        childCount: children.length,
        children: children.slice(0, 20).map(c => walk(c, depth + 1)).filter(Boolean)
      };
    }
    return walk(el, 0);
  }, selector);
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(CSS_OUT, { recursive: true });
  fs.mkdirSync('docs/research/components', { recursive: true });

  const browser = await chromium.launch({
    headless: true,
    executablePath: CHROME_PATH
  });

  // ============ DESKTOP SCREENSHOTS ============
  const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await desktopPage.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });
  await desktopPage.waitForTimeout(2000);

  console.log('Taking desktop full-page screenshot...');
  await desktopPage.screenshot({
    path: path.join(OUT_DIR, 'fullpage-desktop.png'),
    fullPage: true
  });

  // ============ GLOBAL EXTRACTION ============
  console.log('Extracting global styles...');

  // Fonts
  const fonts = await desktopPage.evaluate(() => {
    return [...new Set([...document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,span,div')].slice(0, 100)
      .map(el => getComputedStyle(el).fontFamily))]
      .filter(f => f && f !== 'serif' && f !== 'sans-serif');
  });

  // Colors
  const colors = await desktopPage.evaluate(() => {
    const colorSet = new Set();
    const elements = document.querySelectorAll('*');
    const sample = [...elements].slice(0, 300);
    sample.forEach(el => {
      const cs = getComputedStyle(el);
      const c = cs.color;
      const bg = cs.backgroundColor;
      if (c && c !== 'rgba(0, 0, 0, 0)') colorSet.add(c);
      if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') colorSet.add(bg);
    });
    return [...colorSet];
  });

  // Assets
  const assets = await desktopPage.evaluate(() => {
    return {
      images: [...document.querySelectorAll('img')].map(img => ({
        src: img.src || img.currentSrc,
        alt: img.alt,
        width: img.naturalWidth,
        height: img.naturalHeight
      })),
      backgroundImages: [...document.querySelectorAll('*')].filter(el => {
        const bg = getComputedStyle(el).backgroundImage;
        return bg && bg !== 'none';
      }).map(el => {
        const bg = getComputedStyle(el).backgroundImage;
        const match = bg.match(/url\(["']?([^"')]+)["']?\)/);
        return match ? {
          url: match[1],
          element: el.tagName + '.' + (el.className?.toString().split(' ')[0] || '')
        } : null;
      }).filter(Boolean),
      favicons: [...document.querySelectorAll('link[rel*="icon"]')].map(l => ({
        href: l.href, sizes: l.sizes?.toString() || ''
      }))
    };
  });

  // SVGs
  const svgData = await desktopPage.evaluate(() => {
    return [...document.querySelectorAll('svg')].map((svg, i) => ({
      index: i,
      outerHTML: svg.outerHTML.slice(0, 5000),
      parentClass: svg.parentElement?.className?.toString().split(' ')[0] || '',
      width: svg.getAttribute('width'),
      height: svg.getAttribute('height'),
      viewBox: svg.getAttribute('viewBox')
    }));
  });

  console.log(`Found: ${fonts.length} font families, ${colors.length} colors, ${assets.images.length} images, ${svgData.length} SVGs`);

  // ============ SECTION-BY-SECTION EXTRACTION ============
  const sections = {
    'header': '.header',
    'banner': '.bann',
    'pub_cate': '.pub_cate',
    'youshi_top': '.youshi-top',
    'youshi_part': '.youshi-part',
    'footer': '.km_footer',
    'right_menu': '.rightmenu'
  };

  const sectionData = {};
  for (const [name, selector] of Object.entries(sections)) {
    console.log(`Extracting section: ${name} (${selector})`);
    const exists = await desktopPage.locator(selector).count();
    if (exists > 0) {
      sectionData[name] = await extractCSS(desktopPage, selector);
      // Screenshot the section
      try {
        const el = desktopPage.locator(selector).first();
        await el.screenshot({ path: path.join(OUT_DIR, `section-${name}.png`) });
      } catch (e) {
        console.log(`  Could not screenshot ${name}: ${e.message}`);
      }
    } else {
      console.log(`  Not found`);
    }
  }

  // ============ TEXT CONTENT ============
  const textContent = await desktopPage.evaluate(() => {
    const extractText = (selector) => {
      const el = document.querySelector(selector);
      return el ? el.textContent.trim() : null;
    };
    return {
      title: document.title,
      banner_h2: extractText('.bann h2'),
      banner_h3: extractText('.bann h3'),
      youshi_title: extractText('.youshi-top .title'),
      youshi_text: extractText('.youshi-part .text'),
      lab_titles: [...document.querySelectorAll('.youshi-part .title2')].map(e => e.textContent.trim()),
      footer_contact: [...document.querySelectorAll('.km_footer .lxfs p, .km_footer .lxfs strong')].map(e => e.textContent.trim()),
      nav_items: [...document.querySelectorAll('.header .nav > ul > li > a')].map(e => e.textContent.trim())
    };
  });

  // ============ HEADER SCROLL BEHAVIOR ============
  console.log('Testing scroll behavior...');
  // Capture header at position 0
  const headerInitial = await desktopPage.evaluate(() => {
    const h = document.querySelector('.header');
    const cs = getComputedStyle(h);
    return {
      height: cs.height,
      backgroundColor: cs.backgroundColor,
      className: h.className
    };
  });

  // Scroll down and capture header again
  await desktopPage.evaluate(() => window.scrollTo(0, 300));
  await desktopPage.waitForTimeout(500);
  const headerScrolled = await desktopPage.evaluate(() => {
    const h = document.querySelector('.header');
    const cs = getComputedStyle(h);
    return {
      height: cs.height,
      backgroundColor: cs.backgroundColor,
      className: h.className
    };
  });

  // ============ MOBILE SCREENSHOT ============
  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobilePage.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });
  await mobilePage.waitForTimeout(1000);
  console.log('Taking mobile full-page screenshot...');
  await mobilePage.screenshot({
    path: path.join(OUT_DIR, 'fullpage-mobile.png'),
    fullPage: true
  });

  // ============ SAVE ALL DATA ============
  const output = {
    fonts,
    colors,
    assets,
    svgData,
    sectionData,
    textContent,
    headerBehavior: {
      initial: headerInitial,
      scrolled: headerScrolled
    }
  };

  fs.writeFileSync(
    path.join(CSS_OUT, 'extraction-data.json'),
    JSON.stringify(output, null, 2)
  );
  console.log('Extraction data saved to docs/research/extraction-data.json');

  await browser.close();
  console.log('Done!');
}

main().catch(console.error);
