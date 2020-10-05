const Discord = require("discord.js")
exports.run = (client, message) => {
    var owner = "553572481441595423"
    var owner2 = "700120169032319007"
    let user = message.mentions.users.first();
    if (!user) return message.reply('você precisa mencionar alguém antes de fazer o genjutsu!')
          if(user.id === owner) return message.reply("um genjutsu desse nível não funciona nele!");
          if(user.id === owner2) return message.reply("um genjutsu desse nível não funciona em mim!");
            

      var cookies = [
        "https://media.giphy.com/media/mzdeCXqTmG1IA/giphy.gif",
        "https://giphy.com/gifs/naruto-manga-X4s4RRkT5F5pS",
        "https://media.giphy.com/media/mzdeCXqTmG1IA/giphy.gif",
        "https://media.giphy.com/media/ZL2iRxhnDwtSE/giphy.gif",
        "https://media.giphy.com/media/RDnBOLf1rwsIo/giphy.gif",
        "https://media.giphy.com/media/7JqCZCuwEYdry/giphy.gif",
        "https://media.giphy.com/media/KyHopEeCqpOiNJqK9h/giphy.gif",
        "https://media.giphy.com/media/glk3FpROqgqcg/giphy.gif",
        "https://media1.tenor.com/images/07e4b812ff4ec47eba04e0d768abc2e2/tenor.gif?itemid=10292941"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} usou um genjutsu em ${message.mentions.users.first().username}!`)
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
    name: 'genjutsu',
    description: 'Faça um genjutsu em alguem ;-;',
    usage: 'genjutsu <usuário>'
  };