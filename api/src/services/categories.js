const { Category } = require('../db.js');

async function getAllCategories(){
    return await Category.findAll({})
}

async function addCategory({name, description}){    
    return await Category.create({
        name, 
        description
    })
}
module.exports = {getAllCategories, addCategory}
