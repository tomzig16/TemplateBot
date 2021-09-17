const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder().setName("test").setDescription("test"),
    execute(interaction) {
        interaction.reply("Hello test");
    },
};
