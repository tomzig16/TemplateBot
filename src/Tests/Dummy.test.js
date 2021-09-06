const sum = require("./DummyExample");

test("Adds 1 + 2 to be equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});
