import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const calculateHash = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

  const readerStream = createReadStream(filePath);
  readerStream.setEncoding('UTF8');

  readerStream.on('data', (data) => {
    const hash = createHash('sha256').update(data).digest('hex');
    console.log(hash);
  });
};

await calculateHash();
