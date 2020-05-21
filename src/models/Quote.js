const mongoose = require('mongoose')

const QuoteSchema = new mongoose.Schema({
	quote: String
})

module.exports = mongoose.model('Quote', QuoteSchema)


// {
// 		all(){
// 			return db.query (`
// 				SELECT * 
// 				FROM quotes
// 			`)
// 		},
//     find(id){
// 			return db.query(`
// 				SELECT * 
// 				FROM quotes
// 				WHERE id = $1
// 			`, [id])
//     }
// }