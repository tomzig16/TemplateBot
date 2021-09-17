const stringConstants = require("../Data/StringConstants");
const commandInfoJson = require(stringConstants.paths["commandInfoPath"]);

const fs = require("fs");
let commandDescriptionExists = true;

// read the files
let slashFiles = fs
    .readdirSync(stringConstants.paths["slashFilesPath"])
    .filter((file) => file.endsWith(".js"));

let lowerCaseSlashFiles = [];

for (j in slashFiles) {
    lowerCaseSlashFiles.push(String(slashFiles[j]).toLowerCase());
}

for (j in lowerCaseSlashFiles) {
    // try{
    if (
        commandInfoJson[lowerCaseSlashFiles[j].split(".")[0]]["description"] ==
        undefined
    ) {
    }}
    // catch (e) {
        // commandDescriptionExists = false;
    // }

module.exports = commandDescriptionExists;
