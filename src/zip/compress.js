import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const compress = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const srcPath = join(__dirname, 'files', 'fileToCompress.txt');
  const destPath = join(__dirname, 'files', 'archive.gz');

  const readable = createReadStream(srcPath);
  const writable = createWriteStream(destPath);
  const gzip = createGzip();

  readable.pipe(gzip).pipe(writable);
};

await compress();
