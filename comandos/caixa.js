const Discord = require("discord.js")
exports.run = (client, message) => {
            
    var cookies = [
      `${message.author.username} abriu a caixa e pegou o coronavírus.`,
      `${message.author.username} abriu a caixa e veio o Mitsuaki puto.`,
      `${message.author.username} abriu a caixa e morreu de ataque cardíaco.`,
      `${message.author.username} abriu a caixa e caiu uma bola de fogo em cima dele(a).`,
      `${message.author.username} abriu a caixa e tomou um choque.`,
      `${message.author.username} abriu a caixa e foi preso por ser lolicon.`,
      `${message.author.username} abriu a caixa e ganhou uma imunidade ao coronavírus.`,
      `${message.author.username} abriu a caixa e ganhou um cartão VIP da festa do Hawks.`,
      `${message.author.username} abriu a caixa e ganhou um coração do Mitsuaki em seu comentário.`,
      `${message.author.username} abriu a caixa e ganhou um sorteio de um kit gamer.`,
      `${message.author.username} abriu a caixa e virou parceiro do Discord.`,
      `${message.author.username} abriu a caixa e ganhou um Nitro grátis.`,
      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`**📦 │ Caixa**`)
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
    name: 'caixa',
    description: 'Abre uma caixa que pode vir sorte ou azar',
    usage: 'caixa'
  };