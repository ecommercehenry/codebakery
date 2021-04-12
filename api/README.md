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

## FLOW DE GRAPHQL

**_App.js_**

Aqui creamos nuestro endpoint `/graphql`

**_schema.js_**

Aqui importamos nuestras `queries` `mutations` `types` `inputs`

**_/queries /mutations_**

En estas dos carpetas definimos y exportamos nuestras queries y mutations respectivamente.

**_/root_**

Aqui se encuentra dos carpetas llamadas `/mutationResolver` y `/queriesResolvers` que se encargan de solicitar un servicio que resolvera nuestras queries o mutation, respectivamente,

**_/services_**

Recibe ordenes de las queries/mutations y realiza las peticiones pertinentes a nuestra BD.

**_/root_**

Una vez obtenido el resultado de el servicio volvemos al root y aqui se envia la respuesta a quien lo solicite.
