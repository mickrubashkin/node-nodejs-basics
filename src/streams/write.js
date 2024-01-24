import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const write = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, 'files', 'fileToWrite.txt');

  const writable = createWriteStream(filePath);
  process.stdin.pipe(writable);
};

await write();
