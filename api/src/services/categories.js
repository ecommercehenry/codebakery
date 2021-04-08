const { Category } = require('../db.js');

async function getAllCategory(){
    return await Category.findAll({})
}

async function addCategory({name, description}){
    console.log(name)
    
    return await Category.create({
        name, 
        description
    })
}
module.exports = {getAllCategory, addCategory}
