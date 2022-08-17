const express = require('express')
const { Disease, Profile, Symptomp, User } = require ('../models/index')
const app = express()

class Controller {
    static home (req,res) {
        res.send ('SaPa hi..')
    }

    static signin (req,res) {
        res.send ('SaPa hi..')
    }

    static login (req,res) {
        res.render ('login')
    }

    static profile (req,res) {
        res.send ('SaPa hi..')
    }

    static tesSymptomp (req,res) {
        res.send ('SaPa hi..')
    }

    static diseaseResult (req,res) {
        res.send ('SaPa hi..')
    }
}

module.exports = Controller