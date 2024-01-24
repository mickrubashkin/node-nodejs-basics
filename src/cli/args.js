const parseArgs = () => {
  // Write your code here
  const args = process.argv.slice(2);
  let result = [];

  for (let i = 0; i < args.length; i += 1) {
    if (args[i].substring(0, 2) === '--') {
      result.push(`${args[i].substring(2)} is ${args[i + 1]}`);
    }
  }

  console.log(result.join(', '));
};

parseArgs();
