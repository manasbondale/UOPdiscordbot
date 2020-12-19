// require the discord.js module
const Discord = require('discord.js')
const config = require('./config.json')

const request = require('request')
const fs = require('fs')

//load .env
require('dotenv').config()

// create a new Discord client
const client = new Discord.Client()
client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!')
	

})
// channel with practice bot 789814421567701026
// guild with practice bot 789814421567701022
client.on('message', message => {
	
	//TESTING!
	if( process.argv[2]=='--test' && message.channel.name != 'testsite') return;

	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

// login to Discord with your app's token
client.login(process.env.DISCORD_BOT_TOKEN)