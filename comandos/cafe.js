const Discord = require("discord.js")
exports.run = (client, message) => {
            

      var cookies = [
        "https://media.giphy.com/media/D1UwvsmXg9V5e/giphy.gif",
        "https://media.giphy.com/media/HsY1Z49ljD1uw/giphy.gif",
        "https://media.giphy.com/media/A2ZFpWsdpHv7W/giphy.gif",
        "https://media.giphy.com/media/Gue1HInww5M6Q/giphy.gif",
        "https://media.giphy.com/media/LHrCZhpFnlyNO/giphy.gif",
        "https://media.giphy.com/media/qQmZe8JtXyjqE/giphy.gif",
        "https://media.giphy.com/media/k3WQKGoeQQOqc/giphy.gif",
        "https://media.giphy.com/media/aAAJet9vKeIZW/giphy.gif",
        "https://media.giphy.com/media/LYohPRSZ41yVi/giphy.gif"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} está tomando café! ☕`)
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
    name: 'cafe',
    description: 'Toma um cafezinho ;-;',
    usage: 'cafe'
  };
  