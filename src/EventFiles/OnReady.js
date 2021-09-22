const {logger} = require("../LoggerFiles/Logger.js");

module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        logger.log(logger.LogLevelInfo, "Bot has logged in successfully");
    },
};
