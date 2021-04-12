const { modifyUser } = require("../../../services/userService");

module.exports = {
    modifyUser: async ({id,name, password, email, role}) => {
        // let {name, password, email, role} = args.input;
        let num = await modifyUser(id , name, password, email, role);
        console.log(num)
        return num[0];
    }
}