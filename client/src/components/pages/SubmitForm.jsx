import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import pako from "pako"; 

const SubmitForm = () => {
  const drawingParcel = useSelector((state) => state.drawingParcel);
  const formData = useSelector((state) => state.formData);
  const screenshotData = useSelector((state) => state.screenshotData.data); 

  // console.log(window.location.pathname);

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
      // Convert formData to a JSON string
      const formDataJson = JSON.stringify(formData.data);
  
      // Create a Blob from the JSON string
      const formDataBlob = new Blob([formDataJson], { type: 'application/json' });
  
      // Compress screenshot data using pako
      const compressedScreenshotData = pako.gzip(screenshotData);
  
      const form = new FormData();
      
      // Append the drawingParcel data
      form.append('drawParcel', drawingParcel.data);
  
      // Append the compressed screenshot data as a Blob with a custom content type
      form.append('screenshotData', new Blob([compressedScreenshotData], { type: 'application/octet-stream' }));
  
      // Append the formData as a Blob with a custom content type
      form.append('formData', formDataBlob);
  
      // Send the form data to the server
      await axios.post("http://localhost:5000/api/data", form);
      
      alert("Data submitted successfully!");
      navigate("/thanks");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  
   
  
  
  // const screenshotDataToBase64 = (screenshotData) => {
  //   return new Promise((resolve, reject) => {
  //     try {
  //       if (screenshotData instanceof Blob) {
  //         // If screenshotData is already a Blob, convert it to base64
  //         const reader = new FileReader();
  //         reader.onloadend = () => resolve(reader.result.split(",")[1]);
  //         reader.onerror = reject;
  //         reader.readAsDataURL(screenshotData);
  //       } else if (typeof screenshotData === "string" && screenshotData.startsWith("data:image")) {
  //         // If screenshotData is a data URL string, extract the base64 part
  //         resolve(screenshotData.split(",")[1]);
  //       } else {
  //         // If screenshotData is a plain string, consider it as base64 directly
  //         resolve(screenshotData);
  //       }
  //     } catch (error) {
  //       reject(error);
  //     }
  //   });
  // }; 

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
