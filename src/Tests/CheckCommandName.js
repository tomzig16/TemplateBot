const commandInfoJson = require("../Data/CommandInfo.json");
const stringConstants = require("../Data/StringConstants");
const fs = require("fs");
let commandNameExists = true;

// read the files
let slashFiles = fs
    .readdirSync(stringConstants.paths["slashFilesPath"])
    .filter((file) => file.endsWith(".js"));

let lowerCaseSlashFiles = [];

for (j in slashFiles) {
    lowerCaseSlashFiles.push(String(slashFiles[j]).toLowerCase());
}

for (j in lowerCaseSlashFiles) {
    try{
    if (
        commandInfoJson[lowerCaseSlashFiles[j].split(".")[0]]["name"] ==
        undefined
    ) {
    }} catch(e) {
        commandNameExists = false;
    }
}
module.exports = commandNameExists;
