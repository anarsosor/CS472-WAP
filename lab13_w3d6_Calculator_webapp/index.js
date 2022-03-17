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

app.get("/",(req, res) => {
    console.log(`Calculator Form`);
    res.sendFile(path.join(__dirname, "views", "calc-form.html"));
});

app.post("/calc", (req, res) => {
    console.log(`In the calc middleware`);
    console.log(`${req.body.first} ${req.body.operator} ${req.body.second} = ?`);

    const first = parseFloat(req.body.first);
    const second = parseFloat(req.body.second);
    const op = req.body.operator;
    let result = first;
    switch(op) {
        case `+`:
            result += second;
            break;
        case `-`:
            result -= second;
            break;
        case `*`:
            result *= second;
            break;
        case `/`:
            result /= second;
            break;
        default:
            break;
    }
    const redirectUrl = `/confirm-calc?result=${result}`;
    res.redirect(303, redirectUrl);
    
});

app.get("/confirm-calc",(req, res) => {
    console.log(`In the confirm-calc middleware`);
    const content = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Calculator webapp</title>
            </head>
            <body>
                <h1>The Answer is: ${String(req.query.result)}</h1>
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