const http = require("http");

const server = http.createServer((request, response) => {
  //   console.log(request.url);
  response.write("<h1> hello from http server 2233</h1>");
  response.end();
});

server.listen(8080, () => {
  console.log("server starting on 3000");
});
