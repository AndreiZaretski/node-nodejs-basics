import process from 'process';
import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
    // Write your code here 

    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
        const data = chunk.toString();
        const chars = data.split('');
        const reversedChars = chars.reverse();
        const reversedData = reversedChars.join('');
        const outputData = reversedData + '\n';

        // if (data.includes('error')) {
        //     callback(new Error('Something went wrong!'));
        //     return;
        //     }

        callback(null, outputData);
        }
        });
        

await  pipeline(process.stdin, transformStream, process.stdout)
        .catch((err => process.stderr.write(err.message)));
        
};

await transform();