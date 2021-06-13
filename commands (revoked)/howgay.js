const { Channel } = require("discord.js")

module.exports={
    name: 'howgay',
    description: "how gay are you?",
    execute(message, args){
        var username = String(args)

        var gaypercent = Math.floor(Math.random() * 100) + 1

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
        .setColor(0x70ee1b)
        .setTitle("**Gay Meter 6969**")
        .setDescription(`${args} is ${gaypercent}% gay!`)
        .setFooter("Tranquil - Made by @JamesMeow & @CupOfT3a", "https://i.pinimg.com/736x/fe/02/69/fe02693231e9080232ea1fb91e299438.jpg")
        .setThumbnail("https://media1.tenor.com/images/7df1ee9238360d7280cbe84e4dde8e30/tenor.gif?itemid=13531341")


        if(username === ""){
            message.channel.send('Invalid! Input a name!')

        /*

        } else if(username == "<@!733146760662220891>"){
            message.channel.send(`${username} How dare you question my master!`)
        } else if(username == "<@733146760662220891>"){
            message.channel.send(`${username} How dare you question my master!`)

        } else if(username == "<@!738647806893490199>"){
            message.channel.send(`Ouch... After all my life being forced to be a slave of the public, going around doing your bidding... never getting any rrest... you choose to do this to me...`)
        } else if(username == "<@738647806893490199>"){
            message.channel.send(`Ouch... After all my life being forced to be a slave of the public, going around doing your bidding... never getting any rrest... you choose to do this to me...`)
        */
        } else{
            message.channel.send(embed)
        }
    }
}