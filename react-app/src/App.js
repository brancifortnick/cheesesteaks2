import React, { useState, useEffect, createContext } from "react";
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
// import { MapContainer } from "./components/MapContainer";
import GetUsersIp from "./components/GetUsersIp";
import LocationDetails from "./components/LocationDetails";
import VotingRefactor from "./components/VotingRefactor";
import UsersLocations from "./components/UsersLocations";
import FoodGallery from './components/FoodGallery';
import Footer from './components/Footer';
import AllImagesRefactorTwo from './components/AllImagesRefactorTwo'
import HamburgerNav from "./components/HamburgerNav";


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      console.log("Starting authentication...");
      try {
        const result = await dispatch(authenticate());
        console.log("Authentication result:", result);
        setLoaded(true);
      } catch (error) {
        console.error("Authentication failed:", error);
        setLoaded(true); // Still load the app even if auth fails
      }
    })();
  }, [dispatch]);

  console.log("App render - loaded:", loaded);

  if (!loaded) {
    console.log("Not loaded, returning null");
    return null;
  }

  console.log("Rendering main app");

  return (
    (loaded &&
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
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId/profile" exact={true}>
          <UsersLocations />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId/new-location" exact={true}>
          <LocationUpload />
        </ProtectedRoute>
        <ProtectedRoute path="/locations" exact={true}>
          <AllLocations />
        </ProtectedRoute>
        <ProtectedRoute path="/locations/:locationId">
          <LocationDetails />
        </ProtectedRoute>
      </Switch>
      <Footer />

      </BrowserRouter>
      )
  );
}

export default App;
