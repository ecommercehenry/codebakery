import React, { useState } from "react";
import styled from "styled-components";
import footerImage from "./footer.jpg";

export default function Newsletter() {
  const [input, setInput] = useState();
  function handlerChange() {}
  function handleSubmit() {}

  return (
    <>
      <StyledNewsletter>
        <div>
          <h2 style={{ fontVariantCaps: "petite-caps" }}>
            Subscribe to our Newsletter
          </h2>
          <input
            type="email"
            placeholder="Let us your email"
            value={input}
            required
            onChange={handlerChange}
          />
          <button id="search-btn">Submit</button>
        </div>
      </StyledNewsletter>
    </>
  );
}

const StyledNewsletter = styled.div`
  text-align: center;
  background: transparent;
  display: block;
  align-items: center;
  z-index: 2;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  min-width: 18% !important;
  padding: 2rem;
  color: #5e3f71;
  font-weight: bold;

  input {
    width: 30%;
    height: 3rem;
    font-size: 1rem;
    text-align: left;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  button {
    width: 10%;
    height: 3rem;
    border: none;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    background-color: #5e3f71;
    color: whitesmoke;
    :hover {
      background-color: #694e7a;
      font-weight: bold;
    }
  }
`;
