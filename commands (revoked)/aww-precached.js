module.exports={
    name: 'aww-precached',
    description: "AWW!",
    async execute(message, args){
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const fetch = require('node-fetch');
        const precache = require('../precache/aww.json')
        var choice = Math.floor(Math.random() * 30) + 1;


        var title = precache.posts[0][choice].data.title
        var url = precache.posts[0][choice].data.permalink
        var image_url = precache.posts[0][choice].data.url
        var subreddit = precache.posts[0][choice].data.subreddit_name_prefixed

        const embed = new Discord.MessageEmbed()
        .setColor(0x00A2E8)
        .setTitle(title)
        .setURL(`https://www.reddit.com${url}`)
        .setImage(image_url)
        .setAuthor(`Taken from ${subreddit}`)
        .setFooter("Tranquil - Made by @JamesMeow & @CupOfT3a", "https://i.pinimg.com/736x/fe/02/69/fe02693231e9080232ea1fb91e299438.jpg")
        

        message.channel.send(embed); 

    }
}