const Discord = require("discord.js")
exports.run = (client, message) => {

      let embed = new Discord.RichEmbed()
      .setTitle(`🎉 │ Mikaela Add`)
      .setDescription(`Olá, basta clicar ao link abaixo.`)
      .setDescription("[Me adicionar](https://discord.com/oauth2/authorize?client_id=691793932539134076&scope=bot&permissions=8)")
      .setColor("#ff0571")
            message.reply(embed)
    }

  exports.help = {
    name: 'add',
    description: 'adiciona o bot em algum servidor',
    usage: 'add'
  };