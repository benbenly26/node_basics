const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    console.log("method", method);

    if (url == "/") {
        res.setHeader("Content-type", "text/html");
        res.write("<html>");
        res.write("<head><title>Enter Form Details</title></head>");
        res.write(
            "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Next Page</button></form></body>"
        );
        res.write("</html>");
        return res.end();
    }

    if (url == "/message" && method == "POST") {

        fs.writeFileSync('New.html', 'Hello Ben')

        const msg = [];
        req.on("data", (chunk) => {
            msg.push(chunk);
            console.log("chunk", chunk);
        });
        return req.on("end", () => {
            const parsedData = Buffer.concat(msg).toString();
            console.log("parsedData", parsedData);
            const message = parsedData.split('=');
            fs.writeFile("mmbro.html", message[1], (err) => {
                res.setHeader("Location", "/");
                res.statusCode = 302;
                return res.end();
            });
        });

    }

    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Ben is Boy</title></head>");
    res.write("<body><h1>Hai Ben How are you!</h1></body>");
    res.write("</html>");
    res.end();
}

module.exports = {
    handler: requestHandler,
}
