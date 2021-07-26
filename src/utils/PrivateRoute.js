import React from 'react'
import {Route} from "react-router-dom";
import Loading from '../components/Loading';
import { withAuthenticationRequired } from "@auth0/auth0-react";

const PrivateRoute =({ component, ...args }) =>{
   
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