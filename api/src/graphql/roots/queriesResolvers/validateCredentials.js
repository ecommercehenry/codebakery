const jwt = require('jsonwebtoken');

module.exports = {
    validateCredentials: async (_, args) =>{
        try{
            console.log('entrando a validar......')
            const authToken = args.headers.authtoken;
            const decoded = jwt.verify(authToken, "secret");
            let {authrole} = args.headers
            if(authrole){
                console.log('yaysyaysyayysaysdddddddddddddddddddddddddd........')
                return true;
            }
            else return false;
        }catch{
            return false;
        }
    }
}