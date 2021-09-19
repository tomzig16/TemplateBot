const {commandDescriptionExists}  = require("./CheckCommandEntries");

test("Make sure if every command description is mentioned in commandInfo.json", () => {
    expect(commandDescriptionExists).toBe(true);
});
