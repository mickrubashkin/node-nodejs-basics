import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFile } from 'fs/promises';

const read = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, 'files', 'fileToRead.txt');

  try {
    const data = await readFile(filePath, { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.error('\x1b[1m\x1b[41mfileToRead.txt does not exist\x1b[0m\n');
    throw new Error('FS operation failed');
  }
};

await read();
