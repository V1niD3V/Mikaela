const Discord = require("discord.js");
const fs = require('fs');
const customisation = require('../customisation.json');

exports.run = async (client, message, args) => {
  if (!message.author.id === '659760428947079169') return message.reply("You don't have the permission to use this command...:facepalm:");
    //message.delete();
    let blacklist = JSON.parse(fs.readFileSync("../blacklist.json/", "utf8"));
    let user = args[0];
    const amount = parseInt(user);

    if (isNaN(amount)) {
        return message.reply('Coloque apenas numeros');
    }
    if (!user) return message.reply('Você precisa colocar um ID de um usuario');
    if (args[0] === '659760428947079169') return message.reply("Você não pode colocar o dev como blacklist ;-;.");

    if (!blacklist[user]) {
        blacklist[user] = {
          id: user,
          state: true
        }
        message.reply(`<@${user}> Está na blacklist!`);    
        fs.writeFile("../blacklist.json", JSON.stringify(blacklist), err => {
            if(err) throw err;
          });
        
        client.guilds.forEach((guild) => {
        if(guild.ownerID === user) {
          message.guild.leave(guild.id)
        }
    })

    return;
    }
    if (blacklist[user].state === true) {
        message.reply("That user have already been blacklisted");
    return;
    };

}