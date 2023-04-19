import React, { useState, useEffect } from "react";

function ImageUpload() {
  const [images, setImages] = useState([]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }
  return (
    <div>
      <input type="file" onChange={onImageChange} />
    </div>
  );
}

export default ImageUpload;
