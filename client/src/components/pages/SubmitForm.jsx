import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { app, db } from "../../welchFenceConfig.js";
import { addDoc, collection } from "firebase/firestore";

const SubmitForm = () => {
  const drawingParcel = useSelector((state) => state.drawingParcel);
  const formData = useSelector((state) => state.formData);
  const screenshotData = useSelector((state) => state.screenshotData.data); 

  useEffect(() => {
    console.log("1Screenshot Data:", screenshotData);
  }, [screenshotData]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = {
        formData: formData.data,
        drawingParcel: drawingParcel.data,
        screenshotData: screenshotData,
      };

      // Submit data to Firebase
      await addDoc(collection(db, 'submissions'), data);
  
      alert("Data submitted successfully!");
      navigate("/thanks");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  useEffect(() => {
    console.log("Drawing Parcel:", drawingParcel);
  }, [drawingParcel]);

  const displayDrawParcel = (data) => {
    return (
      <input value={data} readOnly={true} className="your-custom-styles" />
    );
  };

  const displayFormData = (formData) => {
    const dataItems = [];
    for (const key in formData) {
      if (formData[key] && typeof formData[key] === "object") {
        dataItems.push(
          <div key={key}>
            <input type="text" value={formData[key].label} readOnly={true} />
          </div>
        );
      } else {
        dataItems.push(
          <div key={key}>
            <input type="text" value={formData[key]} readOnly={true} />
          </div>
        );
      }
    }
    return dataItems;
  };

  return (
    <div className="submitForm">
      <div className="end-page">
        <h1>Submitted Data</h1>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <div>
            <h2>Draw Parcel:</h2>
            {displayDrawParcel(drawingParcel.data)}
          </div>
          <br />
          <div>
            <h2>Form:</h2>
            {displayFormData(formData.data)}
          </div>
          <div className="button-group">
            <Link to="/draw-my-fence" className="link-button">
              Start Again
            </Link>
            <button type="submit">Submit Form</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitForm;
