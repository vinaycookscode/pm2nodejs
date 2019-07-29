const express = require("express");
const router = express.Router();
const shop_cntrl = require('../controllers/shop.controller');

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route
router.get('/', shop_cntrl.get_shop);

// define the about route
router.post('/', shop_cntrl.add_shop);

module.exports = router;