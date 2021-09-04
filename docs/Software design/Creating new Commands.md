# Creating New Commands
## Slash Commands
### Requirements:
Install [@discordjs/rest](https://github.com/discordjs/discord.js-modules/tree/main/packages/rest) and [discord-api-types](https://github.com/discordjs/discord-api-types/) using npm or yarn `npm install @discordjs/rest discord-api-types`
### Logic
Slash commands can either be registered to a certain guild or to an application. For testing, please allocate a certain guild for testing the bot. By default, the command parser in the index.js registers commands to the guild through this piece of code:
```js
const rest = new REST({ version: '9' }).setToken(botToken);
(async () => {
try {
	console.log('Started refreshing application (/) commands.');
	await rest.put(
		Routes.applicationGuildCommands(clientID, guildID),
		{ body: botCommands },
		);
	console.log('Successfully reloaded application (/) commands.');
	}
catch (error) {
	console.error(error);
}

})();
```
`clientID` is the id of the application (not the token of the bot) and guildID is the id of the guild used to test the bot. The id can be obtained by right clicking on the server icon and clicking 'Copy ID'.
For global command, a similar script can be used except `Routes.applicationGuildCommands` will be replaced by `Routes.applicationCommands` and only the application id will be necessary.
### Creating a command
One file should host a single command and this file should go in the 'slashFiles' directory. The name of the file should be in PascalCase. The file should use the SlashCommandBuilder function and should follow a format like:
```js
const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello') // the name of the commmand should be in all lowercase letters
		.setDescription('this returns hello world') // describe what the command will do.
		// add extra 'options'. description will follow
	execute(interaction) {
	// this is how you will respond to the interaction. This is necessary
	interaction.reply('hello world'); // this replies to the slash command
	}
}
```
You can learn more about options [here](https://discordjs.guide/interactions/registering-slash-commands.html#options) and [here](https://discordjs.guide/interactions/registering-slash-commands.html#option-types).
## Event handling
Events such as 'on Ready', 'on message' and 'interaction create' are to go in the eventFiles directory. Similar to the slash command handler, event files are collected and read through. 
```js
for (const file of eventFiles) {

const event = require(`./eventFiles/${file}`);

if (event.once) {
	botInstance.once(event.name, (...args) => event.execute(...args));
}
else {
	botInstance.on(event.name, (...args) => event.execute(...args));
	}
}
```
There are three main parts to the event file: the name of the event, whether or not it is to be run once and the code to be executed. Therefore the file must look like this:
```js
module.exports = {
	name: 'name of listener',
	once: true/false,
	execute(client) {
		// code to be executed
	}
}
```