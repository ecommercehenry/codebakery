const { deleteImageById } = require("../../../services/imagesService");

// getAllProducts
module.exports = {
  deleteImageById: (_, args) => {
    console.log("ARG RECIBIDO: ", _.imageId);
    return deleteImageById(_.imageId);
  },
};
