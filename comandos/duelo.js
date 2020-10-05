const Discord = require("discord.js")
exports.run = (client, message) => {
    let user = message.mentions.users.first();
    if (!user) return message.reply('você precisa mencionar alguém antes de duelar!')
            

      var cookies = [
        "https://media1.tenor.com/images/50546f6596b0b9bfa399264f18cf0ffd/tenor.gif?itemid=13401917",
        "https://media1.tenor.com/images/8e549786588ec674d0f235fca19d7bbf/tenor.gif?itemid=11762680",
        "https://media1.tenor.com/images/9fb139dc18b3424ef3f46c9a6184c0aa/tenor.gif?itemid=12099769",
        "https://media1.tenor.com/images/3244ce00332e7f32587649d5f8a2fd25/tenor.gif?itemid=5742431"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} desafiou ${message.mentions.users.first().username}, é hora do duelo!`)
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
    name: 'duelo',
    description: 'Duele com alguem',
    usage: 'duelo <user>'
  };