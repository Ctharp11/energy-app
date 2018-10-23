//higher order component is function that takes in a component and returns a new component 
import React from 'react';
import { Redirect } from 'react-router-dom'

export const protectedRoute = (Component, props, loggedin) => {
    if (loggedin) {
      return <Component {...props} />  
    }
    else {
        return <Redirect to="/" />
    }
}