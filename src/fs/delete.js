import { rm } from 'node:fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await rm(filePath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('\x1b[1m\x1b[41mfileToRemove.txt does not exist\x1b[0m\n');
      throw new Error('FS operation failed');
    }
  }
};

await remove();
