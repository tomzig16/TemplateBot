const fs = require("fs");
const { Client, Collection, Intents } = require("discord.js");
const botInstance = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

module.exports = {
    name: "interactionCreate",
    async execute(interaction) {
        if (!interaction.isCommand()) return;
        const command = botInstance.slashCommands.get(interaction.commandName);
        if (!command) return;
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: "There was an error while executing this command!",
                ephemeral: true,
            });
        }
    },
};
