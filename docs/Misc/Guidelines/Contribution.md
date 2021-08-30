# Contribution guidelines

Development process and code consistency is a key factor for clean and easy to change code for everyone in the team. To achieve that everyone must follow these guidelines. Any PR, commit or code contribution that does not follow these guidelines will be considered incorrect and author will be asked to change according to given instructions. In case of failing to follow instructions - contribution will be rejected.

## Github and VCS

### Branches

Every change must be submitted via a PR on custom branch. Direct contributors do not have to create forks, just a branch. However, make sure the branch has a name that describes a change/feature and is not using a reserved name from the list below. 
You are allowed to use any style you prefer (camel case, pascal case etc) as long as it follows the rules of proper naming. Symbols such as `_`, `/`, `-` are also allowed, but do not overdo it.

List of reserved branch names:
* `staging`
* `draft`
* `version`
* `master`
* `main`

Example of correct branch names:
* `templateParser`
* `Sith-AddHelpCommand`
* `FixForIssue45`
* `web/frontend/home-page-visual-update`

Once you have the PR merged make sure to delete the branch.

### Commit messages

Commit messages should be short and descriptive what you are commiting to change. If you feel like you need more descriptive commit message consider using in this form:
`git commit -m "short descriptive title of commit" -n "other notes that you think are needed"` . Meaningless commit messages are not allowed.

### Pull Requests
Pull Requests (further PRs) are required to succesfully add your contribution to the main source. PRs are created inside the Github web site - simply go to your branch and press green button at the top which will say "Open Pull Request" or `Compare` > `Open Pull Request`. Make sure your pull request targets master branch (should be by default), unless you are making a PR to someone else's branch at will.

In order to succesfully merge your branch with the master branch the following rules must be met:

1. Your changes must follow the predefined code quality (further in this docs)
2. Your changes are Tested. See more on testing in this doc: [[Testing the code]] 
3. Your branch must have a PR
4. PR must have at least 1 reviewer
	1. Without reviewer's approval you can not merge. For more info you can check [[How to review the code]]
	2. Try to assign reviewer who is knowledgeable in the area where you are changing the code.
	3. It is recommended to assign more than 1 reviewer if possible and wait for everyone to review
5. PR must have a proper derscription which must include all information needed about PR for anyone reading the PR. I recommend this small template to follow:

```
## Description
What this PR changes/ why do we merge it? Make sure to include any issues that being fixed too

## Tested
How did you test your changes. Did you add any tests yourself?

## Other notes to reviewers
Any other notes to reviewers that they may need to consider once reviewing your changes
```

If all of these points are met, your PR should be merged without any issue. If you are waiting for certain reviewer to review it - poke the person, or contact me.

### Merging

Once PR is done, approved and ready to be merged - author can merge it.

### Issue tracker and task board
This project is using Github's [[Github Project usage|Project]] and [[Github Issues usage|Issues]] features. Please follow the link to seperate document for more information.

## Code quality

Code quality is mainly focusing on good readability and stability. You can ensure good readability by following further guidelines and stability by running tests and reviewing code.

### Naming

The project is written using Javascript. I don't want to control every single line you write but for consistency's with everyones code project will be following ES6 version and it's common rules. You can check your VSCode extensions to follow that and if you start you can install `jshint` and use it (for more info check [[VSCode configuration]] doc). ES6 is 

* Whole code, filenames (except `index.js`) are following `CamelCase`:
	* Filenames and functions - First letter is capital, every subsequent word is also started with capital letter. 
		* Example: `function GetUserServer()`, `class UserDataContainer`, `Template.js`
	* Variable names, arguments - first letter lower case, every subsequent capital. 
		* Example: `userName`
	* Global variable names must follow class, method and function rules, but they also must start with `g_` prefix, which will indicate that they are global
* Methods and functions must answer "Do what?" question in their name (describe action)
	* Example: `GetUserName`, `ParseInput` etc.
* Everything else must answer "What?" question (describe object) 
	* Example: `userName`, `parsedInput`
* For strings use double quotes.
* Add semicolons on every end of statement.

That comes without saying, that every variable, class, argument or file name must make sense. **Better write long names than abbreviate and introduce confusion**. Also, avoid double meaning having names.

### Tabs vs Spaces

Through the whole project we use 4 spaces instead of tab. Tab is allowed to be used only when printing strings in log files to keep text vertically aligned where needed.

### Comments

Most important thing about comments - do not overuse it. Make sure your naming describes object, that makes comments not needed, which in result makes code cleaner. If you feel like you need to write a comment, make sure it answers "why?" that particular code is needed rather than "what it does?". Code already tells what it does.

### File structure

* File structure must be following:

1. Imports
	1. First global imports
	2. Second local imports
4. global variables
5. classes
6. functions

### Formatting tools

Insert what we are using to make VSCode automatically format our code

### Other specific to JS code rules

1. Every code "sentence" must end with semicolon.
2. Never use `var`. prefer `const` over `let`, but can use both.
3. Try to minimise use of lambda methods, better write standalone functions - it will be easier to test as well.
4. use `module.exports` and export all needed functions as objects
	1. Example: 

```js
module.exports = {
	StartServerPokingRoutine: function(){
		PokeServer();
	}
}
function PokeServer() { ... }
```


