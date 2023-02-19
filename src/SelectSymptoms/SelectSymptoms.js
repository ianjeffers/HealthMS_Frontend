// Create a React Component that is a wrapper for a <select> component, but with each of its options coming from a list from the api 127.0.0.1:5000/getSymptom for each val in the result from 
// <option value = {val}>{Val}</option>

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchSymptoms } from '../actions/symptoms';
import { symptom_path } from '../constants';
import { useAuth0 } from "@auth0/auth0-react";

function SelectSymptoms(props) {
  const [symptom, setSymptom] = useState("");
  const [symptoms, setSymptoms] = useState([]);
  const { user, isAuthenticated } = useAuth0();
  const [userID, setUserID] = useState(user ? user.sub : null);

  useEffect(() => {
    fetchSymptoms(userID)
    .then(symptoms => setSymptoms(symptoms || []))
    .catch(err => {
    })
  }, [userID]);

  function handleChange(e) {
    const symptom = e.target.value;
    setSymptom(symptom);
    props.handleSymptomChange(symptom);
  }

  return (
    <div>
      <label>Symptom:</label>
      {!symptoms.length == 0 && <select name="symptoms"  onChange={handleChange}>
        {symptoms.map(symptom => <option key={symptom} value={symptom}>{symptom}</option>)}
      </select>}
      {symptoms.length == 0 && <Link to={symptom_path}> Please create a Symptom</Link>}
    </div>
  );
}
export default SelectSymptoms;