const User = require('../models/user')

const api_index_get = (req, res) => {
    User.find()
        .then(result => res.json(result))
        .catch(err => console.log(err))
}
const api_index_post = (req, res) => {
    // console.log(req.body)
    const user = new User(req.body)
    user.save()
        .then(result => res.json(result))
        .catch(err => console.log(err))
}
const api_detail_get = (req, res) => {
    // console.log(req.params.id)
    User.findById(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json({ message: "Not Found :-(" }))
}
const api_detail_put = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
}
const api_detail_delete = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
}


module.exports = { api_index_get, api_index_post, api_detail_get, api_detail_put, api_detail_delete }