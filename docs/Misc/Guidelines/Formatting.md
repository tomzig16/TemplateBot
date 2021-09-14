# Formatting

#formatting #vim #prettier

<hr>

This document contains information about the formatting extension we will be using.

<hr>

# Prettier

As discussed in [#3](https://github.com/tomzig16/TemplateBot/issues/3), we will be using Prettier to format our code.

The prettier config file is included in `src` so make sure you open `src` or its parent directories as your working directory.

## Using Prettier with npm or yarn

- To install prettier with npm, run `npm install --save-dev --save-exact prettier`
- To install prettier with yarn, run `yarn add --dev --exact prettier` in your working directory.
- To format your code with the npm version, run `npx prettier --write .`
- To format your code with the yarn version, run `yarn prettier --write .`

After installation you can run `npm run format` and it will automatically format all documents.

## Installing Prettier in Vim

Installing the prettier extension depends on your plugin manager.
Make sure to install https://github.com/prettier/vim-prettier using your plugin manager.

Prettier's vim extension requires you to have the prettier binary.
Assuming you have `yarn` or `npm` installed, you can tell your plugin manager to run `yarn install` or `npm install`.

When using `vim-plug` for example, you have to plug it as:
```
Plug 'prettier/vim-prettier', {
  \ 'do': 'yarn install',
  \ 'for': ['javascript', 'typescript', 'css', 'less', 'scss', 'json', 'graphql', 'markdown', 'vue', 'svelte', 'yaml', 'html'] }
```

To setup prettier and to autoformat your code on save, follow the instructions below after installing prettier:
- Open your `.vimrc`
- Add the following lines to your `.vimrc`
```
let g:prettier#autoformat = 1
let g:prettier#autoformat_require_pragma = 0

" Max line length that prettier will wrap on: a number or 'auto' (use
" " textwidth).
" " default: 'auto'
let g:prettier#config#print_width = 'auto'
"
" " number of spaces per indentation level: a number or 'auto' (use
" " softtabstop)
" " default: 'auto'
let g:prettier#config#tab_width = 2
"
" " use tabs instead of spaces: true, false, or auto (use the expandtab
" setting).
" " default: 'auto'
let g:prettier#config#use_tabs = 'false'
"
" " flow|babylon|typescript|css|less|scss|json|graphql|markdown or empty
" string
" " (let prettier choose).
" " default: ''
let g:prettier#config#parser = ''
"
" " cli-override|file-override|prefer-file
" " default: 'file-override'
let g:prettier#config#config_precedence = 'file-override'
"
" " always|never|preserve
" " default: 'preserve'
let g:prettier#config#prose_wrap = 'preserve'
"
" " css|strict|ignore
" " default: 'css'
let g:prettier#config#html_whitespace_sensitivity = 'css'
"
" " false|true
" " default: 'false'
let g:prettier#config#require_pragma = 'false'
"
" " Define the flavor of line endings
" " lf|crlf|cr|all
" " defaut: 'lf'
let g:prettier#config#end_of_line = get(g:, 'prettier#config#end_of_line', 'lf')
"
```
- test in on a JS file by writing an unformatted one and then saving it using vim.

If the instructions above don't work:
- Try using the npm/yarn versions [[Formatting#Using Prettier with npm or yarn]].
- Refer to their [Github](https://github.com/prettier/vim-prettier).


## Installign prettier on VSCode

If you are using VSCode you can install [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions for VSCode. After installing it go to VSCode settings (`Ctrl` + `,`) and search for `format on save` and on a given setting make sure to enable it. ![[FormatOnSave in VSCode settings example.png]]
After that search for `prettier require config` and make sure its ticked as well. This setting will tell prettier to use configs from `.prettierrc` file in the root directory, instead of default or any custom ones. ![[PrettierRequireConfig setting example.png]]