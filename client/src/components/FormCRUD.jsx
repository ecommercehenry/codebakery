import {gql, useQuery} from '@apollo/client';
import React from 'react'

function FormCRUD(){
    const getData = gql`{
        productById (id:3){
          name
          description
          price
          stock
          image
        }
      } `

      const {data} = useQuery(getData);
      console.log(data)
    return (<div>hola estoy renderizado</div>)
}

 export default  FormCRUD

