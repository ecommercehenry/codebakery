const { cloudinary } = require('../../utils/cloudinary')
const { Product } = require('../db.js');
const { Category } = require('../db.js');
const { Op } = require("sequelize");
const categories = require('../graphql/roots/queriesResolvers/categories');

// const categories = require('../graphql/roots/queriesResolvers/categories.js');

async function getAllProducts() {
  try {
    return await Product.findAll({
      order: [["name","ASC"]],
      include: [Category],
    });
  } catch (error) {
    throw new Error(error);
  }
}
async function getProductById({ id }) {
  try {
    return await Product.findByPk(id);
  } catch (error) {
    throw new Error(error);
  }
}

async function deleteById({ id }) {
  try {
    return await Product.destroy({
      where: {
        id: id,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
}
async function productCategory({ id }) {
  try {
    return await Product.findOne({
      where: { id: id },
      include: [Category],
    });
  } catch (error) {
    throw new Error(error);
  }
}
async function getProductByArray({array}) {
  return await Product.findAll({
    where:{
      id:array,
    }
  })
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
    console.log("ERROR "+error)
  }
}

/**
 * Modify a existing product, using the id as identifier
 * @param  {} id value to define what product going to be modified
 * @param  {} dataToModify object that contains the data to be modified
 */
async function modifyProduct(id, dataToModify) {
  async function getCategoriesDB(categoriesStr){
    let out = []
    for(categorie of categoriesStr){
      const cate = await Category.findOrCreate({
        where:{
          name:categorie
        },
        defaults:{
          name:categorie
        }
      })
      out.push(cate[0])
    }
    return out
  }
  
  async function getProductById(id){
    const product = await Product.findOne({
      where: {
        id: id,
      },
      include: [Category],
    });
    return product
  }
  const categories = dataToModify["categories"]
  const dataProduct = dataToModify
  delete dataProduct["categories"]
  if (validateNewData(dataProduct)) {
    try {
      const product = await getProductById(id)
      //Update with new info
      await product.update(dataProduct); 

      //If is necessary change categories   
      if(categories){
        const dbCategories = await getCategoriesDB(categories)
        await product.setCategories(dbCategories)
      }
      //Find again and get product with the changes
      const updatedProduct = await getProductById(id)
      return updatedProduct;
    } catch (error) {
      return {__typename: 'error', name:"The was a problem finding the id of product", detail: "The id doesn't exist"}
    }
  } else {
    return {__typename: 'error', name:"The data passed is not valid", detail: "The element of the object not is a valid attribute"}
  }

  function validateNewData(data) {
    const validInputs = ["name", "description", "price", "stock", "image","categories"];
    for (element in data) {
      if (!validInputs.includes(element)) {
        console.log("FALSOOOOOOO")
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

async function getProductByCategoryName({ name }) {
  try {
    category = await Category.findOne({
      where: { name },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: Product,
    });
    return category.dataValues.products;
  } catch (error) {
    throw new Error(error);
  }
}

async function getProductByName({ name }) {
  product = await Product.findOne({
    where: {
      name: { iLike: name + "%"}
    } 
  })
  return product
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
  getProductByCategoryName, 
  getProductByName,
  getProductByArray
};
