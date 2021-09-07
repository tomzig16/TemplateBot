const { MessageEmbed } = require("discord.js");

module.exports.makeListingEmbedFromObject = (informationObject) => {
    const listingEmbed = new MessageEmbed()
        .setTitle(informationObject.title)
        .setAuthor(
            informationObject.authorName,
            informationObject.authorProfilePictureURL
        )
        .setDescription(informationObject.listingDescription)
        .setThumbnail(informationObject.thumbnailImageURL);

    const fieldsList = informationObject.listingInfoObjectsArray;
    for (let infoObject of fieldsList) {
        listingEmbed.addField(infoObject.title, infoObject.value, true);
    }
    console.log(listingEmbed);
    return listingEmbed;
};
