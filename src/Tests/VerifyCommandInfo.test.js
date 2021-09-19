const commandInfoTestHelper = require("./CommandInfoTestHelper");

beforeAll(() => {
    return commandInfoTestHelper.setupTestsData();
});

test("Check if commandInfo.json file contains all required fields", () => {
    expect(commandInfoTestHelper.doesJSONContainAllRequiredFields()).toBe(true);
});

test("Check if all commands use required fields from commandInfo.json", () => {
    expect(commandInfoTestHelper.doesCommandUseRequiredFieldsFromJSON()).toBe(true);
});

