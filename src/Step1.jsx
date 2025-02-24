import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

export default function Step1() {
  const navigate = useNavigate();
  const { formData, errors, setErrors, handleChange } = useOutletContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "time is required";
    if (!formData.number) newErrors.number = "number is required";
    if (!formData.occasion) newErrors.occasion = "occasion is required";
    if (Object.keys(newErrors).length > 0) {
      setErrors((prev) => ({ ...prev, newErrors }));
    }
    setErrors({});
    console.log(errors);
    navigate("/booking/Step2");
  };
  const [times, setTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ]);

  return (
    <div>
      <h3>Find a table for any occasion</h3>
      <form action="#" onSubmit={handleSubmit}>
        <div className="form-2-cols">
          <div className="control">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && <p>{errors.date}</p>}
          </div>
          <div className="control">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              name="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
            />
            {errors.time && <p>{errors.time}</p>}
          </div>
        </div>
        <div className="control">
          <label htmlFor="number">Number of Guests</label>
          <input
            type="number"
            id="number"
            min="1"
            max="10"
            value={formData.number}
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <label htmlFor="occasion">Occasion</label>
          <select
            name="occasion"
            id="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="">Occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>
        <button disabled={errors.date} type="submit">
          Reserve a Table
        </button>
      </form>
    </div>
  );
}
