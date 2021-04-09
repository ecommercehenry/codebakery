import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import getData from "../apollo/queries/productById";
// import UPDATE_CATEGORY from "../Apollo/mutations/updateCategory"

function FormCRUD() {
  // prueba para updateCategory -- FUNCIONA
  // let input;
  // const [updateCategory, { data }] = useMutation(UPDATE_CATEGORY);

  // updateCategory()
  // console.log(data)

  // original
  const { data } = useQuery(getData);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div>hola estoy renderizado</div>;
}

export default FormCRUD;
