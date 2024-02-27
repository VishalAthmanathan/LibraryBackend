// const db = require('../database/db');

// const test = (req, res) => {
//     console.log("Working");
//     res.json("Backend working");
// }

// const getBooks = (req, res) => {
//     const sql = 'SELECT * FROM librarybooks';
  
//     db.query(sql, (error, results) => {
//       if (error) {
//         console.error('Error executing query:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//         return;
//       }
//       console.log(results.rows);
//       res.status(200).json(results.rows);
//     });
//   };

//   const admindata = (req,res) => {
//     const id = req.body.id;
//     const bookname = req.body.bookname;
//     const author = req.body.author;
//     const genre = req.body.genre;
//     const publishdate = req.body.publishdate;
//     console.log(id,bookname,author,genre,publishdate);
//     let sql = 'INSERT into librarybooks (id, bookname, author, genre, publishdate) VALUES ($1, $2, $3, $4, $5)';
//     const VALUES = [id, bookname, author, genre, publishdate];
//     console.log(VALUES);
//         db.query(sql, VALUES,(error) => {
//       if(error) {
//         console.log(error);
//         return res.status(500).json({ error: 'server error' });
//       }
//       console.log("Data added successfully");
//       res.status(200).json("Added to DB Successfully");
//     });
//   }

// module.exports = {
//     test,
//     getBooks,
//     admindata
// }

const supabase = require('../database/db');

const test = (req, res) => {
    console.log("Working");
    res.json("Backend working");
}

const getBooks = async (req, res) => {
    try {
        const { data, error } = await supabase.from('librarybooks').select('*');
        if (error) {
            console.error('Error executing query:', error.message);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        console.error('Error executing query:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const admindata = async (req, res) => {
    const { id, bookname, author, genre, publishdate } = req.body;
    console.log(id, bookname, author, genre, publishdate);
    try {
        const { data, error } = await supabase.from('librarybooks').insert([
            { id, bookname, genre, publishdate, author }
        ]);
        if (error) {
            console.error('Error executing query:', error.message);
            return res.status(500).json({ error: 'Server error' });
        }
        console.log("Data added successfully");
        res.status(200).json("Added to DB Successfully");
    } catch (error) {
        console.error('Error executing query:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteItem = async (req, res) => {
    const id = req.body.id;
  
    try {
      const { data, error } = await supabase
        .from('librarybooks')
        .delete()
        .eq('id', id);
  
      if (error) {
        console.error('Error executing query:', error.message);
        return res.status(500).json({ error: 'Server error' });
      }
  
      console.log('Data is deleted successfully');
      return res.status(200).json('Deleted from DB Successfully');
    } catch (error) {
      console.error('Error executing query:', error.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

module.exports = {
    test,
    getBooks,
    admindata,
    deleteItem
}
