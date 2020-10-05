const Discord = require("discord.js")
exports.run = (client, message) => {
    var owner = "553572481441595423"
    var owner2 = "700120169032319007"
    let user = message.mentions.users.first();
    if (!user) return message.reply('você precisa mencionar alguém antes de matar!')
          if(user.id === owner) return message.reply("você não pode matá-lo, tá louco?!");
          if(user.id === owner2) return message.reply("você não pode me matar, o que eu te fiz?! :c");
            

      var cookies = [
        "https://media.giphy.com/media/BTV1vUcOWht2U/giphy.gif",
        "https://media.giphy.com/media/naUZK0qL0ENAA/giphy.gif",
        "https://media.giphy.com/media/MtJwM5N4fuMgw/giphy.gif",
        "https://media.tenor.com/images/5b1080f6141ce14942716cda3379afa7/tenor.gif",
        "https://media.giphy.com/media/BKqeg5cLztK9O/giphy.gif",
        "https://media.tenor.com/images/da1aa865fd2f9ee2ddde9c40378a5e8f/tenor.gif",
        "https://media.giphy.com/media/BCWvXVTymz9U4/giphy.gif",
        "https://media.giphy.com/media/Iosc95v7CmeA0/giphy.gif",
        "https://media.tenor.com/images/6f63c5d54b81128055f18777b6f8c0ac/tenor.gif",
        "https://media.tenor.com/images/84552f12050929d0fd8168124de964a1/tenor.gif",
        "https://media.tenor.com/images/dc6e7f7f9ecb8276569a80acc1e7c9f7/tenor.gif",
        "https://media1.tenor.com/images/d7faa155695550b72a5b3602cad67f17/tenor.gif?itemid=7294134"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} matou ${message.mentions.users.first().username}, CHAME A POLÍCIA! 🚓`)
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
    name: 'matar',
    description: 'Mate alguem ;-;',
    usage: 'matar <usuário>'
  };