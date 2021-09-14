// import the necessary stuff
const fs = require("fs");
const { Client, Collection, Intents } = require("discord.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const stringConstants = require("./Data/StringConstants");
console.log(stringConstants);
// importing tokens from env variableß
require("dotenv").config();
const botToken = process.env.BOT_TOKEN;
const clientID = process.env.CLIENT_ID;
const guildID = process.env.GUILD_ID;

//setting up the variables
const botCommands = [];
const botInstance = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
botInstance.slashCommands = new Collection();

// read the files
const slashFiles = fs
    .readdirSync(stringConstants.paths["slashFilesPath"])
    .filter((file) => file.endsWith(".js"));
const eventFiles = fs
    .readdirSync(stringConstants.paths["eventFilesPath"])
    .filter((file) => file.endsWith(".js"));

// bot configuration
function configureBot() {
    // running event listeners
    for (const file of eventFiles) {
        const event = require(`${stringConstants.paths["eventFilesPath"]}${file}`);
        if (event.once) {
            botInstance.once(event.name, (...args) => event.execute(...args));
        } else {
            botInstance.on(event.name, (...args) => event.execute(...args));
        }
    }
    // reading slash command files
    for (const file of slashFiles) {
        const command = require(`${stringConstants.paths["slashFilesPath"]}${file}`);
        botInstance.slashCommands.set(command.data.name, command);
        botCommands.push(command.data.toJSON());
    }
    const helpCommand = require(`${stringConstants.paths.slashFilesPath}Help.js`);
    helpCommand.loadKnownCommands(botCommands);
    return true;
}

// setup slash commands
function slashCommandSetup() {
    const rest = new REST({ version: "9" }).setToken(botToken);
    (async () => {
        try {
            console.log("Started refreshing application (/) commands.");
            await rest.put(Routes.applicationGuildCommands(clientID, guildID), {
                body: botCommands,
            });
            console.log("Successfully reloaded application (/) commands.");
        } catch (error) {
            console.error(error);
        }
    })();
    return true;
}

// running the actual bot
function botRun(botToken) {
    botInstance.login(botToken);
    return true;
}

module.exports = {
    name: "botInstance",
    // running all the functions
    execute() {
        configureBot();
        slashCommandSetup();
        botRun(botToken);
    },
};
