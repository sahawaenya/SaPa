const { User, Profile } = require('../models/index')

class Controller{
    static home(req, res){
        res.render('./user/home')
    }


    static getSignup (req,res) {
        res.render('./user/signup')
    }

    static postSignup (req,res) {
        // res.send(req.body)

        User.create(req.body)
        .then((data) => {
            Profile.create({UserId: data.id})
            .then((_) => res.redirect('/users'))
            .catch( err => res.send(err))
            })
        .catch( err => res.send(err))
    }

    static signin (req,res) {
        
        res.render('./user/login')
    }

    static profile (req,res) {
        res.send ('SaPa hi..')
    }

}

module.exports = Controller