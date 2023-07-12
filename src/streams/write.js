import { createWriteStream, appendFile } from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import { getDirname } from '../helpers/dist.js';
import process from 'process';

const write = async () => {
    // Write your code here 

    const __dirname = getDirname(import.meta.url);

    const {stdin, stdout, stderr} = process;

const writeStream = createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'), 'utf8');

process.on('SIGINT', () =>{
    writeStream.end();
    stdout.write('\nWriting finished\n');
    process.exit();
});


await pipeline(stdin, writeStream)
.catch(err => stderr.write(err.message));
};

await write();