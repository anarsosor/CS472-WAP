/**
 * account.js
 */
"use strict";

const express = require("express");
const path = require("path");
const accountRouter = express.Router();
const accountController = require("../../controller/accountController");

// Define routes for account pages
accountRouter.get("/", async (req, res, next) => {
    console.log(`Presenting list of accounts page`);
    const accounts = await accountController.getAccounts(req, res);
    console.log(accounts);
    res.locals = {accounts: accounts};
    res.render("account-list");
    // res.render("account-list", {accounts: accounts});
});

accountRouter.post("/", async (req, res, next) => {
    const result = await accountController.addNewAccount(req, res);
    res.redirect(303, "/account");
});

module.exports = accountRouter;
