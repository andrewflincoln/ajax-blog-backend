//requires
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const uuid = require('uuid/v4')
const routes = require('./routes')
const cors = require('cors')

//inits
const app = express()
const port = process.env.PORT || 3000

//middlewares
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/blogposts', cors(), routes)

app.use((err, req, res, next) => {
    console.error(err)
    const status = err.status || 500
    res.status(status).send({error: err})
})

app.listen(port, () => console.log(`Ajax blog listening on port ${port}.`))

module.exports = app







