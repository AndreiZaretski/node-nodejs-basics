import { createGunzip } from 'zlib';
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

const decompress = async () => {
    // Write your code here 

    const rl = readline.createInterface({ input, output });

    const __dirname = getDirname(import.meta.url);
    
    const __filename = path.join(__dirname, 'files', 'archive.gz');
    
    const __unzipName = path.join(__dirname, 'files', 'fileToCompress.txt');
    
    try {
        await access(__filename);
        const gunzip = createGunzip();
        const source = createReadStream(__filename);
        const destination = createWriteStream(__unzipName);
        
        await pipeline(source, gunzip, destination);
        
        const answer = await rl.question('Do you want to delete the original archive? (y/n) ');
        
        if (answer.toLowerCase() === 'y') {
            await unlink(__filename);
            console.log('Archive was deleted.');
            process.exit();
            
        } else {
            console.log('Archive was decompress');
            process.exit();
        }
        
    } catch (err) {
        console.error('The archive is not found.', err.message);
        process.exit();
    }
};

await decompress();