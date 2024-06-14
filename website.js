const http = require('http')
const {Console} = require('console')
const fs = require('fs')


const port = process.env.PORT || 3000

const server = http.createServer((req, res)=>{
    console.log(req)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')

    if(req.url == '/'){
        res.statusCode = 200
        res.end('<h1>Hello World hey there hey there</h1>')
    }
    else if(req.url =='/about'){
        res.statusCode = 200
        res.end('<h1>I want to know about you</h1>')
    }

    // this ones to create a static website by linking html file
    else if(req.url =='/hello'){
        res.statusCode = 200
        const data = fs.readFileSync('index.html')
        res.end(data.toString())
    }

    else{
        // res.harry() since res.harry is no function this will crash the website
        res.statusCode = 400
        res.end('<h1>Page not found</h1>')
    }
})
server.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)
})