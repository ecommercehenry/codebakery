const { Category } = require('../db.js');

async function updateCategory(name ,description){
    console.log('ttttttttttttttt', name, description)
    return await Category.update({ name, description }, { where: { id:1 } });
    // update({ lastName: "Doe" }, { where: { lastName: null } });
}

module.exports = {updateCategory}