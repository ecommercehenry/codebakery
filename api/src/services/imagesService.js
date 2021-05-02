const { ImageSlider } = require("../db");
const { cloudinary } = require("../../utils/cloudinary");

async function saveImageSlider(image) {
  try {
    const uploadedResponse = await cloudinary.uploader.upload(image, {
      upload_preset: "images_slider",
    });

    const name = uploadedResponse.url.split("/").pop();

    await ImageSlider.create({
      name,
    });

    return { __typename: "booleanResponse", boolean: true };
  } catch (error) {
    return { __typename: "error", name: "error", detail: error.message };
  }
}

async function getImageSlider() {
  try {
    const newImage = await ImageSlider.findAll();

    return newImage.map((img) => {
      return {
        __typename: "image",
        name: img.name,
        id: img.id,
        date: img.createdAt.toUTCString(),
      };
    });
  } catch (error) {
    return { __typename: "error", name: "error", detail: "Upload fail" };
  }
}

async function deleteImageById(id) {
  try {
    const imageToDestroy = await ImageSlider.destroy({
      where: {
        id: id,
      },
    });
    if (imageToDestroy === 1) {
      return { __typename: "booleanResponse", boolean: true };
    } else {
      return { __typename: "booleanResponse", boolean: false };
    }
  } catch (error) {
    return { __typename: "error", name: "error", detail: "Image not found" };
  }
}

module.exports = {
  saveImageSlider,
  getImageSlider,
  deleteImageById,
};
