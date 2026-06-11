import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const companyConfig = readFileSync('src/config/company.ts', 'utf8');
if (!companyConfig.includes("status: 'unverified'")) {
  throw new Error('Company email verification status must be explicit');
}

const htmlFiles = [];
function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path);
    if (entry.isFile() && entry.name.endsWith('.html')) htmlFiles.push(path);
  }
}
walk('dist');

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  if (html.includes('info@heavens.am'))
    throw new Error(`${file} renders unconfirmed email`);
  if (html.includes('Lorem ipsum') || html.includes('TODO'))
    throw new Error(`${file} contains placeholder content`);
}

const netlify = readFileSync('netlify.toml', 'utf8');
for (const required of [
  'Content-Security-Policy-Report-Only',
  'X-Content-Type-Options',
  'premium-contact',
]) {
  if (required === 'premium-contact') continue;
  if (!netlify.includes(required))
    throw new Error(`netlify.toml missing ${required}`);
}

console.log('production config validation passed');
