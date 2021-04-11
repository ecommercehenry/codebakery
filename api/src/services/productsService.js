const { cloudinary } = require('../../utils/cloudinary')
const { Product } = require('../db.js');
const { Category } = require('../db.js');
// const categories = require('../graphql/roots/queriesResolvers/categories.js');

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
  try {
    const imageString = args.image
    const uploadedResponse = await cloudinary.uploader.upload(imageString,{upload_preset:'code_bakery'});
    const imageUrl = uploadedResponse.url;
    const newProduct = await Product.create({
      name: args.name,
      description: args.description,
      price: args.price,
      stock: args.stock,
      image: imageUrl,
    });
    let newProductCategories = args.category.split(',')
    let allCategories = await Category.findAll();
    allCategories = allCategories.map( elem=>elem['dataValues'].name)
    newProductCategories.map(async(category)=>{
      if(allCategories.includes(category)){
        let findCategory = await Category.findOne({where:{name:category}})
        newProduct.addCategory(findCategory.id)
      }else{
        return await Category.create({name:category}).then(res=>newProduct.addCategory(res.id))
      }
    })
  } catch (error) {
    console.log(error)
  }
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

async function getProductByCategoryName({name}){
    category = await Category.findOne({where: { name}, attributes: {exclude: ['createdAt','updatedAt']}, include: Product});
    // console.log( category);
    return category.dataValues.products
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
  getProductByCategoryName
};
