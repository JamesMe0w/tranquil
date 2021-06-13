module.exports={
    name: 'admin-cachecheck',
    description: "Check latest cache",
    execute(message, args){
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const fetch = require('node-fetch');
        const precache = require('../precache/memes.json')

        if(message.author.id !== "733146760662220891"){
            return;
        }

        var cachecheck = precache.posts[0][0].data.title
        console.log(precache.posts[0][0])

        message.channel.send(`Latest Title - ${cachecheck}`)
        
    }
}
