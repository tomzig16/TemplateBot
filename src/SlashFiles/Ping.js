// Importing necessary stuff
const { SlashCommandBuilder } = require("@discordjs/builders");
const { Client, Intents } = require("discord.js")


module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Check the bot's response time 🏓️"),
    async execute(interaction) {
        const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
        interaction.editReply(`Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms :ping_pong:`);
    },
};