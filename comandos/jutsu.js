const Discord = require("discord.js")
exports.run = (client, message) => {
            

      var cookies = [
        "https://media.giphy.com/media/rrTXn4zEMp008/giphy.gif",
        "https://media.giphy.com/media/3fNmJ20ErpkjK/giphy.gif",
        "https://media.giphy.com/media/T87xCP8500aVG/giphy.gif",
        "https://media.giphy.com/media/Mscw2tH9hcAne/giphy.gif",
        "https://media.giphy.com/media/v50HMV6ae84mY/giphy.gif",
        "https://media.giphy.com/media/zAeYZ2PkUlX8c/giphy.gif",
        "https://media.giphy.com/media/rHA6zm9rRSauk/giphy.gif",
        "https://media.giphy.com/media/hMAhEUs3fwEbC/giphy.gif",
        "https://media.giphy.com/media/Do5GRTYRIhSFy/giphy.gif",
        "https://media.giphy.com/media/H5AMoAO4JLPEI/giphy.gif",
        "https://media1.tenor.com/images/5b15c43dd1c05bfecfa0b194fc5349f7/tenor.gif?itemid=8694391"
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} fez um jutsu! 🖖`)
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
    name: 'jutsu',
    description: 'Faça um jutsu brabo ;-;',
    usage: 'jutsu'
  };