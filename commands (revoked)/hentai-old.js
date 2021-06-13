module.exports={
    name: 'hentai',
    description: "lick lick",
    async execute(message, args){
        const Discord = require('discord.js');
        const client = new Discord.Client;
        const redditFetchScript = require('../utilities/redditfetch');
        
        var subreddit = "hentai"
        var numero = 1
        var nsfw = true
        var type = "custom"

        redditFetchScript.redditFetchScript(message, subreddit, numero, nsfw, type)
        

    
    }
}