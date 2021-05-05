const { deleteUser } = require("../../../services/userService")
const jwt = require("jsonwebtoken")

module.exports = {
    deleteUser: (_, args) => {
    try {

      const authToken = args.headers.authtoken;
      const decoded = jwt.verify(authToken, "secret");
      let {authrole} = args.headers;
      if (authrole === "admin") {
        return deleteUser(_.userId);
      } else return { __typename: "error", name: "error", detail: "No admin" };
    } catch (err) {
      return { __typename: "error", name: "error", detail: "No admin" };
    }
  },
}
