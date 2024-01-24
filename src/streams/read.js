import { stdout } from 'process';
import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const read = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, 'files', 'fileToRead.txt');

  const readable = createReadStream(filePath);
  readable.pipe(stdout);
};

await read();
