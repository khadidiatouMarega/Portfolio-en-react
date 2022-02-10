import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="menu-d">
      <div className="menu">
        <div className="menu_b">
          <ul className="navbar">
            <a href="#Home">
              <li className="home text_techno1 ">Home </li>
            </a>
            <a href="#Abouts">
              <li className="A_propos text_techno1">A propos</li>
            </a>
            <a href="#Compétence">
              <li className="Services text_techno1">Compétences</li>
            </a>
            <a href="#Formations">
              <li className="Formations text_techno1">Formations</li>
            </a>
            <a href="#Portfolio">
              <li className="Portfolio text_techno1">Portfolio</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
                <a href="https://my.indeed.com/p/khadidiatoum-09q0x85" className="icon_gh">
                  <i className=" fa-2x fa fa-linkedin "></i>
                </a>
                <a href="https://github.com/" className="icon_gh">
                  <i className="fa-2x fa fa-github-square "></i>
                </a>
                <a href="https://www.linkedin.com/feed/" className="icon_gh">
                  <i className="fa-2x fa fa-linkedin-square"></i>
                </a>
              </div>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                <span className="highlighted-text text_techno1 font-sizef">Khadidiatou MAREGA</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text ">
                {" "}
                <h1 className="font-size " id="font-sizef">
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={["Développeuse Full Stack", 1000]}
                  ></Typical>
                </h1>
                <span className="profile-role-tagline text_techno1 font-sizef font-size">
                  Etudiante à la Web@académie d'Epitech en recherche
                  d'alternance 1ère année.
                </span>
                <div className="profile-options">
                  <a href="#Contact">
                    <button className="btn primary-btn text_techno4 font-sizeb">
                      {""}
                      Me contacter
                    </button>
                  </a>
                  <a href="CV.pdf" download="CV.pdf">
                    <button className="btn highlighted-btn text_techno5 font-sizeb1">
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
