const fs =require('fs');


const requestHandler = (req,res) =>{
    console.log('Nikhil')
    const url = req.url;
    const method = req.method;
    var msg ;
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Main page</title></head>')
        res.write(`<body><h1>${msg}</h1><br><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`)
        res.write('</html>')
        return res.end()
    }
    if(url === '/message' && method ==='POST' ){
        const body =[]
        req.on('data' , (chunk) => {
            console.log(chunk);
            body.push(chunk)
        })
        req.on('end' ,()=>{
            const parsedBody =Buffer.concat(body).toString();
            const message =parsedBody.split('=')[1];
            msg= message;
            fs.writeFileSync('message.txt' , message)
            res.statusCode = 302;
            res.setHeader('Location', '/' )
            return res.end()
            
        })
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
};

module.exports = requestHandler;

// module.exports ={
//     handler:requestHandler,
//     someTxt:"asdfghj"
// }

// module.exports.handler = requestHandler;
// module.exports.someTXT = "tyuio";