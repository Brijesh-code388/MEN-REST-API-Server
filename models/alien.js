const mogoose = require('mongoose')


const alienSchema = new mogoose.Schema({
    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false

    }
})


module.exports = mogoose.model('Alien', alienSchema)
