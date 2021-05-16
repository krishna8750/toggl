import React from 'react'
<<<<<<< HEAD
import { Redirect, Route } from "react-router-dom"
import { useAuth } from "../contexts/AuthContexts"

export default function PrivateRoute({ component: Component, ...rest}) {

    const { currentUser } = useAuth();

    return (
        <Route {...rest}
        render={props => {
          return currentUser ? <Component {...props} /> : <Redirect to="/login" />
        }}
=======
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContexts'

export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth()

    return (
        <Route 
            {...rest} 
            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/login" />
            }}
>>>>>>> 01ca827aee3ccefcdc4517a422aeb2c06ddb8382
        >
            
        </Route>
    )
}
