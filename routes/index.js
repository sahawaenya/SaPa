const routes = require('express').Router()
const Controller = require('../controllers/index')
const users = require('./users')
const diseases= require('./diseases')
const symptomps = require('./symptomps')


routes.get('/', Controller.home)
routes.use('/users', users)
routes.use('/diseases', diseases)
routes.use('/symptoms', symptomps)



// test symptomp output penyakit
/*
Gejala apa saja yang anda rasakan?
- symptomp 1
- symptomp 2
dst
*/
// routes.get('/testDiseaseResult', Controller.tesSymptomp)

// output penyakit dari test symptomp (name, description)
// routes.post('/testDiseaseResult', Controller.diseaseResult)

module.exports = routes