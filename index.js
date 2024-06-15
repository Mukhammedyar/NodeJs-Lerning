const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(request.url);
  //   response.write("<h1> hello from http server 2233</h1>");
  //   response.end();
  //   response.end("<h1> hello from http server 223q3</h1>");

  if (req.method === "GET") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(`
          <h2> hello from http server</h2>
          <form method="post" action="/">
            <input type="email" name="email" placeholder="email"/>
            <button type="submit">Submin </button>
          </form>
      `);
  } else if (req.method === "POST") {
    res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
    const email = [];

    req.on("data", (data) => {
      email.push(Buffer.from(data));
    });

    req.on("end", () => {
      let message = email.toString().split("=")[1];
      res.end(`email succefully sent: ${message}`);
    });
  }
});

server.listen(8080, () => {
  console.log("server starting on 3000");
});
