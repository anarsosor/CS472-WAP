/**
 * index.jsp
 * @author Anar
 * @since 2022-03-14
 */
"use strict"
 
const express = require("express");
const path = require("path");

const app = express();
 // setup the express HttpRequest data parser middleware
 app.use(express.urlencoded({ extended: false }));

app.get("/",(req, res, next) => {
    console.log(`Calculator Form`);
    res.sendFile(path.join(__dirname, "views", "calc-form.html"));
});

app.post("/calc", (req, res, next) => {
    console.log(`In the calc middleware`);
    console.log(`first: ${req.body.first}`);
    console.log(`second: ${req.body.second}`);
    console.log(`operator: ${req.body.operator}`);

    const queryString = `first=${req.body.first}&second=${req.body.second}&operator=${req.body.operator}`;
    const redirectUrl = `/confirm-calc?${queryString}`;
    res.redirect(303, redirectUrl);
    
});

app.get("/confirm-calc",(req, res, next) => {
    console.log(`In the confirm-calc middleware`);
    const first = parseFloat(req.query.first);
    const second = parseFloat(req.query.second);
    let result = first;
    switch(req.query.operator) {
        case `add`:
            result += second;
            break;
        case `sub`:
            result -= second;
            break;
        case `mul`:
            result *= second;
            break;
        case `div`:
            result /= second;
            break;
    }
    const content = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Calculator webapp</title>
            </head>
            <body>
                <h1>The Answer is: ${String(result)}</h1>
                <a href="/">Another calculation</a>
            </body>
        </html>
    `;
    res.send(content);
    res.end();
})
const PORT_NUMBER = 3000;

app.listen(PORT_NUMBER, () => {
    console.log(`Server is running on port ${PORT_NUMBER}`);
});