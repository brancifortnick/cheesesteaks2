import React, { useState, useEffect, useContext, createContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import LandingPage from "./components/LandingPage";
import LocationUpload from "./components/LocationUpload";
import AllLocations from "./components/AllLocations";
import Locations from "./components/Locations";
import { MapContainer } from "./components/MapContainer";
import VoteCounter from "./components/VoteCounter";


import VoteUpdater from "./components/VoteUpdater";
import AddComments from "./components/AddComments";
import AllComments from "./components/AllComments";

import { Add } from "@mui/icons-material";
import DisplayComments from "./components/DisplayComments";


export var UserContext = createContext();
//!adding this so i can make a large commit message for safe revert//

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();




  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    // <UserContext.Provider value={{stateForId, setStateForId}}>
    <BrowserRouter>
      <NavBar />
      <div id='main-wrapper'>
        <Switch>
          <Route path="/login" exact={true}>
            <LoginForm />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm />
          </Route>
          <ProtectedRoute path="/users" exact={true}>
            <UsersList />
          </ProtectedRoute>
          <ProtectedRoute path="/users/:userId" exact={true}>
            <User />
          </ProtectedRoute>
          <ProtectedRoute path="/" exact={true}>
            <LandingPage />
            <MapContainer />
          </ProtectedRoute>
          <ProtectedRoute path="/users/:userId/new-location" exact={true}>
            <LocationUpload />
          </ProtectedRoute>
          <ProtectedRoute path="/locations" exact={true}>
            <AllLocations />

          </ProtectedRoute>
          <ProtectedRoute path="/locations/:locationId" >
            <Locations />
          </ProtectedRoute>

          {/* <ProtectedRoute path='/locations/:locationId/images/:imageId' exact={true}>

          </ProtectedRoute> */}

        </Switch>
      </div>
    </BrowserRouter>
    // </UserContext.Provider>
  );
}

export default App;
