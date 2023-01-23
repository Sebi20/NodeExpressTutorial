const http = require('http')


const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("Welcome to my home page")
    } else if(req.url === '/about'){
        res.end("Here is our short history")
    }else {
    
        res.end(`
        <h1>Oops we cant find that page homie</h1>
        <a href='/'> Back home</a>
        `)
    }
})

server.listen(7000)