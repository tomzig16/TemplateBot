module.exports = {
    name: "message",
    once: true,
    execute(message) {
        if(typeof message === "string")
            if(message.toString().split(" ")[0] == "help")
                botInstance.commands.get('help').execute(botInstance, message);
    },
};