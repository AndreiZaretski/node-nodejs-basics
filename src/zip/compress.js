import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { access, unlink } from 'fs/promises';
import * as readline from 'readline/promises';
import {
    stdin as input,
    stdout as output,
} from 'node:process';
import { getDirname } from '../helpers/dist.js';
import path from 'path';


const compress = async () => {
    // Write your code here

    const rl = readline.createInterface({ input, output });
    
    const __dirname = getDirname(import.meta.url);

    const __filename = path.join(__dirname, 'files', 'fileToCompress.txt');

    const __zipName = path.join(__dirname, 'files', 'archive.gz');


    try {
        await access(__filename);
      
        const gzip = createGzip();
        const source = createReadStream(__filename);
        const destination = createWriteStream(__zipName);
        
        await pipeline(source, gzip, destination);
        
        const answer = await rl.question('Do you want to delete the original file? (y/n) ');
        if (answer.toLowerCase() === 'y') {
        await unlink(__filename)
        
            console.log('File was deleted.');
            process.exit();
           
        } else {
        console.log('File was compress');
        process.exit();
        }
        
        } catch (err) {
        console.error('The file is not found.', err.message);
        process.exit();
        }
};

await compress();