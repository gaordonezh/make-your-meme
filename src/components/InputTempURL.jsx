import React from "react";

const InputTempURL = ({ setUpload }) => {
  const handleUploadImage = (event) => {
    const fileUploaded = event.target.files[0];
    if (fileUploaded !== null && fileUploaded !== undefined) {
      setUpload(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div>
      <label htmlFor="customImage">Select your image</label>
      <input type="file" placeholder="IMAGEN" id="customImage" onChange={handleUploadImage} />
    </div>
  );
};

export default InputTempURL;
