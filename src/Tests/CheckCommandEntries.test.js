const commandEntries = require("./CheckCommandEntries");

test("Please make sure that command names and descriptions are the same as in json", () => {
    expect(commandEntries.commandEntriesCorrect).toBe(true);
});
