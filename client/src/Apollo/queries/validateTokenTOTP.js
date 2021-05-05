import { gql } from "@apollo/client"

const VALIDATE_TOTP = gql`
    query validateTokenTOTP($userId:Int!, $code:String!){
        validateTOTP(userId:$userId code:$code){
            __typename
            ... on booleanResponse{
                boolean
            }
            __typename
            ... on error{
                name
                detail
            }
        }
  }
`
export default VALIDATE_TOTP;
