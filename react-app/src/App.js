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
import GetLocationsImages from "./components/GetLocationsImages";
import ImageUpload from "./components/ImageUpload";
import VoteUpdater from "./components/VoteUpdater";
import AddComments from "./components/AddComments";
import AllComments from "./components/AllComments";
import PhotoPage from "./components/PhotoPage";
import { Add } from "@mui/icons-material";
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
          <ProtectedRoute path="/locations/:locationId" exact={true}>
            <Locations />
          </ProtectedRoute>
          <ProtectedRoute path="/locations/:locationId/image-upload" exact={true}>
            <ImageUpload />
          </ProtectedRoute>
          <ProtectedRoute path='/images/:imageId' exact={true}>
            {/* <AddComments /> */}
            <AllComments />
          </ProtectedRoute>
        </Switch>
      </div>
    </BrowserRouter>
    // </UserContext.Provider>
  );
}

export default App;
