import fs from 'fs/promises';
import path from 'path';
import { getDirname } from '../helpers/dist.js';
import { message } from '../helpers/message.js';


const read = async () => {
    // Write your code here 

    const __dirname = getDirname(import.meta.url);
    const readFilePath = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        
        const data = await fs.readFile(readFilePath, 'utf-8');
        console.log(data);
        } catch (err) {
          if (err.code === 'ENOENT') {
            throw new Error(message.error);
          } else {
           //throw err;
           console.error('other', err);
          }
        }
};

await read();