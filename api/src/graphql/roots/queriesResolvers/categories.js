const { getAllCategory } = require("../../../services/categories");

module.exports= {
    categories:() => {
        return getAllCategory();
    }
}