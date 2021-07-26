import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import ViewFile from './pages/ViewFile';


import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import AppWrapper from './components/AppWrapper';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppWrapper>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact={true}/>
          <Route path="/viewfile/:id" component={ViewFile}/>
          <PrivateRoute path="/dashboard" component={Dashboard} />
            <Dashboard/>
        </Switch>
      </Router>
      </AppWrapper>
    </ChakraProvider>
  );
}

export default App;
