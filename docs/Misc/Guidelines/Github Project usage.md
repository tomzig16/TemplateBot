# Github Project usage

Project tab inside github holds "Trello" like boards (kanban boards) for every project. Projects are grouped as in proposal document stages:

| Name             | Description                                                                                                                                                                                                                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Proof of concept | This is a stage when bot works, transforms messages into templated messages (hardcoded template) and creates threads for further communication. Proof of concept is considered done once any other message that does not follow a template is deleted keeping channel clean and consistent                   |
| First Stage      | First stage is considered done once discord server owner or any administrative entity can assign a role which can handle bot’s controls (Discord Server Moderator). Discord Server Moderator can change template and assign new channels to which bot listens. That being said, bot adapts to these changes. |
| Second Stage     | Second stage considered done once previously shown Use Case diagram is done. Bot should be able to run on any server and administrators should control it without any issues. (work focuses mainly on moderation tools for Discord Server Moderator actors)                                                  |
| Final Stage      | During this stage any cosmetic and new found issues are fixed. Bot should be running by this time and development should be focused more on helping layers, such as website with information about the bot or showing controls                                                                               |
| Future           | Here are saved tasks for the future of the project (Post-final stage)                                                                                                                                                                                                                                        | 

## What to add to each project

We will be creating [[Github Issues usage|Issues]] for practically everything we code. Every issue will be moved then to propriate project. Based on that we will prioritise work - what has to be done earlier and what can wait. For features that do not fit any of the descriptions above, they will be moved to the "Future" project.  Otherwise, every issue should be assigned to the project based on the description.

Issues are moved with consideration of the whole team. I will be creating chat threads every week to discuss and prioritize where to put the issue ticket.

## Moving cards

Once you are working on a card - move it from ToDo to Doing and then once complete or blocked move it to the right section. This way we can track the progress, especially if one task is waiting for another to be completed.