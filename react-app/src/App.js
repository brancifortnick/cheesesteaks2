import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
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
import GetPhotosImages from './components/GetPhotosImages';
import VoteCounter from "./components/VoteCounter";
// import GetLocationsImages from "./components/GetLocationImages";
import ImageUpload from "./components/ImageUpload";


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
    <BrowserRouter>
      <NavBar />
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
          {/* <VoteCounter /> */}
        </ProtectedRoute>
        <ProtectedRoute path="/locations/:locationId/image-upload" exact={true}>
          <ImageUpload  />
        </ProtectedRoute>
        <ProtectedRoute path='/locations/:locationId/locations-pictures' exact={!false}>
        <GetPhotosImages />   
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
