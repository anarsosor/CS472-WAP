exports.add = function(req, res, vals) {
    const sum = parseFloat(vals.first) + parseFloat(vals.second);
    res.writeHead(200, {"Content-Type":"text/html"});
    const content = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Calculator webapp</title>
            </head>
            <body>
                <p>The Sum is : ${String(sum)}</p>
            </body>
        </html>
    `;
    res.write(content);
    return res.end();
}