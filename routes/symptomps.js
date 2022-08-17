const routes = require('express').Router()

const Controller = require('../controllers/symptomps')

routes.get('/', Controller.home)

module.exports = routes