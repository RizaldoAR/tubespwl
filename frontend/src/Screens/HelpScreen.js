import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Form,
  Input,
  FormGroup,
  Jumbotron,
  Container,
  Label,
  Button,
} from "reactstrap";
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faAmazon,
  faWhatsapp,
  faLine,
} from "@fortawesome/free-brands-svg-icons";

function HelpScreen(props) {
  return (
    <div className="aboutBody">
      <div className="container my-5">
        <Jumbotron fluid>
          <h1 className="display-3">User Help</h1>
          <p className="lead">
            Please, let us know if you had any trouble towards us.
          </p>
        </Jumbotron>
        <div className="row">
          <div className="boxLogin col-10 offset-1 col-lg-6 offset-lg-0 py-5">
            <h4 className="mb-4">We will reply your message via email</h4>
            <Form>
              <FormGroup className="mb-3 col-6">
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email here..."
                />
              </FormGroup>
              <FormGroup className="mb-3 col-6">
                <Label for="email">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name here..."
                />
              </FormGroup>
              <FormGroup className="mb-5 col-6">
                <Label for="question">Your Message</Label>
                <Input type="textarea" name="message" id="message" />
              </FormGroup>
              <FormGroup inline>
                <Button color="success">Send</Button>
              </FormGroup>
            </Form>
          </div>
          <div className="col-5 py-5">
            <h4 className="mb-4">Or direct contact us via</h4>
            <p className="waHelp"><FontAwesomeIcon icon={faWhatsapp} size='lg' style={{color:"green"}}/> +62-812-74027237 (Rizaldo)</p>
            <p className="waHelp"><FontAwesomeIcon icon={faEnvelope} size='lg' style={{color:"#BB001B"}}/> teratics@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HelpScreen;
