const Discord = require("discord.js")
exports.run = (client, message) => {
    var cookies = [
        `*O que é*
         **O coronavírus (COVID-19) é uma doença infecciosa causada por um novo vírus.**
         **Ele causa problemas respiratórios semelhantes à gripe e sintomas como tosse, febre e, em casos mais graves, dificuldade para respirar. Como prevenção, lave as mãos com frequência e evite tocar o rosto e ter contato próximo (um metro de distância) com pessoas que não estejam bem.**
        *Transmissão*
         **A principal forma de contágio do novo coronavírus é o contato com uma pessoa infectada, que transmite o vírus por meio de tosse e espirros. Ele também se propaga quando a pessoa toca em uma superfície ou objeto contaminado e depois nos olhos, nariz ou boca.**
        *Sintomas*
         **É possível estar com a COVID-19 por até 14 dias antes de apresentar os sintomas, que são febre, cansaço e tosse seca. A maioria das pessoas (cerca de 80%) se recupera da doença sem a necessidade de tratamentos especiais.**
         **Em casos mais raros, ela pode ser grave e até fatal. Idosos e pessoas com outras condições médicas (como asma, diabetes e doença cardíaca) são mais vulneráveis a quadros sérios.**
        *Possíveis sintomas*
         **Tosse**
         **Febre**
         **Cansaço**
         **Dificuldade para respirar (em casos graves)**
        *Prevenção*
         **1- Lavar as mãos frequentemente**
         **2- Usar o cotovelo para cobrir a tosse**
         **3- Não tocar o rosto**
         **4- Manter a distância segura (um metro de distância)**
         **5- Não sair de casa, se precisar sair use a máscara**`,

      ]
      let embed = new Discord.RichEmbed()
      .setTitle(`**🦠 │ __COVID-19__**`)
      .setDescription(cookies[Math.floor(Math.random() * cookies.length)])
      .setColor('#3866ff')
      .setImage(`https://cdn.discordapp.com/attachments/700170855241482260/701994373868683304/lavanumao.gif`)
      message.channel.send(embed)    
    }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  }
  
  exports.help = {
    name: 'covid',
    description: 'Mostra informações sobre a covid-19',
    usage: 'covid'
  };