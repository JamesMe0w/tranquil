const Discord = require('discord.js')
const donotshare = require('./admin/token.json')
const token = donotshare.token;

const fetch = require('node-fetch');

const redditFetch = require('tsumiki-reddit.js');

const fs = require('fs');
const { stringify } = require('querystring');
const { on } = require('process');
const { lookup } = require('dns');


const prefix = 't!';



const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.settings = require ("./admin/settings.json")
const welcomer = require("./utilities/welcomer.js")


client.on('ready', () => {
  console.log('Bot is now connected');
  client.user.setActivity(`${prefix}help`);

  welcomer.memberJoinScript(client);
});




var numberselect;

var banlist = [

]



client.on('message', message =>{
  
  client.settings = require ("./admin/settings.json")
  var testingmodeswitch = client.settings.testingmode

  if(!message.content.startsWith(prefix) || message.author.bot) return;

  /*

  var banstatus = banlist.includes(message.author.id)

  if(banstatus = true){
    message.channel.send("Rip you've been banned rip rip nibba") 
    return;
  }

  */

  if(testingmodeswitch === 'true'){
    if(!message.member.roles.cache.has('739816324875944018')){
      const Discord = require('discord.js');
          const embed = new Discord.MessageEmbed()
          .setTitle("**Bot is in testing mode! :no_entry_sign:**")
          .setDescription(`Apologies, but you cannot use commands during this time!`)
          .setThumbnail("https://seragpsych.com/wordpress/wp-content/uploads/2014/08/C01-Crossed-Arms.jpg")
          .setColor(0xdef910)
  
          message.channel.send(embed)
      return;
    }
  }

  
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'ping'){
    client.commands.get('ping').execute(message, args);
  } else if (command == 'help'){
    client.commands.get('help').execute(message, args);
  } else if (command == 'howgay'){
    client.commands.get('howgay').execute(message, args);
  } else if (command == 'ratewaifu'){
    client.commands.get('ratewaifu').execute(message, args);
  } else if (command == 'admin'){
    client.commands.get('admin').execute(message, args);
  } else if (command == 'haze'){
    client.commands.get('haze').execute(message, args);
  } else if (command == 'botdata'){
    client.commands.get('botdata').execute(message, args);
  } else if (command == 'story'){
    client.commands.get('story').execute(message, args);
  } else if (command == 'flipcoin'){
    client.commands.get('flipcoin').execute(message, args);
  } else if (command == 'pp'){
    client.commands.get('pp').execute(message, args);
  } else if (command == 'kaiserfy'){
    client.commands.get('kaiserfy').execute(message, args);
  } else if (command == 'admin-message'){
    client.commands.get('admin-message').execute(message, args);
  } else if (command == 'dadjokes'){
    client.commands.get('dadjokes').execute(message, args);
  } else if (command == 'rascism'){
    client.commands.get('rascism').execute(message, args);
  } else if (command == 'testingmode'){
    client.commands.get('testingmode').execute(message, args);
  } else if (command == 'timetable'){
    client.commands.get('timetable').execute(message, args);
  } else if (command == 'communism'){
    client.commands.get('communism').execute(message, args);
  } else if (command == 'ndp'){
    client.commands.get('ndp').execute(message, args);
  } else if (command == 'nuke'){
    client.commands.get('nuke').execute(message, args);
  } else if (command == 'landstrike'){
    client.commands.get('landstrike').execute(message, args);
  } else if (command == 'japanpics'){
    client.commands.get('japanpics-precached').execute(message, args);
  } else if (command == 'memes'){
    client.commands.get('memes-precached').execute(message, args);
  } else if (command == 'weather'){
    client.commands.get('weather').execute(message, args);
  } else if (command == 'traffic'){
    client.commands.get('traffic').execute(message, args);
  } else if (command == 'aww'){
    client.commands.get('aww-precached').execute(message, args);
  } else if (command == 'hentai'){
    client.commands.get('hentai-precached').execute(message, args);
  } else if (command == 'r34'){
    client.commands.get('rule34-precached').execute(message, args);
  } else if (command == 'thighs'){
    client.commands.get('thighs-precached').execute(message, args);
  } else if (command == 'reddit'){
    client.commands.get('reddit').execute(message, args);
  } else if (command == 'admin-cachecheck'){
    client.commands.get('admin-cachecheck').execute(message, args);
  }

});

const cron = require('node-cron');
const updater = require('./utilities/updater')
var memesprecache = cron.schedule("*/30 * * * *", function(){
  updater.execute()
  return;
}); 

memesprecache.start();


client.login(token);
