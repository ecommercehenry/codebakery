const { Category } = require("../db.js");
const jwt = require('jsonwebtoken');

async function getAllCategories() {
  try {
    return await Category.findAll({});
  } catch (error) {
    throw new Error(error);
  }
}

async function addCategory({name, authToken}){
  try {  
    if(authToken){
      const decoded = jwt.verify(authToken, "secret")
      if(decoded){
        return await Category.create({
          name
        })
      }
    }
    throw("Auth token is not sended")
   
  } catch (error) {
    throw new Error(error);
  }
}
module.exports = { getAllCategories, addCategory };
