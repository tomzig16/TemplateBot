const { SlashCommandBuilder } = require("@discordjs/builders");
const { makeListingEmbedFromObject } = require("../Functions/MakeEmbed.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("helloworld")
        .setDescription("returns hello world"),
    execute(interaction) {
        interaction.reply("Hello World!");
    },
};
