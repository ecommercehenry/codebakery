const { modifyUser } = require("../../../services/userService");

module.exports = {
    modifyUser: async ({id,name, password, email, role}) => {
        let num = await modifyUser(id , name, password, email, role);
        return {...num.dataValues, password: '', salt: ''};
    }
}