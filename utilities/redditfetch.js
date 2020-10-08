exports.redditFetchScript = async function (message, subreddit, numero, nsfw, type) {

    const Discord = require('discord.js');
    const client = new Discord.Client();
    const fetch = require('node-fetch');
    const redditFetch = require('tsumiki-reddit.js');

    if (type === "custom"){
        if (nsfw == true){
            if (message.channel.nsfw == null || message.channel.nsfw == false){
                message.channel.send("You must be in a NSFW channel!")
                return;
            }
        }
    }

    redditFetch({
        subreddit: subreddit,
        type: `top`,
        sort: 'all',
        allowNSFW: nsfw,
        allowModPost: true,
        allowCrossPost: true,
        allowPosts: false, 
        amount: numero,

    }).then(post => {
            
        if (post == 0 || post == null) {
            if(type === "user-selected"){
                message.channel.send("Invalid Response. Did you enter a valid Subreddit? NSFW content and text posts are not allowed.")
                return;
            } else {
                message.channel.send("Error Occurred! Please try again later...")
                return;
            }
        }     
           
        var embed = new Discord.MessageEmbed()
        .setColor(0x00A2E8)
        .setTitle(post.title)
        .setURL(`https://reddit.com${post.permalink}`)
        .setImage(post.url)
        .setAuthor(`Taken from ${post.subreddit_name_prefixed}`)
        .setFooter("Tranquil - Made by @JamesMeow & @CupOfT3a", "https://i.pinimg.com/736x/fe/02/69/fe02693231e9080232ea1fb91e299438.jpg")

        message.channel.send(embed);
        return;
    });


};
