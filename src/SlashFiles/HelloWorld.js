const { SlashCommandBuilder } = require("@discordjs/builders");
const { readCommandsInfoJson } = require("../Data/StringConstants");
const commandInfo = readCommandsInfoJson;

module.exports = {
    data: new SlashCommandBuilder()
        .setName(commandInfo["helloworld"]["name"])
        .setDescription(commandInfo["helloworld"]["description"]),
    execute(interaction) {
        interaction.reply("Hello World");
    },
};
