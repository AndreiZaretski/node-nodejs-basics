import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import path from 'path';
import { getDirname } from '../helpers/dist.js';

const calculateHash = async () => {
    // Write your code here 

let hash = createHash('sha256');

const __dirname = getDirname(import.meta.url);
const fileName = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

let stream = createReadStream(fileName);

stream.setEncoding('utf8');

stream.on('data', (chunk) => {
hash.update(chunk);
});

stream.on('end', () => {
console.log(hash.digest('hex'));
});

stream.on('error', (err) => {
console.error(err.message);
});
};

await calculateHash();