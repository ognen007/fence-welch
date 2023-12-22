import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = ({setLoggedIn}) => {
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

  return (
<div>
  <table className="data-table">
    <thead>
      <tr>
        <th>Draw Parcel</th>
        <th>Form Data</th>
      </tr>
    </thead>
    <tbody>
    {data.map((item, index) => (
  <tr key={index}>
    <td>{item.drawParcel}</td>
    <td>
      {item.formData && Object.entries(item.formData).map(([key, value]) => {
        if (value instanceof Object) {
          return Object.entries(value).map(([subKey, subValue]) => (
            <p key={`${key}-${subKey}`}>
              {`${subKey}: ${subValue}`}
            </p>
          ));
        } else {
          return (
            <p key={key}>
              {`${key}: ${value}`}
            </p>
          );
        }
      })}
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

