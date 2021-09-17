const { commandEntries } = require("./CheckCommandEntries");

test("Checks if command entries are correct and valid", () => {
    expect(commandEntries()).toBe(true);
});
