const Discord = require('discord.js'); 

exports.run = (bot,message,args) => {
    let embed = new Discord.RichEmbed()

    .setTitle("Ping do bot")
    .setColor("RANDOM")
    .setDescription(`Minha latência é de ${bot.ping}ms!`)
    .setFooter(`Comando de ping`);

    message.channel.send(embed);
}

exports.help = {
    name: 'ping'
}