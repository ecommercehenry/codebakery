**_GUIA DE ESTILO_**

Estamos usando graphQL con Express.

Para crear una ruta nueva:
1- Creamos una function en /services like that:

```
async function getAllProducts() {
    try {
        return await Product.findAll({})
        }
        catch(err){
            throw new Error(err)
            }}
```

Donde el nombre de la funcion describe lo que vamos a hacer get/post/delete + lo que va a hacer + en que tabla lo va a hacer

2- Modificar el root:
dentro de /graphql/schema.js tenemos una costante llamada root, en ella deberiamos agregar la function que acabamos de hacer.

3- Agregarlo dentro de Query:

```
type Query{
getAllProducts: [product]
getProductById(id: Int): [product]
nuestraNuevaFuncion(Si recibe parametros): retornar el type que definimos abajo: [prodcut] o [category]
}
```
