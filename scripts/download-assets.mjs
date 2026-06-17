import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const ASSETS = [
  // Images
  { url: 'https://www.zggt-group.com/template/default/skin/images/logo.png', dest: 'public/images/logo.png' },
  { url: 'https://www.zggt-group.com/template/default/skin/images/keyan1.jpg', dest: 'public/images/keyan1.jpg' },
  { url: 'https://www.zggt-group.com/template/default/skin/images/keyan2.jpg', dest: 'public/images/keyan2.jpg' },
  { url: 'https://www.zggt-group.com/template/default/skin/images/keyan3.jpg', dest: 'public/images/keyan3.jpg' },
  { url: 'https://www.zggt-group.com/template/default/skin/images/keyan4.jpg', dest: 'public/images/keyan4.jpg' },
  { url: 'https://www.zggt-group.com/template/default/skin/images/ewm.jpg', dest: 'public/images/ewm.jpg' },
  { url: 'https://www.zggt-group.com/template/default/skin/images/search.png', dest: 'public/images/search.png' },
  { url: 'https://www.zggt-group.com/template/default/skin/images/close.png', dest: 'public/images/close.png' },
  { url: 'https://www.zggt-group.com/template/default/skin/images/rightmenu-icon.png', dest: 'public/images/rightmenu-icon.png' },
  { url: 'https://www.zggt-group.com/public/uploads/images/20210618/39949bc063974199ddf53b3c733be1d3.jpg', dest: 'public/images/banner-bg.jpg' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    fs.mkdirSync(dir, { recursive: true });
    const file = fs.createWriteStream(dest);
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        'Referer': 'https://www.zggt-group.com/'
      }
    }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        download(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        reject(new Error(`HTTP ${response.statusCode} for ${url}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
      file.on('error', (err) => { fs.unlinkSync(dest); reject(err); });
    }).on('error', (err) => { fs.unlinkSync(dest); reject(err); });
  });
}

async function main() {
  console.log(`Downloading ${ASSETS.length} assets...`);
  const BATCH_SIZE = 4;
  for (let i = 0; i < ASSETS.length; i += BATCH_SIZE) {
    const batch = ASSETS.slice(i, i + BATCH_SIZE);
    const results = await Promise.allSettled(batch.map(a => download(a.url, a.dest)));
    results.forEach((r, j) => {
      if (r.status === 'fulfilled') console.log(`  OK: ${batch[j].dest}`);
      else console.log(`  FAIL: ${batch[j].url} - ${r.reason.message}`);
    });
  }
  console.log('Done!');
}

main().catch(console.error);
