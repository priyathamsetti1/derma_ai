import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = ({ setResult, setHeatmapUrl }) => {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", image);

    const res = await axios.post("http://localhost:5000/predict", formData);
    setResult(res.data.prediction);
    setHeatmapUrl(`http://localhost:5000/uploads/${res.data.heatmap}`);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />
      <button onClick={handleUpload}>Upload & Diagnose</button>
    </div>
  );
};

export default UploadForm;
