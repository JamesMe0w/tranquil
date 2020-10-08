const { DiscordAPIError } = require("discord.js");

module.exports={
    name: 'rascism',
    description: "this is a ping command!",
    execute(message, args){
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
        .setTitle("This is a test")
        .setImage("https://www.rollingstone.com/wp-content/uploads/2019/12/5879708cW.jpg")

        /*
        message.channel.send({embed: {
            colour: 3447003,
            title: "That's Racist",
            Image: {
                url: "https://i.imgur.com/ONngPJY.gifv"
            },
        }});
        */

        message.channel.send(embed);
        
    }
}