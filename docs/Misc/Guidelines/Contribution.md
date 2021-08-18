# Contribution guidelines

Development process and code consistency is a key factor for clean and easy to change code for everyone in the team. To achieve that everyone must follow these guidelines. Any PR, commit or code contribution that does not follow these guidelines will be considered incorrect and author will be asked to change according to given instructions. In case of failing to follow instructions - contribution will be rejected.

## Github and VCS

### Branches

Every change must be submitted via a PR on custom branch. Direct contributors do not have to create forks, just a branch. However, make sure the branch has a name that describes a change/feature and is not using a reserved name from the list below.
You are allowed to use any style you prefer (camel case, pascal case etc) as long as it follows the rules of proper naming. Symbols such as `_`, `/`, `-` are also allowed, but do not overdo it.

List of reserved branch names:

- `staging`
- `draft`
- `version`
- `master`
- `main`

Example of correct branch names:

- `templateParser`
- `Sith-AddHelpCommand`
- `FixForIssue45`
- `web/frontend/home-page-visual-update`

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

### Issue tracker and task board

This project is using Github's [[Github Project usage|Project]] and [[Github Issues usage|Issues]] features. Please follow the link to seperate document for more information.

## Code quality

### Standard

The project is written using Python 3.6. I don't want to control every single line you write but for consistency's with everyones code the [pep8 standard](https://www.python.org/dev/peps/pep-0008/) will be enforced.
Most IDEs which support Python should come with pep8 linters.

Visual Studio Code for example, will make PyCodeStyle available when you install the Python extension.

Pycharm comes with pep8 linting enabled by default.

You might want to search up enabling linting in other IDEs and Code Editors

I suggest using an autoformatter like autopep8 which automatically formats your code to follow pep8.
But you have to manually follow the pep8 standard for **naming**.

That comes without saying, that every variable, class, argument or file name must make sense. **Better write long names than abbreviate and introduce confusion**. Also, avoid double meaning having names.

### Comments

Most important thing about comments - do not overuse it. Make sure your naming describes object, that makes comments redundant. If you feel like you need to write a comment, double check your code, maybe you can just rename things or write more clear code.

Only `#` comments are allowed. Python has `"""` (triple quotations) for multi-line comments, but please, do not use those as they are reserved for multiline strings.

### Packages and files

The following rules are to be considered when working with packages and files

- Every package must contain `__init__.py`
- Each file must consist code that applies for the file described title (for example dont put discord command parsing related code into database reading file)
  - Same applies for packages - do not create files in packages that make no sense for to be there
- As mentioned in Naming part - file names start with capital and end with `.py`
- File structure must be following:

1. package name
2. imports
   1. First global imports
   2. Second local imports
   3. If you import more than 3 (or 2 lenghty named) resources - consider importing everything
3. global variables
4. classes
5. functions

### Other python specific code

The single entry file is allowed, which is `main.py` in the main project directory.
