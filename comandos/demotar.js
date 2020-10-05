const Discord = require("discord.js")

exports.run = (client, message, args) => {

  const user = message.mentions.members.first() || message.guild.members.get(args[0])
  if (!user) return message.channel.send("Use: demotar <@user> <@cargo>").then(message => message.delete(7000));
  
  const role = message.mentions.roles.first() || message.guild.roles.get(args[1])
 if(user.roles.has(role.id)) return;

}