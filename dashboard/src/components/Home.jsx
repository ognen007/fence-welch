import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = ({ setLoggedIn }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/data");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const headerMapping = {
    selectedType: "Selected Type",
    selectedStyle: "Selected Style",
    selectHeight: "Selected Height",
    selectColor: "Selected Color",
    email: "E-Mail",
    phoneNumber: "Phone Number",
    fullName: "Full Name",
    streetAddress: "Street Address",
  };
  
  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  const downloadScreenshot = (screenshotData) => {
    // Example: Trigger a download for the screenshot data
    const byteCharacters = atob(screenshotData);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/png" });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "screenshot.png";
    link.click();

    // Cleanup by revoking the object URL
    URL.revokeObjectURL(url);
  };


  return (
    <div>
      <table className="data-table">
        <thead>
          <tr>
            {Object.keys(headerMapping).map((key) => (
              <th key={key}>{headerMapping[key]}</th>
            ))}
            <th>Download Screenshot</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0).reverse().map((item, index) => (
            <tr key={index}>
              {Object.keys(headerMapping).map((key) => (
                <td key={key}>
                  {typeof item[key] === "object" && item[key] !== null
                    ? item[key].label
                    : item[key]}
                </td>
              ))}
              <td>
                <button onClick={() => downloadScreenshot(item.screenshotData)}>
                  Download Screenshot
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
