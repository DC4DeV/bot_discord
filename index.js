const getToken = require('./secret.js')
const Discord = require('discord.js')
const Google = require('./command/google')

const bot = new Discord.Client()


bot.on('ready', function () {

    bot.user.setUsername('Dev Stories Bot').catch(console.error)
    bot.user.setAvatar('./avatar.jpeg').catch(console.error)
    bot.user.setActivity('marteler les trolls').catch(console.error)
})

bot.on('message', function (message){

    Google.parse(message)
        
    if (message.content === 'coucou le bot') {

        message.reply('Salut tete de noeud !!!!')
    }
    if(message.content === 'Qui est ton maitre ?') {

        message.reply('Mon maitre est C Damien')
    }
    
})

bot.login(getToken('botToken'));