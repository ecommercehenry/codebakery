const jwt = require('jsonwebtoken');

module.exports = {
    validateCredentials: async (_, args) =>{
        try{
            
            const authToken = (args.headers.authtoken !== 'null' || !args.headers.authtoken) ? args.headers.authtoken:_.token;
            // console.log(authToken, 'este est el puto', _)
            const decoded = jwt.verify(authToken, "secret");
            let {authrole} = args.headers
            if(authrole){
                return true;
            }
            else return false;
        }catch{
            return false;
        }
    }
}