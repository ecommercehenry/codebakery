const { loginUser } = require("../../../services/userService")

// getAllProducts
module.exports = {validateUser:({name,password}) => {
    return loginUser(name,password)
}}