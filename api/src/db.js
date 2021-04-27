require("dotenv").config()
const { Sequelize } = require("sequelize")
const fs = require("fs")
const path = require("path")
const { userInfo } = require("os")
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/development`,
  {
    logging: false, // set to 
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
)

const basename = path.basename(__filename)

const modelDefiners = []

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "sequelize/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "sequelize/models", file)))
  })

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize))
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models)
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
])
sequelize.models = Object.fromEntries(capsEntries)

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Product, Category, Users, Review, Order, Lineal_Order} = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Product.belongsToMany(Category, { through: "product-category" ,timestamps: false});
Category.belongsToMany(Product, { through: "product-category" ,timestamps: false});
Users.belongsToMany(Product, { through: "user-products" });
Product.belongsToMany(Users, { through: "user-products" });
//Agregado ya que el id del producto estaba siendo posible dejarlo en null
Product.hasMany(Review,{foreignKey: {
  allowNull: false
}});
Users.hasMany(Review);
Users.hasMany(Order,{foreignKey: {
  allowNull: false
}});
Order.belongsTo(Users);
Product.belongsToMany(Order, { through: Lineal_Order });
Order.belongsToMany(Product, { through: Lineal_Order });



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
}
