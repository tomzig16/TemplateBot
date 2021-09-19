const commandInfo = require("./CommandInfo.json");

module.exports = {
    // Paths
    paths: {
        slashFilesPath: "./SlashFiles/",
        eventFilesPath: "./EventFiles/",
        commandInfoPath: "../Data/CommandInfo.json",
    },
    readCommandsInfoJson: commandInfo,
};
