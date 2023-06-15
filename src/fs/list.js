import fs from 'fs/promises';
import path from 'path';
import { getDirname } from '../helpers/dist.js';
import { message } from '../helpers/message.js';


const list = async () => {
    // Write your code here 

    const __dirname = getDirname(import.meta.url);
    const dirPath = path.join(__dirname, 'files');

    try {
        const files = await fs.readdir(dirPath);
        console.log(files);
        } catch (err) {
        if (err.code === 'ENOENT') {
        throw new Error(message.error);
        } else {
        throw err;
        //console.error('other', err);
        }
    }
};

await list();