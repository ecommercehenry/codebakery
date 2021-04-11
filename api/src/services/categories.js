const { Category } = require("../db.js");

async function getAllCategories() {
  try {
    return await Category.findAll({});
  } catch (error) {
    throw new Error(error);
  }
}

async function addCategory({ name, description }) {
  try {
    return await Category.create({
      name,
      description,
    });
  } catch (error) {
    throw new Error(error);
  }
}
module.exports = { getAllCategories, addCategory };
