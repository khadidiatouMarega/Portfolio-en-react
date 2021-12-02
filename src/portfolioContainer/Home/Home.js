import React from "react";
import Profile from "./Profile/Profile";
import "./Home.css"

export default function Home(){
return(
    <div className="home-container" id="Home">
    <Profile/>
        <div id="wave"></div>
    </div>
)
}