const fetch = require("node-fetch");
const reddit_link1 = 'https://www.reddit.com/r/Sexy/random.json';
// const reddit_link2 = 'https://www.reddit.com/r/nudes/random.json';
const reddit_link3 = 'https://www.reddit.com/r/BellaThorne/random.json';

export default (bot) => {

    bot.hears('bella', (ctx) => {

        fetch(reddit_link3)
            .then(response => response.json())
            .then(data => ctx.replyWithPhoto(data[0]['data']['children'][0]['data']['url']))

    })

    //TODO: WORKING ON THIS
    /*
       bot.hears('nude', (ctx) => {
   
           fetch(reddit_link2)
               .then(response => response.json())
               .then(data => ctx.replyWithPhoto(data[0]['data']['children'][0]['data']['url']))
   
       })
   */
    bot.hears('girl', (ctx) => {

        fetch(reddit_link1)
            .then(response => response.json())
            .then(data => ctx.replyWithPhoto(data[0]['data']['children'][0]['data']['url']))

    })


    bot.on('text', (ctx) => {
        let messages = {
            "ağla": "ÜHÜHÜHÜHÜHÜHÜHÜHÜHÜHÜHÜ",
            "hapşu": "ÇOK YAŞA",
            "delir": "OOOOWOAOWPOFQMPOFMEKPFMWOMDFEOIĞMDJWDNIEFN",
            "sa": "as",
            "merhaba": "merhaba",


        }
        if (ctx.message.text.toLowerCase() in messages) {
            ctx.reply(messages[ctx.message.text.toLowerCase()])
        } else {
            ctx.reply("EFENDIMMM")
        }
    })


}