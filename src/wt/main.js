import { Worker } from 'worker_threads';
import os from 'os';
import { getDirname } from '../helpers/dist.js';
import path from 'path';


const performCalculations = async () => {
    // Write your code here

    const numCores = os.cpus().length;
    const promises = [];
    let num = 10;
    const __dirname = getDirname(import.meta.url);
    const workerPath = path.join(__dirname, 'worker.js'); 
    
    for (let i = 0; i < numCores; i++) {
        const worker = new Worker(workerPath, { workerData: num });
        const promise = new Promise((resolve, reject) => {
            worker.on('message', (result) => {
                resolve(result);
        });
        
            worker.on('error', (error) => {
                reject({ status: 'error', data: null });
            });
            worker.on('exit', (code) => {
                if (code !== 0)
                  reject(new Error(`Worker stopped with exit code ${code}`));
              });
        });
        
        promises.push(promise);
        worker.postMessage(num);
        num++;
    }
    
    try {
        const results = await Promise.allSettled(promises);
        const values = results.map(result => result.value || result.reason);
        console.log(values);
    } catch (error) {
        console.error(error);
    }
};

await performCalculations();