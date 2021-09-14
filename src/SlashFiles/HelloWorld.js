const { SlashCommandBuilder } = require("@discordjs/builders");
const stringConstants = require("../Data/StringConstants");

const commandInfo = stringConstants.readCommandsInfoJson;

module.exports = {
    data: new SlashCommandBuilder()
        .setName(commandInfo["helloworld"]["name"])
        .setDescription(commandInfo["helloworld"]["description"]),
    execute(interaction) {
        interaction.reply("Hello World");
    },
};
