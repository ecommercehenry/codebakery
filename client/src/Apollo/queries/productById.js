import { gql } from "@apollo/client"

const getData = gql`
  {
    productById(id: 1) {
      name
      description
      price
      stock
      image
    }
  }
`

export default getData
