const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.json({name:"Chetan",testing_status:"OK"});
});

module.exports = router;