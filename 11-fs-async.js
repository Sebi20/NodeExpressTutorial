// Using Node to read and write on files (Async way)

const {readFile, writeFile} = require('fs');

console.log('start')

readFile('./content/first.txt', 'utf8', (err, result) =>{
    if(err){
        console.log(err);
        return;
    }

    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{

        if(err){
            console.log(err);
        }
        const second = result

        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) =>{
            if(err){
                console.log(err)
                return;
            }
            
            console.log("done with this task")

        })
    })
})

console.log('start next task')
