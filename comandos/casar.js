const Discord = require("discord.js")
exports.run = async (client, message, args) => {
    var owner = "700120169032319007"
    let user = message.mentions.users.first();
    if (!user) return message.reply('você precisa mencionar alguém antes de casar!')
          if(user.id === owner) return message.reply("eu gosto de você, mas casar é uma coisa mais séria... :v!");
            
      var cookies = [
        "https://media1.tenor.com/images/783e9568a1c06da76a50dc2c98129f11/tenor.gif?itemid=12390162",
        "https://media1.tenor.com/images/645a7128127791fe8551ef56d7b472bf/tenor.gif?itemid=4893523",
        "https://media1.tenor.com/images/58bd69fb056bd54b80c92581f3cd9cf9/tenor.gif?itemid=10799169",
        "https://media1.tenor.com/images/f11b1e79d26818b34939b4e0a69a40e0/tenor.gif?itemid=10799170"
      ]

      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} casou com ${message.mentions.users.first().username}, uhuul! <3`)
      .setColor('#FF0000')
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
    name: 'casar',
    description: 'Casa com alguem :3',
    usage: 'casar <user>'
  };
  