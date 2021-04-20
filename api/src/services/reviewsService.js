const { Review , Product, Users} = require("../db.js")

async function deleteReview(id) {
  try {
    const reviewToDelete = await Review.findByPk(id)
    await reviewToDelete.destroy()
    return {__typename: "booleanResponse", boolean: true}
  } catch (error) {
    return { __typename: "error", name: "error", detail: "Review not found" }
  }
}

async function getAllReviewsFromAProduct(productId) {
  try {
    const reviewsProduct = await Review.findAll({
      where: {
        productId: productId
      },
    });
    return reviewsProduct
  } catch (error) {
    throw new Error(error);
  }
}

async function addReview(productId, userId, dataReview){
  //Validacion de datos
  if(!productId) return { __typename: "error", name: "error entrada", detail: `No se envio un id de producto valido: ${productId}` }
  if(!userId) return { __typename: "error", name: "error entrada", detail: `No se envio un id de usuario valido: ${userId}` }
  if(!dataReview) return { __typename: "error", name: "error entrada", detail: `No se enviaron datos para agregar al review: ${dataReview}` }
  if(!dataReview.hasOwnProperty("title")) return { __typename: "error", name: "error entrada", detail: `No se envio un titulo para la review` }
  if(!dataReview.hasOwnProperty("description")) return { __typename: "error", name: "error entrada", detail: `No se envio una descripcion para la review` }
  if(!dataReview.hasOwnProperty("stars")) return { __typename: "error", name: "error entrada", detail: `No se envio la propiedad stars para la review` }
  
  //Get the product
  const product = await Product.findOne({
    where:{
      id:productId
    }
  })
  if(!product) return { __typename: "error", name: "error id producto", detail: `El id ${productId} no existe` } 

  //Validate de user id really exists
  const user = await Users.findOne({
    where:{
      id:userId
    }
  })
  if(!product) return { __typename: "error", name: "error id usuario", detail: `El id ${userId} no existe` } 

  //Create the review
  const review = await product.createReview(
  {
    title:dataReview.title,
    description:dataReview.description,
    stars:dataReview.stars,
    userId:user.id
  }) //Pudo ser mas sencillo colocar el id que viene por parametro, pero que tal si es un id falso?, rompe, mejor verificar
  if(!review) return { __typename: "error", name: "error", detail: `Hubo un problema al crear la review` } 
 
 
  return {__typename:"review",id:review.id, title:review.title, description:review.description, stars:review.stars}
}

module.exports = { deleteReview, getAllReviewsFromAProduct, addReview }