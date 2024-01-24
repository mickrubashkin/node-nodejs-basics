import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const decompress = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const gzipPath = join(__dirname, 'files', 'archive.gz');
  const dest = join(__dirname, 'files', 'fileToCompress.txt');

  const readable = createReadStream(gzipPath);
  const writable = createWriteStream(dest);
  const unzip = createUnzip();

  readable.pipe(unzip).pipe(writable);
};

await decompress();
