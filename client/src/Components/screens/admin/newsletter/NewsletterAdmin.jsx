import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import SEND_NEWSLETTER from "../../../../Apollo/mutations/sendNewsletter";
import styled from "styled-components";

export default function NewsletterAdmin() {
  const [sendNews] = useMutation(SEND_NEWSLETTER, {});
  const [preview, setPreview] = useState("");
  const [info, setInfo] = useState({
    description: "",
    image: "",
  });

  const inputHandler = (e) => {
    return setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    const image = e.target.files[0];
    console.log(image, "image");
    previewImage(image);
  };

  const previewImage = (image) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(image);
    fileReader.onloadend = () => {
      setPreview(fileReader.result);
      setInfo({ ...info, image: fileReader.result });
    };
  };

  function handlerOnClick(e) {
    console.log(info, "info");
    e.preventDefault();
    sendNews({
      variables: {
        message: info.description,
        image: info.image,
      },
    });

    alert("Newsletter Enviado!");
  }
  return (
    <StyleNewsletter>
      <div>Description</div>
      <form onSubmit={handlerOnClick}>
        <div className="descriptionn">
          <textarea
            name="description"
            type="text"
            placeholder="add a description..."
            value={info.description}
            onChange={inputHandler}
          />
        </div>
        <div className="imageLoaderr">
          <div className="previeww">
            {preview && <img src={preview} alt="" />}
          </div>
          <div className="fakeButtonn">
            <input
              type="file"
              accept=".jpg,.png"
              name="image-product"
              id="image-product"
              onChange={imageHandler}
            />
          </div>
        </div>
        <div>
          <button type="submit">Send newletters to all subscriptors</button>
        </div>
      </form>
    </StyleNewsletter>
  );
}

const StyleNewsletter = styled.div`
    border: 2px solid red;
`;
