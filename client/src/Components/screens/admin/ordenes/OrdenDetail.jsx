import React from "react";
import styled from "styled-components";

// Y realizar los Detalles de css
const OrderDetail = (props) => {
  const { name, image, price, quantity } = props;

  return (
    <StyledOrden>
      <div className="element-container-odtls">
        <div className="info-container-odtls">
          <div className="text-container-odtls">
            <span>Name: </span>
            <p>{name}</p>
          </div>
          <div className="text-container-odtls image">
            <span style={{ marginLeft: "1rem" }}>Product: </span>
            <img className="image-odtls" src={image} alt={`img-${image}`} />
          </div>
          <div className="text-container-odtls">
            <span>Amount: </span>
            <p>{quantity}</p>
          </div>
          <div className="text-container-odtls">
            <span>Price: </span>
            <p>{price}</p>
          </div>
          <div className="text-container-odtls">
            <span>Sub Total: </span>
            <p>{price * quantity}</p>
          </div>
        </div>
      </div>
    </StyledOrden>
  );
};

const StyledOrden = styled.div`
  display: block;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  margin-top: 2rem;
  //background:red;

  .image-odtls {
    display: block;
    height: 8vh;
    width: 8vw;
    block-size: auto;
    position: absolute;
  }

  .image {
    display: block;
    height: auto;
    width: 100%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  .info-container-odtls {
    height: 80%;
    width: 90%;
    display: flex;
  }

  .element-container-odtls {
    width: 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 3px solid #402e57;
    padding: 50px 0px 150px;
  }
  .element-container-odtls span {
    font-weight: 700;
    font-size: 1rem;
    color: rgb(123, 87, 156);
  }

  .text-container-odtls {
    width: 10rem;
    height: 50vh;
    padding: 0.5rem;
    overflow: hidden;
    /* display: flow-root; */
  }
  .text-container-odtls p {
    margin: 0;
    color: grey;
    font-weight: 700;
  }
`;

export default OrderDetail;
