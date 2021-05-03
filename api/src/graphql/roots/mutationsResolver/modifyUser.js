
const { modifyUser } = require("../../../services/userService");
// const jwt = require('jsonwebtoken');

module.exports = {
  modifyUser: async (
    { id, name, password, newPassword, email, role, address, dni, phoneNumber, twoFA },
    args
  ) => {
    try {
      let num = await modifyUser(
        id,
        name,
        password,
        newPassword,
        email,
        role,
        address,
        dni,
        phoneNumber,
        twoFA
      );

      return { ...num };
      // }
      // else return {__typename: 'error', name:"error", detail: 'No admin'};
    } catch (err) {
      return { __typename: "error", name: "error", detail: "Not Found" };
    }
  },
};
