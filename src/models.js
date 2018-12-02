const uuid = require('uuid/v4')
let fs = require('fs')

function getAllPosts() {
    const blogPosts = JSON.parse(fs.readFileSync('src/posts.json', 'utf-8')).posts
    return blogPosts
}
function getOnePost(id) {
    const blogPosts = JSON.parse(fs.readFileSync('src/posts.json', 'utf-8')).posts
    let idPost = blogPosts.find((post) => post.id === id)
    if (!idPost) return {error: {message: `Post not found.`}}
    return idPost
}
function createPost(title, content) {
    const blogPosts = JSON.parse(fs.readFileSync('src/posts.json', 'utf-8')).posts
    if (!title || !content) return {error: {message: `Post must have both a title and body.`}} 
    let newPost = {
        "id": uuid(),
        "title": title,
        "content": content
    }
    blogPosts.push(newPost)
    fs.writeFileSync('src/posts.json', `{ "posts": ${JSON.stringify(blogPosts)} }`)
    return newPost
}
function editPost(id, title, content) {
    const blogPosts = JSON.parse(fs.readFileSync('src/posts.json', 'utf-8')).posts
    if (!title || !content) return {error: {message: `Updated post must have both a title and body.`}}
    let idPost = blogPosts.find(post => post.id === id)
    idPost.title = title
    idPost.content = content
    fs.writeFileSync('src/posts.json', `{ "posts": ${JSON.stringify(blogPosts)} }`)
    return idPost
}
function deletePost(id) {
    const blogPosts = JSON.parse(fs.readFileSync('src/posts.json', 'utf-8')).posts
    let idPost = blogPosts.find((post) => post.id === id)
    if (!idPost) return {error: {message: "Post not found"}}
    blogPosts.splice(blogPosts.indexOf(idPost), 1)
    fs.writeFileSync('src/posts.json', `{ "posts": ${JSON.stringify(blogPosts)} }`)
    return `Deleted`
}

module.exports = {getAllPosts, createPost, getOnePost, deletePost, editPost}