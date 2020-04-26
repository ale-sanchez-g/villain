require('dotenv').config()

const { Pool } = require('pg')

const isProduction = process.env.NODE_ENV === 'production'
const isCi = process.env.ISCI

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

if (isCi) {
    const pool = new Pool({
        connectionString: isCi ? process.env.ELEPHANT_URL : connectionString,
        ssl: false,
        })
} else {
    const pool = new Pool({
    connectionString: isProduction ? process.env.ELEPHANT_URL : connectionString,
    ssl: isProduction,
    })
}
module.exports = { pool }