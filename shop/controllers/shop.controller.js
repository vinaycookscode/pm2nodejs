const Shop = require('../models/shop.model');

exports.add_shop = function (req, res) {
    let shop = new Shop({
        shop_name : req.body.shop_name,
        shop_desc : req.body.shop_desc,
        shop_addr : req.body.shop_addr,
        products : req.body.products
    });

    shop.save(function(error){
        if (error) {
            res.send({status : false, msg : 'error while creating data', data : [], error : error}).status(400);
        }
        res.send({status : true, msg : 'shop created successfully', data : [shop], error:null}).status(201);
    });
};

exports.get_shop = function (req,res) {
    res.send("This is get all shop")
};