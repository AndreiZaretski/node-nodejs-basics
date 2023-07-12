import process from 'process';

const parseArgs = () => {
    // Write your code here 

    const args = process.argv.slice(2);

    const arg1 = args.filter((_, i) => i %2 === 0);

    const arg2 = args.filter((_, i) => i %2 !== 0);

    const result = [];
    arg1.forEach((el, i)=> {
            const argValue = arg2[i] ? arg2[i] : 'nonValue'; 
            result.push(` ${el.slice(2)} is ${argValue}`)  
   });

   console.log(result.toString())


};

parseArgs();