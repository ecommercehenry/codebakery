import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GET_ALL_USERS from "../../../../Apollo/queries/getAllUsers";
import DELETE_USER from "../../../../Apollo/mutations/deleteUser";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import Promote from "../Promote";
import {
  getAllUsersWithDetails,
  orderAscByName,
  orderDescByName,
  searchByName,
} from "../../../../actions/index";

const UserAdmin = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let dataToRender = state.userAdmin.dataToRender;

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
    if (!data) {
      getAllUsers();
    } else if (data && data.getAllUsers) {
      dispatch(getAllUsersWithDetails(data?.getAllUsers));
    }
  }, [loading]);

  function handleClickAsc() {
    dispatch(orderAscByName());
  }

  function handleClickDesc() {
    dispatch(orderDescByName());
  }

  function handleChange(e) {
    // e.preventDefault();
    setInput(e.target.value);
    if (e.target.value !== "") {
      dispatch(searchByName(e.target.value));
    } else if (e.target.value === "") {
      dispatch(searchByName("all"));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchByName(input));
    setInput("");
  }

  if (!dataToRender) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder=" Type a name"
            value={input}
            onChange={(e) => handleChange(e)}
            required
          />
          <input type="submit" value="SEARCH" />
        </form>
        <button onClick={handleClickAsc}>ORDEN NAME ASC</button>
        <button onClick={handleClickDesc}>ORDEN NAME DESC</button>
        <div>
          {dataToRender?.map((element) => (
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
                {element.email === "admin@admin.com" ? (
                  <button>THIS SUPER USER</button>
                ) : (
                  <Promote idUser={element.id} rol={element.role} />
                )}
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
      </div>
    );
  }
};

export default UserAdmin;
