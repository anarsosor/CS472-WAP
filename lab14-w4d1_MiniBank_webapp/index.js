/**
 * index.js
 * 
 * A demo express.js webapp
 * 
 * @author Anar
 * @since 2022-03-12
 */

"use strict";

const express = require("express");
const path = require("path");
const homeRoutes = require("./routes/home/home");
const accountRoutes = require("./routes/account/account");

const app = express();

// Define middlewares
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// setup the express HttpRequest data parser middlewares
// parse application/x-www-form-urlencoded (e.g. web form data)
app.use(express.urlencoded({ extended: false }));
// parse HttpRequest data to application/json format
app.use(express.json());

// Set public folder as source for all static content 
// e.g. scripts, images, stylesheets etc.
app.use("/static", express.static(path.join(__dirname, "public")));

// Setup routes for homepageand other static pages
app.use("", homeRoutes);

// Setup routes for account-related pages
app.use("/account", accountRoutes);

// Put the Error 404 middleware last
app.use((req, res, next) => {
    console.log(`Responding by redirecting to the 404 Error page`);
    res.status(404);
    res.sendFile(path.join(__dirname, "views", "404.html"));
});

const PORT_NUMBER = 9001;

app.listen(PORT_NUMBER, () => {
    console.log(`Server is running on port ${PORT_NUMBER}`);
});