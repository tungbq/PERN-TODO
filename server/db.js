const Pool = require('pg').Pool

// Provide env variables (from './.env' file)
require('dotenv').config()

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: 'perntodo'
})

module.exports = pool