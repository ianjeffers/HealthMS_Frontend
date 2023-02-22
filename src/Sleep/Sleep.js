//Write a React component for the Sleep page that will contain a based on the following flask API endpoint:
/*
@app.route('/sleep', methods=['POST'])
def sleep():
    print("uploaded to sleep!")
    data = request.get_json()
    userId = data['userID']
    sleepHours = data['sleepHours']
    date = data['date']
    notes = data['notes']
    print(userId, sleepHours, date, notes)
    db.sleep.insert_one({'userId':userId, 'sleepHours':sleepHours, 'date':date, 'notes':notes})
    return jsonify({'success':True})
    
//The component that will contain a form with the following fields:
//Sleep Hours(slider)
//Date (date picker)
//Notes (text area)
*/

import React, { useState } from 'react';
import { addSleep } from '../actions/sleep';
import DatePicker from "react-datepicker";
import { Button } from "react-bootstrap";
import './Sleep.css';
import { useAuth0 } from "@auth0/auth0-react";

const Sleep = () => {
    const { user, isAuthenticated } = useAuth0();
    const [userID, setUserID] = useState(user ? user.sub : null);
    const [sleepHours, setSleepHours] = useState(0);
    const [notes, setNotes] = useState('');
    const [date, setDate] = useState(new Date());

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if (name === 'sleepHours') {
            setSleepHours(value);
        } else if (name === 'notes') {
            setNotes(value);
        }
    };

    const handleDateChange = date => {
        setDate(date);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addSleep({sleepHours, notes, date, userID});
        setSleepHours(0);
        setDate(new Date());
        setNotes("")

    };

    return (
        <div className="main">
            <h1>Sleep</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Sleep Hours:
                    <input type="number" name="sleepHours" value={sleepHours} onChange={handleChange} />
                </label>
                <br/>
                <label>
                    Date:
                    <DatePicker selected={date} onChange={handleDateChange} />
                </label>
                <br/>
                <label>
                    Notes:
                    <textarea name="notes" value={notes} onChange={handleChange} />
                </label>
                <br/>
                <Button variant="primary" type="submit">Submit</Button>
            </form>

        </div>

    );
};

export default Sleep;