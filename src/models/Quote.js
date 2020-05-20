const db = require('../config/db')


module.exports = {
		all(){
			return db.query (`
				SELECT * 
				FROM quotes
			`)
		},
    find(id){
			return db.query(`
				SELECT * 
				FROM quotes
				WHERE id = $1
			`, [id])
    }
}