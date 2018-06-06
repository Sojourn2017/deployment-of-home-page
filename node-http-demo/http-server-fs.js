const http = require('http');
const url = require('url');
const fs = require('fs');

let server = http.createServer((req,res) => {
  let pathName = url.parse(req.url).pathname;

  let rePathName = `../HomePage${pathName}`;
  console.log(rePathName);
  fs.readFile(rePathName,(err,data) => {

    if (err) {
      res.writeHead(404,{
        'Context-Type': `text/html`
      })

      res.end('404 Not Found');
    } else {
      res.writeHead(200,{
        'Context-Tpye': `text/html`
      })

      res.end(data);
    }
  })
});

server.listen(666,'0.0.0.0',() => {
  console.log('server running at port 666');
})