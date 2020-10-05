const Discord = require("discord.js")
exports.run = (client, message) => {
            

      var cookies = [
        "https://media.giphy.com/media/Kqffsuchuki2s/giphy.gif",
        "https://media.giphy.com/media/7VxvaukLmaCWI/giphy.gif",
        "https://media.giphy.com/media/10VFEekFr6gGaI/giphy.gif",
        "https://media.giphy.com/media/wcY8khZDRnFss/giphy.gif",
        "https://media.giphy.com/media/109epNnxnLTMha/giphy.gif",
        "https://media.giphy.com/media/l4GomTccooD6M/giphy.gif",
        "https://media.giphy.com/media/7pOHOPlJFKmPe/giphy.gif",
        "https://media.giphy.com/media/UujyDQiJ7bwbqqOaAd/giphy.gif"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} virou um Super Saiyajin, uau!`)
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
    name: 'ssj',
    description: 'Vire um Super Saiyajin!',
    usage: 'ssj'
  };