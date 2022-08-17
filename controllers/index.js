const { Disease, Profile, Symptomp, User } = require ('../models/index')

class Controller {
    static home (req,res) {
        res.render('home')
    }
}

module.exports = Controller