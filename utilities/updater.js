module.exports = {

    name: "updater",
    execute(){

    const Discord = require('discord.js');
    const redditPrecacheScript = require('./precache.js');
        
    redditPrecacheScript.redditPrecacheScript("memes", 120, false, "memes.json")

    redditPrecacheScript.redditPrecacheScript("aww", 120, false, "aww.json")
    
    redditPrecacheScript.redditPrecacheScript("dankmemes", 120, false, "dankmemes.json")

    redditPrecacheScript.redditPrecacheScript("hentai", 120, true, "hentai.json")

    redditPrecacheScript.redditPrecacheScript("japanpics", 120, false, "japanpics.json")

    redditPrecacheScript.redditPrecacheScript("rule34", 120, true, "rule34.json")

    redditPrecacheScript.redditPrecacheScript("thighs", 120, true, "thighs.json")

    return;

    }

};