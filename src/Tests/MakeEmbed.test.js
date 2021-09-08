const { makeListingEmbedFromObject } = require("../Functions/MakeEmbed");

test("Gives dummy object as input and checks if it's right", () => {
    const obj = {
        title: "Hello",
        authorName: "ME",
        authorProfilePictureURL: "https://picsum.photos/200",
        listingDescription: "Nothing",
        thumbnailImageURL: "https://picsum.photos/200",
        listingInfoObjectsArray: [{ title: "Hi", value: "I am cool" }],
    };
    const output = {
        type: "rich",
        title: "Hello",
        description: "Nothing",
        url: null,
        color: null,
        timestamp: null,
        fields: [{ name: "Hi", value: "I am cool", inline: true }],
        thumbnail: { url: "https://picsum.photos/200" },
        image: null,
        video: null,
        author: {
            name: "ME",
            iconURL: "https://picsum.photos/200",
            url: undefined,
        },
        provider: null,
        footer: null,
    };
    expect(makeListingEmbedFromObject(obj)).toEqual(output);
});
