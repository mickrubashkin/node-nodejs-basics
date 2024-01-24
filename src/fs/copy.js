import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdir, access, readdir, copyFile } from 'node:fs/promises';

const copy = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  try {
    await access(join(__dirname, 'files'));
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('\x1b[1m\x1b[41mfiles dir does not exist\x1b[0m\n');
      throw new Error('FS operation failed');
    }
  }

  try {
    await mkdir(join(__dirname, 'files_copy'));
  } catch (err) {
    console.error('\x1b[1m\x1b[41mfiles_copy dir already exists\x1b[0m\n');
    throw new Error('FS operation failed');
  }

  const files = await readdir(join(__dirname, 'files'));
  for (const file of files) {
    await copyFile(
      join(__dirname, 'files', file),
      join(__dirname, 'files_copy', file)
    );
  }
};

await copy();
