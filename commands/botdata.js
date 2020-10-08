module.exports={
    name: 'botdata',
    description: "displays bot data",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
        .setTitle(`**Tranquil**`)
        .setDescription("Latest Version - v1.0")
        .setImage("https://i.pinimg.com/736x/fe/02/69/fe02693231e9080232ea1fb91e299438.jpg")
        .addFields(
            { name: 'Update Log', value: 'None' }
        )
        .setFooter("Tranquil - Made by @JamesMeow & @CupOfT3a", "https://i.pinimg.com/736x/fe/02/69/fe02693231e9080232ea1fb91e299438.jpg")
        .setColor(0xdef910)

        message.channel.send(embed)
    }
}