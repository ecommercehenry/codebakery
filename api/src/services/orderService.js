const { Order, Lineal_Order, Product, Users } = require("../db")
const {getProductById} = require("./productsService")
async function getAllOrders(){
    try {
        const response = await Order.findAll({
            where: {placeStatus: 'checkout'},
            include:{
                    model: Lineal_Order,
                    include: [Product]
                }
        })
        console.log(response)
        return response
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}



async function getOrdersByUserID(userId){
    try {
        return await Order.findAll({
            where: {userId},
            order: ['id', "DESC"],
            include: [Lineal]
        })
    } catch (err) {
        return {
            error: "Problem finding the user ID of order",
            detail: "Possibly the id passed dont exists",
          }
    }
}
/**
 * Create new order created by the user
 * By default the placeStatus of the order is "cart"
 * By default the status of the order id "unpaid"
 * @param  {array} products array of products with the id and quantity, 
 *  example: [{id:1,quantity:100},{id:3,quantity:10}]
 * @param  {} idUser id of the user going to makethe orden
 */
async function createOrder(products, idUser){
    if(!Array.isArray(products)){
        throw new Error("products, must be a array")
    }else if(!products[0]){
        throw new Error("Must be send minimum a 1 product")
    }else if(!products[0].id){
        throw new Error("object of array must contain a id of product")
    }else if(!products[0].quantity){
        throw new Error("object of array must contain a quantity of the product")
    }else{
        const pass = ()=>"pass!" //Es solo por poner algo 
    }

    let user = null
    let order = null
    //get user to vinculate order (avoid a fake id user is used)
    try{
        user = await  Users.findOne({
            where:{
                id:idUser
            }
        })
        order = await Order.create({
            userId:user.id
        })
    }catch(err){
        throw Error("Error creating new order, orderService "+err.message)
    }
    //Get all products and vinculate with the order
    try{
        for(let product of products){
            let result =  await getProductById({id:product.id})
            //Al crear la orden se usara el precio del producto en la db, otra opcion es usar el precio del carrito, discutir
            let has = await order.addProduct(result, {through:{price:result.price, quantity: product.quantity}})
        }
    }catch(err){
        throw Error("Error in vinculation current products to order, orderService "+err.message)

    }

    //Get elements with more order
    const productsOrden = await order.getProducts()
    const userOrden = await order.getUser()
    const lineal_Order = productsOrden.map(p => p.Lineal_Order)

    //Add every product in the order in a array to return after :)
    let productsOrdersSalida = []
    for(let i in lineal_Order){
        productsOrdersSalida.push({
            userId:userOrden.id,
            price: lineal_Order[i].price,
            quantity: lineal_Order[i].quantity,
            product:[
                {
                    id:productsOrden[i].id,
                    name: productsOrden[i].name,
                    description: productsOrden[i].description,
                    price: productsOrden[i].price,
                    stock: productsOrden[i].stock,
                    image: productsOrden[i].image,
                    categories: await productsOrden[i].getCategories()
                }
            ]
        })
    }

    const out = {
        id:order.id,
        status:order.status,
        lineal_order: productsOrdersSalida
    }
    return out
}
async function getOrderById(id){
    // order = await Order.findOne({
    //     where:{
    //         id
    //     }
    // })
    // console.log(order)
    return {
        id:1,
        status:"hola",
        lineal_order:
            [
                {
                    userId:1, 
                    price:3, 
                    quantity:1,
                    product:
                        [
                        {
                            id:1,
                            name:"prid1",
                            description:"fwe",
                            price:1,
                            stock:1,
                            image:"ffw",
                            categories:[]
                                
                        }
                    ]
                }
            ]
        }
  }
module.exports = {
    getAllOrders,
    getOrdersByUserID,
    getOrderById,
    createOrder
}