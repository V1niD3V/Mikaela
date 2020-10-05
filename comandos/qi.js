const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando as bases
    var numero = Math.floor(Math.random() * 8001) + 0;
        let embed = new Discord.RichEmbed()

        .setTitle(`:nerd: │ Será que seu QI é mais de oito mil?`)
        .setDescription(`Seu QI é de ${numero}!`)
        .setColor('#FFFF00')

        message.channel.send(embed)
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'qi'
}