const Discord = require("discord.js")
exports.run = (client, message) => {
            

    var cookies = [
        "Seu novo apelido é `Comedor de Casadas!`",
        "Seu novo apelido é `Comedor de Chereca!`",
        "Seu novo apelido é `Fora da Lei!`",
        "Seu novo apelido é `Gado!`",
        "Seu novo apelido é `Alien!`",
        "Seu novo apelido é `Ademir!`",
        "Seu novo apelido é `Gaymer!`",
        "Seu novo apelido é `Otaku Fedido!`",
        "Seu novo apelido é `Pai de Família!`",
        "Seu novo apelido é `Reporter Puliça`",
        "Seu novo apelido é `Jogador de Fogaréu Gratuito!`",
        "Seu novo apelido é `Lolicon!`",
        "Seu novo apelido é `Lolizinha!`",
        "Seu novo apelido é `Onii-chan!`",
        "Seu novo apelido é `Einstein!`",
        "Seu novo apelido é `Hentaizeiro!`",
        "Seu novo apelido é `Sherlock Holmes!`",
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`**:cowboy: │Apelido**`)
      .setDescription(cookies[Math.floor(Math.random() * cookies.length)])
      message.channel.send(embed)    
    }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  }
  
  exports.help = {
    name: 'apelido',
    description: 'O bot te dá um apelido ;-;',
    usage: 'apelido'
  };