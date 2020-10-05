const Discord = require("discord.js")
exports.run = (client, message) => {
            

      var cookies = [
        "https://media1.tenor.com/images/a5200ff8939402e4e2bbda3a8107d2b1/tenor.gif?itemid=7559840",
        "https://media1.tenor.com/images/b61653824e02a6f4f77b9fcbccc91722/tenor.gif?itemid=11415028",
        "https://media1.tenor.com/images/c2d1aa048080a4b67cd1f4c172343f5f/tenor.gif?itemid=17100406",
        "https://media1.tenor.com/images/2f9ee56d1d32074b8b6e2dbcb512e85a/tenor.gif?itemid=9488133",
        "https://media1.tenor.com/images/2b3c79b9ea21509b14121c73f0ebb581/tenor.gif?itemid=14987251",
        "https://media1.tenor.com/images/98caa6a5d6e5aec2c18006b447c031e7/tenor.gif?itemid=13780914",
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} fez uma explosão! 💥`)
      .setColor('#ff5117')
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
    name: 'explosion',
    description: 'Faz uma explosão ;-;',
    usage: 'explosion'
  };
  