const routes = require('express').Router()

const Controller = require('../controllers/users')

// sign in (username, passwords, role, fullname, email)
routes.get('/signin', Controller.signin)

// log in (username, passwords)
routes.get('/login', Controller.login)

// profile + button tes Symptomp (fullname, disease + symptom% + new Date ())
routes.get('/profile', Controller.profile)

module.exports = routes