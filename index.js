const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log("On play.aftershock.online");
  bot.user.setActivity("Release tomorrow at 12PM GMT", {type: "STREAMING"});
});

bot.on("message", async message =>{
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === ";ip"){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Server IP")
    .setColor("#10e82d")
    .addField("IP", ':sparkles: play.aftershock.online :sparkles:', true);

    return message.channel.send(botembed);
  }

  if (cmd === ";website"){

    let bicon = bot.user.displayAvatarURL;
    let botembed1 = new Discord.RichEmbed()
    .setDescription("Server Website")
    .setColor("#10e82d")
    .addField("Link", 'https://aftershockofficial.enjin.com/', true);

    return message.channel.send(botembed1);
  }

  if (cmd === ";help"){

    let bicon = bot.user.displayAvatarURL;
    let help = new Discord.RichEmbed()
    .setDescription("**List of all commands**")
    .setColor("#10e82d")
    .addField(";ip", 'Show the IP to the server', true)
    .addField(";website", 'Link to website', true);

    return message.channel.send(help);
}
});

bot.login('NDUwNzA5OTA0OTc4ODcwMjgy.DfPvHg.a1WUiDDbwjMjU2F-RYMRKGq4k8I');