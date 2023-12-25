import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = ({setLoggedIn}) => {
  const [data, setData] = useState([]);

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

  return (
    <div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Draw Parcel</th>
            {data[0] && data[0].formData && Object.entries(data[0].formData).map(([key]) => {
              if (key !== 'value') {
                return (
                  <th key={key}>{headerMapping[key] || key}</th>
                );
              }
              return null;
            })}
          </tr>
        </thead>
        <tbody>
          {data.slice(0).reverse().map((item, index) => (
            <tr key={index}>
              <td>{item.drawParcel}</td>
              {item.formData && Object.entries(item.formData).map(([key, value]) => {
                if (key !== 'value') {
                  return (
                    <td key={key}>
                      {typeof value === 'object' && value !== null ? value.label : value}
                    </td>
                  );
                }
                return null;
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
