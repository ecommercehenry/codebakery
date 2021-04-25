const { Review , Product, Users} = require("../db.js")
async function deleteReview(productId, userId) {
  try {
    const reviewToDelete = await Review.findOne({
      where: {
        productId: productId,
        userId: userId,
      },
    })
    await reviewToDelete.destroy()
    return { __typename: "booleanResponse", boolean: true }
  } catch (error) {
    return { __typename: "error", name: "error", detail: `Review not found: ${error.message}` }
  }
}

async function getAllReviewsFromAProduct(productId) {
  try {
    const reviewsProduct = await Review.findAll({
      where: {
        productId: productId
      },
    });
    console.log(reviewsProduct)
    return reviewsProduct.map((review) => {
    return { __typename: "review", 
     id: review.id , 
     title: review.title,
     description: review.description,  
     stars: review.stars, 
     createdAt: review.createdAt.toUTCString()
    }
    })
  } catch (error) {
    return { __typename: "error", name: "desconocido", detail: `${error.message}` }
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
  
  //Validate if the use already not make a review of this product
  const reviewRealized = await Review.findOne({
    where:{
      userId:userId,
      productId:productId
    }
  })
  if(reviewRealized) return { __typename: "error", name: "Ya realizaste esta review", detail: `Este usuario (${userId}) ya realizo una review a el producto ${productId}` } 
  
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
  if(!user) return { __typename: "error", name: "error id usuario", detail: `El id ${userId} no existe` } 
  //Validate if the user already buy this product
  const ordersOfProduct = await product.getOrders()
  let ordersOfUser = ordersOfProduct.find(el=>el.userId === userId)
  if(!ordersOfUser) return { __typename: "error", name: "No comprado", detail: `El usuario ${userId} no a comprado el producto ${productId}` }
  
  //Create the review
  let review = null
  try{
    review = await product.createReview(
      {
        title:dataReview.title,
        description:dataReview.description,
        stars:dataReview.stars,
        userId:user.id
      }) //Pudo ser mas sencillo colocar el id que viene por parametro, pero que tal si es un id falso?, rompe, mejor verificar
  }catch(err){
    return { __typename: "error", name: "probablemente stars fuera del valor 1-5", detail: `${err.message}` } 

  }
  if(!review) return { __typename: "error", name: "error", detail: `Hubo un problema al crear la review` } 
 
 
  return {__typename:"review",id:review.id, title:review.title, description:review.description, stars:review.stars}
}

async function modifyReview(reviewId, dataReview){
  //Validacion de datos
  if(!dataReview.hasOwnProperty("title") && !dataReview.hasOwnProperty("description") && !dataReview.hasOwnProperty("stars"))
     return { __typename: "error", name: "error entrada", detail: `No se envio ningun valor a modificar en dataReview` }

  //Get the review
  const review = await Review.findOne({
    where:{
      id:reviewId
    }
  })
  if(!review) return { __typename: "error", name: "error id review", detail: `El id ${reviewId} no existe` } 

  for(prop in dataReview){
    review[prop] =  dataReview[prop]
  }
  try{
    await review.save()
    await review.reload()
  }catch(err){
    return { __typename: "error", name: "probablemente stars fuera del valor 1-5", detail: `${err.message}` } 
  }

  if(!review) return { __typename: "error", name: "error", detail: `Hubo un problema al modificar la review` } 
 
 
  return {__typename:"review",id:review.id, title:review.title, description:review.description, stars:review.stars}
}

module.exports = { deleteReview, getAllReviewsFromAProduct, addReview, modifyReview }
