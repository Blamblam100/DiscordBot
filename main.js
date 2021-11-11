const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.login('OTA4MjIwODk3NTg2OTcwNjU0.YYyknw.fXtDxoK3RyHVEPLwQZZwjIE6-f4');