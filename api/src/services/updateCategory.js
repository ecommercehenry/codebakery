const { Category } = require('../db.js');

async function updateCategory(id, name, description){
    // console.log('ttttttttttttttt', name, description)
    // dejo esta parte con la modificacion de todos los campos de category
    // el formulario es controlado así que se debe exigir todos los campos
    try{
        // nos devuelve un array con la cantidad de elementos actualizados
        let num = await Category.update({ name, description }, { where: { id } });
        return num;
    }catch(e){
        alert('error al actualizar la categoria con id: '+id);
    }
}

module.exports = {updateCategory}