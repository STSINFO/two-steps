import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Congrats() {
  const { formData } = useOutletContext();
  return (
    <div className="content">
      <h1>Congratulations!</h1>
      <p>
        Your table has been booked successfully for{" "}
        <span>
          {formData.date}-{formData.time}
        </span>
        . We look forward to serving you!
      </p>
    </div>
  );
}
