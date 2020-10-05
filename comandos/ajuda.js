const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando a base
// avisando sobre a embed de ajuda na DM


    let embed = new Discord.RichEmbed()
        .setTitle(`🍁 |Meus Comandos:`)
        .setColor("#CC2EFA")
        .setDescription('```Clique no emoji para abrir a categoria.``` \n\n\n👮 ** Comandos para Moderação** \n🔧 **Comandos para Utilidades** \n🎊 **Comandos de diversão** \n🎵 **Comandos de musica** \n💸 **Comandos de economia**')
    message.channel.send({embed}).then(msg => { // evento para reagir a mensagem
            msg.react('👮').then(r => { // mod
            msg.react('🔧').then(r => { // uteis
            msg.react('🎊').then(r => { // entretenimento
            msg.react('🎵').then(r => {
            msg.react('💸').then(r => {
            msg.react('🔙').then(r => { // inicio
          })
        })
      })
    })
  })
})
        // filtros de cada reação, para configurar a informação do autor
        const UtilidadesFilter = (reaction, user, ) => reaction.emoji.name === '🔧' && user.id === message.author.id;
        const ModeraçãoFilter = (reaction, user, ) => reaction.emoji.name === '👮' && user.id === message.author.id;
        const EntretenimentoFilter = (reaction, user, ) => reaction.emoji.name === '🎊' && user.id === message.author.id;
        const BackFilter = (reaction, user, ) => reaction.emoji.name === '🔙' && user.id === message.author.id;
        const MusicaFilter = (reaction, user, ) => reaction.emoji.name === '🎵' && user.id === message.author.id;
        const EconomyFilter = (reaction, user, ) => reaction.emoji.name === '💸' && user.id === message.author.id;
// coletores de cada reação, para ver confirmar tal membro  

        const Utilidades = msg.createReactionCollector(UtilidadesFilter);
        const Moderação = msg.createReactionCollector(ModeraçãoFilter);
        const Entretenimento = msg.createReactionCollector(EntretenimentoFilter);
        const Back = msg.createReactionCollector(BackFilter);
        const Musica = msg.createReactionCollector(MusicaFilter);
        const Economy = msg.createReactionCollector(EconomyFilter);
 



        Utilidades.on('collect', r2 => { // criando um evento, caso o membro clique nessa reação, e todos são iguais!
              r2.remove(message.author.id);        

embed = new Discord.RichEmbed()
                .setTitle("🔧 Uteis")
                .addField(`\`!botinfo\``, `Saiba mais sobre mim`)
                .addField(`\`!cargo\``, `Não recebeu o cargo ao entrar no servidor? Esse comando adiciona!`)
                .addField(`\`!code\``, `Envie um codigo para nos ajudar!`)
                .addField(`\`!emojis\``, `Veja os emojis do servidor`)
                .addField(`\`!lembrete\``, `Peça ajuda ao bot para lembrar você de algo`)
                .addField(`\`!sugestao\``, `Deixe uma sugestão para o nosso servidor`)
                .addField(`\`!ontime\``, `Veja a quanto tempo o bot se encontra online`)
                .addField(`\`!userinfo\``, `Confira algumas informações de um membro`)
                .setColor("GOLD")

            msg.edit(embed);
        })
 
        Moderação.on('collect', r2 => {
              r2.remove(message.author.id)

            embed = new Discord.RichEmbed()
                .setTitle("👮 Moderação")
                .addField(`\`!ban\``, `Aplique um banimento em um membro`)
                .addField(`\`!clear\``, `Limpe indesejadas mensagens em um canal`)
                .addField(`\`!kick\``, `Expulse membros fora da lei`)
                .addField(`\`!say\``, `Escreva alguma mensagem através do bot`)
                .addField(`\`!anuncio\``, `Envie um anuncio em embed em um canal.`)
                .setColor("GOLD")
            msg.edit(embed);
        })
    
     Musica.on('collect', r2 => {
              r2.remove(message.author.id);

                            let embed = new Discord.RichEmbed()
                        .setTitle("🎵 | Musica")
                        .addField(`\`mm!play\``, `Inicia uma musica`)
                        .addField(`\`mm!resume\``, `Retoma a musica pausada`)
                        .addField(`\`mm!pause\``, `Pausa a musica atual`)
                        .addField(`\`mm!volume\``, `Modifica o volume da musica`)
                        .addField(`\`mm!loop\``, `Inicia ou termina o loop na lista de musica`)
                        .addField(`\`mm!skip\``, `Pula a musica atual na lista de musicas`)
                        .addField(`\`mm!stop\``, `Termina a lista de musicas`)
            msg.edit(embed);
})
    Economy.on('collect', r2 => {
           r2.remove(message.author.id);

const embed = new Discord.RichEmbed()
          .setTitle('💸 Economia')
          .addField(`\`!addmoney <quantia> <@user>\``, `Adiciona uma quantia de dinheiro na conta de algum usuário`)
          .addField(`\`!apostar <quantia>\``, `Aposte uma quantia de dinheiro com o bot`)
          .addField(`\`!daily\``, `Receba seu dinheiro à cada dia`)
          .addField(`\`!money <@user>\``, `Veja quanto de dinheiro você ou algum usuário tem`)
          .addField(`\`!pay <@user> <quantia>\``, `Pague uma quantia de dinheiro para algum usuário`)
          .addField(`\`!removemoney <quantia> <@user>\``, `Remova uma quantia de dinheiro da conta de um usuário`)

})
        Entretenimento.on('collect', r2 => {
              r2.remove(message.author.id);

            embed = new Discord.RichEmbed()
                .setTitle("🎊 Entretenimento")
                .addField(`\`!avatar\``, `Amplie a foto de algum membro`)
                .addField(`\`!letras\``, `Crie um texto grande de letras!`)
                .addField(`\`!dado\``, `Veja em qual número o dado vai cair`)
                .addField(`\`!servericon\``, `Amplie a foto do servidor`)
                .addField(`\`!tweet\``, `Crie um falso tweet`)
                .addField(`\`!1vs1\``, `Faça uma batalha entre duas pessoas.`)
                .addField(`\`!8ball\``, `Me faça uma pergunta.`)
                .addField(`\`!ascii\``, `Envie uma frase em letras.`)
                .addField(`\`!avatar\``, `Veja o avatar de uma pessoa maior.`)
                .addField(`\`!big-text\``, `Escreve um texto em emojis.`)
                .addField(`\`!biscoito\``, `Envie um bixcoito para uma pessoa.`)
                .addField(`\`!calc\``, `Faça uma conta de matematica bem rapida.`)
                .addField(`\`!cat\``, `Envia uma foto aleatoria de um gato.`)
                .addField(`\`!clima\``, `Verifique o clima de uma cidade.`)
                .addField(`\`!conquista\``, `Envia uma foto com o texto solicitado.`)
                .addField(`\`!count\``, `Faz uma contagem no chat.`)
                .addField(`\`!changelog\``, `Muda um membro de cargo.`)
                .addField(`\`!dog\``, `Envia uma foto aleatoria de um gato.`)
                .addField(`\`!faketweet\``, `Cria uma postagem fake no twitter.`)
                .addField(`\`Proxima pag\``, `Clique em 👉`)
                .setColor("GOLD")
                

            msg.edit(embed).then(msg => {
              msg.react("👉🏼")

              const CocoFilter = (reaction, user, ) => reaction.emoji.name === '👉🏼' && user.id === message.author.id;
              // coletores de cada reação, para ver confirmar tal membro  
              
                      const Coco = msg.createReactionCollector(CocoFilter);


                      Coco.on('collect', r2 => {

                        let embed = new Discord.RichEmbed()
                        .setTitle("🎊 Entretenimento")
                        .addField(`\`!firstword\``, `Faça um meme de um bebe falando pela primeira vez.`)
                        .addField(`\`!forca\``, `Joga o jogo da forca com o bot.`)
                        .addField(`\`!fortnite\``, `Visualize o perfil de um jogador.`)
                        .addField(`\`!fumar\``, `Faça o bot fumar um baseado.`)
                        .addField(`\`!guess\``, `Adivinhe o numero secreto.`)
                        .addField(`\`!hug\``, `Envie um abraço para alguem.`)
                        .addField(`\`!jokempo\``, `Brinque de pedra papel e tesoura comigo.`)
                        .addField(`\`!kiss\``, `Beije uma pessoa muito amada.`)
                        .addField(`\`!laranjo\`Crie um meme do laranjo.`)
                     msg.edit(embed).then(msg => {
                      msg.reaction.remove()
                     })
                      })
            })
        })

        Back.on('collect', r2 => {
              r2.remove(message.author.id); //zzzzzzzzzzzzzzzzz

            embed = new Discord.RichEmbed()
            .setTitle(`CENTRAL DE AJUDA!`)
            .setColor("GOLD")
            .setDescription('Para ter mais acesso e facilidade às nossas dependências, reaja com algum emoji e receba as informações necessárias. \n\n\n🔨 `Moderação` \n🔧 `Uteis` \n💳 `Entretenimento`')
            
           msg.edit(embed);  
        });
    });
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: "ajuda"
}
