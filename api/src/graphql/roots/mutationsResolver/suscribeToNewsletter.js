const { suscribeToNewsletter } = require("../../../services/userService")


module.exports = {

    suscribeToNewsletter:(_, args)=>{
        return suscribeToNewsletter(_.userId)
    }
  
}

// const {modifyOrderStatus} = require("../../../services/orderService")

// // getAllProducts
// module.exports = {
// 	modifyOrderStatus: (_, args) => {
// 		return modifyOrderStatus(_.orderId, _.status)
// 	}
// }