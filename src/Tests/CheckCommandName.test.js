const commandEntries  = require("./CheckCommandEntries");

test("Check if every command name is mentioned in commandInfo.json", () => {
    expect(commandEntries.commandNameExists).toBe(true);
});
