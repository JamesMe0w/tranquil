module.exports={
    name: 'flipcoin',
    description: "flips a coin!",
    execute(message, args){
        var choices = [
            "heads",
            "tails"
        ]

        var output = choices[Math.floor(Math.random()*choices.length)];

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
        .setTitle("**Coin Flip**")
        .setDescription(`You got **${output}!**`)
        .setThumbnail("https://www.pbs.org/newshour/app/uploads/2015/03/159615168.jpg")
        .setColor(0xdef910)

        message.channel.send(embed)
    }
}