import process from 'process';

const parseEnv = () => {
    // Write your code here 

const env = process.env;
const pairs = [];
for (const key in env) {
  if (key.startsWith('RSS_')) {
    pairs.push(`${key}=${env[key]}`);
  }
}
const output = pairs.join('; '); 
console.log(output);
};

parseEnv();