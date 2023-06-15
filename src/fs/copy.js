import fs from 'fs/promises';
import path from 'path';
import { getDirname } from '../helpers/dist.js';
import { message } from '../helpers/message.js';

const copy = async () => {
// Write your code here 

const __dirname = getDirname(import.meta.url);
const oldFolder = path.join(__dirname, 'files');
const newFolder = path.join(__dirname, 'files_copy');

const copyFolder = async (oldPath, newPath) => {
  try {
    const results = await Promise.allSettled([
    fs.access(oldPath, fs.constants.F_OK),
    fs.access(newPath, fs.constants.F_OK)
    ]);
    if (results[0].status === 'rejected' || results[1].status === 'fulfilled') {
      throw new Error(message.error);
    }
    await fs.mkdir(newPath);
    const entries = await fs.readdir(oldPath, { withFileTypes: true });

   for (let entry of entries) {
    const oldFilePath = path.join(oldPath, entry.name);
    const newFilePath = path.join(newPath, entry.name);
      if (entry.isDirectory()) {
        await copyFolder(oldFilePath, newFilePath);
      } else {
        await fs.copyFile(oldFilePath, newFilePath);
      }
    } console.log(message.done);
    } catch (err) {
      //console.error(err);
      throw err;
    }
};

await copyFolder(oldFolder, newFolder);

};

await copy();