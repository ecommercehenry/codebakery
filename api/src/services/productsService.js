const { Product } = require("../db.js");


async function getAllProducts() {
  return await Product.findAll({include: [Category]});
}
async function getProductById({ id }) {
  return await Product.findByPk(id);
}
async function deleteById({ id }) {
  return await Product.destroy({
    where: {
      id: id,
    },
  });
}
async function productCategory({ id }) {
  return await Product.findOne({
    where:{id: id},
    include: [Category],
  });
}

async function addProduct(args) {
  const { category } = args;
  const newProduct = {
    name: args.name,
    description: args.description,
    price: args.price,
    stock: args.stock,
    image: args.image,
  };

  await Product.create(newProduct).then((product) =>
    product.addCategory(category)
  );
}

/**
 * Modify a existing product, using the id as identifier
 * @param  {} id value to define what product going to be modified
 * @param  {} dataToModify object that contains the data to be modified
 */
async function modifyProduct({ id, dataToModify }) {
  if (validateNewData(dataToModify)) {
    try {
      const product = await Product.findOne({
        where: {
          id: id,
        },
      });
      await product.update(dataToModify);
      return product;
    } catch (error) {
      return {
        error: "Problem finding the id of product",
        detail: "Possibly the id passed dont exists",
      };
    }
  } else {
    return {
      error: "the data passed is not valid",
      detail: "A element of the object not is a valid attribute",
    };
  }

  function validateNewData(data) {
    const validInputs = ["name", "description", "price", "stock", "image"];
    for (element in data) {
      if (!validInputs.includes(element)) {
        return false;
      }
    }
    return true;
  }
}

async function addCategoryToProduct({ idProduct, idCategory }) {
  const product = await Product.findByPk(idProduct);
  if (product != null) {
    try {
      await product.addCategories(idCategory);
      return product;
    } catch (error) {
      return { error: error };
    }
  } else {
    return {
      error: "couldn't find a product",
      detail: "product doesn't exist",
    };
  }
}

async function removeCategoryFromProduct({ idProduct, idCategory }) {
  const product = await Product.findByPk(idProduct);
  if (product != null) {
    try {
      await product.removeCategories(idCategory);
      return product;
    } catch (error) {
      return { error: error };
    }
  } else {
    return {
      error: "couldn't find a product",
      detail: "product doesn't exist",
    };
  }
}

module.exports = {
  getAllProducts,
  modifyProduct,
  getProductById,
  addCategoryToProduct,
  removeCategoryFromProduct,
  deleteById,
  addProduct,
  productCategory,
};
