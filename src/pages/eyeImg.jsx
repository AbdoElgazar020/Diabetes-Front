import { useState, useRef } from "react";
import Webcam from "react-webcam";
import "../Styles/eyeImg.css";


const EyeUploadPage = () => {
  const [image, setImage] = useState(null); // لحفظ الصورة
  const [camera, setCamera] = useState(false); // لتفعيل الكاميرا
  const webcamRef = useRef(null); // مرجع الكاميرا

  // التقاط الصورة باستخدام مرجع الكاميرا
  const handleCapture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc); // تخزين الصورة في state
      setCamera(false); // إغلاق الكاميرا بعد الالتقاط
    }
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (image) {
      alert("Image submitted!");
      console.log("Image data sent:", image);
      setImage(null); // إعادة تعيين الصورة بعد الإرسال
    }
  };

  const handleRemove = () => {
    setImage(null); // إزالة الصورة الحالية
  };

  return (
    <div className="eye-upload-page-container">
      <div className="eye-upload-page">
        <h1>Upload Eye Image</h1>
        <div className="options">
          {camera ? (
            <>
              <Webcam
                audio={false}
                screenshotFormat="image/jpeg"
                className="webcam"
                ref={webcamRef} // تمرير المرجع إلى الكاميرا
              />
              <button onClick={handleCapture}>Capture</button>
              <button onClick={() => setCamera(false)}>Close Camera</button>
            </>
          ) : (
            <button onClick={() => setCamera(true)}>Open Camera</button>
          )}
          <input
            type="file"
            accept="image/*"
            id="file-upload"
            onChange={handleUpload}
          />
          <label htmlFor="file-upload">Upload from Device</label>
        </div>
        {image && (
          <>
            <img src={image} alt="Preview" className="preview" />
            <div className="action-buttons">
              <button onClick={handleSubmit} className="submit-button">
                Submit Image
              </button>
              <button onClick={handleRemove} className="remove-button">
                Remove Image
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EyeUploadPage;
