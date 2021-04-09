const { Category } = require("../db.js")

async function deleteCategory({ id }) {
  try {
    const categoryToDelete = await Category.findByPk(id)
    await categoryToDelete.destroy()
    return true
  } catch (error) {
    return false
  }
}

module.exports = { deleteCategory }
