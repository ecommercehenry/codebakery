const { Category } = require('../db.js');

async function getAllCategory(){
    return await Category.findAll({})
}

module.exports = {getAllCategory}