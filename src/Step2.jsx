import React from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Step2() {
  const navigate = useNavigate();
  const { formData, setFormData, handleChange } = useOutletContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/booking/congrats/");
  };

  return (
    <div>
      <h3>Confirm your reservation</h3>
      <div className="form-2-cols"></div>
      <div className="control">
        <div>
          <span> Date: {formData.date}</span>
          <span>Time: {formData.time}</span>
        </div>
        <button onClick={() => navigate("/booking/")}>Go Back</button>
      </div>

      <form action="#" onSubmit={handleSubmit}>
        <div className="control">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text "
            placeholder="John"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text "
            placeholder="Smith"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <label htmlFor="email">Email</label>
          <input
            type="email "
            placeholder="John@gmail.com"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <label htmlFor="specialRequest">Special Request</label>
          <textarea
            name="specialRequest"
            id="specialRequest"
            value={formData.specailRequest}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="control">
          <label htmlFor="phone">Phone</label>
          <input
            type="phone"
            placeholder="+000-000-000-000"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <button
          disabled={
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.phone
          }
          type="submit"
        >
          Confirm
        </button>
      </form>
    </div>
  );
}
