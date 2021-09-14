const commandInfo = require("./CommandInfo.json");

module.exports = {
    // Paths
    paths: { slashFilesPath: "./SlashFiles/", eventFilesPath: "./EventFiles/" },
    readCommandsInfoJson: commandInfo,
};
