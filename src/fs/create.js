import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream, stat } from 'node:fs';

const makePath = (dir, file) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  return join(__dirname, dir, file);
};

const create = async () => {
  // Write your code here
  const filePath = makePath('files', 'fresh.txt');

  stat(filePath, (err, _) => {
    if (err == null) {
      console.log('\x1b[1m\x1b[41mfresh.txt already exists\x1b[0m\n');
      throw new Error('FS operation failed');
    }
  });

  const writable = createWriteStream(filePath);
  writable.write('I am fresh and young');
};

await create();
