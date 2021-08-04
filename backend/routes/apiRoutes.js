const express = require('express')
const router = express.Router()
const User = require('../models/user')


router.get('/', (req, res) => {
    User.find()
        .then(result => res.json(result))
        .catch(err => console.log(err))
})
router.post('/', (req, res) => {
    // console.log(req.body)
    const user = new User(req.body)
    user.save()
        .then(result => res.json({ redirect: "/users" }))
        .catch(err => console.log(err))
})
router.get('/:id', (req, res) => {
    // console.log(req.params.id)
    User.findById(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json({ message: "Not Found :-(" }))
})
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(result => res.json({ redirect: "/users" }))
        .catch(err => res.json(err))
})
router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(result => res.json({ redirect: "/users" }))
        .catch(err => res.json(err))
})

module.exports = router