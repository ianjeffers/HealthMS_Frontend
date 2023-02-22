//Write a React component for the Medications page that will contain a based on the following flask API endpoint:
/*
@app.route('/exercise', methods=['POST'])
def exercise():
    print("uploaded to exercise!")
    data = request.get_json()
    userId = data['userID']
    exercise = data['exercise']
    duration = data['duration']
    date = data['date']
    notes = data['notes']
    print(userId, exercise, date, notes)
    db.exercise.insert_one({'userId':userId, 'duration':duration, 'exercise':exercise, 'date':date, 'notes':notes})
    return jsonify({'success':True})
    */
    
//The component that will contain a form with the following fields:
//Exercise (text area)
//Duration (hour/minute picker)
//Date (date picker)
//Notes (text area)

import React, { Component, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Exercise.css';
import { addExercise } from '../actions/exercises';
import { useAuth0 } from "@auth0/auth0-react";

const Exercise = () => {

    const [exercise, setExercise] = useState('');
    const [volume, setVolume] = useState(0);
    const [date, setDate] = useState(new Date());
    const [notes, setNotes] = useState('');
    const { user, isAuthenticated } = useAuth0();
    const [userID, setUserID] = useState(user ? user.sub : null);

    const handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if (name === 'exercise') {
            setExercise(value);
        } else if (name === 'volume') {
            setVolume(value);
        } else if (name === 'notes') {
            setNotes(value);
        }

    };

    const handleDateChange = date => {
        setDate(date);
    };

    const handleSubmit = event => {
        event.preventDefault();

        addExercise({ exercise, volume, date, notes, userID })

        setVolume(0);
        setNotes('');

    };

    return (
        <div className="main">
        {/* <Container> */}
                    <h3>Exercise</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicExercise">
                            <Form.Label>Exercise</Form.Label>
                            <Form.Control name="exercise" value={exercise} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicVolume">
                            <Form.Label>Volume</Form.Label>
                            <Form.Control type="number" name="volume" value={volume} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicDate">
                            <Form.Label>Date</Form.Label>
                            <br />
                            <DatePicker selected={date} onChange={handleDateChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicNotes">
                            <Form.Label>Notes</Form.Label>
                            <Form.Control as="textarea" rows="3" name="notes" value={notes} onChange={handleChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
        {/* </Container> */}
        </div>
    );
}

export default Exercise;