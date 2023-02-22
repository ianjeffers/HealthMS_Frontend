import React, {useState} from 'react';
import './Popup.css';
import { generateResponse } from "../../actions/ailyssa";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useAuth0 } from "@auth0/auth0-react";


const Popup = (props) => {
    const parentdata = JSON.stringify(props.data)
    const [modal, setModal] = useState(false);
    const { register, handleSubmit } = useForm();
    const [response, setResponse] = useState("");
    const { user, isAuthenticated } = useAuth0();
    const [userID, setUserID] = useState(user ? user.sub : null);
    const onSubmit = async (data) => {
        try {
            const result = await generateResponse({ data: parentdata, userID: userID });
            setResponse(result);
          } catch (error) {
            console.error(error);
          }
      };

    const toggle = () => setModal(!modal);
    return (
      <div>
        <Button color="danger" onClick={toggle}>{"What does this mean?"}</Button>
        <Modal isOpen={modal} toggle={toggle} className={"popup"}>
            <Form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader toggle={toggle}>Ai-lyssa: A ChatGPT-powered bot intended to help you make sense of any correlational data.</ModalHeader>
          <ModalBody>
            {response ? response : null}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" onClick={handleSubmit}>Ask Ailyssa</Button>
            <Button color="secondary" onClick={toggle}>Close</Button>
          </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
  
export default Popup;