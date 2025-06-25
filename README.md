
# 🧠 Sports Personality Image Classifier

This project is a classical machine learning-based web application that identifies popular sports personalities from uploaded face images. The app uses traditional computer vision techniques like Haarcascade for face detection, PyWavelets for feature extraction, and an SVM (Support Vector Machine) classifier for prediction.

---

## 📌 Features

- 🖼️ Upload any image through a sleek drag-and-drop UI (Dropzone.js)
- 🤖 Detects faces using **Haarcascade**
- 🔍 Extracts wavelet features using **PyWavelets**
- 🧠 Classifies the image using a trained **SVM model**
- 📊 Displays confidence scores for all known players
- 🌐 Simple and responsive web interface using **HTML + CSS + Bootstrap**

---

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/sports-personality-classifier.git
cd sports-personality-classifier
```

### 2. Create and Activate Virtual Environment (Recommended)

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

Typical requirements include:

```txt
flask
opencv-python
numpy
scikit-learn
pywavelets
```

### 4. Run the Application

```bash
python app.py
```

Then, open your browser and navigate to:

```
http://127.0.0.1:5000
```

---

## 📁 Project Structure

```
.
├── app.py                 # Flask server
├── model.pkl              # Trained SVM model
├── utils.py               # Image preprocessing, feature extraction
├── templates/
│   └── index.html         # Main HTML file
├── static/
│   ├── images/            # Profile images & uploads
│   ├── app.js             # Dropzone upload handler
│   ├── app.css            # Glossy styles
│   └── dropzone.min.*     # Dropzone plugin files
```

---

## 👤 Known Players (Sample)

- Lionel Messi
- Maria Sharapova
- Roger Federer
- Serena Williams
- Virat Kohli

You can add more by updating the training dataset and retraining the model.

---

## ⚠️ Limitations

- 📷 Relies on accurate face detection via Haarcascade (may fail in low-light or angled faces).
- 🔍 Uses handcrafted features — less robust to noise, lighting, background clutter.
- 🧠 SVM classifiers don't scale well with large, high-dimensional data.
- 🧪 Can only detect **one face at a time** reliably (multi-face support is limited).

---

## 🔧 Recommended Upgrades

| Area | Recommendation |
|------|----------------|
| **Face Detection** | Replace Haarcascade with **Dlib** or **Mediapipe** for better accuracy |
| **Features** | Combine **Wavelet + HOG + LBP** for richer features |
| **Preprocessing** | Apply **face alignment** using facial landmarks |
| **Modeling** | Move to **FaceNet/Dlib embeddings + SVM** (hybrid approach) |
| **Deep Learning** (optional) | Use pretrained CNN (e.g., **MobileNetV2**, **EfficientNetB0**) for feature extraction |

---

