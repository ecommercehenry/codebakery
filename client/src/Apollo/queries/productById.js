import { gql } from "@apollo/client"

const getData = gql`
    query productById($id: Int!) {
      productById(id: $id){
      name
      description
      price
      stock
      image
    }
    }
`

export default getData
