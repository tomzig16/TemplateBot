const fs = require("fs");
const discordBot = require("../bot");

discordBot.configureBot("TEST");

test("Check if 1 command per file", () => {
    const nOfExistingCommandFiles = fs
    .readdirSync("./Commands")
    .filter((file) => file.endsWith(".js")).length;
    expect(discordBot.getKnownCommands().length).toEqual(nOfExistingCommandFiles);
});