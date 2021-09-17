const commandInfoJson = require("../Data/CommandInfo.json");
const stringConstants = require("../Data/StringConstants");
const fs = require("fs");
const bot = require("../bot");
bot.execute(false);
const commandInfo = bot.commandInfo;
var isCommandEntriesCorrectBol;

let slashFiles = fs
    .readdirSync(stringConstants.paths["slashFilesPath"])
    .filter((file) => file.endsWith(".js"));

let lowerCaseSlashFiles = [];

for (j in slashFiles) {
    lowerCaseSlashFiles.push(String(slashFiles[j]).toLowerCase());
}

for (i in lowerCaseSlashFiles) {
    try {

    
    if (
        commandInfoJson[lowerCaseSlashFiles[i].split(".")[0]]["name"] ==
            commandInfo[i]["name"] &&
        commandInfoJson[lowerCaseSlashFiles[i].split(".")[0]]["description"] ==
            commandInfo[i]["description"]
    ) {
        isCommandEntriesCorrectBol = true;
    }} catch (e) {
        isCommandEntriesCorrectBol = false;
    }
}


module.exports = {commandEntries: isCommandEntriesCorrectBol};
