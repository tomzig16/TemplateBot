// Importing necessary stuff
const { SlashCommandBuilder } = require("@discordjs/builders");
const { Client, Intents } = require("discord.js");
const stringConstants = require("../Data/StringConstants");

const commandInfo = stringConstants.readCommandsInfoJson;

module.exports = {
    data: new SlashCommandBuilder()
        .setName(commandInfo["ping"]["name"])
        .setDescription(commandInfo["ping"]["description"]),
    async execute(interaction) {
        const sent = await interaction.reply({
            content: "Pinging...",
            fetchReply: true,
        });
        interaction.editReply(
            `Roundtrip latency: ${
                sent.createdTimestamp - interaction.createdTimestamp
            }ms :ping_pong:`
        );
    },
};
