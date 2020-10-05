const Discord = require("discord.js")
exports.run = (client, message) => {
            

      var cookies = [
        "https://media.giphy.com/media/pa1WaYStUKyLC/giphy.gif",
        "https://media.giphy.com/media/VvvVOKJIogh44/giphy.gif",
        "https://media.giphy.com/media/TORQpT78yQR5S/giphy.gif",
        "https://media.giphy.com/media/T7Qx28nEdo9NK/giphy.gif",
        "https://media.giphy.com/media/Yb0sZcOCQdG36/giphy.gif",
        "https://media.giphy.com/media/3o6nUS2CSvbvK1YwV2/giphy.gif",
        "https://media.giphy.com/media/mnBsYB19OQCdy/giphy.gif",
        "https://media.giphy.com/media/v60KQg3MXLwTS/giphy.gif",
        "https://media.giphy.com/media/4jo8C9xplrLG0/giphy.gif",
        "https://media.giphy.com/media/5OKF1IN3E5R84/giphy.gif",
        "https://media1.tenor.com/images/252c9341bc8ffa6a872b1b1fc9278cf3/tenor.gif?itemid=17385226",
        "https://media.tenor.com/images/5d4ab0d4fb44a86934adfb4f7290de39/tenor.gif"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} está rindo, haha! :D`)
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
    name: 'rir',
    description: 'Ria!',
    usage: 'rir'
  };
  