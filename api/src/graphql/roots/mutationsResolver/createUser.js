const { createUser } = require("../../../services/userService")

// getAllProducts
module.exports = {
  createUser: ({name, password, email, role}) => {
    return createUser(name, password, email, role)
  },
}
