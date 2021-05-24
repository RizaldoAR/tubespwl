import React , { useState  } from "react";
import { Link } from "react-router-dom";
import data from "../data";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Input, FormGroup, Label, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";



function RegisterScreen(props) {

  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');

  function register(){
    axios.post("http://localhost:5000/api/register", {
      username: email,
      password: password
    }).then(response =>{
      alert('berhasil mendaftar')
      
    }).catch(error =>{
      console.error('error >>> ', error);
    })
  }
  


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
                onChange={(e)=>setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Your password here..."
                onChange={(e)=>setPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="mb-5">
              <Label for="password2">Re-Type Password</Label>
              <Input
                type="password"
                name="password2"
                id="password2"
                placeholder="Re-enter your password..."
                onChange={(e)=>setPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup inline>
              <Button onClick={register} color="success">Register</Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default RegisterScreen;
