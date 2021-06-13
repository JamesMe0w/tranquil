module.exports={
    name: 'help',
    description: "this is all the commands you can use",
    execute(message, args){
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const fs = require('fs');
        const embed = new Discord.MessageEmbed()
        .setTitle(`**Tranquil (Help Page)**`)
        .setDescription("Do `t!<command>` to execute!\n`t!help <command>` to view its use!")
        .setThumbnail("https://i.pinimg.com/736x/fe/02/69/fe02693231e9080232ea1fb91e299438.jpg")
        .setColor(0xe9a81c)
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: ':compass: Admin', value: '`admin` `ping` `botdata` `haze` `timetable` `weather`', inline: true },
            
            { name: ':eggplant: Fun', value: '`howgay` `ratewaifu` `pp` `kaiserfy` `flipcoin` `dadjokes` `nuke` `landstrike`', inline: true },
            
            { name: ':milky_way: Pictures', value: '`japanpics` `memes` `traffic` `aww` `reddit`', inline: true },
            
            { name: ':underage: NSFW', value: '`hentai` `r34` `thighs`', inline: true },
            { name: '\u200B', value: '\u200B' },
        )
        .setFooter("Tranquil - Made by @JamesMeow & @CupOfT3a", "https://i.pinimg.com/736x/fe/02/69/fe02693231e9080232ea1fb91e299438.jpg")
        
        var commandhelp = args[0]

        if(args[0] !== undefined){

            fs.access(`../DiscordBot2/commands/${commandhelp}.js`, fs.F_OK, (err) => {
                if (err) {
                    console.error(err);
                    message.channel.send("No such command exists!")
                    return;
                } else {
                    const helpdata = require(`./${commandhelp}`);
                    var commanddescription = helpdata.description;
                    message.channel.send(commanddescription);
                }
            })

        } else {
            message.channel.send(embed)
        }

        
        

        

        /*

        var numberselect = parseInt(args)
        if(numberselect === 1){
            message.channel.send('**Welcome to Tranquil Bot!** :sparkles:\nThese are the commands you can use:\n \n**- Administrative Commands :compass: -**\n`t!admin` - Make yourself an admin\n`t!ping` - Test command\n \n(Page 1 of 5)');
        } else if(numberselect == 2){
            message.channel.send('**Welcome to Tranquil Bot!** :sparkles:\nThese are the commands you can use:\n \n**- Information Commands :bellhop: -**\n`t!botdata` - Displays bot data\n`t!haze` - Current PSI\n \n(Page 2 of 5)');
        } else if(numberselect == 3){
            message.channel.send('**Welcome to Tranquil Bot!** :sparkles:\nThese are the commands you can use:\n \n**- Fun Commands :eggplant: -**\n`t!howgay` - How gay are you?\n`t!ratewaifu` - Waifu?\n`t!kaiserfy` - Which Kaiser are you?\n`t!pp` - Measures your pp size? Wait you had a pp?\n`t!flipcoin` - Heads or tails!\n \n(Page 3 of 5)');
        } else if(numberselect == 4){
            message.channel.send('**Welcome to Tranquil Bot!** :sparkles:\n \n \nUnfortunately, Music Commands will be disabled temporarily until further notice.');
        } else{
            message.channel.send('**Welcome to Tranquil Bot!** Type t!help <page number> to view the commands!\n \n`t!help 1` - Administrative Commands\n`t!help 2` - Information Commands\n`t!help 3` - Fun Commands\n`t!help 4` - Music Commands (Disabled)\n \n \n \n**NOTE! This bot is still under development, there are likely to be bugs present**\n*Made by @JamesMeow and @CupOfT3a*');
        }
        */

        
    }

}


/*
**Welcome to Tranquil Bot!** :sparkles:\nThese are the commands you can use:\n \n**- Music Commands :musical_note: -**\n`t!join` - Plays a Youtube Link! (Link behind Command)\n`t!pause` - Pause the song\n`t!resume` - Continue the song\n`t!volume` - Adjust Volume (To be fixed)\n`t!earrape` - Wonder what this does...
*/