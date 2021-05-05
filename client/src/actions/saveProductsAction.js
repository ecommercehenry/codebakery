export const SAVE_PRODUCTS = "SAVE_PRODUCTS";


export const saveProducts = (products) => {
  let out = {}
  products.forEach(el=>{
    out[el.id]={
      name:el.name,
      description:el.description,
      stock:el.stock,
      price:el.price,
      discount:el.discount,
      image:el.image,
      categories:el.categories,
    }
  })
  return {
    type: SAVE_PRODUCTS,
    payload: out,
  };
};

