const {
	addCategory
} = require("../../../services/categories")
const jwt = require('jsonwebtoken');

// getAllProducts
module.exports = {
	addCategory: (_, args) => {
		try{
		const authToken = args.headers.authtoken
		const decoded = jwt.verify(authToken, "secret")
		return addCategory(_.name)
		}catch(err){
			return {name:"error", id:-1}
		}
	}
}