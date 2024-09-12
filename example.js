const http = require("http");

const server = http.createServer((req, res) => {
  const method = req.method;
  console.log("method", method);
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>Ben is Boy</title></head>");
  res.write("<body><h1>Hai mmmbu How are you!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
