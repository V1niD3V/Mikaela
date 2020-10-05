const Discord = require("discord.js")
exports.run = (client, message) => {
  var owner = "553572481441595423"
  var owner2 = "700120169032319007"
    let user = message.mentions.users.first();
    if (!user) return message.reply('você precisa mencionar alguém antes de hackear!')
    if(user.id === owner) return message.reply("você não pode hackear ele! >:(");
    if(user.id === owner2) return message.reply("você não pode me hackear, não seja louco! >:(");
            

      var cookies = [
        "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
        "https://media.giphy.com/media/1337mjZhdNJWSY/giphy.gif",
        "https://media.giphy.com/media/sLlA3D82b344w/giphy.gif",
        "https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif",
        "https://media.giphy.com/media/9CffOPMLx0Hf2/giphy.gif",
        "https://media.giphy.com/media/gi84IkFRzwube/giphy.gif",
        "https://media.giphy.com/media/l2Sq3f9guzDjp6N44/giphy.gif",
        "https://media.giphy.com/media/1337mjZhdNJWSY/giphy.gif",
        "https://media.giphy.com/media/FjGEQSybauJqM/giphy.gif"
    ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} está hackeando ${message.mentions.users.first().username}, sua vida virtual se chegou ao fim! ;-;`)
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
    name: 'hack',
    description: 'Hackar alguém >:)',
    usage: 'hack <usuário>'
  };
  