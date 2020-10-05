exports.run = async (client, message) => {
    let numeroAtual = 1;
    
    let si = setInterval(() =>{
        if (numeroAtual > 3) {
            clearInterval(si);
            message.channel.send("JÁ!");
            return;
        }
        message.channel.send(numeroAtual);
        numeroAtual++;
    } ,1000);
}