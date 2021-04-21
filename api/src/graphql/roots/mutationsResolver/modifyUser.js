const { modifyUser } = require("../../../services/userService");
// const jwt = require('jsonwebtoken');

module.exports = {
    modifyUser: async ({id,name, password, email, role, address, dni, phoneNumber}, args) => {
        try{
            // console.log(args.headers, 'ttttttttt');
            // let {authrole} = args.headers
            // const authToken = args.headers.authtoken;
			// const decoded = jwt.verify(authToken, "secret");
            // if(authrole === 'admin'){
                let num = await modifyUser(id , name, password, newPassword, email, role, address, dni, phoneNumber); 
                return {...num};
            // }
            // else return {__typename: 'error', name:"error", detail: 'No admin'};
        }catch(err){
			return {__typename: 'error', name:"error", detail: 'No admin'}
		}
    }
}