module.exports={
    name: 'nuke',
    description: "uh oh",
    execute(message, args){

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
        .setTitle(`**NUCLEAR STRIKE IN-BOUND**`)
        .setDescription("Stay Clear!")
        .setImage("https://media.tenor.com/images/7ef321d7f1732c0ce5e67df42186f7eb/tenor.gif")
        .setFooter("Tranquil - Made by @JamesMeow & @CupOfT3a", "https://i.pinimg.com/736x/fe/02/69/fe02693231e9080232ea1fb91e299438.jpg")
        .setColor(0xdd0808)

        message.channel.send(embed)
    }
}