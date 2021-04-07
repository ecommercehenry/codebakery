const {buildSchema} = require('graphql');
const {getAllProducts} = require("../services/productsService")
const {modifyProduct, getProductById, deleteById} = require("../services/productsService")
const {updateCategory} = require("../services/updateCategory");
const {getAllCategory} = require("../services/categories");

const root = {
    product:()=>{
        console.log("----------------------------weufhwiufhiuwefhiw")
        return getAllProducts()
    },
    modifyProduct:(id,dataToModify)=>{
        return modifyProduct(id,dataToModify)
    },
    categories:() => {
        return getAllCategory();
    },
    updateCategory: async (args) => {
        let {name, description} = args.input;
        let num = await updateCategory(args.id , name, description);
        return num[0];
    },
    productById: (id) =>{
        return getProductById(id)
    },
    deleteById: (id) =>{
        return deleteById(id)
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
    deleteById(id: Int!): [product!]
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
