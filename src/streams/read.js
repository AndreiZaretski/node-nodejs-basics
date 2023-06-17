import { createReadStream } from 'fs';
import path from 'path';
import process from 'process';
import { getDirname } from '../helpers/dist.js';

const read = async () => {
    // Write your code here 

    const __dirname = getDirname(import.meta.url);

    const readStream = createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'), 'utf-8');
    
    readStream.on('data', chunk => {
      process.stdout.write(chunk);
    });

    readStream.on('error', err => {
      process.stderr.write(err.message);
    });

    readStream.on('end', () => {
       process.stdout.write('\nReading finished\n');
    });
};

await read();