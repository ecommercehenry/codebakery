const { Category } = require('../db.js');

async function getAllCategory(){
    return await Category.findAll({})
}

async function addCategory(args){
    let newCategory = await Category.create(
        {
            name: args.name, 
            description: args.description
        }
    )
    return newCategory;
}

module.exports = {getAllCategory,addCategory}