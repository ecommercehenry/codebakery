import React, { useCallback } from "react";

// Librerias
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { toast } from "react-toastify";

// Spinner
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Upload = ({
  saveImageSlider,
  loading,
  serverRefresh,
  setServerRefresh,
}) => {
  const customId = "custom-id-yes";

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach(async (files) => {
      const newImage = new FileReader();
      newImage.readAsDataURL(files);
      newImage.onloadend = () => {
        console.log(newImage);
        saveImageSlider({
          variables: {
            image: newImage.result,
          },
        }).then(({ data }) => {
          console.log(data.saveImageSlider);
          if (data.saveImageSlider.__typename === "booleanResponse") {
            toast("Image uploaded successfully", {
              toastId: customId,
            });
            setServerRefresh(true);
          }
          if (data.saveImageSlider.__typename === "error") {
            console.log(data.saveImageSlider.detail);
            toast("An error occurred on the upload", {
              toastId: customId,
            });
          }
        });
      };
    });
  }, [saveImageSlider, setServerRefresh]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  return loading ? (
    <Uploading>
      <p className="waiting">Image upload. Please wait...</p>
      <Loader type="BallTriangle" color="#755588" height={100} width={100} />
    </Uploading>
  ) : (
    <DropZone>
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "active" : null} `}
      >
        <input {...getInputProps()} placeholder="Drag and Drop here" />
        <p style={{ margin: "0", color: "#755588" }}>
          Drag & drop some files here or click to select files
        </p>
      </div>
    </DropZone>
  );
};

const Uploading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
  height: 8rem;
  margin-bottom: 3rem;
  color: #755588;
  padding: 0.1em;
  width: 50%;
  margin-left: 0.7em;

  .waiting {
    margin: 0;
    padding: 0;
    padding-right: 2rem;
  }
`;

const DropZone = styled.form`
  width: 43%;
  margin-right: 0.7em;

  input {
    border: none;
    text-align: center;
    font-size: 2rem;
  }
  input:focus {
    outline: none;
  }

  .dropzone {
    /* margin-top: 3rem; */
    /* margin-bottom: 1rem; */
    height: 100%;
    padding: 1em;
    border: 2px dashed #755588;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8em;
    font-weight: bold;
    cursor: pointer;
    margin: 0;
    border-radius: 0.5em;
  }

  .active {
    border: 2px solid rebeccapurple;
  }

  .p {
    font-size: 1.2em;
  }

`;

export default Upload;
