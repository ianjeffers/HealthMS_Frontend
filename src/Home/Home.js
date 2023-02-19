import React from "react";
import TreeGame from "../TreeGame/TreeGame";
import { profile_path } from "../constants";
import LandingPage from "../LandingPage/LandingPage";
import TreeGameContainer from "../TreeGame/TreeGameContainer";

const Home = () => {
    return (
        <div className="homepage">
        <TreeGameContainer/>
        <LandingPage/>
        </div>
    );
};

export default Home;