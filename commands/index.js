const fs = require('fs');
const { Collection } = require('discord.js');

const commands = new Collection();

module.exports = {
  commands: commands
};

const files = fs.readdirSync('./commands/paths').filter(file => file.endsWith('.js'));
for(const file of files){
  const command = require(`./paths/${file}`);
  commands.set(command.name, require(`./${command.category}/${command.file}`))
};

// command name is the command user types, category is which folder, file is which file to execute
// these are stored in the 'path' file inside the paths folder