const {loggerInstance} = require("../LoggerFiles/Logger.js");

module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        loggerInstance.log(loggerInstance.LogLevelInfo, "Bot has logged in successfully");
    },
};
