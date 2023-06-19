import process from 'process';

const parseArgs = () => {
    // Write your code here 

    // console.log('arg', process.argv);

    const args = process.argv.slice(2);

    //console.log(args);

    const arg1 = args.filter((_, i) => i %2 === 0);

    const arg2 = args.filter((_, i) => i %2 !== 0);

    //console.log(arg1.toString());
    const result = [];
    arg1.forEach((el, i)=> {
            const argValue = arg2[i] ? arg2[i] : 'nonValue';
            //console.log(`${el.slice(2)} is ${arg2[i]}`) 
            result.push(` ${el.slice(2)} is ${argValue}`)  
   });

   console.log(result.toString())


};

parseArgs();