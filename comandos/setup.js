const Discord = require('discord.js')

exports.run = (client, message, args, guild) => {
const atendente = message.guild.roles.find(x => x.name == 'Subsíndico')

 var name = `Tickets`;
    message.guild.createChannel(name, { type: "category" })

    var name = `Tickets Fechados`;
    message.guild.createChannel(name, { type: "category" }).then(
      (chan2) => {
        chan2.overwritePermissions(message.guild.roles.find('name', '@everyone'), {
          'SEND_MESSAGES': false
        }
        )})



    var name = `ticket-logs`;
    message.guild.createChannel(name, { type: "text" }).then(
      (chan) => {
      chan.overwritePermissions(message.guild.roles.find('name', '@everyone'), {
         'VIEW_CHANNEL': false
      })
      chan.overwritePermissions(message.guild.roles.find('name', 'Subsíndico'), {
          'VIEW_CHANNEL': true
      })
        let category = message.guild.channels.find(c => c.name == "Tickets" && c.type == "category");
  
      chan.setParent(category.id)
      chan.setTopic('Historico de tickets')

      
    })

    

} 
