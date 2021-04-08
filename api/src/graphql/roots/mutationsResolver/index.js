const {modifyProduct} = require("./modifyProduct")
const {updateCategory} = require("./updateCategory")
const {addCategory} = require("./addCategory")
const {deleteCategory} = require("./deleteCategory")
const {addCategoryToProduct} = require("./addCategoryToProduct")
const {removeCategoryFromProduct} = require("./removeCategoryFromProduct")
const {deleteById} = require("./deleteById")

module.exports = {modifyProduct, updateCategory, addCategory,deleteCategory, addCategoryToProduct, removeCategoryFromProduct,deleteById}
