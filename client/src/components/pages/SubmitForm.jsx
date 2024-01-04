import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../../firebaseConfig";
import {imageDB} from "../../firebaseConfig"
import { ref, uploadBytes } from "firebase/storage";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { v4 } from "uuid"
import { getDownloadURL } from "firebase/storage";

const SubmitForm = () => {
  const drawingParcel = useSelector((state) => state.drawingParcel);
  const formData = useSelector((state) => state.formData);
  const screenshotData = useSelector((state) => state.screenshotData.data); // Extract 'data'
  const navigate = useNavigate();
  const db = getFirestore();

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

  const sendData = async (mongoData, screenshotData) => {
    const imgRef = ref(imageDB, `mapScreenshots/${v4()}.jpg`);
  
    // Convert base64 data to Blob
    const byteCharacters = atob(screenshotData.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], {type: 'image/jpeg'});
  
    // Upload Blob to Firebase Storage
    const snapshot = await uploadBytes(imgRef, blob);
  
    // Get the download URL of the uploaded image
    const screenshotUrl = await getDownloadURL(snapshot.ref);
  
    // Include the screenshot URL in the data to send to the server
    const dataToSend = {
      ...mongoData,
      screenshotUrl,  // This is the URL of the screenshot in Firebase Storage
    };
  
    await axios.post("http://localhost:5000/api/data", dataToSend);
  
    console.log("ALERTTT\nDoc written in Firebase DB");
    console.log(mongoData, screenshotData);
    alert("Data submitted successfully!");
    navigate("/thanks");
  }
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("handleSubmit called");

    const textData = {
      formData: formData.data,
      drawingParcel: drawingParcel.data,
    };

    console.log("FormData:", textData);

    try {
      console.log('Data submitted successfully, setting shouldNavigate to true');
      await sendData(textData, screenshotData)
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


// const downloadLink = document.createElement('a');
// downloadLink.href = screenshotData;
// downloadLink.download = "download.jpg"; // I WANT TO SEND THIS TO FIREBASE
// document.body.appendChild(downloadLink);
// screenshotData = downloadLink;
// downloadLink.click();
// document.body.removeChild(downloadLink);