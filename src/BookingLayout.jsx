import React, { useState } from "react";
import { Outlet } from "react-router-dom";

export default function BookingLayout() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    number: "",
    occasion: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specailRequest: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div>
      <Outlet
        context={{ formData, setFormData, errors, setErrors, handleChange }}
      />
    </div>
  );
}
