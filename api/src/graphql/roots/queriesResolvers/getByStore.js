const { getByStore } = require("../../../services/storeService")

module.exports = {
    getByStore: (args) => {
    return getByStore(args)
  },
}