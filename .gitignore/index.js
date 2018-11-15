const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("recevoir le code de Wazy42");
    console.log("Le bot a bien été connécté");
});

bot.login("NDg0ODQ3NzE5NTEzNDU2NjQ4.Ds-DrA.2EXnPnvlGOZPuTMMR7YVdhHnkBE");
