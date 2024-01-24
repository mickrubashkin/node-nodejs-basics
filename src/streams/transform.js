import { Transform } from 'node:stream';

const transform = async () => {
  // Write your code here
  const reverse = new Transform({
    transform(data, encoding, cb) {
      const reversed = data.toString().split('').reverse().join('') + '\n';
      this.push(reversed);
      cb();
    },
  });

  process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
