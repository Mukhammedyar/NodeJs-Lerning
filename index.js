const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);
  response.write("<h1> hello from http server </h1>");
  response.end();
});

server.listen(3000, () => {
  console.log("server starting on 3000");
});
