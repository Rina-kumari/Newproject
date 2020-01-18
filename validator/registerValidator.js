const validator = require('validator')

const validate = user =>{
    var error = {}

    if(!user.name) {
        error.name = 'please provide your name'
    }

    if(!user.email) {
        error.email = 'Please provide your Email'
    } else if (!validator.isEmail(user.email)) {
        error.email = 'Please provide a valid Email'
    }
    if(!user.password) {
        error.password = 'Please provide a Password'
    } else if (user.password.length < 6) {
        error.password = 'Password must be greater or equal 6 character'
    }

    if(!user.confirmPassword) {
        error.confirmPassword = 'Please provide confirmation password'
    } else if (user.password !== user.confirmPassword) {
        error.confirmPassword = 'Password doesn\'t match'
    }

    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}

module.exports = validate