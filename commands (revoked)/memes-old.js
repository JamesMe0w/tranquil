module.exports={
    name: 'memes',
    description: "ah yes the market!",
    async execute(message, args){
        const Discord = require('discord.js');
        const client = new Discord.Client;
        const redditFetchScript = require('../utilities/redditfetch');
        
        var subreddit = "memes"
        var numero = 1
        var nsfw = false
        var type = "custom"
        
        redditFetchScript.redditFetchScript(message, subreddit, numero, nsfw, type)
        

    
    }
}