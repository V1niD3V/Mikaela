const Discord = require("discord.js"); // puxando a livraria Discord.js

const config = require("./config.json"); // puxando todo o conteúdo dentro do aquivo 'config.json'

const fs = require("fs"); // definindo um nome para todos os comandos que iremos verificar
   
const client = new Discord.Client(); // setando o nome do nosso Discord.Client!

client.commands = new Discord.Collection(); // adicionando uma coleção de comandos, puxando com o nosso Discord.Client

fs.readdir("./comandos/", (err, files) => {
    if (err) return console.error(err); // definindo mensagem de erro caso ocorra.
    files.forEach(file => { // definindo um antibug nos comandos.
      if (!file.endsWith(".js")) return console.log("Existe arquivos que não são comandos!!") // falando para o bot, caso exista arquivos que não termina em .js, não ira carregar.
      let props = require(`./comandos/${file}`); //definindo o arquivo que vai iniciar.
      let commandName = file.split(".")[0]; // definindo o nome do comando
      client.commands.set(commandName, props);
    });
  });

// para facilitar a nossa vida, qualquer erro que aparecer no bot, ele nos mostrara no console
client.on('error', (err) => { 
   console.log(err.message)
});


client.on('ready', () => {
    console.log(`Bot foi iniciado com sucesso em ${client.guilds.size} servidores`); 

    var tabela = [ // criando uma variavel, nomeada de tabela 

// uma notinha: toda vez que for criar uma nova presence na nossa tabela, bote uma vírgula no final!
        {name: 'Paz para o mundo', type: 'STREAMING', url: 'https://www.twitch.tv/mitsuakioficial'},
        {name: 'Use m.ajuda', type: 'WATCHING'},
        {name: '#FiqueEmCasaComMika', type: 'LISTENING'},
    ];

    function setStatus() { // nomeamos ela de: setStatus
        // agora, iremos criar um sistema randômico, alternando entre as opções que criamos para a tabela
        var altstatus = tabela[Math.floor(Math.random() * tabela.length)]
        client.user.setPresence({game: altstatus}) // por fim, setando a presence. No caso, o jogo é a variavel que criamos 'altstatus'
    }
    setStatus(); // para finalizar, puxamos a function que criamos no inicio
    setInterval(() => setStatus(), 50000) // e adicionamos um intervalo entre as presences

  client.user
      .setStatus("idle") // idle, dnd, online, invisible
      .catch(console.error);

});
const moment = require("moment")

client.on('guildMemberAdd', async member =>{
    if(moment(member.user.createdAt).format("LLL") < 7) {
       await member.kick("conta criada a menos de 7 dias")
    }
})
client.on('guildCreate', guild => {


const pEmbed = new Discord.RichEmbed()
.setTitle("Mikaela - Bot Added")
.addField(`Total de grupos até agora:`, `${client.guilds.size} grupos`)
.addField(`Adicionado em:`, `${guild.name}`, true)
.addField(`ID:`, `${guild.id}`, true)

 
guild.owner.send("Obrigado por me adicionar")


})


// evento message, com bases do nosso bot
client.on('message', message => { // nome desse evento, foi setado como: message -- quero, vou pegar o link aq
    if (message.author.bot) return; // puxando o nome definido, bloquearemos o uso de comandos por outros bots
    if (message.channel.type === "dm") return;


    let prefix = config.prefix;

    if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) {
        const aa = new Discord.RichEmbed()
            .setDescription("***___Sobre a Mikaela___***")
    .setColor("#ff0000")
    .setThumbnail("https://cdn.discordapp.com/avatars/691793932539134076/7c51307e613a36fc2773d056849d7dd0.png?size=2048")
    .setAuthor("Mikaela Info", "https://cdn.discordapp.com/avatars/691793932539134076/7c51307e613a36fc2773d056849d7dd0.png")
    .addField(":clipboard: Informações Pessoais", "     🗒️ ***Nome***: ***___Mikaela___***\n     :wrench: ***Prefixo:*** ``m!``\n     <:mikaela_nascimento:727230234591494255> ***Nascimento:*** ``16/04/2020``\n     <:mikaela_dono:727231086404304948> ***Pai:*** ``! Vini#8449``", false)
    .addField(":bar_chart:  Informações:", "      <:mikaela_servidores:727639875662119006>***Servidores:*** ``" + client.guilds.size + "``\n     <:mikaela_canais:727642850195406960> ***Canais:*** ``" + client.channels.size  + "``\n     <:mikaela_usuarios:727642565440045176> **Usuarios:** " + client.users.size, false)
    .addField("<:mikaela_support:727644447130648577> Suporte", "     <:mikaela_support:727644447130648577> [Site](https://mikaelabot.glitch.me/) e [Discord](https://discord.gg/UHmMb4x)", false)
 
      return message.channel.send(aa)
    }
 // puxando o prefixo do nosso bot
  if (!message.content.startsWith(prefix)) return; // para evitar bugs, setaremos uma function, definindo que o bot respondera apenas para mensagens que possuem seu prefixo, no inicio
    var args = message.content.substring(config.prefix.length).split(" "); // definindo o que seria os argumentos
    let cmd = args.shift().toLowerCase(); // puxando dos args, setaremos que o bot pode responder sim, a comandos com a letra inicial maiuscula

    let command = client.commands.get(cmd) // puxaremos o conteudo de tal comando
  if (command) { // caso o membro utilize um comando inexistente, daremos o erro
    command.run(client, message, args); // essa é a base de todo arquivo js
  } else {
    message.reply(`procurei por todo lugar, mas não encontrei esse comando, verifique a lista de comandos, ${config.prefix}ajuda.`);
  }
});

client.login(config.token);