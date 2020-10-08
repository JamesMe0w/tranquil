module.exports={
    name: 'landstrike',
    description: "uh oh again",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
        .setTitle(`**LAND STRIKE COMMENCING**`)
        .setDescription("Take Cover!")
        .setImage("https://i.gifer.com/Bq34.gif")
        .setFooter("Tranquil - Made by @JamesMeow & @CupOfT3a", "https://i.pinimg.com/736x/fe/02/69/fe02693231e9080232ea1fb91e299438.jpg")
        .setColor(0xdd0808)

        message.channel.send(embed)
    }
}