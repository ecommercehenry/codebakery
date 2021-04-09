const { getAllCategories } = require("../../../services/categories");

module.exports= {
    getAllCategories:() => {
        return getAllCategories();
    }
}