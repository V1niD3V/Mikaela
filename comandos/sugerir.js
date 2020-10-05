const Discord = require('discord.js')
const c = require('../config.json')
exports.run = async (client, message, args) => {
    await message.delete()

    let mensg = args.join(' ')
    if (!mensg) {
        message.channel.send(`${message.author}, digite uma sugestão. :mailbox_with_no_mail:`)
        return undefined;
    }

    const embed = new Discord.RichEmbed()
        .setAuthor(`Sugestão de ${message.author.username}`, message.author.displayAvatarURL)
        .setDescription(`${mensg}`)
        .setColor('RANDOM')
        .setThumbnail(message.author.displayAvatarURL)
        .setTimestamp()
    client.channels.get(`700389875802701884`).send(embed)
        .then(function (msg) {
            msg.react("👍");
            msg.react("👎"); 
            message.delete({
                timeout: 10000
            });
            message.channel.send(`Obrigado ${message.author}, sua sugestão foi enviada com sucesso! :mailbox_with_no_mail:`).then(msg => msg.delete(10000))
        }).catch(function (error) {
            console.log(error);
        });
}

exports.help = {
    name: "sugestão",
    aliases: [
        "sugerir",
        "sugestao"
    ]
}