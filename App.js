// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [heatmapUrl, setHeatmapUrl] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", image);

    const response = await axios.post("http://localhost:5000/predict", formData);
    setResult(response.data.prediction);
    setHeatmapUrl(response.data.heatmap);
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
      <h2>🧴 DermaAI - Skin Diagnosis</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload & Diagnose</button>

      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>Diagnosis: {result.label}</h3>
          <p>Severity: {result.stage}</p>
          {heatmapUrl && (
            <div>
              <h4>AI Heatmap:</h4>
              <img src={`http://localhost:5000/${heatmapUrl}`} alt="AI Explanation" style={{ width: '100%' }} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
