exports.memberJoinScript = function (client) {

    const Discord = require('discord.js')
    const channelId = '733363015453376618'
    
    client.on('guildMemberAdd', (member) => {

        if (member.guild.id === "733363015453376613"){
            const channel = member.guild.channels.cache.get(channelId)
            const embed = new Discord.MessageEmbed()
            .setColor(53606)
            .setTitle("Welcome!")
            .setDescription(`<@${member.id}> has joined Tranquil.`)
            .setThumbnail(member.user.avatarURL())
            .setFooter("Tranquil - Made by @JamesMeow & @CupOfT3a", "https://i.pinimg.com/736x/fe/02/69/fe02693231e9080232ea1fb91e299438.jpg");

            channel.send(embed)
        }

    })

}