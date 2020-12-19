module.exports = {
	name: 'help',
	description: 'Help text',
	execute(message, args) {
		message.channel.send('Use !uop leetcode to look up today\'s set of practice problems.\nUse !uop ping to ping bot.');
	},
};