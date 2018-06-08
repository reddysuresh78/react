let http = require('http')
let server = http.createServer((request, response) => { 

    response.writeHead(200, { 'Content-Type' : 'text/html'  })
    if(request.url =="/") {
        console.log('Request came for ' , request.url)
        response.write("<script>console.log('helloworld');</script>")
        response.write("<html><body><h2>Hello from server</h2></body></html>")
        response.end( );
    } else if(request.url =="/admin") {
        response.write("<html><body><h2>This is admin</h2></body></html>")
        response.end();
    } else if(request.url =="/json") {
        response.writeHead(200, { 'Content-Type' : 'application/json'  })
        response.write(JSON.stringify({test:123}) )
        response.end();
    }else{
        response.write("<html><body><h2>Invalid request</h2></body></html>")
        response.end( );

    }
} )

server.listen(3000, "localhost", () => {
    console.log("Server started at port 3000")
} )