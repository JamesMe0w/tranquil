module.exports={
    name: 'admin-message',
    description: "sends an admin message",
    execute(message, args){

        if(message.member.roles.cache.has('739816324875944018')){
            message.channel.send('Good Night! I will be offline until 4 August 2020, 1pm. See you in the morning! hoot hoot');
        } else {
            message.channel.send('**You do not have permissions to send this message! :no_entry_sign:**')
        }
        
    }
}

/*
**Tranquil Bot Updates :robot:**\n \nThe bot will be undergoing major updates over these few days.\nExpect frequent lagging, bot shutdowns and restarts during this time\n \n \n \n`Update/News 01 - 3 August 2020`
*/