const { Category } = require("../db.js")

async function deleteCategory(id) {
  try {
    const categoryToDelete = await Category.findByPk(id)
    await categoryToDelete.destroy()
    return {__typename: "booleanDelete", booleanDelete: true}
  } catch (error) {
    return { __typename: "error", name: "error", detail: "Category not found" }
  }
}

module.exports = { deleteCategory }
