const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // Check if the request is for "index.html"
  if (req.url === "/index.html") {
    // Read and serve the "index.html" file
    fs.readFile(path.join(__dirname, "index.html"), "utf8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error loading index.html");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end(
      "<h1>404 Not Found</h1><p>The page you requested does not exist.</p>"
    );
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
