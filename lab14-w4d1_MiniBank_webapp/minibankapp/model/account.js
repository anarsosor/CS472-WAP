/**
 * account.js
 */
"use strict";

// TODO: use ES6 class syntax
function Account(accountId, accountNo, customerName, accountType) {
    this.accountId = accountId;
    this.accountNo = accountNo;
    this.customerName = customerName;
    this.accountType = accountType;
}

module.exports = Account;