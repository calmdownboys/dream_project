const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: 'Ynwa1892',
  port: 5432,
})
const getAuth = (request, response) => {
    pool.query('SELECT * FROM auth', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  module.exports ={
      getAuth
  }