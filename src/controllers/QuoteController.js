const Quote = require('../models/Quote')

module.exports = {
		async index(req, res) {
			const quotes = await Quote.find()

			return res.json(quotes)
			
		},
    async show(req, res) {
			const quote = await Quote.findById(req.params.id)

			return res.json(quote)
			
		},
		async store(req, res) {

			const { quote } = req.body

			const quoach = await Quote.create({ quote })

			return res.json(quoach)
		},
		async destroy(req, res) {

			const { id } = req.params.id

			await Quote.deleteOne({ id: id})

			return res.json("okay")
		}
}