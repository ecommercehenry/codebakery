const { getUserById } = require("../../../services/userService")

module.exports = {
    getUserById: ({id}) => {
    return getUserById({id})
  },
}