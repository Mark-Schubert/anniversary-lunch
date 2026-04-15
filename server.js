const http = require('http'); 
const fs = require('fs'); 
const path = require('path'); 
const PORT = process.env.PORT || 3000; 
http.createServer((req, res) => { 
  res.writeHead(200, {'Content-Type': 'text/html'}); 
  fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res); 
