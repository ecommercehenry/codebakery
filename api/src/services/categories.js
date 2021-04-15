const { Category } = require("../db.js");

async function getAllCategories() {
  try {
    return await Category.findAll({});
  } catch (error) {
    throw new Error(error);
  }
}

async function addCategory(name){ 
  try { 
    let  category = await Category.create({ name });
    // console.log(category, 'tatstats')
    let obj = {__typename: 'category', ...category.dataValues};
    return obj;
  } catch (error) {
    return {__typename: 'error', name: 'error', detail: 'Category already exist'};
  }
}
module.exports = { getAllCategories, addCategory };
