const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-type": "text/html" });

    switch (req.url) {
      case "/":
        fs.readFile(
          path.join(__dirname, "modules", "index.html"),
          "utf8",
          (err, data) => {
            if (err) throw err;
            res.end(data);
          }
        );
        break;
      case "/about":
        fs.readFile(
          path.join(__dirname, "modules", "about.html"),
          "utf8",
          (err, data) => {
            if (err) throw err;
            res.end(data);
          }
        );
        break;
      case "/contact":
        fs.readFile(
          path.join(__dirname, "modules", "contact.html"),
          "utf8",
          (err, data) => {
            if (err) throw err;
            res.end(data);
          }
        );
        break;
      case "/api/admin":
        const admin = { name: "admin", email: "admin@example.com" };
        res.end(JSON.stringify(admin));

        break;

      default:
        fs.readFile(
          path.join(__dirname, "modules", "index.html"),
          "utf8",
          (err, data) => {
            if (err) throw err;

            res.end(data);
          }
        );
        break;
    }
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
