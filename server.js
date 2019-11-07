const Discord = require('discord.js')
const TOKEN = "NjAyODUyMDUyMDM2NzQ3Mjg0.XcRFWQ.gWPD3NQFOykiC09TqE0AuZ_zc0Q";
const PREFIX = "j!";
var bot = new Discord.Client();
const botStats = {};


bot.on("ready", function() {

  let statuses = ['Meliodas V1.0', 'welcoming others uwu']

   setInterval(function() {
    
    let status = statuses[Math.floor(Math.random()*statuses.length)]
    
    bot.user.setPresence({ game: {name: status }, status: 'online' });
  
  }, 5000)
  
})

bot.on("ready", function() {
    console.log("Ready!")
    
  
});

bot.on('guildMemberAdd', member => {
    let embed = new Discord.RichEmbed()
        .addField("Welcome! To our server 💖 ", member.user.tag)
        .addField("Has joined, hope you enjoy your time here!", ":)")
        .setImage("https://media.giphy.com/media/XAZz63Buo8tbjxGRxK/giphy.gif")
        .setFooter("Made by @𝐡𝐞𝐚𝐯𝐞𝐧𝐥𝐞𝐬𝐬#5598 with Love! ")
        .setColor('RANDOM');
    let channel = member.guild.channels.find(channel => channel.id === '594428732283027458');
    return channel.send({embed: embed});

});

          
bot.login(process.env.TOKEN);
