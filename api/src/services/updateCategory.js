const { Category } = require("../db.js")

async function updateCategory(id, name) {
  // console.log('ttttttttttttttt', name, description)
  // dejo esta parte con la modificacion de todos los campos de category
  // el formulario es controlado así que se debe exigir todos los campos
  console.log("services:", id, name)
  try {
    // nos devuelve un array con la cantidad de elementos actualizados
    let num = await Category.update({ name }, { where: { id }, returning: true })
    return { __typename: "category", ...num[1][0].dataValues }
    // return obj
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { updateCategory }
