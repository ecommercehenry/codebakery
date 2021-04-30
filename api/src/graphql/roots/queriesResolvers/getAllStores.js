const { getAllStores } = require("../../../services/storeService");

module.exports = {
  getAllStores: () => {
    return getAllStores();
  },
};
