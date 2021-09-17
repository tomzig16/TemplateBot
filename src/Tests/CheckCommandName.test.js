const checkCommandName  = require("./CheckCommandName");

test("Check if every command name is mentioned in commandInfo.json", () => {
    expect(checkCommandName).toBe(true);
});
