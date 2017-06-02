const commando = require('discord.js-commando');
const bot = new commando.Client();
 
bot.registry.registerGroup('random', 'Random')
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('MzE5OTIwMjMyNDg5ODExOTcy.DBH8cg.Ye4QX9BaHE86vbwaUsAYtlPp4H8');