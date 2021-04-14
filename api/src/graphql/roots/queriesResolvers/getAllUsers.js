const { getAllUsers } = require("../../../services/userService")

module.exports = {
  getAllUsers: () => {
    return getAllUsers()
  },
}
