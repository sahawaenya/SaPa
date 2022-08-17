const routes = require('express').Router()
const Controller = require('../controllers/index')
const users = require('./users')
const diseases= require('./diseases')
const symptomps = require('./symptomps')


routes.get('/', Controller.home)
routes.use('/users', users)
routes.use('/diseases', diseases)
routes.use('/symptoms', symptomps)




module.exports = routes