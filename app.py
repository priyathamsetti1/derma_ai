# ai-model/app.py
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
from model import predict_skin_disease  # Your CNN model
from explainable_ai import generate_heatmap  # Grad-CAM

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/predict', methods=['POST'])
def predict():
    image = request.files['image']
    image_path = os.path.join(UPLOAD_FOLDER, image.filename)
    image.save(image_path)

    label, stage = predict_skin_disease(image_path)
    heatmap_path = generate_heatmap(image_path)

    return jsonify({
        "prediction": {
            "label": label,
            "stage": stage
        },
        "heatmap": heatmap_path
    })

@app.route('/uploads/<path:filename>')
def serve_image(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

if __name__ == '__main__':
    app.run(debug=True)
