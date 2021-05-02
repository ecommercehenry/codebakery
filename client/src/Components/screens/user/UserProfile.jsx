import React from "react";
import UserByDetail from "./UserByDetail";
import { useQuery } from "@apollo/client";
import getUserById from "../../../Apollo/queries/getUserById";

const UserProfile = () => {
  let id = window.localStorage.getItem("id");
  console.log(id, "mi id");
  const { data } = useQuery(getUserById, {
    variables: { id: 5 },
    fetchPolicy: "no-cache",
  });

  console.log(data, "mis dts");
  return (
    <div>

      { 
       data?.getUserById?.map((e) => (
        <h1>Nameeeeeeeeeeeeeeeeeee{e.name}</h1>
      ))
        }
    </div>
  );
};

export default UserProfile;
