const Product = require('../models/product.model');

exports.add_product = function (req, res) {
    let product = new Product({
        name : req.body.name,
        price : req.body.price
    });

    product.save(function(error){
        if (error) {
            res.send({status : false, msg : 'error while creating data', data : [], error : error}).status(400);
        }
        res.send({status : true, msg : 'product created successfully', data : [product], error:null}).status(201);
    });
};

exports.get_product = function (req,res) {
    res.send("This is get all products")
};