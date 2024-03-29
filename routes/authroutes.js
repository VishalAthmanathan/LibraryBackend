const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, getBooks, admindata, deleteItem } = require('../controllers/authcontroller');

router.use(
    cors({
        origin: 'https://library-front-nine.vercel.app',
        credentials : true
    })
)

router.get('/',test);
router.get('/getBooks',getBooks);
router.post('/admindata',admindata);
router.post('/deleteItem',deleteItem);

module.exports=router;