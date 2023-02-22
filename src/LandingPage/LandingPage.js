//Write a React component for the landing page of a website called HealthMS that will contain a navbar, an about section, and a sign-in button.

//The navbar should contain a logo and a list of links to the about section and the sign-in page.

//The about section should contain a title, a description, and an image.

//The sign-in button should contain a title and a link to the sign-in page.

//The navbar, about section, and sign-in button should be styled with CSS.

import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import aboutImage from "../images/aboutImage.png";
import { profile_path } from "../constants";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="about">
        <h1>About HealthMS</h1>
        <p>
          At HealthMS, our mission is to empower individuals living with Multiple Sclerosis (MS) to take control of their health and improve their quality of life. Our platform provides users with a suite of tools designed to help them better understand their condition and manage their symptoms.

We believe that knowledge is power, and that with the right resources, anyone can learn to live well with MS. That's why we offer a wealth of educational content, including articles, videos, and resources from trusted sources in the MS community. Our community forum also allows users to connect with one another, share their experiences, and support each other through the ups and downs of life with MS.

At the core of our platform is a suite of easy-to-use tools designed to help users track their symptoms, monitor their progress, and identify potential triggers. With our symptom tracker, users can log their symptoms and track them over time to identify patterns and changes. Our medication tracker helps users keep track of their medications and any side effects, while our mood tracker allows users to track their emotional state and identify potential triggers.

We're committed to providing a safe, supportive, and inclusive platform for individuals living with MS, and we're always looking for ways to improve our offerings and better serve our users. Join our community today and take control of your health with HealthMS.
        </p>
        <img src={aboutImage} alt="aboutImage" />
      </div>
      <div className="signIn">
        <h1>View or Create Profile</h1>
        <Link to={profile_path}>View or Create Profile</Link>
      </div>
    </div>
  );
};

export default LandingPage;