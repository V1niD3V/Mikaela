const Discord = require("discord.js")
exports.run = (client, message) => {
    let user = message.mentions.users.first();
    if (!user) return message.reply('você precisa mencionar alguém antes de fazer a fusão!')
            

      var cookies = [
          "https://media.giphy.com/media/oOfLwhLyRUoRW/giphy.gif",
          "https://media.giphy.com/media/UfaSEmvHQtrEI/giphy.gif",
          "https://media.giphy.com/media/HeDLTI576bBgA/giphy.gif",
          "https://media.giphy.com/media/13gnw61CH84eME/giphy.gif",
          "https://media.giphy.com/media/g96lpa8OgH1HG/giphy.gif"

     ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} se fundiu com ${message.mentions.users.first().username}!`)
      .setImage(cookies[Math.floor(Math.random() * cookies.length)])
            message.reply(embed)
    }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'fusão',
    description: 'Se funda com alguém',
    usage: 'fusão <usuário>'
  };
  