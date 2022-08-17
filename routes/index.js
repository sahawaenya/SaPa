const routes = require('express').Router()
const Controller = require('../controller/index')

// penjelasan SaPa + chart.js (numberOfUsers(x), listOfDiseases(y)) + sign in/log in + penjelasan tes Symptomp
routes.get('/', Controller.home)

// sign in (username, passwords, role, fullname, email)
routes.get('/user/signin', Controller.signin)

// log in (username, passwords)
routes.get('/user/login', Controller.login)

// profile + button tes Symptomp (fullname, disease + symptom% + new Date ())
routes.get('/user/profile', Controller.profile)

// test symptomp output penyakit
/*
Gejala apa saja yang anda rasakan?
- symptomp 1
- symptomp 2
dst
*/
routes.get('/testDiseaseResult', Controller.tesSymptomp)

// output penyakit dari test symptomp (name, description)
routes.post('/testDiseaseResult', Controller.diseaseResult)

module.exports = routes