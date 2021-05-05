import { gql } from "@apollo/client";

const GENERATE_OTP = gql`
    mutation generateTokenOTP($userId:Int!){
        generateTokenOTP(userId:$userId){
            __typename
            ... on otpToken{
                image
            }
            __typename
            ... on error{
                name
                detail
            }
        }
    }
`;

export default GENERATE_OTP;