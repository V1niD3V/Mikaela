const Discord = require("discord.js")
exports.run = (client, message) => {
    let user = message.mentions.users.first();
    if (!user) return message.reply('você precisa mencionar alguém antes de dançar!')
            

      var cookies = [
        "https://media.giphy.com/media/6k6iDdi5NN8ZO/giphy.gif",
        "https://media.giphy.com/media/4hd57A5UcVqGQ/giphy.gif",
        "https://media.giphy.com/media/mZgVD5MUKHTO0/giphy.gif",
        "https://media.giphy.com/media/3oKIP7J7Uee7tgTc9W/giphy.gif",
        "https://media.giphy.com/media/bF8vjd7DA0htm/giphy.gif",
        "https://media.giphy.com/media/s1CduUblSZxN6/giphy.gif",
        "https://media1.tenor.com/images/7582644d6479b221721cfcf598f1ddac/tenor.gif?itemid=9167366",
        "https://media1.tenor.com/images/7d33bb938f2f995db6d7e3adf28e4f8b/tenor.gif?itemid=15474525",
        "https://media1.tenor.com/images/9690ea2ef066ce46fcfd8784f83905b9/tenor.gif?itemid=15439991",
        "https://media1.tenor.com/images/f28dc9e24636cfdb8b9ce2817cf32066/tenor.gif?itemid=14554984",
        "https://media1.tenor.com/images/c516ca70e76578431857f15f880a93f2/tenor.gif?itemid=9214433",
        "https://media.tenor.com/images/303807877c69004275b18f558011d547/tenor.gif"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} dançou com ${message.mentions.users.first().username}, tuts, tuts, tuts!`)
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
    name: 'dançar',
    description: 'Dance com alguem.',
    usage: 'dançar <user>'
  };