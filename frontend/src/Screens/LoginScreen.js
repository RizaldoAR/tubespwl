import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Input, FormGroup, Label, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function LoginScreen (props){
    return <div className="aboutBody">
        <div className="container my-5">
            <h2 className="text-center">Login</h2>
            <div className="boxLogin col-8 offset-2 col-lg-4 offset-4 py-5">
                <Form>
                    <FormGroup className="mb-3">
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup className="mb-5">
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <FormGroup inline>
                        <Button color="success">Login</Button>{' '}
                        <Button color="danger" className="ml-5">Or Login with <FontAwesomeIcon icon={faEnvelope}/></Button>
                    </FormGroup>
                    
                </Form>
		    </div>
        </div>
    </div>
}
export default LoginScreen;