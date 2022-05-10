const path = require('path')
const http = require('http')

const PORT = process.env.PORT || 8080

const server = http.createServer((req, res) => {
    if(req.url === '/')
    console.log(req.url);
    res.end()
})

server.listen(PORT, ()=> console.log( `server ${PORT} portda ishlamoqda...`))
