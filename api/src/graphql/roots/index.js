<<<<<<< HEAD
const {updateCategory, modifyProduct, addCategory, deleteCategory, addCategoryToProduct, removeCategoryFromProduct,deleteById, addProduct} = require("./mutationsResolver/")
const {categories, product, productById } = require("./queriesResolvers/")
=======
const {updateCategory, 
    modifyProduct, 
    addCategory, 
    deleteCategory, 
    addCategoryToProduct, 
    removeCategoryFromProduct,
    deleteById,
    addProduct
} = require("./mutationsResolver/")
const {
    getAllCategories,
    product, 
    productById,
    getProductByCategoryName,
    productCategory
} = require("./queriesResolvers/")
>>>>>>> 40e401303ef15b56c1111ab15d6e69673489c6f7



// product
const root = {
    //Mutations
    modifyProduct,
    updateCategory,
    addCategory, 
    deleteCategory,
    deleteById,
    addCategoryToProduct,
    removeCategoryFromProduct,
<<<<<<< HEAD
=======
    getProductByCategoryName,
>>>>>>> 40e401303ef15b56c1111ab15d6e69673489c6f7
    addProduct,

    //Queries
    
    productById,
    product,
    productCategory,
    getAllCategories,
    
}

module.exports = root