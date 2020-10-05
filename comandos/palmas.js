const Discord = require("discord.js")
exports.run = (client, message) => {
            

      var cookies = [
        "https://media.giphy.com/media/B9burJ6eRFNJe/giphy.gif",
        "https://media.giphy.com/media/klQrJUcrfMsTK/giphy.gif",
        "https://media.giphy.com/media/vQB6Rf1M9hsjK/giphy.gif",
        "https://media.giphy.com/media/KsPC9t0ToZhqU/giphy.gif",
        "https://media.giphy.com/media/pWsdECIr4w9Jm/giphy.gif",
        "https://media.giphy.com/media/TnPAmP7OLTaeY/giphy.gif",
        "https://media.giphy.com/media/URmJvPe1VXIUE/giphy.gif",
        "https://media.giphy.com/media/dZo51w9gv37QQ/giphy.gif",
        "https://media.giphy.com/media/Gn5E6WOBnEAGQ/giphy.gif",
        "https://media1.tenor.com/images/5c63dcee25df0ffcf9030622db5dff12/tenor.gif?itemid=16725293"

      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} está batendo palmas! 👏`)
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
    name: 'palmas',
    description: 'Palmas ;-;',
    usage: 'palmas'
  };
  