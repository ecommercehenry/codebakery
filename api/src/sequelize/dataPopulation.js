const { Product, Category, Users, conn } = require("../db");
const { createUser } = require("../services/userService");

const MOCK_CATEOGRIES = require("./MOCK_CATEOGRIES.json");
const MOCK_PRODUCTS = require("./MOCK_PRODUCTS.json");
const MOCK_USER = require("./MOCK_USER.json");

async function dataPopulation() {
    await Category.bulkCreate(MOCK_CATEOGRIES),
    await Product.bulkCreate(MOCK_PRODUCTS)
    await createUser("admin","12345","admin@admin.com","admin")
    await createUser("juan","12345","juan@gmail.com","user")

    // await Users.bulkCreate(MOCK_USER)
    await conn.query(`insert into "product-category" ("productId","categoryId") values (1,1)`)
    await conn.query(`insert into "product-category" ("productId","categoryId") values (1,2)`)
    await conn.query(`insert into "product-category" ("productId","categoryId") values (1,3)`)
    await conn.query(`insert into "product-category" ("productId","categoryId") values (2,2)`)
    await conn.query(`insert into "product-category" ("productId","categoryId") values (2,3)`)
    await conn.query(`insert into "product-category" ("productId","categoryId") values (3,4)`)
    await conn.query(`insert into "product-category" ("productId","categoryId") values (3,5)`)
    await conn.query(`insert into "product-category" ("productId","categoryId") values (3,6)`)
    await conn.query(`insert into "product-category" ("productId","categoryId") values (4,1)`)
    await conn.query(`insert into "product-category" ("productId","categoryId") values (4,2)`)
    await conn.query(`insert into "product-category" ("productId","categoryId") values (5,5)`)
    await conn.query(`insert into "product-category" ("productId","categoryId") values (6,1)`)
    await conn.query(`insert into "product-category" ("productId","categoryId") values (7,2)`)
    await conn.query(`insert into "product-category" ("productId","categoryId") values (8,3)`)
    await conn.query(`insert into "product-category" ("productId","categoryId") values (9,4)`)

    return true

}

module.exports = { dataPopulation };
