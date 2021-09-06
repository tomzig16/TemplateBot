const { SlashCommandBuilder } = require("@discordjs/builders");
const { Client, Intents } = require("discord.js")
const botInstance = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Check the bot's response time 🏓️"),
    async execute(interaction) {
        var ping = interaction.createdTimestamp - interaction.createdTimestamp;
        var botPing = Math.round(botInstance.ws.ping);
        const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
        interaction.editReply(`Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms :ping_pong:`);
    },
};