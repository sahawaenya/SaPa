class Controller{
    static signin (req,res) {
        res.send ('SaPa hi..')
    }

    static login (req,res) {
        res.render('./user/login')
    }

    static profile (req,res) {
        res.send ('SaPa hi..')
    }

}

module.exports = Controller