const { Product } = require('../db.js');

async function getAllProducts(){
    return await Product.findAll({})
}

module.exports = {getAllProducts}