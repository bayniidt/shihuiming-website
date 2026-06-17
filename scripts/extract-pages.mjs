import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = "/Users/cc/Library/Caches/ms-playwright/chromium-1208/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing";
const BASE = 'https://www.zggt-group.com';

const PAGES = [
  { slug: '1', url: '/list/1.html', name: '公司产业' },
  { slug: '6', url: '/list/6.html', name: '关于光泰' },
  { slug: '179', url: '/list/179.html', name: '联系我们' },
  { slug: '191', url: '/list/191.html', name: '铜材表面处理' },
  { slug: '192', url: '/list/192.html', name: '铝材表面处理' },
  { slug: '193', url: '/list/193.html', name: '医疗机械' },
  { slug: '194', url: '/list/194.html', name: '家用行业' },
  { slug: '195', url: '/list/195.html', name: '食品机械' },
  { slug: '196', url: '/list/196.html', name: '核电应用' },
  { slug: '197', url: '/list/197.html', name: '刀具应用' },
];

async function extractPage(page, slug, url) {
  await page.goto(BASE + url, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);

  const data = await page.evaluate(() => {
    // Banner
    const bannerEl = document.querySelector('.bann');
    const banner = {
      bgImage: '',
      h2: '',
      h3: '',
    };
    if (bannerEl) {
      const bg = getComputedStyle(bannerEl).backgroundImage;
      const match = bg.match(/url\(["']?([^"')]+)["']?\)/);
      banner.bgImage = match ? match[1] : '';
      const h2El = bannerEl.querySelector('h2');
      banner.h2 = h2El ? h2El.textContent.trim() : '';
      const h3El = bannerEl.querySelector('h3');
      banner.h3 = h3El ? h3El.textContent.trim() : '';
    }

    // Category/sub nav
    const cateLinks = [...document.querySelectorAll('.pub_cate ul li a')].map(a => ({
      text: a.textContent.trim(),
      href: a.getAttribute('href'),
    }));

    // All images in main content area (between banner and footer)
    const mainContent = document.querySelector('.main')?.parentElement || document.body;
    const contentImages = [...mainContent.querySelectorAll('img')].filter(img => {
      const src = img.src || img.currentSrc;
      return src && !src.includes('logo.png') && !src.includes('ewm.jpg')
        && !src.includes('search.png') && !src.includes('close.png') && !src.includes('rightmenu-icon.png');
    }).map(img => ({
      src: img.src || img.currentSrc,
      alt: img.alt,
      width: img.naturalWidth,
      height: img.naturalHeight,
    }));

    // Extract main content HTML (simplified)
    const main = document.querySelector('.main');
    const nextEl = main?.nextElementSibling;
    const containerWrapper = document.querySelector('.Container-wrapper');
    const allContentSections = [];
    let current = containerWrapper?.nextElementSibling || (main?.nextElementSibling);
    while (current && !current.classList.contains('km_footer') && !current.classList.contains('rightmenu')) {
      const tag = current.tagName.toLowerCase();
      const cls = current.className?.toString().split(' ').slice(0, 5).join(' ');
      const text = current.textContent?.trim().slice(0, 500);
      if (text && text.length > 10) {
        allContentSections.push({ tag, cls, textSnippet: text });
      }
      current = current.nextElementSibling;
    }

    // Page title
    const title = document.title;

    // Background images in content
    const bgImages = [...document.querySelectorAll('*')].filter(el => {
      const bg = getComputedStyle(el).backgroundImage;
      return bg && bg !== 'none';
    }).map(el => {
      const bg = getComputedStyle(el).backgroundImage;
      const match = bg.match(/url\(["']?([^"')]+)["']?\)/);
      return match ? {
        url: match[1],
        cls: el.className?.toString().split(' ')[0] || el.tagName,
      } : null;
    }).filter(Boolean);

    return { banner, cateLinks, contentImages, contentSections: allContentSections, title, bgImages };
  });

  return { slug, name: '', ...data };
}

async function main() {
  const browser = await chromium.launch({ headless: true, executablePath: CHROME_PATH });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const results = {};
  for (const p of PAGES) {
    console.log(`Extracting: ${p.slug} (${p.name})`);
    try {
      results[p.slug] = await extractPage(page, p.slug, p.url);
      results[p.slug].name = p.name;
      console.log(`  OK - ${results[p.slug].contentImages.length} images, banner: "${results[p.slug].banner.h2}"`);
    } catch (e) {
      console.log(`  ERROR: ${e.message}`);
      results[p.slug] = { slug: p.slug, name: p.name, error: e.message };
    }
  }

  fs.writeFileSync('docs/research/pages-data.json', JSON.stringify(results, null, 2));
  console.log('Saved to docs/research/pages-data.json');
  await browser.close();
}

main().catch(console.error);
