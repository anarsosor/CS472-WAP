/**
 * accountDAO.js
 */
"use strict";

const dbConnectionMgr = require("../dbconnectionmgr");

//TODO Use ES6 class syntax
const accountDAO = (function() {

    const getAccounts = async function() {
        const qryStrGetAccounts = "SELECT * FROM `accounts-db`.accounts";
        try {
            const dbConnection = dbConnectionMgr.getConnection();
            const [accounts] = await dbConnection.promise().query(qryStrGetAccounts);
            return accounts;
        } catch (error) {
            console.log(`DB Access Error: ${error}`);
            throw error;
        }
    };

    const saveAccount = async function(account) {
        const cmdStrSaveAccount = `insert into accounts (accountNo, customerName, accountType) values ('${account.accountNo}', '${account.customerName}', '${account.accountType}')`;
        try {
            const dbConnection = dbConnectionMgr.getConnection();
            const saveOpResult = await dbConnection.promise().execute(cmdStrSaveAccount);
            return saveOpResult;
        } catch(error) {
            console.log(`DB Access Error: ${error}`);
            throw error;
        }
    }

    return {
        getAccounts: getAccounts,
        saveAccount: saveAccount
    }
})();

module.exports = accountDAO;