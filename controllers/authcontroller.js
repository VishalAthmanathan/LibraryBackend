const db = require('../database/db');

const test = (req, res) => {
    console.log("Working");
    res.json("Backend working");
}

const getBooks = (req, res) => {
    const sql = 'SELECT * FROM librarybooks';
  
    db.query(sql, (error, results) => {
      if (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      console.log(results.rows);
      res.status(200).json(results.rows);
    });
  };

module.exports = {
    test,
    getBooks
}