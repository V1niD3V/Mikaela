const Discord = require("discord.js")
exports.run = (client, message) => {
            

      var cookies = [
        "https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif",
        "https://media.giphy.com/media/9n4muqn344LMA/giphy.gif",
        "https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif",
        "https://media.giphy.com/media/4pk6ba2LUEMi4/giphy.gif",
        "https://media.giphy.com/media/4smXTnnqlS2ys/giphy.gif",
        "https://media.giphy.com/media/shVJpcnY5MZVK/giphy.gif"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} está chorando, não fique triste! :c`)
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
    name: 'chorar',
    description: 'Chora ;-;',
    usage: 'chorar'
  };
  