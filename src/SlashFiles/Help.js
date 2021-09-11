// Importing necessary stuff
const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, Client, Intents } = require("discord.js");
const fs = require("fs");

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
        .setName("help")
        .setDescription("Feeling lost❓️"),
    async execute(interaction) {
        let allCommandsEmbed = new MessageEmbed()
            .setTitle("Commands")
            .setDescription("All list of commands you can use")
            .setTimestamp()
            .setFooter(interaction.guild.name, interaction.guild.iconURL());
        for (let command of commandsInfo) {
            allCommandsEmbed.addField(command.name, command.description);
        }
        interaction.reply({ embeds: [allCommandsEmbed] });
    },
};
