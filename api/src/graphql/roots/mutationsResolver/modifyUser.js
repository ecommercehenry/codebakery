const { modifyUser } = require("../../../services/userService");
const jwt = require('jsonwebtoken');

module.exports = {
    modifyUser: async ({id,name, password, email, role}, args) => {
        try{
            // console.log(args.headers, 'ttttttttt');
            let {authrole} = args.headers
            const authToken = args.headers.authtoken;
			const decoded = jwt.verify(authToken, "secret");
            if(authrole === 'admin'){
                let num = await modifyUser(id , name, password, email, role); 
                return {...num};
            }
            else return {__typename: 'error', name:"error", detail: 'No admin'};
        }catch(err){
			return {__typename: 'error', name:"error", detail: 'No admin'}
		}
    }
}