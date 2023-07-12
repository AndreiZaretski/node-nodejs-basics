import fs from 'fs/promises';
import path from 'path';
import { getDirname } from '../helpers/dist.js';
import { message } from '../helpers/message.js';


const rename = async () => {
    // Write your code here 

    const __dirname = getDirname(import.meta.url);
    const oldFileName = path.join(__dirname, 'files', 'wrongFilename.txt');
    
    const newFileName = path.join(__dirname, 'files', 'properFilename.md');
  
    try {
        
    const results = await Promise.allSettled([
        fs.access(oldFileName),
        fs.access(newFileName)
    ]);
            
    if (results[0].status === 'rejected' || results[1].status === 'fulfilled') {
        throw new Error(message.error);
    }

    await fs.rename(oldFileName, newFileName);

    console.log(message.done);
        
    } catch (err) {
        throw err;
    }
};

await rename();