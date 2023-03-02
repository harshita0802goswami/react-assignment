import React from "react";
import "./ViewDetails.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ViewDetails = () => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState(null);

  const formData = JSON.parse(localStorage.getItem("savedData")) || [];
  console.log(formData);

  const handleEditData = (index) => {
    setEditData(formData[index]);
    navigate("/edit");
  };
  return (
    <div>
      <div className="navbar">
        <button onClick={() => navigate("/")}>🔙 Go back </button>
        <h1>View Details</h1>
        <button onClick={handleEditData}>Edit Details</button>
      </div>
      <div style={{ margin: "1rem 0rem" }}>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Phone Number</th>
                <th>Email ID</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((ele, index) => {
                return (
                  <tr key={index}>
                    <td>{ele.name}</td>
                    <td>{ele.dob}</td>
                    <td>{ele.phone}</td>
                    <td>{ele.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
