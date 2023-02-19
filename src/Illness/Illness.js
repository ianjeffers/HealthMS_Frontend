import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Illness.css';
import { addIllness } from '../actions/illnesses';
import { useAuth0 } from "@auth0/auth0-react";


const Illness = () => {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const { user, isAuthenticated } = useAuth0();
  const [userID, setUserID] = useState(user ? user.sub : null);

  const handleSubmit = (event) => {
    event.preventDefault();
    addIllness({ type, name, date, notes, userID })
    setType('');
    setName('');
    setDate('');
    setNotes('');
  }

  return (
    <div>
    <div className="Illness">
      <h1>Illness</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <input type="text" name="type" value={type} onChange={(event) => setType(event.target.value)} />
        </label>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={date} onChange={(event) => setDate(event.target.value)} />
        </label>
        <label>
          Notes:
          <input type="text" name="notes" value={notes} onChange={(event) => setNotes(event.target.value)} />
        </label>

        <Button variant="primary" type="submit">
                            Submit
                        </Button>

      </form>
      <Link to="/">Home</Link>
    </div>
    </div>
  );
}


export default Illness;