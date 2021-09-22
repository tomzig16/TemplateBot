const templateBuilderInfo = require("./TemplateBuilderTestHelper");

test("Check if templateInfo are correct", () => {
    expect(templateBuilderInfo.templateInfoCorrect).toBe(true);
});

test("Check if templateFields are correct", () => {
    expect(templateBuilderInfo.templateFieldsCorrect).toBe(true);
});
