exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
	var time = args[0];
	var reminder = args.splice(1).join(' ');

	if (!time) return message.reply('não posso te lembrar o que você o tempo não definiu!');
	if (!reminder) return message.reply('você esqueceu de inserir uma mensagem!');

	// This will not work if the bot is restarted or stopped

	time = await time.toString();

	if (time.indexOf('s') !== -1) { // Seconds
		var timesec = await time.replace(/s.*/, '');
		var timems = await timesec * 1000;
	} else if (time.indexOf('m') !== -1) { // Minutes
		var timemin = await time.replace(/m.*/, '');
		timems = await timemin * 60 * 1000;
	} else if (time.indexOf('h') !== -1) { // Hours
		var timehour = await time.replace(/h.*/, '');
		timems = await timehour * 60 * 60 * 1000;
	} else if (time.indexOf('d') !== -1) { // Days
		var timeday = await time.replace(/d.*/, '');
		timems = await timeday * 60 * 60 * 24 * 1000;
	}	else {
		return message.reply('o tempo deve ser númerico [s/m/h/d]');
	}

	message.reply(`eu vou lembrar você de \`${reminder}\` daqui \`${time}\``);

	setTimeout(function () {
		message.reply(`você me pediu para te lembrar de \`${reminder}\` `);
	}, parseInt(timems));

};

exports.help = {
    name: 'lembrete',
    aliases: ['lembrar'],
	description: 'Para quando você não pode esquecer de algo!',
	usage: 'lembrete [s/m/h/d] [mensagem]'
};