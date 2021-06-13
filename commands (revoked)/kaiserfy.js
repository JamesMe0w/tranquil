module.exports={
    name: 'kaiserfy',
    description: "gothem kaiser, frans the kaiser!",
    execute(message, args){
        var choices = [
            "Wilhem II",
            "Fredrick III",
            "William I",
            "Franz Joseph I",
            "Francis II",
            "Ferdinand I",
            "Charles I",
            "Fredrick I",
            "Sigismund",
            "Fredrick II",
            "Henry III",
            "Charles V",
            "Joseph II",
            "Otto I",
            "Conrad II",
            "Otto II",
            "Charles IV",
            "Louis IV",
            "Francis I",
            "Leopold II",
            "Charles VI",
            "Maximilian I",
            "Rudolf II",
            "Henry IV",
            "Alexander I",
            "Adolf Hitler",
            "Joseph Stalin",
            "Lenin",
            "Trotsky"
        ]

        var output = choices[Math.floor(Math.random()*choices.length)];

        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
        .setTitle("**Which Kaiser are you?**")
        .setDescription(`You like a ${output} to me!`)
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Kaiser_Wilhelm_II_of_Germany_-_1902.jpg/1200px-Kaiser_Wilhelm_II_of_Germany_-_1902.jpg")

        message.channel.send(embed);
    }
}