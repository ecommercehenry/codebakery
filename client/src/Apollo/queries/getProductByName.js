import { gql } from "@apollo/client"

const getProductByName = gql`
  {
    getProductByName(name: "Cuchillo") {
      name
    }
  }
`

export default getProductByName