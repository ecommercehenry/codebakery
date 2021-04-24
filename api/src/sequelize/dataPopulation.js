const { Product, Category, Users, conn } = require("../db");
const { createOrder, getOrderById, updateOrderToTicket } = require("../services/orderService");
const { addReview } = require("../services/reviewsService");
const { createUser } = require("../services/userService");

const MOCK_CATEOGRIES = require("./MOCK_CATEOGRIES.json");
const MOCK_PRODUCTS = require("./MOCK_PRODUCTS.json");
const MOCK_USER = require("./MOCK_USER.json");

async function dataPopulation() {
    
    await Category.bulkCreate(MOCK_CATEOGRIES),
    await Product.bulkCreate(MOCK_PRODUCTS)
    await createUser("admin","12345","admin@admin.com","admin")
    await createUser("santi","12345","santi@gmail.com","user")
    await createUser("ivan","12345","ivan@gmail.com","user")
    await createUser("lucas","12345","lucas@admin.com","user")
    await createUser("Joha","12345","joha@gmail.com","user")
    await createUser("patsy","12345","patsy@gmail.com","user")
    await createUser("lau","12345","lau@gmail.com","user")
    await createUser("guille","12345","guille@gmail.com","user")
    await createUser("pablo","12345","pablo@gmail.com","user")
    await createUser("fran","12345","fran@gmail.com","user")
    await createUser("nico","12345","nico@gmail.com","user")
    await createOrder([{id:1,quantity:10},{id:2,quantity:100}],1)
    await createOrder([{id:2,quantity:3},{id:6,quantity:4}],1)
    await createOrder([{id:3,quantity:6},{id:7,quantity:5}],1)
    await createOrder([{id:4,quantity:1},{id:8,quantity:1}],1)
    await createOrder([{id:5,quantity:2},{id:9,quantity:1}],2)
    await updateOrderToTicket(1)
    await updateOrderToTicket(5)

    await updateOrderToTicket(2)
    await updateOrderToTicket(4)
    await addReview(1,1,{title:"hola",description:"hola",stars:"4"})

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
