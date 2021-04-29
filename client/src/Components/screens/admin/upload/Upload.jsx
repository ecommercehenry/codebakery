import React, { useState } from "react";
import styled from "styled-components";

import { FaCloudUploadAlt } from "react-icons/fa";

const Upload = () => {
  const [file, setFile] = useState(null);
  return (
    <InputFile>
      <button className="file-upload-button">
        <FaCloudUploadAlt style={{ content: "Select some files" }} />
      </button>
      <input className="file-upload" type="file" multiple />
    </InputFile>
  );
};

const InputFile = styled.div`
  margin-top: 2rem;
  height: 4rem;
  overflow: hidden;
  position: relative;

  .file-upload-button {
    display: inline-block;
    width: 200px;
    height: 40px;
  }

  .file-upload {
    font-size: 200px;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
  }

  ::-webkit-file-upload-button {
    visibility: hidden;
  }
  ::before {
    /* display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt; */
  }
  :hover::before {
    border-color: black;
  }
  :active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
`;

export default Upload;
