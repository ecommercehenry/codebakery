const {buildSchema} = require('graphql');
const {getAllProducts} = require("../services/productsService")
const {modifyProduct, getProductById} = require("../services/productsService")
const {updateCategory} = require("../services/updateCategory");
const {getAllCategory} = require("../services/categories");
const mutations = require('./mutations/mutations');
const queries = require('./queries/queries');
// estos son los objetos de las consultas
const types = require('./types');
// párametros que reciben los modelos de las consultas
const inputs = require('./inputs');

// console.log(mutations, 'ppapspaps')
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
    }
}

const schema = buildSchema(`
#Queryes ( to get data )
${
    queries
}

#Mutations ( to manipulate data )
${
    mutations
}

#Inputs
${
    inputs
}

#types
${
    types
}


`)
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
