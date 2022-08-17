const { User, Profile } = require('../models/index')

class Controller{
    static getSignup (req,res) {
        res.render('./user/signup')
    }

    static postSignup (req,res) {
        // res.send(req.body)

        User.create(req.body)
        .then((data) => {
            Profile.create({UserId: data.id})
            .then((_) => res.redirect('/'))
            .catch( err => res.send(err))
            })
        .catch( err => res.send(err))
    }

    static login (req,res) {
        res.render('./user/login')
    }

    static profile (req,res) {
        res.send ('SaPa hi..')
    }

}

module.exports = Controller