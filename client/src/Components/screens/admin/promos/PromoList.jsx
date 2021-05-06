import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import getPromos from "../../../../Apollo/queries/getPromos";
import DELETE_PROMO from "../../../../Apollo/mutations/deletePromo";
import styled from "styled-components";
import deleteIcon from "../../../../icons/delete.svg";
import { useSelector } from "react-redux";

const PromoList = () => {
  const { data, refetch } = useQuery(getPromos, {
    fetchPolicy: "no-cache",
  });
  let { status } = useSelector((state) => state.theme);


  const [deletePromo] = useMutation(DELETE_PROMO);

  const deleteHandler = (id) => {
    deletePromo({
      variables: {
        id,
      },
    }).then((res) => {
      refetch();
    });
  };
  return (
    <StyledPromoList light={status}>
      <div className="table-container">
        <div className="topp">
          <div className="namee">Name</div>
          <div className="discountt">Discount</div>
          <div className="dayy">Day</div>
          <div className="categoryy">Category</div>
          <div className="editt"> Action</div>
        </div>
        {data &&
          data["getPromos"] &&
          data["getPromos"].map((elem, i) => (
            <div key={i} className="listt">
              <div className="listName">{elem.name}</div>
              <div className="listDiscount">{elem.discount}</div>
              <div className="listDay">{elem.day}</div>
              <div className="listCategory">{elem.category}</div>
              <div className="listEdit">
                <button onClick={() => deleteHandler(elem.id)}>
                  <img src={deleteIcon} alt="delete-icon" />
                </button>
              </div>
            </div>
          ))}
      </div>
    </StyledPromoList>
  );
};

const StyledPromoList = styled.div`
  width: 90%;
  height: 60;
  .table-container {
}
background:red;
  .topp {
    color: ${({ light }) => (light ? "black" : "white")};
    background: ${({ light }) => (light ? "white" : "#292929")};
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    height: 5rem;
    border-bottom: 1px solid #ddd;
    .discountt,
    .dayy,
    .categoryy,
    .namee,
    .editt {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
    .discountt {
      //background:blue;
      width: 8%;
    }
    .dayy {
      //background:purple;
      width: 17%;
    }
    .categoryy {
      //background:blue;
      width: 20%;
    }
    .namee {
    //   background:green;
      width: 20%;
      display: flex;
      justify-content: flex-start;
    }
    .editt {
    //   background:green;
      width: 10%;
    }
  }
  .listt {
    background: ${({ light }) => (light ? "white" : "#292929")};
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    height: 5rem;
    border-bottom: 1px solid #ddd;
    .listName,
    .listDiscount,
    .listDay,
    .listCategory,
    .listEdit {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .listName {
      width: 20%;
      display: flex;
      justify-content: flex-start;
    }
    .listDiscount {
      width: 8%;
    }
    .listDay {
      width: 17%;
    }
    .listCategory {
      width: 20%;
    }
    .listEdit {
      width: 10%;
      button {
        border: none;
        background: none;
        img {
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }
`;

export default PromoList;
