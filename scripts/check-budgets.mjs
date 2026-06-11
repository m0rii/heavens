import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const budgets = {
  js: 80 * 1024,
  css: 120 * 1024,
};

const totals = { js: 0, css: 0 };

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path);
    if (entry.isFile() && entry.name.endsWith('.js'))
      totals.js += statSync(path).size;
    if (entry.isFile() && entry.name.endsWith('.css'))
      totals.css += statSync(path).size;
  }
}

walk('dist');

for (const key of Object.keys(budgets)) {
  if (totals[key] > budgets[key]) {
    throw new Error(`${key} budget exceeded: ${totals[key]} > ${budgets[key]}`);
  }
}

console.log(`budget validation passed: js=${totals.js}, css=${totals.css}`);
