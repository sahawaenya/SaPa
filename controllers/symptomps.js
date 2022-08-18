class Controller{

    static home(req, res){
        const titlePage = 'Home Symptomps'

        res.render('./symptomps/home', {titlePage})
    }
}

module.exports = Controller