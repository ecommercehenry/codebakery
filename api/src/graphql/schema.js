const {buildSchema} = require('graphql');
const {getAllProducts,modifyProduct, getProductById,addCategoryToProduct,removeCategoryFromProduct} = require("../services/productsService");
const {updateCategory} = require("../services/updateCategory");
const {getAllCategory,addCategory} = require("../services/categories");

const root = {
    //products
    product:()=>{
        return getAllProducts()
    },

    productById: (id) =>{
        return getProductById(id)
    },

    modifyProduct:(id,dataToModify)=>{
        return modifyProduct(id,dataToModify)
    },

    addCategoryToProduct: async (idProduct,idCategory) =>{
        return await addCategoryToProduct(idProduct,idCategory)        
    },

    removeCategoryFromProduct: async (idProduct,idCategory) =>{
        return await removeCategoryFromProduct(idProduct,idCategory)        
    },

    //categories
    categories:() => {
        return getAllCategory();
    },

    updateCategory: async (args) => {
        let {name, description} = args.input;
        let num = await updateCategory(args.id , name, description);
        return num[0];
    },
    
    addCategory: (args) => {
        return addCategory(args);
    }
}

const schema = buildSchema(`
#Queryes ( to get data )
type Query{
    product: [product],
    productById(id :Int!): product
}

#Mutations ( to manipulate data )
type Mutation{
    modifyProduct(id: Int, dataToModify: inputProduct!): product
    updateCategory(id : Int!, input: MessageInput): Int
    addCategoryToProduct(idProduct: Int!,idCategory: Int!): product
    removeCategoryFromProduct(idProduct: Int!,idCategory: Int!): product
    addCategory(name: String!, description: String!): category
}
type category{
    id : Int!
    name : String
}
input MessageInput {
    name: String
    description: String
}

#Inputs
input inputProduct{
    description: String,
    price: Int,
    stock: Int,
    image: String,
}

#Object product
type product{
    id : Int!
    name : String!,
    description: String!,
    price: Int!,
    stock: Int!,
    image: String!,
}`)
// solo para agregar
// const { Product } = require('../db.js');
// const { Category } = require('../db.js');
// const list = [{name: 'francisco', description: 'bueno', price: 100000, stock: 1, image: 'fran.jpg'}, 
// {name: 'francisco', description: 'bueno'}];
// const pushAItem = async () => {
//     try{
//         const [user, created] = await Product.findOrCreate({
//             where: { id: 1 },
//             defaults: {
//               ...list[0]
//             }
//           });
//           const [cat, createdCat] = await Category.findOrCreate({
//             where: { id: 1 },
//             defaults: {
//               ...list[1]
//             }
//           });
//           if(created){
//               console.log('fue creada', user)
//           }
//           else console.log('ya estaba creado')
//     }
//     catch(e){
//         console.log('eror', e) 
//     }
// }
// pushAItem();

module.exports= {schema, root}
