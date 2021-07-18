import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';


import Dashboard from './pages/Dashboard';
import Home from './pages/Home';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact={true}/>
          <PrivateRoute path="/dashboard" component={Dashboard} />
            <Dashboard/>
          
          
        </Switch>
      </Router>
      
    </ChakraProvider>
  );
}

export default App;
