const Discord = require("discord.js")
exports.run = (client, message) => {
    let user = message.mentions.users.first();
    if (!user) return message.reply('você precisa mencionar alguém antes de lutar!')
            

      var cookies = [
        "https://media.giphy.com/media/eR7OEDQDyA7Cg/giphy.gif",
        "https://media.giphy.com/media/wiaoWlW17fqIo/giphy.gif",
        "https://media.giphy.com/media/XNoeJAKvw5Vja/giphy.gif",
        "https://media.giphy.com/media/2Pk9newN8fkbu/giphy.gif",
        "https://media.giphy.com/media/iqkCNZIzSSXSM/giphy.gif",
        "https://media.giphy.com/media/IveNG2ncVNmmc/giphy.gif",
        "https://media.giphy.com/media/pGlDpwgWTLgBi/giphy.gif",
        "https://media.giphy.com/media/v82iWKO4xGjAY/giphy.gif",
        "https://media.giphy.com/media/63JMmVwXfCN1u/giphy.gif",
        "https://media.giphy.com/media/nLJAs215zpyqA/giphy.gif",
        "https://media.giphy.com/media/c4p59oQhRFE1W/giphy.gif",
        "https://media1.tenor.com/images/aae1a86d1d5183c4f2a9e7caefe4fa38/tenor.gif?itemid=15199274",
        "https://media1.tenor.com/images/513172eb0feff512567456354c6d0f86/tenor.gif?itemid=17177033",
        "https://media1.tenor.com/images/349e10256a95538e79c158329d89fe39/tenor.gif?itemid=14677223",
        "https://media1.tenor.com/images/b85c5008655ae19364822111d0bd8f34/tenor.gif?itemid=15289660"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} está lutando com ${message.mentions.users.first().username}, não levem essa luta a sério!`)
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
    name: 'lutar',
    description: 'Lute com alguem ;-;',
    usage: 'lutar <usuário>'
  };
  