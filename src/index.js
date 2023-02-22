import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import{Routes, Route} from "react-router-dom";
import LandingPage from './LandingPage/LandingPage';
import Food from './Food/Food';
import MoodForm from './Mood/MoodForm';
import StressForm from './Stress/StressForm';
import Patterns from './Patterns/Patterns';
import Symptoms from './Symptoms/Symptoms';
import Medication from './Medications/Medications';
import Exercise from './Exercise/Exercise';
import Sleep from './Sleep/Sleep'
import Profile from './Profile/Profile';
import Home from './Home/Home';
import { exercise_path, food_path, medication_path, mood_path, patterns_path, profile_path, sleep_path, stress_path, symptom_path, authorization_scope, authorization_domain, authorization_client_id, authorization_audience, about_path, home_path, drugsalcohol_path, allergy_path, illness_path } from './constants';
import { Auth0Provider } from "@auth0/auth0-react";
import DrugsAlcohol from './DrugAlcohol/DrugAlcohol';
import Allergy from './Allergy/Allergy';
import Illness from './Illness/Illness';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={authorization_domain}
    clientId={authorization_client_id}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: authorization_audience,
      scope: authorization_scope
    }}
  >
  <React.StrictMode>
    <Router>
    <App />
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path={about_path} element={<LandingPage/>}></Route>
        <Route path={stress_path} element={<StressForm/>}></Route>
        <Route path={food_path} element={<Food/>}></Route>
        <Route path={mood_path} element={<MoodForm/>}></Route>
        <Route path={patterns_path} element={<Patterns/>}></Route>
        <Route path={symptom_path} element={<Symptoms/>}></Route>
        <Route path={medication_path} element={<Medication/>}></Route>
        <Route path={exercise_path} element={<Exercise/>}></Route>
        <Route path={sleep_path} element={<Sleep/>}></Route>
        <Route path={profile_path} element={<Profile/>}></Route>
        <Route path={home_path} element={<Home />}></Route>
        <Route path={drugsalcohol_path} element={<DrugsAlcohol/>}></Route>
        <Route path={allergy_path} element={<Allergy/>}></Route>
        <Route path={illness_path} element={<Illness />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
