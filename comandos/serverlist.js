const Discord = require('discord.js');

exports.run = async (client, message, args) => {

        var servers = client.guilds
        var num = 0;
      
      let servidores = [`${client.guilds.map(se=> `\`${se.name}\` - ID: \`${se.id}\`- Dono: ` + se.owner + ``).slice(0,10).join('\n')}`]
      
      let page = 1
        
        const embed = new Discord.RichEmbed()
        .setDescription(`${servidores}`)
        .setFooter(`Pagina ${page} de ${servidores.length}`, message.author.displayAvatarURL)
        .setAuthor('Servidores em que estou:', client.displayAvatarURL)
        //.setColor('#36393e')
        .setColor('#206694')
        .setThumbnail(client.user.displayAvatarURL)
        message.channel.send(servidores).then(async msg => {
            await msg.react("⬅️");
            await msg.react("➡️");

            const voltarfilter = (reaction, user) => reaction.emoji.name === '⬅️' && user.id === message.author.id;
            const passarfilter = (reaction, user) => reaction.emoji.name === '➡️' && user.id === message.author.id;

            const voltar = msg.createReactionCollector(voltarfilter, { timeout: 900000})
            const passar = msg.createReactionCollector(passarfilter, { timeout: 900000})

            voltar.on('collect', r => {
                r.remove(message.author.id)
                if (page === 1) return;
                page--;
                embed.setDescription(servidores [page-1])
                embed.setFooter(`Página ${page} de ${servidores.length}`, message.author.displayAvatarURL)
                msg.edit(embed)
            })

        passar.on('collect', r => {
            r.remove(message.author.id)
            if (page === servidores.length) return;
            page++;
            embed.setDescription(servidores [page-1]);
            embed.setFooter(`Página ${page} de ${servidores.length}`, message.author.displayAvatarURL)
            msg.edit(embed)
        })
    })
}