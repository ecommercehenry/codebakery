# QUERIES

## product

```
query {
    product{
        id
        name
    }
}
```

## productById

```
query {
    productById (id:6){
        name
        description
        price
        stock
        image
    }
}
```

## productCategory

```
query {
    productCategory(id:1){
        name
        categories{
            name
        }
    }
}
```

## getProductByCategoryName

```
query {
    getProductByCategoryName(name:"ejemplo") {
        id
        name
        price
        stock
        image
    }
}
```

## getAllCategories

```
query {
    getAllCategories{
        name
    }
}
```

# MUTATIONS

## modifyProduct

```
mutation{
  modifyProduct(id: 1, dataToModify: {description: "ejemplo", price: 10{
    name
  }
}

```

## updateCategory

```
mutation {
    updateCategory(id: 1 , input: {
        name: "ejemplo",
        description: "descripcion de ejmeplo",
    })
}

```

## addCategory

```
mutation{
    addCategory(name: "ejemplo", description: "descripcion de ejmeplo"){
        name
    }
}

```

## deleteCategory

```
mutation{
	deleteCategory(id: 1)
}

```

## deleteById

```
mutation{
    deleteById(id: 2)
}

```

## addCategoryToProduct

```
mutation{
    addCategoryToProduct(idProduct: 1, idCategory: 1){
        name
    }
}

```

## removeCategoryFromProduct

```
mutation{
    removeCategoryFromProduct(idProduct: 1,idCategory: 1){
        name
    }
}

```

## addProduct

```
mutation {
    addProduct(category: 1, name: "ejmeplo", description: "descripcion de ejmeplo", price: 50, stock: 50, image: "cat.jpg"){
        id
    }
}

```
