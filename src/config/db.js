const { Pool } = require("pg")

module.exports = new Pool({
    user: "postgres",
    password: "mironga",
    host: "localhost",
    port: 5432,
    database: "quoach"
})