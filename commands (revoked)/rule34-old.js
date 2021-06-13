module.exports={
    name: 'rule34',
    description: "lick lick",
    async execute(message, args){
        const Discord = require('discord.js');
        const client = new Discord.Client;
        const redditFetchScript = require('../utilities/redditfetch');
        
        var subreddit = "rule34"
        var numero = 1
        var nsfw = true
        var type = "custom"

        redditFetchScript.redditFetchScript(message, subreddit, numero, nsfw, type)
        

    
    }
}