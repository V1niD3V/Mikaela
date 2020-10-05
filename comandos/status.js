const Discord = require("discord.js")
exports.run = (client, message) => {

      let embed = new Discord.RichEmbed()
      .setTitle(`🚧 │Status`)
      .addField(`Status do bot`, `Bot finalizado!`)
      .setFooter(`~Hawks`)
      .setColor("RANDOM")
            message.reply(embed)
    }

  exports.help = {
    name: 'status',
    description: 'status do bot',
    usage: 'status'
  };