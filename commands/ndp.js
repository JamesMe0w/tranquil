module.exports={
    name: 'ndp',
    description: "happy national day!",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
        .setTitle(`**Singapore National Day 2020**`)
        .setDescription("test")
        .setImage("https://static.mothership.sg/1/2019/08/ezgif.com-video-to-gif-7.gif")
        .addFields(
            { name: 'Events', value: 'None' }
        )
        .setFooter("Tranquil - Made by @JamesMeow & @CupOfT3a", "https://i.pinimg.com/736x/fe/02/69/fe02693231e9080232ea1fb91e299438.jpg")
        .setColor(0xdef910)

        message.channel.send(embed)
    }
}