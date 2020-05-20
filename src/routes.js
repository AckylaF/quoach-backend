const express = require('express')
const routes = express.Router()
const quoteController = require('./controllers/QuoteController')


routes.get('/quoach', quoteController.index )
routes.get('/quoach/:id', quoteController.show )


module.exports = routes