import React from "react";
import { Link } from "react-router-dom";
import { about_path, exercise_path, drugsalcohol_path, food_path, home_path, medication_path, mood_path, patterns_path, profile_path, sleep_path, stress_path, symptom_path, allergy_path, illness_path } from "../constants";
import logo from "../images/logo.png";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
        <img src={logo} alt="logo" />
        <ul>
        <li>
            <Link to={home_path}>Home</Link>
          </li>
          <li>
            <Link to={patterns_path}>Patterns</Link>
          </li>

          <li>
            <Link to={symptom_path}>Symptoms</Link>
          </li>

          <li>
            <Link to={food_path}>Food</Link>
          </li>

          <li>
            <Link to={medication_path}>Medications</Link>
          </li>

          <li>
            <Link to={drugsalcohol_path}>Drugs and Alcohol</Link>
          </li>

          <li>
            <Link to={allergy_path}>Allergies</Link>
          </li>


          <li>
            <Link to={illness_path}>Illness</Link>
          </li>

          <li>
            <Link to={exercise_path}>Exercise</Link>
          </li>

          <li>
            <Link to={sleep_path}>Sleep</Link>
          </li>

          <li>
            <Link to={mood_path}>Mood</Link>
          </li>

          <li>
            <Link to={stress_path}>Stress</Link>
          </li>

          <li>
            <Link to={about_path}>About</Link>
          </li>
 
          <li>
            <Link to={profile_path}>Profile</Link>
          </li>
        </ul>
      </div>
    )
}

export default Navbar;