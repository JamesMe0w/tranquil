module.exports={
    name: 'haze',
    description: "Checks PSI!",
    async execute(message, args){
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const fetch = require('node-fetch');
        const responseraw = await fetch('https://api.data.gov.sg/v1/environment/psi').then(response => response.json());

        console.log(responseraw.items[0].readings.psi_twenty_four_hourly)

        var PSINational = responseraw.items[0].readings.psi_twenty_four_hourly.national
        var PSINorth = responseraw.items[0].readings.psi_twenty_four_hourly.north
        var PSISouth = responseraw.items[0].readings.psi_twenty_four_hourly.south
        var PSIEast = responseraw.items[0].readings.psi_twenty_four_hourly.east
        var PSIWest = responseraw.items[0].readings.psi_twenty_four_hourly.west
        var PSICentral = responseraw.items[0].readings.psi_twenty_four_hourly.central

        const embed = new Discord.MessageEmbed()
        .setColor(0x00A2E8)
        .setTitle("Latest PSI Readings")
        .setAuthor("Taken from Gov.Sg API")
        .addFields(
            { name: "National", value: PSINational, inline: true },
            { name: "North", value: PSINorth, inline: true },
            { name: "South", value: PSISouth, inline: true },
            { name: "East", value: PSIEast, inline: true },
            { name: "West", value: PSIWest, inline: true },
            { name: "Central", value: PSICentral, inline: true },
        )
        .setFooter("Tranquil - Made by @JamesMeow & @CupOfT3a", "https://i.pinimg.com/736x/fe/02/69/fe02693231e9080232ea1fb91e299438.jpg")
        

        message.channel.send(embed);
        
        
        

    }
}