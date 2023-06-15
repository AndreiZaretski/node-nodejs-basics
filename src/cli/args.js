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
            //console.log(`${el.slice(2)} is ${arg2[i]}`) 
            result.push(` ${el.slice(2)} is ${arg2[i]}`)  
   });

   console.log(result.toString())


};

parseArgs();