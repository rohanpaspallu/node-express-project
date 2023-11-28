const http = require("http");

const server = http.createServer((req, res) => {
  console.log("req is :", req.method, req.url);

  const url = req.url;
  if (url === "/") {
    res.writeHead(200, "successful response", { "content-type": "text/html" });
    res.write("<h1 style='color:green'>Home Page</h1>", "utf8");
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, "successful response", { "content-type": "text/html" });
    res.write("<h1 style='color:green'>About Page</h1>", "utf8");
    res.end();
  } else {
    res.writeHead(404, "unsuccessful response", {
      "content-type": "text/html",
    });
    res.write("<h1 style='color:red'>Page Not found</h1>", "utf8");
    res.end();
  }
});

server.listen("5000");
