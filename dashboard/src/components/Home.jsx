import React, { useEffect, useState } from "react";
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

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  const downloadScreenshot = async (screenshotUrl) => {
    try {
      const response = await fetch(screenshotUrl);
      const blob = await response.blob();

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.target = "_blank";
      link.download = "screenshot.png"; // Set the desired file name

      // Trigger the download
      link.click();

      // Remove the temporary link element
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading screenshot:", error);
    }
  };

  return (
    <div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Draw Parcel</th>
            <th>Selected Type</th>
            <th>Selected Style</th>
            <th>Selected Height</th>
            <th>Selected Color</th>
            <th>E-Mail</th>
            <th>Phone Number</th>
            <th>Full Name</th>
            <th>Street Address</th>
            <th>Download Screenshot</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0).reverse().map((item, index) => (
            <tr key={index}>
              <td>{item.drawingParcel ? parseFloat(item.drawingParcel.split(":")[1]) : "N/A"}</td>
              <td>{item.formData.selectedType?.label || "N/A"}</td>
              <td>{item.formData.selectedStyle?.label || "N/A"}</td>
              <td>{item.formData.selectHeight?.label || "N/A"}</td>
              <td>{item.formData.selectColor?.label || "N/A"}</td>
              <td>{item.formData.email || "N/A"}</td>
              <td>{item.formData.phoneNumber || "N/A"}</td>
              <td>{item.formData.fullName || "N/A"}</td>
              <td>{item.formData.streetAddress || "N/A"}</td>
              <td>
                <button onClick={() => downloadScreenshot(item.screenshotUrl)}>
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
