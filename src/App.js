import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin';
import RegisterVolunteer from './components/RegisterVolunteer/RegisterVolunteer';
import NotFound from './components/NotFound/NotFound';
import SearchBanner from './components/SearchBanner/SearchBanner';
import Volunteer from './components/Volunteer/Volunteer';
import AllRegVolunteer from './components/AllRegVolunteer/AllRegVolunteer';
import AddNewEvent from './components/AddNewEvent/AddNewEvent';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <SearchBanner />
            <Volunteer />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <PrivateRoute path="/register/:registerId">
            <Register />
          </PrivateRoute>
          <Route path="/login">
            <LogIn />
          </Route>
          <PrivateRoute path="/registerVolunteer">
            <Header />
            <RegisterVolunteer />
          </PrivateRoute>
          <Route path="/allVolunteer">
            <AllRegVolunteer/>
          </Route>
          <Route path="/newEvent">
            <AddNewEvent/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
