const stringConstants = require("../Data/StringConstants");
const commandInfoJson = require(stringConstants.paths["commandInfoPath"]);
const fs = require("fs");
const bot = require("../bot");
bot.execute(false);
const commandInfo = bot.commandInfo;
var isCommandEntriesCorrectBol = true;
var commandNameExists = true;
var commandDescriptionExists = true;

// Getting all js filenames from /SlashFiles
let slashFiles = fs
    .readdirSync(stringConstants.paths["slashFilesPath"])
    .filter((file) => file.endsWith(".js"));

let lowerCaseSlashFiles = [];

// converting all filenames to lower case
for (j in slashFiles) {
    lowerCaseSlashFiles.push(String(slashFiles[j]).toLowerCase());
}

// Checking if command name and description is same as json command name and description
for (i in lowerCaseSlashFiles) {
    try {
        if (
            commandInfoJson[lowerCaseSlashFiles[i].split(".")[0]]["name"] ===
                commandInfo[i]["name"] &&
            commandInfoJson[lowerCaseSlashFiles[i].split(".")[0]][
                "description"
            ] === commandInfo[i]["description"]
        ) {
            isCommandEntriesCorrectBol = true;
        } else {
            throw "Name or description inside the command is not the same as in global JSON file";
        }
    } catch (e) {
        isCommandEntriesCorrectBol = false;
    }
}

// Check if command description exists in commandInfo json file
for (j in lowerCaseSlashFiles) {
    // try{
    try {
        if (
            commandInfoJson[lowerCaseSlashFiles[j].split(".")[0]][
                "description"
            ] === undefined
        ) {
            commandDescriptionExists = false;
        }
    } catch (e) {
        commandDescriptionExists = false;
    }
}

for (j in lowerCaseSlashFiles) {
    try {
        if (
            commandInfoJson[lowerCaseSlashFiles[j].split(".")[0]]["name"] ===
            undefined
        ) {
        }
    } catch (e) {
        commandNameExists = false;
    }
}

module.exports = {
    commandEntriesCorrect: isCommandEntriesCorrectBol,
    commandNameExists: commandNameExists,
    commandDescriptionExists: commandDescriptionExists,
};
