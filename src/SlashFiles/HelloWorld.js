const { SlashCommandBuilder } = require("@discordjs/builders");
const { makeListingEmbedFromObject } = require("../Functions/MakeEmbed.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("helloworld")
        .setDescription("returns hello world"),
    execute(interaction) {
        const obj = {
            title: "Hello",
            authorName: "ME",
            authorProfilePictureURL: "https://picsum.photos/200",
            listingDescription: "Nothing",
            thumbnailImageURL: "https://picsum.photos/200",
            listingInfoObjectsArray: [{ title: "Hi", value: "I am cool" }],
        };
        interaction.reply({ embeds: [makeListingEmbedFromObject(obj)] });
    },
};
