//Create a web page in React where users can input information about the food they've eaten on a specific day. The page should include fields for the food name, number of calories, food type (with options for snack, meal, or dessert), cuisine, time eaten, and any additional notes the user wants to include. The user should also be able to select the date for the meal using a date picker. Once the user has entered all the necessary information, they can submit the form to save the data.

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import './Food.css'
import { addFood } from '../actions/foods';
import { useAuth0 } from "@auth0/auth0-react";


const Food = () => {

  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [type, setType] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState(moment().date());
  const { user, isAuthenticated } = useAuth0();
  const [userID, setUserID] = useState(user ? user.sub : null);

  function handleChange(event) {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "calories":
        setCalories(event.target.value);
        break;
      case "type":
        setType(event.target.value);
        break;
      case "cuisine":
        setCuisine(event.target.value);
        break;
      case "time":
        setTime(event.target.value);
        break;
      case "notes":
        setNotes(event.target.value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    addFood({ name, calories, type, cuisine, time, notes, date, userID });
    setName("");
    setCalories("");
    setType("");
    setCuisine("");
    setTime("");
    setNotes("");
  }

  return (

    <div className="container">

      <h1>Food Form</h1>

      <form onSubmit={handleSubmit}>

        <FormGroup controlId="name" bssize="large">
          <FormLabel>Name </FormLabel>
          <FormControl
            autoFocus
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup controlId="calories" bssize="large">
          <FormLabel>Calories </FormLabel>
          <FormControl
            type="number"
            name="calories"
            value={calories}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup controlId="cuisine" bssize="large">
          <FormLabel>Cuisine </FormLabel>
          <FormControl
            type="text"
            name="cuisine"
            value={cuisine}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup controlId="time" bssize="large">
          <FormLabel>Time </FormLabel>
          <select placeholder="select" name="time" value={time} onChange={handleChange}>
            <option value=""></option>
            <option value="early morning">Early Morning</option>
            <option value="breakfast">Breakfast</option>
            <option value="late morning">Late Morning</option>
            <option value="lunch">Lunch</option>
            <option value="early evening">Early Evening</option>
            <option value="dinner">Dinner</option>
            <option value="late night">Late Night</option>
          </select>
        </FormGroup>

        <FormGroup controlId="type" bssize="large">
          <FormLabel>Type </FormLabel>
          <select placeholder="select" name="type" value={type} onChange={handleChange}>
            <option value=""></option>
            <option value="snack">Snack</option>
            <option value="meal">Meal</option>
            <option value="dessert">Dessert</option>
            <option value="dessert">Other</option>
          </select>
        </FormGroup>

        <FormGroup controlId="notes" bssize="large">
          <FormLabel>Notes </FormLabel>
          <FormControl
            type="text"
            name="notes"
            value={notes}
            onChange={handleChange}
          />
        </FormGroup>

        <br></br>

        <FormGroup controlId="date" bssize="large">
          <FormLabel>Date </FormLabel>
          <DatePicker selected={date} onChange={(date) => setDate(date)} />
        </FormGroup>

        <Button className="block" bssize="large" type="submit">Submit</Button>

      </form>

    </div>

  );
}

export default Food;