module.exports={
    name: 'dadjokes',
    description: "amazing jokes by amazing people!",
    execute(message, args){
        const Discord = require('discord.js');
        const client = new Discord.Client();
        var choices = [
            "Today, my son asked 'Can I have a book mark?' and I burst into tears. 11 years old and he still doesn't know my name is Brian. ",
            "How do you make holy water? You boil the hell out of it.",
            "If a child refuses to sleep during nap time, is he guilty of resisting a rest?",
            "I'm reading a book about anti-gravity. It's impossible to put down!",
            "What do you call someone with no body and no nose? Nobody knows.",
            "I ordered a chicken and an egg from Amazon. I'll let you know.",
            "What is the least spoken language in the world? Sign language.",
            "What do sprinters eat before a race? Nothing, they fast!",
            "What did Sushi A say to Sushi B? Wasabi!",
            "Why couldn't the bicycle stand up by itself? It was too tired!",
            "Did you hear about the restaurant on the moon? Great food, no atmosphere!"
            
        ]

        var output = choices[Math.floor(Math.random()*choices.length)];

        const embed = new Discord.MessageEmbed()
        .setColor(0x00A2E8)
        .setTitle("Dad Jokes")
        .setDescription(output)
        .setFooter("Tranquil - Made by @JamesMeow & @CupOfT3a", "https://i.pinimg.com/736x/fe/02/69/fe02693231e9080232ea1fb91e299438.jpg")
        

        message.channel.send(embed);
    }
}