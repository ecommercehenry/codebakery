import React, { useCallback } from "react";

import { useDropzone } from "react-dropzone";
import styled from "styled-components";

// Spinner
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { useMutation } from "@apollo/client";
import SAVE_IMAGE from "../../../../Apollo/mutations/saveImageSlider";

const Upload = () => {
  const [saveImageSlider, { loading }] = useMutation(SAVE_IMAGE);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach(async (files) => {
      const newImage = new FileReader();
      newImage.readAsDataURL(files);
      newImage.onloadend = () => {
        saveImageSlider({
          variables: {
            image: newImage.result,
          },
        });
      };
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  return loading ? (
    <Uploading>
      <p className="waiting">Image upload. Please wait...</p>
      <Loader type="BallTriangle" color="#755588" height={80} width={80} />
    </Uploading>
  ) : (
    <DropZone>
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "active" : null} `}
      >
        <input {...getInputProps()} placeholder="Drag and Drop here" />
        <p style={{ margin: "0", color: "#755588" }}>
          Drag 'n' drop some files here, or click to select files
        </p>
      </div>
    </DropZone>
  );
};

const Uploading = styled.div`
  display: flex;
  align-items: center;

  .waiting {
    margin: 0;
    padding: 0;
    padding-right: 2rem;
  }
`;

const DropZone = styled.form`
  width: 100%;

  input {
    border: none;
    text-align: center;
    font-size: 2rem;
  }
  input:focus {
    outline: none;
  }

  .dropzone {
    margin-top: 3rem;
    margin-bottom: 3rem;
    height: 8rem;
    padding: 1rem;
    border: 2px dashed #755588;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
  }

  .active {
    border: 2px solid rebeccapurple;
  }
`;

/**
 * Esto es lo que devuelve Cloudinary: 
access_mode: "public"
asset_id: "fe9305ea578fbb32589bc1171a71e405"
bytes: 3504774
created_at: "2021-04-30T17:31:26Z"
etag: "6b4ab1272a66c328ce0cdefcba7e83cf"
existing: false
format: "jpg"
height: 2160
original_filename: "ACOdyssey_AlexiosEpicBattle"
placeholder: false
public_id: "sliderimages/ACOdyssey_AlexiosEpicBattle_ajzgpl"
resource_type: "image"
secure_url: "https://res.cloudinary.com/studio-ghibli/image/upload/v1619803886/sliderimages/ACOdyssey_AlexiosEpicBattle_ajzgpl.jpg"
signature: "15be32d0a244ccb2c9e07f17d082d1fb3bdd5611"
tags: []
type: "upload"
url: "http://res.cloudinary.com/studio-ghibli/image/upload/v1619803886/sliderimages/ACOdyssey_AlexiosEpicBattle_ajzgpl.jpg"
version: 1619803886
version_id: "6c7a8c011a40e8a38a77dae2f972a097"
width: 3840
 */

export default Upload;
