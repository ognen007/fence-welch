import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
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

  return (
    <div>
      <h1>Data</h1>
      <table>
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
        {Object.entries(item.formData).map(([key, value]) => (
          <p key={key}>
            {`${key}: ${value instanceof Object ? value.name : value}`}
          </p>
        ))}
      </td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default Home;

const handleLogout = () => {
  setLoggedIn(false);
  localStorage.removeItem("isLoggedIn");
};

<button onClick={handleLogout}>Logout</button>;
