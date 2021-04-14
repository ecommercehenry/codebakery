const { Order, Lineal_Order, Product } = require("../db")

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

module.exports = {
    getAllOrders,
    getOrdersByUserID
}