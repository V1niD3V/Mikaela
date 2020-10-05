const Discord = require("discord.js")
exports.run = (client, message) => {
            

      var cookies = [
        "https://media.tenor.com/images/c4297bc2cf2afd60e2defdaa6bf18dcc/tenor.gif",
        "https://media.tenor.com/images/ac76b9ffb3548c1d4cac11f0f5c15218/tenor.gif",
        "https://media.tenor.com/images/694351722c0af3b937dccd87d4a31a55/tenor.gif"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} sorriu!`)
      .setImage(cookies[Math.floor(Math.random() * cookies.length)])
            message.reply(embed)
    }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  }
  
  exports.help = {
    name: 'smile',
    description: 'Sorria!',
    usage: 'smile'
  };
  