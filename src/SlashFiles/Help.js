// Importing necessary stuff
const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, Client, Intents } = require("discord.js");
const fs = require("fs");
const stringConstants = require("../Data/StringConstants");
const commandsInfoJson = stringConstants.readCommandsInfoJson;
// list for storing data about all commands
let commandsInfo = [];

// Exporting loadKnownCommands to get all command's info
module.exports = {
    loadKnownCommands: (allCommands) => {
        let allKnownCommands = [];
        for (let command of allCommands) {
            allKnownCommands.push({
                name: command.name,
                description: command.description,
            });
        }
        commandsInfo = allKnownCommands;
    },
    data: new SlashCommandBuilder()
        .setName(commandsInfoJson["help"]["name"])
        .setDescription(commandsInfoJson["help"]["description"]),
    async execute(interaction) {
        let allCommandsEmbed = new MessageEmbed()
            .setTitle(
                commandsInfoJson["help"]["viewAllCommandsEmbed"]["title"]
            )
            .setDescription(
                commandsInfoJson["help"]["viewAllCommandsEmbed"][
                    "description"
                ]
            )
            .setTimestamp()
            .setFooter(interaction.guild.name, interaction.guild.iconURL());
        for (let command of commandsInfo) {
            allCommandsEmbed.addField(command.name, command.description);
        }
        interaction.reply({ embeds: [allCommandsEmbed] });
    },
};
