var http = require('http')

http.createServer(onRequest).listen(3000);
console.log('Server has started');

function onRequest(request, response){
  response.writeHead(200);
  response.write('Hello everyone');
  response.end();
}
~             
