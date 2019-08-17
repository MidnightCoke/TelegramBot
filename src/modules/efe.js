export default (bot) => {

    bot.on('text', (ctx) => {
       let messages = {
           "ağla": "ÜHÜHÜHÜHÜHÜHÜHÜHÜHÜHÜHÜ",
           "hapşu": "ÇOK YAŞA",
           "delir": "OOOOWOAOWPOFQMPOFMEKPFMWOMDFEOIĞMDJWDNIEFN",
           "": ""

       }
        if (ctx.message.text.toLowerCase() in messages){
            ctx.reply(messages[ctx.message.text.toLowerCase()])
       }else{
           ctx.reply("EFENDIMMM")
       }
    })


}