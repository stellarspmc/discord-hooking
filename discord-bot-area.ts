import { parseJSON, writeJSON } from '@bdsx/ckclib/json';
import { events } from 'bdsx/event';
import { VoiceChannel } from 'discord.js';
import { isJSDocAuthorTag } from 'typescript';
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {

        console.info(`Logged in as ${bot.user.tag}!`);
        bot.user.setActivity('mc.spmc.ml', { type: 'PLAYING' });
});

bot.on('message', (msg: any) => {
        if (msg.content.startsWith('/checkbalance')) {
                //var name;
                //var money = parseJSON("../scriptData/money.json");
                //var money2 = money[name];
                msg.reply('0.1');

        }
        if(msg.channel.type == "dm") {
                var hooked = parseJSON("../scriptData/hooked.json");
                var hookcode = parseJSON("../scriptData/hookcode.json");
                var code = hookcode[msg.content];
                if(msg.author.bot) return;
                if(code != undefined || hooked[msg.author.id] == undefined) {
                        hooked[msg.author.id] = code;
                        msg.channel.send("Hooked!");
                        writeJSON("../scriptData/hooked.json", hooked);
                        return true;
                } else {
                        msg.channel.send("Has been hooked or invalid code!");
                        return false;
                }
        }

});

bot.login('NzY1NTUyNTExODkzMTEwNzk0.X4WeVg.KY5mcxoZkFBYUV7Y12mEpQY0yVQ');