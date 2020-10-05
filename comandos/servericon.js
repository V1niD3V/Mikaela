const Discord = require("discord.js"); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando a base


    let embed2 = new Discord.RichEmbed()

    .setColor('AQUA')
    .setTitle(`Icone ddo servidor`)
    .setDescription("**[Baixe-a](" + message.guild.iconURL + ")**")
    .setImage(message.guild.iconURL)
    .setColor('#36393e')

    message.channel.send(embed2)

}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'servericon'
}