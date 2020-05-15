const log = require("why-is-node-running");
const cypress = require("cypress");

cypress.run().then(() => setTimeout(log, 100));
