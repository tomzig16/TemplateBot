const logger = require("../LoggerFiles/InitializeLogger.js");

module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        logger.log(logger.LogLevelInfo, "Bot has logged in successfully");
    },
};
