const express = require('express')
const router = express.Router()
const ctrl = require('./controllers')

router.get('/', ctrl.getAllPosts)
router.get('/:id', ctrl.getOnePost)
router.post('/', ctrl.createPost)
router.delete('/:id', ctrl.deletePost)
router.put('/:id', ctrl.editPost)

module.exports = router