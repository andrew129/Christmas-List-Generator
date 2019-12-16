var express = require('express')
var router = express.Router()
const db = require('../models')

router.post('/', function(req, res) {
    console.log('the req.body', req.body);
    db.List.create(req.body)
        .then(function(dbList) {
            console.log('the db', dbList);
            res.send(dbList)
        })
        .catch(function(err) {
            console.log(err)
            res.send(err)
        })
})

router.get('/', function(req, res) {
    console.log('get', req.body)
    db.List.find({})
        .then(dbList => {
            console.log(dbList)
            res.send(dbList)
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
})

module.exports = router;