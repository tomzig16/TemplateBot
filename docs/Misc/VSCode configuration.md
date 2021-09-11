# VSCode configuration

#vscode #tools #qol

<hr>

This document holds useful information related to VSCode configurations and overall quality of life recommendations

<hr>

## JS intellisense and autocomplete

I personally use [jshint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint) based on VSCode recommendation, so if you have something better in mind - please message the team and lets discuss!

We are using ES8 rules but jshint is set to follow some older conventions. If you are using JSHint it will use .jshintrc file by default, but in case it does not work for you, you can try these instructions:

1.  Open Visual Studio Code
2.  File -> Preferences -> Settings
3.  Default User Settings -> JSHint configuration
4.  look for `"jshint.options": {},`
5.  change it to `"jshint.options": {"esversion": 8},` by clicking on Edit on the left

%% List of todos todo things. Keeping this list as comment makes them appear in the main todo plugin browser, but does not render in Preview document window %%

For further formatting docs check [[Formatting]]