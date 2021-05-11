import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { Rating } from "@material-ui/lab";
import styled from "styled-components";
import SettingsIcon from "@material-ui/icons/Settings";
import DeleteIcon from "@material-ui/icons/Delete";
import  DELETE_REVIEW  from "../../../Apollo/mutations/deleteReview"; 
import { useParams } from "react-router-dom";


const ReviewByUser = ({ productId, id, title, description, stars, refetch}) => {
  let index = useParams(); 
 
  const [deleteReview] = useMutation(DELETE_REVIEW);

  const deleteHandler = async (e) => {
  e.preventDefault()
   await deleteReview({
      variables: {
        productId: productId,
        userId: parseInt(index.id)
      },
    });
    refetch()
  }

  return (
    <StyledRev>
      <div key={id} className="element-container">
        <div className="info-container">
          <div className="text-container">
            <span>Title</span>
            <p>{title}</p>
          </div>
          <div className="text-container">
            <span>Id Product</span>
            <p>{productId}</p>
          </div>
          <div className="text-container">
            <span>Comentary </span>
            <p>{description}</p>
          </div>
          <div>
            <span>
              Rating{" "}
              <div>
                <Rating
                  className="starsss"
                  name="read-only"
                  value={stars}
                  readOnly
                />
              </div>
            </span>
          </div>
          <Link to={`/user/modify/review/${id}`}>
            <div className="edit-button">
              <span style={{ color: "#28004d" }}>
                <SettingsIcon />
              </span>
            </div>
          </Link>
          <button onClick={deleteHandler} >
          <div className="edit-button">
              <span style={{ color: "#28004d" }}>
                <DeleteIcon />
              </span>
            </div>
          </button>
        </div>
      </div>
    </StyledRev>
  );
};

export default ReviewByUser;

const StyledRev = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  margin-top: 2rem;
  //background:red;
  .status-container {
    width: 250px;
    height: 50px;
    padding: 0.5rem;
    align-items: center;
  }
  .info-container {
    height: 30%;
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
  .element-container {
    width: 100%;
    height: 100%;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 40px;
  }
  .element-container span {
    font-weight: 700;
  }
  .text-container {
    width: 350px;
    height: 80px;
    padding: 0.5rem;
    overflow: hidden;
  }
  .text-container p {
    margin: 0;
    color: grey;
    font-weight: 700;
  }
  .edit-button {
    padding: 0.5rem;
    height: 100%;
    justify-self: center;
    align-self: center;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    flex-direction: column;
    background: none;
    border: none;
  }
  .edit-button button {
    margin-top: 0.5rem;
    border: none;
    background: transparent;

    button{
    background: none;
    border: none
  }
  }
`;
