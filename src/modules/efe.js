const fetch = require("node-fetch");
const reddit_girl = 'https://www.reddit.com/r/Sexy/random.json';
const reddit_real_girls = 'https://reddit.com/r/RealGirls/random.json';
const reddit_bella = 'https://www.reddit.com/r/BellaThorne/random.json';
const reddit_cat = 'http://reddit.com/r/cat/random.json';
const reddit_college = 'https://www.reddit.com/r/collegesluts/random.json';
const reddit_titdrop = 'https://www.reddit.com/r/TittyDrop/random.json';
export default (bot) => {

    bot.hears('bella', (ctx) => {

        fetch(reddit_bella)
            .then(response => response.json())
            .then(data => ctx.replyWithPhoto(data[0]['data']['children'][0]['data']['url']))

    })

    bot.hears('titdrop', (ctx) => {

        fetch(reddit_titdrop)
            .then(response => response.json())
            .then(data => ctx.replyWithAnimation(data[0]['data']['children'][0]['data']['media']['oembed']['thumbnail_url']))

    })

    bot.hears('college', (ctx) => {

        fetch(reddit_college)
            .then(response => response.json())
            .then(data => ctx.replyWithPhoto(data[0]['data']['children'][0]['data']['url']))

    })

    bot.hears('cat', (ctx) => {

        fetch(reddit_cat)
            .then(response => response.json())
            .then(data => ctx.replyWithPhoto(data[0]['data']['children'][0]['data']['url']))

    })

    //TODO: WORKING ON THIS

    bot.hears('nude', (ctx) => {

        fetch(reddit_real_girls)
            .then(response => response.json())
            .then(data => ctx.replyWithPhoto(data[0]['data']['children'][0]['data']['url']))

    })

    bot.hears('girl', (ctx) => {

        fetch(reddit_girl)
            .then(response => response.json())
            .then(data => ctx.replyWithPhoto(data[0]['data']['children'][0]['data']['url']))

    })


    bot.on('text', (ctx) => {
        let messages = {
            "info": "Bella Throne için: bella\nCollege icin: college\nNude icin: nude\nGüzel kızlar için: girl\nKedi Fotoğrafları için: cat\nYeni eklenen özelliği denemek için: titdrop\n yazabilirsiniz :) ",
            "ağla": "ÜHÜHÜHÜHÜHÜHÜHÜHÜHÜHÜHÜ",
            "hapşu": "ÇOK YAŞA",
            "delir": "OOOOWOAOWPOFQMPOFMEKPFMWOMDFEOIĞMDJWDNIEFN",
            "sa": "as",
            "merhaba": "merhaba",
            "kudur": "AAAHHHAAAAAAAA",


        }
        if (ctx.message.text.toLowerCase() in messages) {
            ctx.reply(messages[ctx.message.text.toLowerCase()])
        } else {
            ctx.reply("EFENDIMMM")
        }
    })


}