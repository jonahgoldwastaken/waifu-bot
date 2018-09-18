process.env["NTBA_FIX_319"] = 1;
const TelegramBot = require('node-telegram-bot-api')

require('dotenv').config()
const botToken = process.env.TELEGRAM_TOKEN
const waifuBot = new TelegramBot(botToken, {polling: true, filepath: false})

const waifuDB = [
    ['HUUUHHHH???!?!?! ','?!?!?!! KAWAAAIII DESUU ≧◡≦'],
    ['!!!! YASSSS ＼（＾○＾）人（＾○＾）／'],
    ['... SENPAI ECCHIIIII o(╥﹏╥)o'],
    ['??? HONTOU?????? 〴⋋_⋌〵'],
    ['SENPAI?!?! ', '??!! BAKA щ(ಠ益ಠщ)'],
    ['??? OwO WHAT\'S THIS?!?!']
]

const mapToUpperCase = text => text.toUpperCase()

const addWaifuText = text => {
    const waifuMood = waifuDB[Math.floor(Math.random() * (waifuDB.length - 1))]
    if (waifuMood.length > 1)
        return waifuMood[0].concat(text, waifuMood[1])
    else
        return text.concat(waifuMood[0])
}

/**
 * 
 * @param {String} text 
 */
const waifufyText = text => addWaifuText(mapToUpperCase(text))

waifuBot.on('message', ({ chat: { id }, text }) => {
    const waifufiedText = waifufyText(text)
    waifuBot.sendMessage(id, waifufiedText)
})
