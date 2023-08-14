const http = require('http')

const server =http.createServer((req,res) =>{
    console.log('Nikhil')
    const url = req.url;
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Main page</title></head>')
        res.write('<body><h1>Hello this is MAin PAge</h1></body>')
        res.write('</html>')
        res.end()
    }
    if(url === '/home'){
        res.write('<html>')
        res.write('<head><title>Home page</title></head>')
        res.write('<body><h1>Welcome home</h1></body>')
        res.write('</html>')
        res.end()
    }
    if(url === '/about'){
        res.write('<html>')
        res.write('<head><title>about page</title></head>')
        res.write('<body><h1>Welcome to About Us page</h1></body>')
        res.write('</html>')
        res.end()
    }
    if(url === '/node'){
        res.write('<html>')
        res.write('<head><title>node page</title></head>')
        res.write('<body><h1>Welcome to my Node Js project</h1></body>')
        res.write('</html>')
        res.end()
    }
})

server.listen(4000)