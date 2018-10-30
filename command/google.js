const Global = require('./globalCommand')

module.exports = class Google extends Global {

    static match(message) {

        return message.content.startsWith('!google')
    }

    static action (message) {

        let args = message.content.split(' ')

        args.shift()

        message.delete()

        message.reply('https://www.google.fr/#q=' + args.join('%20'))
    }
}