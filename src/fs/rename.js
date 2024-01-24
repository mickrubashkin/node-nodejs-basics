import { access, rename as asyncRename, open } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { dir } from 'node:console';

const rename = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const src = join(__dirname, 'files', 'wrongFilename.txt');
  const dest = join(__dirname, 'files', 'properFilename.md');

  let isSrcExists;
  let isDestExists;

  try {
    await access(src);
    isSrcExists = true;
  } catch (err) {
    isSrcExists = false;
  }

  try {
    await access(dest);
    isDestExists = true;
  } catch (err) {}

  if (!isSrcExists) {
    console.log('\x1b[1m\x1b[41mwrongFilename.txt does not exist\x1b[0m\n');
    throw new Error('FS operation failed');
  }

  if (isDestExists) {
    console.log('\x1b[1m\x1b[41mproperFilename.md already exists\x1b[0m\n');
    throw new Error('FS operation failed');
  }

  await asyncRename(src, dest);
};

await rename();
