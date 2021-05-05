import { gql } from "@apollo/client"

const getData = gql`
    query productById($id: Int!) {
      productById(id: $id){
      name
      description
      price
      discount
      stock
      image
      discount
       }
    }
`

export default getData
