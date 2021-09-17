const commandInfoJson = require("../Data/CommandInfo.json");
const bot = require("../bot");
bot.execute(false);
const commandInfo = bot.commandInfo;
var isCommandEntriesCorrectBol = true;

function sortObjectByKeys(o) {
    return Object.keys(o)
        .sort()
        .reduce((r, k) => ((r[k] = o[k]), r), {});
}

function getUniqueValue(array, excluded) {
    let newArr, temp, temp1;

    check1 = array.filter(function (value) {
        return excluded.indexOf(value) == -1;
    });

    check2 = excluded.filter(function (value) {
        return array.indexOf(value) == -1;
    });

    output = check1.concat(check2);

    return output;
}

var commandInfoIndexes = [];
var commandInfoJsonIndexes = [];

for (const i in commandInfo) {
    commandInfoIndexes.push(Number(i));
}
for (const j in sortObjectByKeys(commandInfoJson)) {
    var index = Object.keys(sortObjectByKeys(commandInfoJson)).indexOf(j);
    commandInfoJsonIndexes.push(index);
}

const commandInfoNotMentionedInJson =
    commandInfo[getUniqueValue(commandInfoIndexes, commandInfoJsonIndexes)];

if (commandInfoNotMentionedInJson != undefined) {
    isCommandEntriesCorrectBol = false;
    throw new Error(
        `Found ${commandInfoNotMentionedInJson["name"]} command but its information not mentioned in /Data/commandInfo.json file`
    );
}

function isCommandEntriesCorrect() {
    return isCommandEntriesCorrectBol;
}

module.exports = { commandEntries: isCommandEntriesCorrect };
