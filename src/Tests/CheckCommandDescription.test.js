const checkCommandDescription  = require("./CheckCommandDescription");

test("Make sure if every command description is mentioned in commandInfo.json", () => {
    expect(checkCommandDescription).toBe(true);
});
