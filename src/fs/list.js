import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readdir } from 'node:fs/promises';

const list = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const dest = join(__dirname, 'files');

  try {
    const files = await readdir(dest);
    for (const file of files) {
      console.log(file);
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('\x1b[1m\x1b[41mfiles directory does not exist\x1b[0m\n');
      throw new Error('FS operation failed');
    }
  }
};

await list();
