const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const moment = require('moment'); // puxando o NPM 'moment' (instale utilizando: npm i moment)
moment.locale('pt-BR') // definindo o moment para BR

exports.run = (client, message, args) => { // puxando a base

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

const embed = new Discord.RichEmbed()

    .setDescription("***___Sobre a Mikaela___***")
    .setColor("#ff0000")
    .setThumbnail("https://cdn.discordapp.com/avatars/691793932539134076/7c51307e613a36fc2773d056849d7dd0.png?size=2048")
    .setAuthor("Mikaela Info", "https://cdn.discordapp.com/avatars/691793932539134076/7c51307e613a36fc2773d056849d7dd0.png")
    .addField(":clipboard: Informações Pessoais", "     🗒️ ***Nome***: ***___Mikaela___***\n     :wrench: ***Prefixo:*** ``m!``\n     <:mikaela_nascimento:727230234591494255> ***Nascimento:*** ``16/04/2020``\n     <:mikaela_dono:727231086404304948> ***Pai:*** ``ySkill_Z#0001``", false)
    .addField(":bar_chart:  Informações:", "      <:mikaela_servidores:727639875662119006>***Servidores:*** ``" + client.guilds.size + "``\n     <:mikaela_canais:727642850195406960> ***Canais:*** ``" + client.channels.size  + "``\n     <:mikaela_usuarios:727642565440045176> **Usuarios:** " + client.users.size, false)
    .addField("<:mikaela_support:727644447130648577> Suporte", "     <:mikaela_support:727644447130648577> [Site](https://mikaelabot.glitch.me/) e [Discord](https://discord.gg/UHmMb4x)", false)
 

    message.channel.send(embed)

}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'botinfo'
}