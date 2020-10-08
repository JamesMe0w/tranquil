module.exports={
    name: 'reddit',
    description: "searches for custom reddit posts",
    async execute(message, args){
        const Discord = require('discord.js');
        const client = new Discord.Client;
        const redditFetchScript = require('../utilities/redditfetch');
        
        if(args[0] == null){
            message.channel.send("You need to input a valid subreddit!")
            return;
        } else if (args[1] != null){
            message.channel.send("Subreddits must be contained to one word!")
            return;
        }

        var subreddit = args[0]
        var numero = 1
        var nsfw = false
        var type = "user-selected"

        redditFetchScript.redditFetchScript(message, subreddit, numero, nsfw, type)
        

    
    }
}