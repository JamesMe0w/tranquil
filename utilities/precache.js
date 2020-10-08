
exports.redditPrecacheScript = async function (subreddit, amount, nsfw, filename) {

    /* 
    subreddit is the subreddit to be fetched
    amount is number of posts
    nsfw is true/false, whether nsfw allowed
    filename is name of cachefile, need to include.json
    */

    const Discord = require('discord.js');
    const client = new Discord.Client();
    const fetch = require('node-fetch');
    const redditFetch = require('tsumiki-reddit.js');
    const fs = require('fs')
    client.precache = require (`../precache/${filename}`)

    redditFetch({
        subreddit: subreddit,
        type: `new`,
        sort: 'all',
        allowNSFW: nsfw,
        allowModPost: true,
        allowCrossPost: true,
        allowPosts: false, 
        amount: amount,

    }).then(post => {    

        client.precache.posts = []; 


        client.precache.posts.push(post) 

        fs.writeFile (`../DiscordBot2/precache/${filename}`, JSON.stringify (client.precache), function writeJSON(err) {
            if (err) return console.log(err);
            console.log("Changed Data")
        });

        console.log("Precache Complete! 100 Posts Loaded")
       
    });
}


