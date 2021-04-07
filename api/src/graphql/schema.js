const {buildSchema} = require('graphql');
const {getAllProducts} = require("../services/productsService");
const {updateCategory} = require("../services/updateCategory");
const {getAllCategory} = require("../services/categories");

// solo para agregar
const { Product } = require('../db.js');
const { Category } = require('../db.js');
const list = [{name: 'francisco', description: 'bueno', price: 100000, stock: 1, image: 'fran.jpg'}, 
{name: 'francisco', description: 'bueno'}];
const pushAItem = async () => {
    try{
        const [user, created] = await Product.findOrCreate({
            where: { id: 1 },
            defaults: {
              ...list[0]
            }
          });
          const [cat, createdCat] = await Category.findOrCreate({
            where: { id: 1 },
            defaults: {
              ...list[1]
            }
          });
          if(created){
              console.log('fue creada', user)
          }
          else console.log('ya estaba creado')
    }
    catch(e){
        console.log('eror', e) 
    }
}
pushAItem();
// 
const root = {
    product:()=>{
        console.log("----------------------------weufhwiufhiuwefhiw")
        return getAllProducts();
    },
    categories:() => {
        return getAllCategory();
    },
    updateCategory: async (args) => {
        let {name, description} = args.input;
        let num = await updateCategory(args.id , name, description);
        return num[0];
    }
}

const schema = buildSchema(`#La Query raiz
    type Query{
        product: [product]
    }
    type product{
        id : Int
        name : String
    }
    type Mutation {
        updateCategory(id : Int!, input: MessageInput): Int
    }
    type category{
        id : Int!
        name : String
    }
    input MessageInput {
        name: String
        description: String
    }
`)

module.exports= {schema, root}

