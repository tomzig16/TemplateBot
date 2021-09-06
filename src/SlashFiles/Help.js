const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

const command_names = {
    "ctempl":{bname: "Create template", sname: "create_template", usage: "/create_template template_name:your_template_name","description":"Creates new template with given argument. If no argument - wizard is given to the person."},
    "mtempl":{bname: "Modify existing template", sname: "modify_template", usage: "/modify_template","description":"Modify existing template"},
    "dtempl":{bname: "Delete existing template", sname: "delete_template", usage: "/delete_template", "description":"Delete existing template"},
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .addStringOption((option) =>
            option
                .setName("command")
                .setDescription("Show details about how to use a command")
                .addChoice("create_template", "ctempl")
                .addChoice("modify_template", "mtempl")
                .addChoice("delete_template", "dtempl")
        )

        .setDescription("Feeling lost❓️"),
    async execute(interaction) {
        const commandName = interaction.options.getString("command");
        if (commandName == null) {
            const allCommands = new MessageEmbed()
                .setTitle("Commands")
                .setURL("https://discord.js.org/")
                .setDescription("All list of commands you can use")
                .setThumbnail("https://cdn.discordapp.com/icons/783759890899271763/a_96c6817e53c2283cbe96c34cba04093b.webp?size=256")
                .addFields(
                    { name: `${command_names["ctempl"]["bname"]} (${command_names["ctempl"]["sname"]})`, value: command_names["ctempl"]["description"] },

                    { name: `${command_names["mtempl"]["bname"]} (${command_names["ctempl"]["sname"]})`, value: command_names["ctempl"]["description"] },
                    { name: `${command_names["dtempl"]["bname"]} (${command_names["ctempl"]["sname"]})`, value: command_names["ctempl"]["description"] },
                    { name: "/Help", value: "Usage: /help command:command_name" },
                )
                .setTimestamp()
                .setFooter("KalleTech", "https://cdn.discordapp.com/icons/783759890899271763/a_96c6817e53c2283cbe96c34cba04093b.webp?size=256");
            interaction.reply({ embeds: [allCommands] });
        } else {
            Object.entries(command_names).forEach(([key, value]) => {
                if (commandName == key) {
                    const commandInfo = new MessageEmbed()
                        .setTitle(`${command_names[key]["bname"]}`)
                        .setDescription(`Info about ${command_names[key]["sname"]}`)
                        .addFields(
                            {
                                name: "Usage",
                                value: `${command_names[key]["usage"]}`,
                            },
                            { name: "Description", value: `${command_names[key]["description"]}` }, 
                        )
                        .setTimestamp()
                        .setFooter(
                            "KalleTech",
                            "https://i.imgur.com/AfFp7pu.png"
                        );
                        interaction.reply({embeds: [commandInfo]})
                }
            });
        }
    },
};
