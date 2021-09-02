# Testing the code

## Structure

Project uses [`jest`](https://jestjs.io/) library to test the code. All test code must be put into `Tests` folder and must end with `*.test.js`, for example `logicalName.test.js`. Library automatically picks up tests from the project based on that file ending.

Try to group tests in the logical files, or create new one if you don't see where it may fit.

## What to test

Short answer - as much as possible. The best case scenario would be to follow TDD ([Test driven development](https://en.wikipedia.org/wiki/Test-driven_development)) where essentially you create a test and then create a feature/code to pass that test. This ensures, that everything you code is tested.

## When to test

There are usually at least 2 times you want to test. 1st - when you add code, make sure you dont introduce regression and 2nd - before making a PR run all tests to double check it. Although it is possible to filter certain tests, do run all tests.

### How to run tests on your machine

Project should be configured to have test commands ready, all you have to do is to install jest (`npm install --save-dev jest`,  should be done automatically once you run `npm install` for the whole project) and then simply run `npm test` - it will start all tests.

It is also possible to filter specifical tests by their name and with similar conditions. For that you either need to add new npm test command or install jest globally (for more info check these [docs](https://jestjs.io/docs/getting-started)). Once its installed and (automatically) added to the PATH env. variable, you can run something like `jest my-test --notify --config=config.json` to run all tests on files matching `my-test`. 

%% I personally did not test this, once we have more tests I will update it #future %%

## Comparisons
Most common comparisons are given below. For full list check [this link](https://jestjs.io/docs/using-matchers)

All tests start with `expect(method)` and follow these matcher calls (for example `expect(method).toBe(result)`).

You can also add `.not` for an inverse action (`expect(method).not.toBe(0)`).

| Matcher                | Description                                                                                                 |
| ---------------------- | ----------------------------------------------------------------------------------------------------------- |
| toBe                   | uses `Object.is` to test exact equality. If you want to check the value of an object, use `toEqual` instead |
| toEqual                | recursively checks every field of an object or array                                                        |
| toBeNull               | matches only `null`                                                                                         |
| toBeUndefined          | matches only undefined                                                                                      |
| toBeTruthy             | matches everything that an if statement treats as true                                                      |
| toBeFalsy              | everything that is false                                                                                    |
| toBeGreaterThan        | if result is greater than (>)                                                                               |
| toBeGreaterThanOrEqual | if result is greater than or equal (>=)                                                                     |
| toBeCloseTo            | use this to check on floating numbers to avoid small floating point errors                                  |
| toMatch                | checks strings against regular expression `expect('team').not.toMatch(/I/);`                                |
| toContain              | array or iterable contains a particular item                                                                |
| toThrow                | if you expect certain method to throw an exception                                                                                                            |

## Other things

I just wanted to create an additional topic on points when you might think "how do I test this". Usually, if you ask this question the problem comes to the code structure. If you are not sure how to test it, you probably need to redesign your code in a way that methods are invoked, then those methods can be tested. Writing tests (especially for inexperienced) can be quite a task, so if you are still stuck - feel free to contact people and someone will surely help.
