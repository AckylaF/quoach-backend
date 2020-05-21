const express = require('express')
const routes = express.Router()
const quoteController = require('./controllers/QuoteController')


routes.get('/quoach', quoteController.index )
routes.get('/quoach/:id', quoteController.show )
routes.post('/quoach', quoteController.store )
routes.delete('/quoach/:id', quoteController.destroy )


module.exports = routes