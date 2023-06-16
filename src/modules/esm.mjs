import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { readFile } from 'fs/promises';


import {getFilename,  getDirname } from '../helpers/dist.js';

import './files/c.js';

const random = Math.random();

const __filename = getFilename(import.meta.url);
const __dirname = getDirname(import.meta.url);

const dataA = await readFile(path.resolve(__dirname, 'files', 'a.json'), 'utf-8');
const a = JSON.parse(dataA);

const dataB = await readFile(path.resolve(__dirname, 'files', 'b.json'), 'utf-8');
const b = JSON.parse(dataB);

let unknownObject;

if (random > 0.5) {
    unknownObject = a;
    } else {
    unknownObject = b;
    }
    

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
    };
