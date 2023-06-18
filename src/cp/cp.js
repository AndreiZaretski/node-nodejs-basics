import { fork } from 'node:child_process';
import { getDirname } from '../helpers/dist.js';
import path from 'node:path';
import { access } from 'node:fs/promises';

const spawnChildProcess = async (args) => {
    // Write your code here
    try {   
    const __dirname = getDirname(import.meta.url);
    const fileScript = path.join(__dirname, 'files', 'script.js'); 
    await access(fileScript);
    
     const child = fork(fileScript, args);
        
    child.on('exit', (code, signal) => {
    console.log(`Child process exited with code ${code} and signal ${signal}`);
    });
    
    return child;
    } catch(err) {
        console.error(err.message);
    }   
};

// Put your arguments in function call to test this functionality
//spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
spawnChildProcess( ['arg1', 'arg2', '89', 90, 108]);
