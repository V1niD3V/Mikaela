const Discord = require("discord.js")
exports.run = (client, message) => {
            

      var cookies = [
        "https://media.giphy.com/media/cEsoz6GAoTubm/giphy.gif",
        "https://media.giphy.com/media/3QyPiMPSTfRG8/giphy.gif",
        "https://media.giphy.com/media/6nkbMjyxmyVAQ/giphy.gif",
        "https://media.giphy.com/media/LRhVF316Nox4Q/giphy.gif",
        "https://media.giphy.com/media/a0N6ZmPmzGIPm/giphy.gif",
        "https://media.giphy.com/media/SOLtybDbSzA5i/giphy.gif",
        "https://media.giphy.com/media/2sjYzNumw63U3xryCA/giphy.gif",
        "https://media.giphy.com/media/b5Hcaz7EPz26I/giphy.gif",
        "https://media.giphy.com/media/9jvSVk99Conkc/giphy.gif",
        "https://media1.tenor.com/images/d71c05ed0ca11fc6a30584ccdc4715a6/tenor.gif?itemid=14850927"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} está cozinhando, cuidado para não queimar!`)
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
    name: 'cozinhar',
    description: 'Cozinhe ;-;',
    usage: 'cozinhar'
  };