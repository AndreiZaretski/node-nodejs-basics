import { parentPort, workerData } from 'worker_threads';
// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
        // This function sends result of nthFibonacci computations to main thread
    const n = workerData;
    try {
        //to generate errors, you can uncomment this code
        //const erorWorker = Math.random();
        //if(erorWorker < 0.5) {throw new Error('Error worker');} 
        const result = nthFibonacci(n);
        parentPort.postMessage({ status: 'resolved', data: result });
    } catch (err) {
        parentPort.postMessage({ status: 'error', data: null });
    }
};

sendResult();