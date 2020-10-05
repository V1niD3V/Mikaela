const Discord = require('discord.js')
 
exports.run = (client, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')){
        message.reply("**você não tem permissão.**")
    } else {
    message.channel.send('**Em qual canal você deseja enviar o anúncio?**').then(msg1 => {
        let c1 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
        .on('collect', c => {
            canal = c.mentions.channels.first()
 
            if(!canal){
                message.channel.send('**Este canal não existe.**')
            } else {
 
                message.channel.send('**Qual o título do anúncio?**').then(msg2 => {
                    let c2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                    .on('collect', c => {
                        titulo = c.content
 
                        message.channel.send('**Qual o anúncio?**').then(msg3 => {
                            let c3 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                            .on('collect', c => {
                                anuncio = c.content
                                message.channel.send('**Anúncio enviado com sucesso!**')
 
                                let embed = new Discord.RichEmbed()
                                .setTimestamp()
                                .setThumbnail(client.user.displayAvatarURL)
                                .setTitle(titulo)
                                .setColor('#ff6703')
                                .setDescription(anuncio)
                                .setFooter(`Anunciado por: ${message.author.username}`, message.author.displayAvatarURL)
 
                                canal.send(embed)
                                })
                            })
                        })
                    })
                }
            })
        })
    }
}
 
 

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'anuncio'
}
