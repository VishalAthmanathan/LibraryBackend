// const express = require('express');
// const db = require('../backend/database/db');

// const app = express();
// app.use(express.json());

// app.use('/',require('./routes/authroutes'));

// app.listen(8000, () => {
//     console.log("Server running");
//     db.connect((err) => {
//         if (err) throw err;
//         console.log("DB Connected Succesfully");
//     })
// })


const express = require('express');
const supabase = require('./database/db');

const app = express();
app.use(express.json());

app.use('/', require('./routes/authroutes'));

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
