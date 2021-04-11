const { Category } = require('../db.js');

async function getAllCategories(){
    return await Category.findAll({})
}

async function addCategory({name}){
    console.log(name)
    
    return await Category.create({
        name
    })
}
module.exports = {getAllCategories, addCategory}
