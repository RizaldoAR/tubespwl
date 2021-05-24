import React, { useState  } from "react";
import { Link, useHistory } from "react-router-dom";
import data from "../data";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Input, FormGroup, Label, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { setUserSession } from "../utils/common";




function LoginScreen(props) {
  
  
  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
 


  function login(){
    setError(null);
    setLoading(true);
    axios.post("http://localhost:5000/api/login", {
      username: email,
      password: password
    }).then(response =>{
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      if(response.data.isAdmin){
        props.history.push('/admin');
      }
      else{
        
         props.history.push('/');
      }
      
    }).catch(error =>{
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.")
    });
  }


  return (
    <div className="aboutBody">
      <div className="container my-5">
        <h2 className="text-center">Login</h2>
        <div className="boxLogin col-8 offset-2 col-lg-4 offset-4 py-5">
          <Form>
            <FormGroup className="mb-3">
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="mb-5">
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
                onChange={(e)=>setPassword(e.target.value)}
                
              />
            </FormGroup>
            <FormGroup inline>
              <Button onClick={login} color="success">Login</Button>
              <Link to="/register"><Button color="danger">Register</Button></Link>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default LoginScreen;
