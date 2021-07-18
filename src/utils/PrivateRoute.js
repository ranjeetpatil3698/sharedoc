import React ,{useEffect,useState}from 'react'
import {Redirect,Route} from "react-router-dom";
import Loading from '../components/Loading';
import { useAuth0,withAuthenticationRequired } from "@auth0/auth0-react";

const PrivateRoute =({ component, ...args }) =>{
    const { user, isAuthenticated, isLoading } = useAuth0();
    // console.log("from private route ",user)
    
    return (
      <Route 
      component={withAuthenticationRequired(component,{
          onRedirecting:()=><Loading/>,
      })}
      {...args} />
    )
  }

//   <Route {...rest} render={({location}) => {
//     return user
//       ? children
//       : <Redirect to={{
//           pathname:'/',
//         //   state:{from:location}
//       }} />
//   }} />

  export default PrivateRoute;