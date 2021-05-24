import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Input, FormGroup, Label, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function RegisterScreen(props) {
  return (
    <div className="aboutBody">
      <div className="container my-5">
        <h2 className="text-center">Register</h2>
        <div className="boxLogin col-8 offset-2 col-lg-4 offset-4 py-5">
          <Form>
            <FormGroup className="mb-3">
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Your email here..."
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Your password here..."
              />
            </FormGroup>
            <FormGroup className="mb-5">
              <Label for="password2">Re-Type Password</Label>
              <Input
                type="password"
                name="password2"
                id="password2"
                placeholder="Re-enter your password..."
              />
            </FormGroup>
            <FormGroup inline>
              <Link to="/saveInformation"><Button color="success">Register</Button></Link>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default RegisterScreen;
