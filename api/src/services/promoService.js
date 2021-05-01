const { Promo } = require("../db.js");

async function addPromo({ name, discount, day, category }) {
    try {
      let newPromo = await Promo.create({
        name,
        discount,
        day,
        category,

      });
      return {__typename: "booleanResponse" , boolean: true }
    } catch (error) {
      console.log(error.message);
    }
  }

  module.exports = { addPromo };
