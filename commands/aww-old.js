module.exports={
    name: 'aww',
    description: "ah yes the market!",
    async execute(message, args){
        const Discord = require('discord.js');
        const client = new Discord.Client;
        const redditFetchScript = require('../utilities/redditfetch');
        
        var subreddit = "aww"
        var numero = 1
        var nsfw = false
        var type = "custom"
        
        redditFetchScript.redditFetchScript(message, subreddit, numero, nsfw, type)
        

    
    }
}