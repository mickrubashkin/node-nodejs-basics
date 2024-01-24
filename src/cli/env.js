const parseEnv = () => {
  // Write your code here
  const res = Object.entries(process.env)
    .filter(([key, val]) => key.substring(0, 3) === 'RSS')
    .map(([key, val]) => `${key}=${val}`)
    .join('; ');

  console.log(res);
};

parseEnv();
