import React from "react";
import UserByDetail from "./UserByDetail"; 
import { useQuery } from "@apollo/client";
import getUserById from "../../../Apollo/queries/getUserById"



const UserProfile = () => {

  let id = window.localStorage.getItem("id");
  console.log(id, 'mi id')
  const { data } = useQuery(getUserById, {
    variables: { id: 5}
  }) 

  console.log(data, 'mis dts')
  return (
    <div>
      {
        data?.getUseById?.map((e) => (
          <UserByDetail 
          key={e.id}
          id={e.id}
          name={e.name}
          address={e.address}
          email={e.email}
          phoneNumber={e.phoneNumber}
          />
      ))
      }
    </div>
  ) 
};

export default UserProfile;
