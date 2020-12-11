exports.memberJoinScript = function (client) {

    const Discord = require('discord.js')
    const channelId = '721598478383317042'
    
    client.on('guildMemberAdd', (member) => {

        if (member.guild.id === "615807855219703809"){
            const channel = member.guild.channels.cache.get(channelId)
            const embed = new Discord.MessageEmbed()
            .setColor(53606)
            .setTitle("Welcome!")
            .setDescription(`<@${member.id}> has joined Tranquil.`)
            .setThumbnail(member.user.avatarURL())
            
            channel.send(embed)
        }

    })

    client.on('guildMemberRemove', (member) => {

        if (member.guild.id === "615807855219703809"){
            const channel = member.guild.channels.cache.get(channelId)
            const embed = new Discord.MessageEmbed()
            .setColor(15158332)
            .setTitle("Goodbye, see you again 😞!")
            .setDescription(`<@${member.id}> has left Tranquil.`)
            
            channel.send(embed)
        }
    })

}