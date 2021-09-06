# Available commands
#relevant #tag
<hr>

This document has a list of commands and information on what command does.
Prefix should be set per server, but for this clarity (if needed) exclemation mark (`!`) as a command prefix is used.

<hr>

## Available to all user commands

Command name can also have optional aliases for quicker access. Aliases are written next to the command name in parentheses.

| Command name | Arguments         | Description                                                                            |
|:------------ |:----------------- |:-------------------------------------------------------------------------------------- |
| help (info)  | any other command | Prints a help message. Help for moderators commands can be executed only by moderators |

## Moderator's commands

### Moderation tools

Every command is described in more detail inside [[Moderator's tools]] document.

| Command name                             | Arguments               | Description                                                                   |
| ---------------------------------------- | ----------------------- | ----------------------------------------------------------------------------- |
| set_templated_channel (set_templchannel) | None or channel name/id | Set which channel is being forced to use templates. If no arguments are given |
| setup                                    | None                    | Opens a setup wizard                                                          | 

### Templates

Every command in more detail is described inside [[Templates]] document.

| Command name                              | Arguments                       | Description                                                                               |
|:----------------------------------------- |:------------------------------- |:----------------------------------------------------------------------------------------- |
| create_template (ctempl)                  | Optional argument with template | Creates new template with given argument. If no argument - wizard is given to the person. |
| modify_template (mtempl)                  | None                            | Modify existing template.                                                                 |
| remove_template (delete_template, dtempl) | None                            | Delete existing template.                                                                 |



%% todos %%
%% 
- [ ] Check if any commands are missing
- [ ] Check if any command name or argument list has anything missing
%% 