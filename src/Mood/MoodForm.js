//Write a React component for the Mood page that will contain a form with the following fields:
//Mood (multiple selection with options: Happy, Sad, Disappointed, Afraid, Angry, Tired, Excited)
//Date (date picker)
//Notes (text area)

import React, { useState } from "react";
import { addMood } from "../actions/moods";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import './MoodForm.css';

const MoodForm = () => {
  const [mood, setMood] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const { user, isAuthenticated } = useAuth0();
  const [userID, setUserID] = useState(user ? user.sub : null);

  const handleSubmit = event => {
    event.preventDefault();
    addMood({ mood, date, notes, userID });
    setMood("");
    setDate("");
    setNotes("");
  };

  return (
    <div className="main">
    {/* <Container> */}
          <h1>Upload Daily Mood</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="main" controlId="formBasicMood">
              <Form.Label>Mood</Form.Label>
              <Form.Control as="select" name="mood" onChange={event => setMood(event.target.value)}>
                <option value="">Select a mood</option>
                <option value="Happy">Happy</option>
                <option value="Sad">Sad</option>
                <option value="Disappointed">Disappointed</option>
                <option value="Afraid">Afraid</option>
                <option value="Anger">Anger</option>
                <option value="Tired">Tired</option>
                <option value="Excited">Excited</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="main"  controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" onChange={event => setDate(event.target.value)} />
            </Form.Group>

            <Form.Group className="main"  controlId="formBasicNotes">
              <Form.Label>Notes</Form.Label>
              <Form.Control as="textarea" rows="3" name="notes" onChange={event => setNotes(event.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
    {/* </Container> */}
    </div>
  );
};

export default MoodForm;