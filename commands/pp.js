module.exports={
    name: 'pp',
    description: "measures your pp size!",
    execute(message, args){
        var choices = [
            "=",
            "==",
            "===",
            "====",
            "=====",
            "======",
            "=======",
            "========",
            "=========",
            "==========",
            "================",
            "======================",
            "=====================================================================================",

        ]

        var output = choices[Math.floor(Math.random()*choices.length)];

        message.channel.send(`Your PP size is 8${output}D`);
    }
}