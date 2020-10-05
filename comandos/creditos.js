exports.run = (client, message, args) => { // puxando a base
const Discord = require("discord.js")
    // sistema para identificar a quanto tempo o bot esta online!
    let dias = 0; 
    let week = 0; 
 
     let uptime = ``; 
     let totalSegundos = (client.uptime / 1000); 
     let horas = Math.floor(totalSegundos / 3600); 
     totalSegundos %= 3600; 
     let minutos = Math.floor(totalSegundos / 60); 
     let segundos = Math.floor(totalSegundos % 60); 
 
     if(horas > 23){
         dias = dias + 1;
         horas = 0; 
     }
 
     if(dias == 7){ 
         dias = 0; 
         week = week + 1; 
     }
 
     if(week > 0){ 
         uptime += `${week} week, `;
     }
 
     if(minutos > 60){ 
         minutos = 0;
     }
 
     uptime += `${horas}h ${minutos}m ${segundos}s`;

    // criando umas variaveis que podem ser clicadas e redirecionadas a um site
    var linguagem = ('[Node.js](https://nodejs.org/en/)') 
    var livraria = ('[Discord.js](https://discord.js.org/#/)')
    var young = ('[!? Vinicius"#8449](https://www.youtube.com/c/sara201190)')
    var nome = ('https://discord.com/oauth2/authorize?client_id=715770512654991390&scope=bot&permissions=8')

    let embed = new Discord.RichEmbed()

    .setTitle(`Mikaela`)
      .setTitle(`💳 │Créditos`)
      .addField(`Criador`, `[Vinicius](https://www.youtube.com/user/sara201190)`)
      .addField(`Meu Namorado`, `[Hawks#655](https://top.gg/bot/700120169032319007)`)
      .addField(`Site:`, `[Clique aqui](https://mikaelabot.glitch.me`)
    .setColor('#ff0000')
    .setFooter('© Mikaela - 2020')

    message.channel.send(embed)

}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'botinfo'
}