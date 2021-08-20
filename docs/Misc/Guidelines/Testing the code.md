# Testing the code

## Structure

Project uses [`unittest`](https://docs.python.org/3/library/unittest.html) library to test the code. All test code must be put into `Tests` package and contain TestCases (see Dummy example for reference). 

Once you create a test case, make sure to add your tests into the suite, otherwise they will not run. Again, for reference check dummy example with how tests are added inside `TestSuites.py`

## What to test

Short answer - everything. The best case scenario would be to follow TDD ([Test driven development](https://en.wikipedia.org/wiki/Test-driven_development)) where essentially you create a test and then create a feature/code to pass that test. This ensures, that everything you code is tested.

## When to test

There are usually at least 2 times you want to test. 1st - when you add code, make sure you dont introduce regression and 2nd - before making a PR run all tests to double check it. Although it is possible to filter certain tests, do run all tests.

## Other things

I just wanted to create an additional topic on points when you might think "how do I test this". Usually, if you ask this question the problem comes to the code structure. If you are not sure how to test it, you probably need to redesign your code in a way that methods are invoked, then those methods can be tested. Writing tests (especially for inexperienced) can be quite a task, so if you are still stuck - feel free to contact people and someone will surely help.