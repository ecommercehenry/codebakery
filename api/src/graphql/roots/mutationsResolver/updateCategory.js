const { updateCategory } = require("../../../services/updateCategory");

module.exports = {
    updateCategory: async (args) => {
        let {name, description} = args.input;
        let num = await updateCategory(args.id , name, description);
        return num[0];
    }
}