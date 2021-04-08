const { Product, Category } = require('../db');

function dataPopulation(){
    return(
        Category.create({ 
            name: "categoria 1",
            description: "esta es la categoria uno"
          }),
          Category.create({ 
            name: "categoria 2",
            description: "esta es la categoria dos"
          }),
          Category.create({ 
            name: "categoria 3",
            description: "esta es la categoria tres"
          }),
          Category.create({ 
            name: "categoria 4",
            description: "esta es la categoria cuatro"
          }),
          Product.create({ 
            name: "producto 1",
            description: "este es el producto uno",
            price: 11.1,
            stock: 111,
            image: 'uno.jpg',
          }),
          
          Product.create({ 
            name: "producto 2",
            description: "este es el producto dos",
            price: 22.2,
            stock: 222,
            image: 'dos.jpg'
          }),
          Product.create({ 
            name: "producto 3",
            description: "este es el producto tres",
            price: 33.3,
            stock: 333,
            image: 'tres.jpg'
          }),
          Product.create({ 
            name: "producto 4",
            description: "este es el producto cuatro",
            price: 44.4,
            stock: 444,
            image: 'cuatro.jpg'
          })
    )
};

module.exports ={dataPopulation};