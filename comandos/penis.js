const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando as bases
    var numero = Math.floor(Math.random() * 2000) + 1;
        let embed = new Discord.RichEmbed()

        .setTitle(`:hatched_chick: │ Tamanho do piupiu`)
        .setDescription(`O tamanho do seu piupiu é de ${numero}cm`)
        .setColor('FFFF00')

        message.channel.send(embed)
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'penis'
}