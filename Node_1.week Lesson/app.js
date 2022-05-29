const moduleA = require('./moduleA');
// const colors = require('colors');
const sumAge = moduleA.sum(2, 7);
console.log(sumAge);
console.log(moduleA.user);

const fs = require('fs');
const text = fs.readFileSync('./test.txt', 'utf-8');
const user1 = fs.readFileSync('./user1.json', 'utf-8');
console.log(text);

const http = require('http');
http.createServer((req, res) => {
    console.log(req.url);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(user1);
    res.end();
}).listen(8080);
