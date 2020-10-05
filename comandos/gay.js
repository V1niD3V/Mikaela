const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando as bases
    var numero = Math.floor(Math.random() * 100) + 0;

        let embed = new Discord.RichEmbed()

        .setTitle(`:rainbow_flag: │ Máquina Gay`)
        .setDescription(`Você é ${numero}% gay`)
        .setColor('#FF0084')
        
                let embedowner = new Discord.RichEmbed()

        .setTitle(`:rainbow_flag: │ Máquina Gay`)
        .setDescription(`Você é 0% gay`)
        .setColor('#FF0084')


        let embed100 = new Discord.RichEmbed()

        .setTitle(`:rainbow_flag: │ Máquina Gay`)
        .setDescription(`Você é 100% gay`)
        .setColor('#FF0084')
 
if(message.author.id === "410450556641869824") return message.channel.send(embed100)

if(message.author.id === "659760428947079169") return message.channel.send(embedowner)
        message.channel.send(embed)
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'gay'
}