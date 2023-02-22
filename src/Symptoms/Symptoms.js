//Write a React component for the Symptom page that will contain a form with the following fields:
//Name (text area)
//Description (text area)
//Category (select from Mood,Sleep,Energy level,Digestion,Headaches,Pain,Allergies,Skin,Cardiovascular,Respiratory,Menstruation,Sexual health,Other)
//Date (date picker)
//Notes (text area)

import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addSymptom } from '../actions/symptoms';
import { useAuth0 } from "@auth0/auth0-react";

import './Symptoms.css';

const Symptom = () => {
  const { user, isAuthenticated } = useAuth0();
  const [userID, setUserID] = useState(user ? user.sub : null);
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");

  const onSubmit = (data) => {
    addSymptom({name: name, category: category, description: description, notes: notes, date:date, userID:userID})
  };

  return (
    <div className="Symptom">
    {/* <Container className="Symptom"> */}
          <h1>Symptom</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" {...register("name",{ required: true })} onChange={event => setName(event.target.value)}/>
              {/* {errors.name && <span>This field is required</span>} */}
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter description" {...register("description",{ required: true })} />
              {/* {errors.description && <span>This field is required</span>} */}
            </Form.Group>

            <Form.Group controlId="formBasicCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" {...register("category",{ required: true })} onChange={event => setCategory(event.target.value)}>
                <option value="Mood">Mood</option>
                <option value="Sleep">Sleep</option>
                <option value="Energy level">Energy level</option>
                <option value="Digestion">Digestion</option>
                <option value="Headaches">Headaches</option>
                <option value="Pain">Pain</option>
                <option value="Allergies">Allergies</option>
                <option value="Skin">Skin</option>
                <option value="Cardiovascular">Cardiovascular</option>
                <option value="Respiratory">Respiratory</option>
                <option value="Menstruation">Menstruation</option>
                <option value="Sexual health">Sexual health</option>
                <option value="Other">Other</option>
              </Form.Control>
              {/* {errors.category && <span>This field is required</span>} */}
            </Form.Group>

            <Form.Group controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" {...register("date",{ required: true })} onChange={event => setDate(event.target.value)}/>
              {/* {errors.date && <span>This field is required</span>} */}
            </Form.Group>

            <Form.Group controlId="formBasicNotes">
              <Form.Label>Notes</Form.Label>
              <Form.Control type="text" placeholder="Enter notes" {...register("notes",{ required: true })} onChange={event => setNotes(event.target.value)}/>
              {/* {errors.notes && <span>This field is required</span>} */}
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
    {/* </Container> */}
    </div>
  );
};

export default Symptom;