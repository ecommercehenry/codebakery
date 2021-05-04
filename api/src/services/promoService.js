const { Promo } = require("../db");
const { Category } = require("../db");
const { Product } = require("../db");

async function getPromos() {
  try {
    return await Promo.findAll({});
  } catch (error) {
    throw new Error(error);
  }
}

async function addPromo(args){ 
  try { 
    await Promo.create({
        name: args.name,
        discount: args.discount,
        category: args.category,
        day: args.day,
    });
    return {__typename: 'booleanResponse', boolean:true};
  } catch (error) {
    return {__typename: 'error', name: 'error', detail: error.message};
  }
}

async function deletePromo(args) {
  let id = Number(args.id);
  try {
    let promo = await Promo.findByPk(id);
    promo.destroy();
    return {__typename: 'booleanResponse', boolean:true};
  } catch (error) {
    throw new Error(error);
  }
}

async function applyDiscount(args){
  const acategory = args.category;
  const discount = Number(args.discount);
  
  try {
    let category = await Category.findOne({
      where: { name:acategory},
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: Product,
    });

    modifyProduct = async(id,discount) => {
      let product = await Product.findByPk(id);
      product.update({discount : discount})
    }
    
    category.dataValues.products.map((elem) => (
      modifyProduct(elem.id,discount)
    ))
    
    return {__typename: 'booleanResponse', boolean:true};
  } catch (error) {
    return {__typename: 'error', name: 'error', detail: error.message};
  }
}

async function resetDiscount(){
  try {
    let category = await Category.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: Product,
    });

    modifyProduct = async(id) => {
      let product = await Product.findByPk(id);
      product.update({discount : 0})
    }
    
    category.forEach(category=>{
      category.dataValues.products.map((elem) => (
        modifyProduct(elem.id)
      ))
    })
    
    return {__typename: 'booleanResponse', boolean:true};
  } catch (error) {
    return {__typename: 'error', name: 'error', detail: error.message};
  }
}

module.exports = { getPromos, addPromo, applyDiscount, deletePromo, resetDiscount };
