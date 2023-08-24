 const http = require('http')

 const fs = require("fs")

 function readFile(response, file) {
    fs.readFile(file, function(err, data){
        console.log(err)
        response.end(data)
    })
}

const server = http.createServer((req, res) =>{
    if(req.url === "/produtos" && req.method == "GET") {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        readFile(res, "products.json")
    }
})

server.listen(3001, ()=>{
    
})