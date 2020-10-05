const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(message.author.id !== "659760428947079169") return message.reply("tu nao e meo dono nao ;-;")
    
    message.reply("sucesso")
        message.member.addRole("553754721827946512")
}