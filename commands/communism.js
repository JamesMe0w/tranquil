module.exports={
    name: 'communism',
    description: "all hail the soviet union!",
    execute(message, args){
        
        var author = message.member.displayName;
        var authorconv = String(author)
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
        .setTitle(`**Communist ${authorconv}**`)
        .setDescription("Вы коммунист. Вы сделали Родину гордой")
        .setImage("https://acegif.com/wp-content/uploads/2020/04/soviet-flag-16.gif")
        .setColor(0xdef910)

        message.channel.send(embed)
    }
}