const express = require('express');
const router = express.Router();

const {home,register, readall} = require("../controllers/indexController");

router.get('/',home);

router.post('/register',register);
router.get('/readall',readall);

module.exports = router;