import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = 'dist';
const htmlFiles = [];

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path);
    if (entry.isFile() && entry.name === 'index.html') htmlFiles.push(path);
  }
}

walk(root);

const titles = new Set();
const descriptions = new Set();

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  if (file === join('dist', 'index.html')) {
    continue;
  }
  if (file.includes(`${join('style-guide')}`)) {
    if (!html.includes('noindex'))
      throw new Error(`${file} internal style guide is not noindex`);
    continue;
  }
  if (file.includes(`${join('contact', 'success')}`)) {
    if (!html.includes('noindex'))
      throw new Error(`${file} success page is not noindex`);
    continue;
  }
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const description = html.match(
    /<meta name="description" content="(.*?)">/,
  )?.[1];
  if (!title || !description)
    throw new Error(`${file} missing title or description`);
  if (titles.has(title)) throw new Error(`Duplicate title: ${title}`);
  if (descriptions.has(description))
    throw new Error(`Duplicate description: ${description}`);
  titles.add(title);
  descriptions.add(description);
  if (!html.includes('https://www.heavens.am/'))
    throw new Error(`${file} missing production canonical data`);
  for (const block of html.matchAll(
    /<script type="application\/ld\+json">(.*?)<\/script>/gs,
  )) {
    JSON.parse(block[1]);
  }
}

if (
  !existsSync('dist/sitemap-index.xml') &&
  !existsSync('dist/sitemap-0.xml')
) {
  throw new Error('Missing generated sitemap');
}

console.log('seo validation passed');
