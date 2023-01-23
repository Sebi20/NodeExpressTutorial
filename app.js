// npm: gloabl command that comes with node
// npm --version 

// local dependency: use it only in this particular project 
// npm i <packagename>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName (mac)

// package.json: manifest file (stores important info about project/package)
    // manual approach (create package.json in the root, create properties etc)
    // npm init (step by step, press enter to skip)
    // npm init -y (everything default)


// const _ = require('lodash');

// const items = [1, [2, [3, [4]]]]
// const newItems = _.flattenDeep(items);
// console.log(newItems);
// console.log("hello people")


// Using Node to read from files (Async way)

const {readFile, writeFile} = require('fs').promises;
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async() =>{
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        console.log(first)
        console.log(second)

        await writeFile('./content/result-mind-grenade.txt', `This is awesome: ${first} ${second}`, {flag: 'a'})
        
    } catch (error) {
        console.log(error)
    }
    
}


// const getText = (path) =>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8', (err, data) =>{
//             if(err){
//                 reject(err)
//             }else {
//                 resolve(data)
//             }
//         })

//     })
    
// }


// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch(err => console.log(err))



start();