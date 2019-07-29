const express = require("express");
const router = express.Router();
const product_cntrl = require('../controllers/product.controller');

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route
router.get('/', product_cntrl.get_product);

// define the about route
router.post('/', product_cntrl.add_product);

module.exports = router;