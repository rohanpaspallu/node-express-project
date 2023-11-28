const http = require("http");
const fs = require("fs");

const homePage = fs.readFileSync("./navbar-app/index.html");
const homeStyles = fs.readFileSync("./navbar-app/styles.css");
const homeImage = fs.readFileSync("./navbar-app/logo.svg");
const homeLogic = fs.readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  console.log("req is :", req.method, req.url);

  const url = req.url;
  //home page
  if (url === "/") {
    res.writeHead(200, "successful response", { "content-type": "text/html" });
    res.write(homePage, "utf8");
    res.end();
  }
  //styles
  else if (url === "/styles.css") {
    res.writeHead(200, "successful response", { "content-type": "text/css" });
    res.write(homeStyles, "utf8");
    res.end();
  }
  //logo
  else if (url === "/logo.svg") {
    res.writeHead(200, "successful response", {
      "content-type": "image/svg+xml",
    });
    res.write(homeImage, "utf8");
    res.end();
  }
  //logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, "successful response", {
      "content-type": "text/javascript",
    });
    res.write(homeLogic, "utf8");
    res.end();
  }

  //about page
  else if (url === "/about") {
    res.writeHead(200, "successful response", {
      "content-type": "text/html",
    });
    res.write("<h1 style='color:green'>About Page</h1>", "utf8");
    res.end();
  }
  //error page - 404
  else {
    res.writeHead(404, "unsuccessful response", {
      "content-type": "text/html",
    });
    res.write(fs.readFileSync("./index.html", "utf-8"), "utf8");
    res.end();
  }
});

server.listen("5000");
