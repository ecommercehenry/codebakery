const { Product } = require('../db.js');

async function getAllProducts(){
    return await Product.findAll({})
}
async function getProductById({id}){
    return await Product.findByPk(id)
}

/**
 * Modify a existing product, using the id as identifier
 * @param  {} id value to define what product going to be modified
 * @param  {} dataToModify object that contains the data to be modified
 */
async function modifyProduct({id, dataToModify}){
    if(validateNewData(dataToModify)){
        try{
            const product =  await Product.findOne({
                where:{
                    id:id,
                }
            })
            await product.update(dataToModify)
            return product
        } catch(error){
            return {error:"Problem finding the id of product", detail:"Possibly the id passed dont exists"}

        }
    }else{
        return {error:"the data passed is not valid", detail:"A element of the object not is a valid attribute"}
    }

    function validateNewData(data){
        const validInputs = ["name","description","price","stock","image"]
        for(element in data){
            if(!validInputs.includes(element)){
                return false
            }
        }
        return true
    }
    
}

module.exports = {getAllProducts, modifyProduct, getProductById}