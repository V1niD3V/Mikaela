const db = require('quick.db'); // uma database (Para instalar: npm i quick.db)
const ms = require('parse-ms') // npm para definir o tempo (Para instalar: npm i parse-ms)
const Discord = require('discord.js') // puxando a livraria discord.js

exports.run = async (client, message, args) => {
  

       let timeout = 3600000 // definindo o tempo do daily (No meu caso 24hrs)
       let amount = Math.floor(Math.random() * 5000) + 500; // um sistema randômico do quanto o usuário irá ganhar
       let pessoas = Math.floor(Math.random() * 1) + 4

var tabela = [
"você roubou o **cofre do Governo** e recebeu **R$",
"você roubou o **Banco do Brasil** e recebeu **R$",
"você roubou uma loja de perfumaria e recebeu **R$",
"você roubou **" + pessoas + " pessoas** e recebeu **R$"
]
        let assalto = await db.fetch(`assalto_${message.author.id}`); // puxando na database o 'daily'
    
       if (assalto!== null && timeout - (Date.now() - assalto) > 0) { // pegando o 'daily' e verificando se o timeout expirou
         let time = ms(timeout - (Date.now() - assalto)); // definindo os tempos na variável 'time'
           // caso o timeout tenha expirado
           message.reply(`você já assaltou hoje. Tente novamente em **${time.minutes}m ${time.seconds}s**`)
       } else { // aqui vei ja tem, to fzd ainda
            message.reply(tabela[Math.floor(Math.random() * tabela.length)] + amount) //dps cria os comandos de msc do best jeanist?
    
        db.add(`money_${message.author.id}`, amount) // adicionando na database do usuário a quantia que ele ganhou
        db.set(`assalto_${message.author.id}`, Date.now()) // adicionando na database do usuário, o daily (o tempo)
        }
    }
exports.help = {
    name: 'rob'
}