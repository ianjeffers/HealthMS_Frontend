import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DrugAlcohol.css';
import { addDrugsAlcohol } from '../actions/drugsalcohol';
import { Button } from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";


const DrugsAlcohol = () => {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const { user, isAuthenticated } = useAuth0();
  const [userID, setUserID] = useState(user ? user.sub : null);

  const handleSubmit = (event) => {
    event.preventDefault();
    addDrugsAlcohol({ type, name, quantity, unit, date, notes, userID })
    setType('');
    setName('');
    setQuantity('');
    setUnit('');
    setDate('');
    setNotes('');
  }

  return (
    <div className="DrugsAlcohol">
      <h1>Drugs and Alcohol</h1>
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
          Quantity:
          <input type="number" name="quantity" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
        </label>
        <label>
          Unit:
          <input type="text" name="unit" value={unit} onChange={(event) => setUnit(event.target.value)} />
        </label>

        <label>
          Date:
          <input type="date" name="date" value={date} onChange={(event) => setDate(event.target.value)} />
        </label>

        <label>Notes:</label><br></br>

        <textarea rows="4" cols="50" name="notes" value={notes} onChange={(event) => setNotes(event.target.value)} />

        <Button variant="primary" type="submit">
                            Submit
                        </Button>

      </form>
      <Link to="/">Home</Link>
    </div>
  );
}


export default DrugsAlcohol;