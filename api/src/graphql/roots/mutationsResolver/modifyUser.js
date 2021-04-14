const { modifyUser } = require("../../../services/userService");
const jwt = require('jsonwebtoken');

module.exports = {
    modifyUser: async ({id,name, password, email, role}, args) => {
        try{
            const authToken = args.headers.authtoken;
			const decoded = jwt.verify(authToken, "secret");
            let num = await modifyUser(id , name, password, email, role); 
            return {...num};
        }catch(err){
			return {__typename: 'error', name:"error", detail: 'No admin'}
		}
    }
}