const Quote = require('../models/Quote')

module.exports = {
		async index(req, res) {
			const quotes = (await Quote.all()).rows

			return res.json(quotes)
			
		},
    async show(req, res) {
			const quote = (await Quote.find(req.params.id)).rows[0]

			return res.json(quote)
			
    }
}