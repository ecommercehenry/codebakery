const { saveImageSlider } = require("../../../services/imagesService");

// getAllProducts
module.exports = {
  saveImageSlider: (_, args) => {
    return saveImageSlider(_.image);
  },
};
