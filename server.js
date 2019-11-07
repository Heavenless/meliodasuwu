const Discord = require("discord.js");
const TOKEN = "NjAyODUyMDUyMDM2NzQ3Mjg0.XbCAHA.j4BTpR5_x0NZoiplV2LWbi0asWU";
const PREFIX = "j!";
var bot = new Discord.Client();
const botStats = {};


bot.on("ready", function() {

  let statuses = ['Meliodas V1.0 | Welcomer Bot!', 'welcoming others uwu']

   setInterval(function() {
    
    let status = statuses[Math.floor(Math.random()*statuses.length)]
    
    bot.user.setPresence({ game: {name: status }, status: 'idle' });
  
  }, 5000)
  
})

bot.on("ready", function() {
    console.log("Ready!")
    
  
});

bot.on('guildMemberAdd', member => {
    let embed = new Discord.RichEmbed()
        .addField("Welcome! To our server 💖 ", member.user.tag)
        .addField("Has joined, hope u enjoy ur time here!", ":)")
        .setImage("https://giffiles.alphacoders.com/208/208593.gif")
        .setFooter("Made by @𝐬𝐩𝐨𝐨𝐤𝐲 𝐡𝐞𝐚𝐯𝐞𝐧𝐥𝐞𝐬𝐬 🎃#5598 with Love! ")
        .setColor('#FFCCFF');
    let channel = member.guild.channels.find(channel => channel.id === '594428732283027458');
    return channel.send({embed: embed});

});

          
bot.login(proccess.env.BOT_TOKEN);
