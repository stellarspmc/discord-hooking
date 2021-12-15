import { command } from 'bdsx/command';
import { events } from "bdsx/event";
import { parseJSON, writeJSON } from '@bdsx/ckclib/json';
import { sendMessage } from '@bdsx/ckclib/msg';

var hook = parseJSON("../scriptData/hookcode.json");

events.serverOpen.on(() => {
        command.register("discord", 'Hook your discord with the server.').overload((p, o) => {
                var plr = o.getEntity();
                if (plr?.isPlayer()) {
                        var code = (Math.random() + 1).toString(36).substring(7);
                        hook[code] = plr.getName();
                        if (!hook.find(plr.getName())) {
                                sendMessage(plr, "§5Please send the code to the server bot. The code is: §a" + code);
                        } else {
                                sendMessage(plr, "§cThe code : §a" + code + "§c has been hooked!");
                        }
                        writeJSON("../scriptData/hookcode.json", hook);
                }
        }, {});
});