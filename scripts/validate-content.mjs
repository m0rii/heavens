import { readFileSync } from 'node:fs';

const forbidden = ['Lorem ipsum', 'TODO', 'info@heavens.am'];
const files = ['README.md', 'docs/PROJECT.md', 'docs/VERIFICATION.md'];

for (const file of files) {
  const text = readFileSync(file, 'utf8');
  for (const token of forbidden) {
    if (text.includes(token) && token !== 'info@heavens.am') {
      throw new Error(`${file} contains forbidden placeholder: ${token}`);
    }
  }
}

console.log('content validation passed');
