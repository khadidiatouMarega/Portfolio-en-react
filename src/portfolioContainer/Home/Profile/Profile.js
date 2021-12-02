import React from "react";
import { useState } from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="menu-d">
      <div className="menu">
        <div className="menu_b">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg> */}
          <ul className="navbar">
            <a href="#Home">
              <li className="home">Home</li>
            </a>
            <a href="#Abouts">
              <li className="A_propos">A propos</li>
            </a>
            <a href="#Compétence">
              <li className="Services">Compétences</li>
            </a>
            <a href="#Formations">
              <li className="Formations">Formations</li>
            </a>
            <a href="#Portfolio">
              <li className="Portfolio">Portfolio</li>
            </a>
            <a href="#Contact">
              <li className="Contact">Contact</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
                <a href="https://my.indeed.com/p/khadidiatoum-09q0x85">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://github.com/">
                  <i className="fa fa-github-square"></i>
                </a>
                <a href="https://www.linkedin.com/feed/">
                  <i className="fa fa-linkedin-square"></i>
                </a>
              </div>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                <span className="highlighted-text">Khadidiatou MAREGA</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={["Développeuse Full Stack", 1000]}
                  ></Typical>
                </h1>
                <span className="profile-role-tagline">
                  Etudiante à la Web@académie d'Epitech en recherche
                  d'atlernance 1ère année.
                </span>
                <div className="profile-options">
                  <a href="#Contact">
                    <button className="btn primary-btn">
                      {""}
                      Me contacter
                    </button>
                  </a>
                  <a href="mon_cv.pdf" download="mon_cv.pdf">
                    <button className="btn highlighted-btn">
                      Télécharger mon CV
                    </button>
                  </a>
                </div>
              </span>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
