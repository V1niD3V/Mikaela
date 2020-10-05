const Discord = require("discord.js")
exports.run = (client, message) => {
            

      var cookies = [
        "https://media.giphy.com/media/KyHopEeCqpOiNJqK9h/giphy.gif",
        "https://media.giphy.com/media/ZL2iRxhnDwtSE/giphy.gif",
        "https://media.giphy.com/media/7nnxnehOcvnoc/giphy.gif",
        "https://media.giphy.com/media/3fNmJ20ErpkjK/giphy.gif",
        "https://media.giphy.com/media/uTQ97ll53U6hW/giphy.gif",
        "https://media.giphy.com/media/AVWmXdsAXr84g/giphy.gif",
        "https://media.giphy.com/media/3jtqoRvLnA8Ok/giphy.gif",
        "https://media.giphy.com/media/xrhN4azHsX0be/giphy.gif",
        "https://media.giphy.com/media/2mBFWqH55R8By/giphy.gif",
        "https://media.giphy.com/media/8Lc5xmvzRhlLy/giphy.gif"
    ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} despertou um doujutsu! 👁️`)
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
    name: 'doujutsu',
    description: 'Faça um doujutsu brabo ;-;',
    usage: 'doujutsu'
  };