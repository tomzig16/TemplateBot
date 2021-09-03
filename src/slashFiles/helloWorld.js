const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('helloworld')
		.setDescription('returns hello world'),
	execute(interaction) {
		interaction.reply('Hello World');
	}
}