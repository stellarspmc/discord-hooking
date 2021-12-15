"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/command");
const event_1 = require("bdsx/event");
const json_1 = require("@bdsx/ckclib/json");
const msg_1 = require("@bdsx/ckclib/msg");
var hook = (0, json_1.parseJSON)("../scriptData/hookcode.json");
event_1.events.serverOpen.on(() => {
    command_1.command.register("discord", 'Hook your discord with the server.').overload((p, o) => {
        var plr = o.getEntity();
        if (plr === null || plr === void 0 ? void 0 : plr.isPlayer()) {
            var code = (Math.random() + 1).toString(36).substring(7);
            hook[code] = plr.getName();
            (0, msg_1.sendMessage)(plr, "Please send the code to the server bot. The code is: §a" + code);
            (0, json_1.writeJSON)("../scriptData/hookcode.json", hook);
        }
    }, {});
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY21kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMENBQXVDO0FBQ3ZDLHNDQUFvQztBQUNwQyw0Q0FBeUQ7QUFDekQsMENBQStDO0FBRS9DLElBQUksSUFBSSxHQUFHLElBQUEsZ0JBQVMsRUFBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBRXBELGNBQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRTtJQUNsQixpQkFBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsb0NBQW9DLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDNUUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3hCLElBQUksR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLFFBQVEsRUFBRSxFQUFFO1lBQ2IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzNCLElBQUEsaUJBQVcsRUFBQyxHQUFHLEVBQUUseURBQXlELEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDbkYsSUFBQSxnQkFBUyxFQUFDLDZCQUE2QixFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3REO0lBQ1QsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2YsQ0FBQyxDQUFDLENBQUMifQ==