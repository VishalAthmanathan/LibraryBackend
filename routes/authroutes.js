const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, getBooks, admindata } = require('../controllers/authcontroller');

router.use(
    cors({
        origin: 'http://localhost:3000',
        credentials : true
    })
)

router.get('/',test);
router.get('/getBooks',getBooks);
router.post('/admindata',admindata);

module.exports=router;