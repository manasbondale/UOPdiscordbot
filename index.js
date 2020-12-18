// require the discord.js module
const Discord = require('discord.js')
const config = require('./config.json')
//load .env
require('dotenv').config()

// create a new Discord client
const client = new Discord.Client()

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!')
})

client.on('message', message => {
	if(!message.content.startsWith(config.prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong.');
	} else if (command === 'beep') {
		message.channel.send('Boop.');
	}
	
	console.log(message.content);
});
// login to Discord with your app's token
client.login(process.env.DISCORD_BOT_TOKEN)