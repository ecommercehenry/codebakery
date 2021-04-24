import React from "react";
import GET_ALL_USERS from "../../../../Apollo/queries/getAllUsers";
import DELETE_USER from "../../../../Apollo/mutations/deleteUser";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { useEffect } from "react";
import Promote from "../Promote";

const UserAdmin = () => {
  /*
    if admin not disable button to delete
    add promete (role)
    sort data by id
    */
  const [
    deleteUser,
    { data: dataDeleteUser, loading: loadingMutation },
  ] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_ALL_USERS }],
  });
  let [getAllUsers, { data, loading }] = useLazyQuery(GET_ALL_USERS);

  function handleClick(e) {
    // e.preventDefault()
    deleteUser({
      variables: {
        userId: parseInt(e.target.name),
      },
    });
  }

  useEffect(() => {
    getAllUsers();
  }, [data]);

  if (!data) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {data?.getAllUsers?.map((element) => (
          <section>
            <div>
              <span>ID</span> <span>NAME</span> <span>DNI</span>{" "}
              <span>EMAIL</span> <span>PHONE NUMBER</span> <span>ROLE</span>
            </div>
            <span>{element.id}</span> <span>{element.name}</span>{" "}
            <span>
              {element.dni
                ? element.dni
                : "This user hasn't added his/her dni yet"}
            </span>{" "}
            <span>{element.email}</span>{" "}
            <span>
              {element.phoneNumber
                ? element.phoneNumber
                : "This user hasn't added phone number yet"}
            </span>{" "}
            <span>{element.role}</span>
            <div>
            { element.email === "admin@admin.com" 
            ? <button>THIS SUPER USER</button>
            : <Promote idUser={element.id} rol={element.role} />
            }
            </div>
            <div>
              {element.role === "admin" ? (
                <button>CANNOT DELETE ADMIN </button>
              ) : (
                <button name={element.id} onClick={(e) => handleClick(e)}>
                  DELETE{" "}
                </button>
              )}
            </div>
          </section>
        ))}
      </div>
    );
  }
};

export default UserAdmin;
