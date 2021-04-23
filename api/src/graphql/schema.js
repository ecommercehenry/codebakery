const { buildSchema } = require("graphql")
const mutations = require("./mutations/mutations")
const queries = require("./queries/queries")
const root = require("./roots")
// estos son los objetos de las consultas
const types = require("./types")
// párametros que reciben los modelos de las consultas
const inputs = require('./inputs');
// 

const schema = buildSchema(`
#Queries ( to get data )
${queries}

#Mutations ( to manipulate data )
${mutations}

#Inputs
${inputs}

#types
${types}


`)
// solo para agregar
// const { Product } = require('../db.js');
// const { Category } = require('../db.js');
// const list = [{name: 'francisco', description: 'malo', price: 100000, stock: 1, image: 'fran.jpg'},
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
//               
//           }
//           else 
//     }
//     catch(e){
//         
//     }
// }
// pushAItem();

module.exports = { schema, root }
