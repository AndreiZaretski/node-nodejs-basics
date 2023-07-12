import fs from 'fs/promises';
import path from 'path';
import { getDirname } from '../helpers/dist.js';
import { message } from '../helpers/message.js';


const remove = async () => {
    // Write your code here 

    const __dirname = getDirname(import.meta.url);
    const removeFilePath = path.join(__dirname, 'files', 'fileToRemove.txt');    
  
    try {
           
        await fs.unlink(removeFilePath);
        console.log(message.done); 
    } catch (err) {
    
        if (err.code === 'ENOENT') {
            throw new Error(message.error);
        } else {
          throw err;
        }
}
};

await remove();