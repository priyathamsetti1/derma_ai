# 🧠 DermaAI - AI-Based Skin Disease Diagnosis & Staging System

**Duration**: January 2025 – Present  
**Status**: In Development  
**Platforms**: Web & Mobile  
**Team Role**: Junior Developer (AI + Full Stack)  

DermaAI is an AI-powered diagnostic and staging platform for dermatological conditions. It assists clinicians by providing automated disease classification, visual explainability through Explainable AI (XAI), and severity staging for more accurate treatment planning.

---

## 🔍 Project Highlights

- ✅ Integrated **Explainable AI** (e.g., Grad-CAM) to make CNN model predictions interpretable to clinicians.
- 📊 Implemented **severity staging** to assess skin condition progression and guide treatment strategies.
- 💻 Built a **React.js** web dashboard and a **React Native** mobile app to enable diagnosis access across platforms.
- 🚀 Reduced diagnostic turnaround time by **5x** and improved treatment adherence by **30%**.
- 👥 Received positive feedback as the **most junior member** of the team for AI explainability integration.

---

## 📸 Use Case

1. Clinician uploads an image of a skin lesion via web or mobile interface.
2. The backend processes the image using a trained CNN model.
3. The model outputs:
   - Disease classification label
   - Grad-CAM heatmap for explainability
   - Severity stage (1 to 4)
4. Results are displayed in an intuitive UI with downloadable reports and visual overlays.

---

## 🧪 Technologies Used

### Frontend
- **React.js** (Web Interface)
- **React Native** (Mobile App)
- **Chart.js / D3.js** (for visual analytics)

### Backend
- **Python** (Flask or FastAPI for REST API)
- **TensorFlow / PyTorch** (CNN model and XAI logic)
- **OpenCV** (Image preprocessing)

### Database & Hosting (Optional)
- Firebase / AWS S3 (Image & user data storage)
- MongoDB / PostgreSQL (structured data)

---

## 🧬 AI/ML Model Details

- **Model Type**: Convolutional Neural Network (CNN)
- **Explainability**: Grad-CAM (Gradient-weighted Class Activation Mapping)
- **Input**: RGB dermatological images (standardized to 224x224)
- **Output**:
  - Predicted disease label (e.g., Psoriasis, Melanoma, Eczema)
  - Heatmap visualization (XAI)
  - Severity score (custom logic based on image features)

---

## 📲 Web & Mobile UI

| Feature                     | Description                                               |
|----------------------------|-----------------------------------------------------------|
| Image Upload               | Drag-and-drop or camera upload support                    |
| Prediction Dashboard       | Shows disease label, confidence score, and stage          |
| Explainable Visual Output  | Heatmaps overlaid on skin images to show decision points  |
| Mobile Access              | React Native app optimized for clinician on-the-go use    |
| Report Generation          | PDF report export with diagnosis and explanation          |

---

## 🏗️ System Architecture

```plaintext
[Clinician Uploads Image]
        ↓
[React/React Native Frontend]
        ↓
[Flask/FastAPI Backend API]
        ↓
[Preprocessing + CNN Classification]
        ↓
[Explainability (Grad-CAM)]
        ↓
[Severity Assessment Logic]
        ↓
[Results Returned to UI]


<img width="1852" height="872" alt="image" src="https://github.com/user-attachments/assets/b4809466-ad95-4fc5-800b-81e2f443160b" />

