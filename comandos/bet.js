const db = require('quick.db'); // puxando o npm quick.db (uma database, para instalar, utilze: npm i quick.db)
const Discord = require("discord.js"); // puxando a livraria discord.js 

exports.run = async (client, message, args) => {
  
    var money = await db.get(`money_${message.author.id}`) // puxando o 'money' dentro da nossa database
      
    var numeroaposta = parseInt(args[0]); // definindo uma variável para o número que o usuário vai apostar
    if (!numeroaposta) return message.reply('escreva uma quantia que deseja apostar!') // caso o usuário não escreva nada
    if (isNaN(numeroaposta)) return message.reply('isso não é um número!') // caso ele não coloque um número
    
if (numeroaposta > money) { // caso o número que o usuário deseja apostar seja maior que o que ele possui na database
        return message.channel.send(`Você não possui **R$ ${numeroaposta}**`)
    }

    if (message.content.includes('-')) { // caso o usuário tente botar um - (menos) no número (isso pode gerar um bug, que mesmo ele perdendo, irá ganhar, pois menos + menos é mais (+)) 
        return message.reply(`escreva uma quantia positiva (maior que 0)!`)
    }
    var random = Math.floor(Math.random() * (5 - 2) + 2); // um sistema randômico
    if (random === 3){ // caso esse sistema caia em 3, o usuário terá ganhado
  
        message.channel.send(`✅ │Você apostou **R$ ${numeroaposta}** e **GANHOU**!\n\nAgora você possui **R$ ${money}**`) // fazendo uma conta, puxando o 'money' que o usuário tinha no começo mais o que ele ganhou
        db.add(`money_${message.author.id}`, numeroaposta) // adicionando na conta do usuário o que ele apostou
    } else { // caso o número randômico não caia em três (3)
        
        message.channel.send(`❌ │Você apostou **R$ ${numeroaposta}** e **PERDEU**!\n\nAgora você possui **R$ ${money}**`) // fazendo uma conta, puxando o 'money' que ele começou menos o que ele perdeu na aposta
        db.subtract(`money_${message.author.id}`, numeroaposta) // removendo o que ele apostou
      }
}

