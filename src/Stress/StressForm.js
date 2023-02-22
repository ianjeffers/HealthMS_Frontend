//Write a React component for the Stress page that will contain a form with the following fields:
//Stress Level (slider selection with options from 1-10)
//Date (date picker)
//Notes (text area)

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { addStress } from "../actions/stress";
import './StressForm.css'


const StressForm = () => {
  const [stressLevel, setStressLevel] = useState("5");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const { user, isAuthenticated } = useAuth0();
  const [userID, setUserID] = useState(user ? user.sub : null);
  
  const handleChange = event => {
    if (event.target.name === "stressLevel") {
      setStressLevel(event.target.value);
    } else if (event.target.name === "date") {
      setDate(event.target.value);
    } else if (event.target.name === "notes") {
      setNotes(event.target.value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    addStress({ stressLevel, date, notes, userID });
    setStressLevel("5");
    setDate("");
    setNotes("");
  };
  return (
    <div className = "main">
        <h1>Stress Form</h1>
        <form onSubmit={handleSubmit}>
        <label for="points">Points (between 0 and 10):</label>
          <input
            type="range"
            min="0"
            max="10"
            value="5"
            class="slider"
            name="stressLevel"
            id="points"
            placeholder="Stress Level"
            value={stressLevel}
            onChange={handleChange}
          />
          <p> {stressLevel } </p>

          <input
            type="date"
            name="date"
            placeholder="Date"
            value={date}
            onChange={handleChange}
          />

          <textarea className="notes"
            type="text"
            name="notes"
            placeholder="Notes"
            value={notes}
            onChange={handleChange}
          />

          <Button variant="primary" type="submit">Submit</Button>

        </form>

      </div>

  );
};

export default StressForm;