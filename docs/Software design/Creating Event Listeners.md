## Event handling
Events such as 'on ready', 'on message' and 'interaction create' are to go in the eventFiles directory. Similar to the slash command handler, event files are collected and read through. 
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