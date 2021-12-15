"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json_1 = require("@bdsx/ckclib/json");
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
    bot.user.setActivity('mc.spmc.ml', { type: 'PLAYING' });
});
bot.on('message', (msg) => {
    if (msg.content.startsWith('/checkbalance')) {
        //var name;
        //var money = parseJSON("../scriptData/money.json");
        //var money2 = money[name];
        msg.reply('0.1');
    }
    if (msg.channel.type == "dm") {
        var hooked = (0, json_1.parseJSON)("../scriptData/hooked.json");
        var hookcode = (0, json_1.parseJSON)("../scriptData/hookcode.json");
        var code = hookcode[msg.content];
        if (msg.author.bot)
            return;
        if (code != undefined || hooked[msg.author.id] == undefined) {
            hooked[msg.author.id] = code;
            msg.channel.send("Hooked!");
            (0, json_1.writeJSON)("../scriptData/hooked.json", hooked);
            return true;
        }
        else {
            msg.channel.send("Has been hooked or invalid code!");
            return false;
        }
    }
});
bot.login('NzY1NTUyNTExODkzMTEwNzk0.X4WeVg.KY5mcxoZkFBYUV7Y12mEpQY0yVQ');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY29yZC1ib3QtYXJlYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpc2NvcmQtYm90LWFyZWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0Q0FBeUQ7QUFJekQsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3RDLE1BQU0sR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWpDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtJQUViLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUM5QyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUNoRSxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBUSxFQUFFLEVBQUU7SUFDdkIsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsRUFBRTtRQUNyQyxXQUFXO1FBQ1gsb0RBQW9EO1FBQ3BELDJCQUEyQjtRQUMzQixHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBRXhCO0lBQ0QsSUFBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7UUFDckIsSUFBSSxNQUFNLEdBQUcsSUFBQSxnQkFBUyxFQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDcEQsSUFBSSxRQUFRLEdBQUcsSUFBQSxnQkFBUyxFQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDeEQsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxJQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRztZQUFFLE9BQU87UUFDMUIsSUFBRyxJQUFJLElBQUksU0FBUyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFNBQVMsRUFBRTtZQUNwRCxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDN0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUIsSUFBQSxnQkFBUyxFQUFDLDJCQUEyQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQy9DLE9BQU8sSUFBSSxDQUFDO1NBQ25CO2FBQU07WUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ3JELE9BQU8sS0FBSyxDQUFDO1NBQ3BCO0tBQ1I7QUFFVCxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxLQUFLLENBQUMsNkRBQTZELENBQUMsQ0FBQyJ9