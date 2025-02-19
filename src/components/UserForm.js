import React, { useEffect, useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  // Load data from localStorage when component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("userFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Save to localStorage
  const handleSave = () => {
    localStorage.setItem("userFormData", JSON.stringify(formData));
    alert("Data saved successfully! ✅");
  };

  // Clear localStorage and reset form
  const handleClear = () => {
    localStorage.removeItem("userFormData");
    setFormData({ name: "", address: "", email: "", phone: "" });
    alert("Form cleared successfully! 🗑️");
  };

  return (
    <div>
      <h2>User Form</h2>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Phone:
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
      </label>
      <br />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleClear} style={{ marginLeft: "10px", backgroundColor: "red", color: "white" }}>
        Clear Form
      </button>
    </div>
  );
};

export default UserForm;
