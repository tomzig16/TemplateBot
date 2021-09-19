const stringConstants = require("../Data/StringConstants");
const fs = require("fs");
const bot = require("../bot");

const commandInfoJson = stringConstants.readCommandsInfoJson;
bot.execute(false);
const botsCommandInfo = bot.commandInfo;

const requiredFields = ["name", "description"];

let commandNamesFromFiles = [];

function setCommandNamesFromFiles() {
    let slashFiles = fs
        .readdirSync(stringConstants.paths["slashFilesPath"])
        .filter((file) => file.endsWith(".js"));

    let lowerCaseSlashFiles = [];
    for (let i in slashFiles) {
        lowerCaseSlashFiles.push(String(slashFiles[i]).toLowerCase());
        commandNamesFromFiles.push(lowerCaseSlashFiles[j].split(".")[0]);
    }
}

module.exports = {
    setupTestsData: function() {
        setCommandNamesFromFiles();
    },

    isCommandPropertiesSameinJSON: function() {
        let areEntriesCorrect = true;
        for (let commandName in commandNamesFromFiles) {
            if (commandInfoJson[commandName]["name"] !== commandInfo[commandName]["name"] ||
                commandInfoJson[commandName]["description"] !== commandInfo[commandName]["description"] ) {
                return false;
            }
        }
        return true;
    },
    doesJSONContainAllRequiredFields: function() {    
        for (let commandName of commandNamesFromFiles) {
            for(let requiredField of requiredFields) {
                if (commandInfoJson[commandName][requiredField] === undefined) {
                    return false;
                }
            }        
        }
        return true;
    }
};
