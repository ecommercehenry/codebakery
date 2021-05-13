import React from "react";
import { useMutation } from "@apollo/client";
import MODIFY_USER from "../../../Apollo/mutations/modifyUser";
import getUserById from "../../../Apollo/queries/getUserById";
import styled from "styled-components";

export default function DisableTFA({ id , visibility}) {
  const [modifyUser] = useMutation(MODIFY_USER, {
    refetchQueries: [{
      query: getUserById,
      variables: { id: parseInt(id) }
    }]})

  const handleClick = (e) => {
      e.preventDefault()
      modifyUser({variables: {
          id: parseInt(id),
          twoFA: false,
      }})
      // window.location.reload()
  }


  return (
    <StyledButton onClick={e => handleClick(e)}>
      DISABLE
      {/* <button onClick={e => handleClick(e)} className='button-twoFA'>DISABLE</button> */}
      {/* <button onClick={e => handleClick(e)} >DISABLE</button> */}
      {/* <button onClick={e => handleClick(e)} >DISABLE</button> */}
    </StyledButton>
  );
}


const media = {
  tablet: "@media(min-width:768px)",
  laptop: "@media(min-width:992px)",
  desktop: "@media(min-width:1200px)",
};

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // background-color: red;
  //padding:0.7rem 1rem;
  height: 2.7rem;
  margin-top: 5px;
  padding: 0.5rem 0.8rem;
  font-weight: 700;
  font-size: calc(0.7rem + 6 * ((100vw - 320px) / 680));
  color: red;
  border-radius: 25px;
  border: 3px solid red;
  align-items: center;
  z-index: 11;
  span {
    margin-left: 4px;
  }
  ${media.tablet} {
    font-size: calc(0.5rem + 6 * ((100vw - 320px) / 680));
  }
  ${media.laptop} {
    font-size: calc(0.25rem + 6 * ((100vw - 320px) / 680));
  }
`;