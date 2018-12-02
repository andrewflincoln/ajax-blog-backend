const model = require('./models')

function getAllPosts(req, res) {
    res.status(200).send(model.getAllPosts())
}
function getOnePost(req, res, next) {
    const gotPost = model.getOnePost(req.params.id)
    if (gotPost.error) return next({status: 404, message: gotPost.error})
    res.status(200).send(gotPost)
}

function createPost(req, res) {
    const createdPost = model.createPost(req.body.title, req.body.content)
    if (createdPost.title == '' || createdPost.content == '') { return next({status: 400, message: createdPost.error}) }
    res.status(201).send(createdPost)
}

function deletePost(req, res) {
    res.status(204).send(model.deletePost(req.params.id))
}

function editPost(req, res) {
    const updatedPost = model.editPost(req.params.id, req.body.title, req.body.content)
    if (updatedPost.title == "" || updatedPost.content == "") { return next({status: 400, message: udpatedPost.error}) }
    res.status(201).send(updatedPost)
}

 module.exports = {createPost, getAllPosts, getOnePost, deletePost, editPost}