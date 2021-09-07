// import the necessary stuff
const fs = require("fs");
const { Client, Collection, Intents } = require("discord.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

let activeEnvironment = "";
// These variables are set based on active environment inside 
// configureEnvironment function
let botToken = "";
let clientID = "";
let guildID = "";

let isBotConfigured = false;


//setting up the variables
const botCommands = [];
const botInstance = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
botInstance.slashCommands = new Collection();

// read the files
const commandFiles = fs
    .readdirSync("./Commands")
    .filter((file) => file.endsWith(".js"));
const eventFiles = fs
    .readdirSync("./EventFiles")
    .filter((file) => file.endsWith(".js"));


function configureBot() {
    configureEnvironment();
    setupEventListeners();
    setupCommands();
}

function configureEnvironment() {
    if(activeEnvironment === "TEST") {
        botToken = process.env.BOT_TEST_TOKEN;
    }
    else if (activeEnvironment === "DEV") {
        botToken = process.env.BOT_DEV_TOKEN;
    }
    else if (activeEnvironment === "PROD") {
        botToken = process.env.BOT_PROD_TOKEN;
    }
    else {
        throw "Unknown environment is being set. Aborting...";
    }
    // TODO: in the future once we run bot in prod, these will most likely also depend on environment
    clientID = process.env.CLIENT_ID;
    guildID = process.env.GUILD_ID;
    isBotConfigured = true;
}

function setupEventListeners() {
    let nOfEvents = 0;
    for (const file of eventFiles) {
        const event = require(`./EventFiles/${file}`);
        if (event.once) {
            botInstance.once(event.name, (...args) => event.execute(...args));
        } else {
            botInstance.on(event.name, (...args) => event.execute(...args));
        }
        nOfEvents++;
    }
    console.log(`Events are read. In total registered ${nOfEvents} events.`);
}

function setupCommands() {
    for (const file of commandFiles) {
        const command = require(`./Commands/${file}`);
        botInstance.slashCommands.set(command.data.name, command);
        botCommands.push(command.data.toJSON());
    }

    const rest = new REST({ version: "9" }).setToken(botToken);
    console.log("Started refreshing application commands.");
    (async () => {
        try {
            await rest.put(Routes.applicationGuildCommands(clientID, guildID), {
                body: botCommands,
            });
        } catch (error) {
            console.error(error);
        }
    })();
    console.log("Successfully reloaded application commands.");
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
    execute(environment) {
        if(isBotConfigured === false) {
            console.log("Bot is not configured yet... running configuration.");
            this.configureBot(environment);
        }
        botRun(botToken);
    },
    configureBot(environment) {
        activeEnvironment = environment;
        configureBot();
    },
    getKnownCommands() {
        return botCommands;
    },
};
