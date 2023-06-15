import fs from 'fs/promises';
import path from 'path';
import { getDirname } from '../helpers/dist.js';
import { message } from '../helpers/message.js';


const create = async () => {
    // Write your code here 
    const __dirname = getDirname(import.meta.url);
    const freshPath = path.join(__dirname, 'files', 'fresh.txt');    
  
    try {
           
        await fs.access(freshPath);
        
        throw new Error(message.error);
        
    } catch (err) {
    
        if (err.code === 'ENOENT') {
        await fs.writeFile(
        freshPath,
        'I am fresh and young',
        'utf8'
        );
        console.log(message.done);
        } 
        else {
        //throw new Error(err);
        //console.error(err);
        throw err;
        }
    }
};

await create();