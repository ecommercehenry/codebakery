const { Product, Category, Users, conn, Promo } = require("../db");
const { createOrder, getOrderById, updateOrderToTicket, modifyOrderStatus, modifyOrderCancelled } = require("../services/orderService");
const { addReview } = require("../services/reviewsService");
const { createUser, modifyUser } = require("../services/userService");
const {addStore} = require("../services/storeService")

const MOCK_CATEOGRIES = require("./MOCK_CATEOGRIES.json");
const MOCK_PRODUCTS = require("./MOCK_PRODUCTS.json");
const MOCK_USER = require("./MOCK_USER.json");
const MOCK_PROMOS = require("./MOCK_PROMOS.json");

async function dataPopulation() {
    
    await Category.bulkCreate(MOCK_CATEOGRIES),
    await Product.bulkCreate(MOCK_PRODUCTS)
    await Promo.bulkCreate(MOCK_PROMOS)
    await createUser("admin","12345","admin@admin.com","admin")
    await createUser("santi","12345","santiagorincon2001@gmail.com","user")
    await createUser("ivan","12345","ivan@gmail.com","user")
    await createUser("lucas","12345","lucasuracosta@gmail.com","user")
    await createUser("Joha","12345","johanarezabala1211@gmail.com","user")
    await createUser("patsy","12345","patsy.guerrero95@gmail.com","user")
    await createUser("lau","12345","lizen777@gmail.com","user")
    await createUser("guille","12345","guille@gmail.com","user")
    await createUser("pablo","12345","elxebec@gmail.com","user")
    await createUser("fran","12345","frank.ronaldo_17@hotmail.com","user")
    await createUser("Nicolas Lohuandus","12345","nlohuandus@gmail.com","user")

    await modifyUser(6,null,null,null,null,null,null,null, null, true)
    await modifyUser(7,null,null,null,null,null,null,null, null, true)
    await modifyUser(2,null,null,null,null,null,null,null, null, true)
    await modifyUser(9,null,null,null,null,null,null,null, null, true)

    await createOrder([{id:1,quantity:10},{id:2,quantity:100}],1)
    await createOrder([{id:2,quantity:3},{id:6,quantity:4}],1)
    await createOrder([{id:3,quantity:6},{id:7,quantity:5}],1)
    await createOrder([{id:4,quantity:1},{id:8,quantity:1}],1)
    await createOrder([{id:5,quantity:2},{id:9,quantity:1}, {id: 1, quantity: 3}], 2)
    await createOrder([{id:5,quantity:2},{id:9,quantity:1}],2)
    await addStore({name:"Sucursal Unicenter", lat:-34.508754829751126, long:-58.52727261548651, address:"Unicenter local 301", phoneNumber: "4721-3025"})
    await addStore({name:"Sucursal Norcenter", lat:-34.5144336270837, long:-58.52265434383605, address:"Norcenter local 75", phoneNumber: "4721-3098"})
    await addStore({name:"Sucursal Dot Baires", lat:-34.546122437324364, long:-58.48822786995776, address:"Dot Baires local 5", phoneNumber: "4720-6363"})
    await addStore({name:"Sucursal TOM", lat:-34.45294070645469, long:-58.728203622761974, address:"TOM local 46", phoneNumber: "4734-6574"})
    await createOrder([{id:1,quantity:10},{id:2,quantity:100}],1)
    await createOrder([{id:2,quantity:3},{id:6,quantity:4}],1)
    await createOrder([{id:3,quantity:6},{id:7,quantity:5}],1)
    await createOrder([{id:4,quantity:1},{id:8,quantity:1}],1)
    await createOrder([{id:5,quantity:2},{id:9,quantity:1}],2)

    await createOrder([{id:1,quantity:10},{id:2,quantity:100}],1)
    await createOrder([{id:2,quantity:3},{id:6,quantity:4}],1)
    await createOrder([{id:3,quantity:6},{id:7,quantity:5}],1)
    await createOrder([{id:4,quantity:1},{id:8,quantity:1}],1)
    await createOrder([{id:5,quantity:2},{id:9,quantity:1}],2)
    await createOrder([{id:1,quantity:10},{id:2,quantity:100}],1)
    await createOrder([{id:2,quantity:3},{id:6,quantity:4}],1)
    await createOrder([{id:3,quantity:6},{id:7,quantity:5}],1)
    await createOrder([{id:4,quantity:1},{id:8,quantity:1}],1)
    await createOrder([{id:5,quantity:2},{id:9,quantity:1}],2)
    
    await updateOrderToTicket(1)
    await updateOrderToTicket(5)

    await updateOrderToTicket(2)
    await updateOrderToTicket(4)
    await addReview(1,1,{title:"Exelente",description:"Ricas galletas de chocolate, las recomiendo 100%",stars:"4"})
    await addReview(1,2,{title:"Muy Buenas",description:"Muy buen producto", stars:"4"})

    await updateOrderToTicket(6)
    await updateOrderToTicket(7)
    await updateOrderToTicket(8)
    await updateOrderToTicket(9)
    await updateOrderToTicket(10)
    await updateOrderToTicket(11)
    await updateOrderToTicket(12)
    await updateOrderToTicket(13)
    await updateOrderToTicket(14)
    await updateOrderToTicket(15)
    await updateOrderToTicket(16)
    await updateOrderToTicket(17)

    await modifyOrderStatus(6, 'paid');
    await modifyOrderStatus(7, 'paid');
    await modifyOrderStatus(8, 'paid');
    await modifyOrderStatus(9, 'sent');
    await modifyOrderStatus(10, 'sent');
    await modifyOrderStatus(11, 'sent');
    await modifyOrderStatus(12, 'received');
    await modifyOrderStatus(13, 'received');
    await modifyOrderStatus(14, 'received');
    await modifyOrderStatus(15, "cancelled");
    await modifyOrderStatus(1, "cancelled");


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

    //Pruebas no debe ir
    const user = await Users.findOne({
        where:{
            id:2
        }
    })
    user.secretOtp = "HBGSUVDMHZLDY7JVMZASULZOIFPCSZKR"
    user.save()

    return true

}

module.exports = { dataPopulation };
