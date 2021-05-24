import React from 'react';
import { Redirect, Route } from 'react-router';
import { getIsadmin } from './common';

const PrivateRoute = ({component: Component, ...rest }) =>{
    return (
        <Route
        {...rest}
        render={props => {
           return  getIsadmin() ? <Component {...props}/>
            : <Redirect to={{pathname: "/", state: {from: props.location }}} />
        }}
        />
    )

}

export default PrivateRoute;