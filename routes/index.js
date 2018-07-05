var express = require('express');
var router = express.Router();
var Product = require('../models/product');
/* GET home page. */
router.get('/', function(req, res, next) {
	// List all the data on the Product Collection.
    Product.find({}).exec(function (err, products) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("index", {products: products});
    }
  });
});

module.exports = router;