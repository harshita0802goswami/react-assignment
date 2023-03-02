import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const navigate = useNavigate();
  const initialValues = { name: "", dob: "", phone: "", email: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  // validate form
  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    // validate form
    //max character should be 50
    if (formValues.name.length > 50) {
      errors.name = "Name cannot exceed 50 characters";
    }

    // age should be atleast 18 years
    const age = Math.floor(
      (new Date() - new Date(formValues.dob)) / (365.25 * 24 * 60 * 60 * 1000)
    );
    if (age < 18) {
      errors.dob = "Age requirement is 18 years";
    }

    // only digits and no duplicates are allowed
    if (formValues.phone.length !== 10 || !/^\d+$/.test(formValues.phone)) {
      errors.phone = "Enter valid phone number";
    } else {
      const existingData = JSON.parse(localStorage.getItem("savedData")) || [];
      const isDuplicate = existingData.some(
        (data) => data.phone === formValues.phone
      );
      if (isDuplicate) {
        errors.phone = "Number already exists";
      }
    }

    // email validation and no duplicates are allowed
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(formValues.email)) {
      errors.email = "Please enter a valid email address";
    } else {
      const existingData = JSON.parse(localStorage.getItem("savedData")) || [];
      const isDuplicate = existingData.some(
        (data) => data.email === formValues.email
      );
      if (isDuplicate) {
        errors.email = "Email already exists";
      }
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      //to save the form data
      const formData = { ...formValues };
      console.log(formData);
      const data = JSON.parse(localStorage.getItem("savedData")) || [];
      localStorage.setItem("savedData", JSON.stringify([...data, formData]));
      console.log(
        formValues.name,
        formValues.dob,
        formValues.phone,
        formValues.email
      );
      alert("Details saved successfully");
      setFormValues({ name: "", dob: "", phone: "", email: "" });
      navigate("/view");
    }
  };
  return (
    <div className="form-container">
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            maxLength={50}
            required
            onChange={handleChange}
          ></input>
          {errors.name && <div className="error">{errors.name}</div>}
          <label>Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formValues.dob}
            required
            onChange={handleChange}
          ></input>
          {errors.dob && <div className="error">{errors.dob}</div>}
          <label>Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formValues.phone}
            required
            onChange={handleChange}
          ></input>
          {errors.phone && <div className="error">{errors.phone}</div>}
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            required
            onChange={handleChange}
          ></input>
          {errors.email && <div className="error">{errors.email}</div>}
          <button type="submit">Save Details</button>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm;
