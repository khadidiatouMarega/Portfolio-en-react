import React, { useState } from "react";
import P4 from "../../assets/P4.png";
import Snap from "../../assets/snap2.jpg";
import Snap2 from "../../assets/snap.jpg";
import Snap3 from "../../assets/snap3.jpg";
import Twiter from "../../assets/tw.png";
import Maquette from "../../assets/maq.png";
import cinema from "../../assets/cinema.png";
import "./Portfolio.css";
import { AiFillGithub } from "react-icons/ai";

export default function Portfolio() {
  return (
    <div className="Portfolio" id="Portfolio">
      <div className="border"></div>
      <h1 className="form ">Portfolio</h1>
      <div className="language">
        <div className="lang1 jeu_text ">
          <h4 className="text_techno1">Puissance_4</h4>
          <div className="affiche_text">
            <img
              src={P4}
              alt="Jeu puissance 4"
              className="image port_img"
            />
          </div>
          <div className="jeu_p">
            <div className="jeu_puissance " id="affiche_text desc">
              <h1></h1>
              <p className="text_techno1">Projet création d'un Puissance4 en JQUERY (1 semaine)</p>
              {/* <p className="text_git">
                <a href="https://github.com/khadidiatou1/Puissance-4">
                  <AiFillGithub size="2rem" color="#000" />
                </a>
                khadidiatou1/Puissance4
              </p> */}
            </div>
          </div>
        </div>
        <div className="lang1  ">
          <h4 className="text_techno1">My_twiter</h4>
          <div className="affiche_text ">
            <img src={Twiter} alt="Twiter" className=" tw port_img" />
          </div>
          <div className="jeu_puissance ">
            <p className="text_techno1">
              Projet création d'un réseau social à l'image de
              twitter en PHP (2 semaines)
            </p>
            {/* <p className="text_git">
              <a href="https://github.com/khadidiatou1/Puissance-4">
                <AiFillGithub size="2rem" color="#000" />
              </a>
              khadidiatou1/Twitter
            </p> */}
          </div>
        </div>
        <div className="lang1">
          <h4 className="text_techno1">My_snapchat</h4>
          <div className=" snap_b affiche_text">
            <img src={Snap} alt="Jeu puissance 4" className="snap_img " />
            <img src={Snap2} alt="Jeu puissance 4" className="snap_img " />
            <img src={Snap3} alt="Jeu puissance 4" className="snap_img " />
          </div>
          <div className="snachat">
            <p  className="text_techno1">
              Projet création d'un réseau social (snapchat) avec React Native
              (1 semaine)
            </p>
            {/* <p className="text_git">
              <a href="https://github.com/khadidiatou1/Puissance-4">
                <AiFillGithub size="2rem" color="#000" />
              </a>
              khadidiatou1/Snapchat
            </p> */}
          </div>
        </div>
      </div>

      <div className="language">
        <div className="lang1 jeu_text">
          <h4 className="text_techno1">Maquette</h4>
          <div className="affiche_text  maq">
            <img src={Maquette} alt="Maquette" className="image port_img" />
          </div>
          <p className="text_techno1">Projet création d'une maquette en HTML et CSS (1 semaine)</p>
          {/* <p className="text_git">
            <a href="https://github.com/khadidiatou1/Puissance-4">
              <AiFillGithub size="2rem" color="#000" />
            </a>
            khadidiatou1/Puissance4
          </p> */}
        </div>
        <div className="lang1 ">
          <h4 className="text_techno1">Cinema</h4>
          <div className="affiche_text ">
            <img src={cinema} alt="Jeu puissance 4" className="ciné port_img" />
          </div>
          <p className="text_techno1">Projet création d'un site de cinéma en PHP (2 semaines)</p>
          {/* <p className="text_git">
            <a href="https://github.com/khadidiatou1/Puissance-4">
              <AiFillGithub size="2rem" color="#000" />
            </a>
            khadidiatou1/Puissance4
          </p> */}
        </div>
        <div className="lang1 ">
          <h4 className="text_techno1">Puissance_4</h4>
          <div className="affiche_text ">
            <img src={P4} alt="Jeu puissance 4" className="port_img" />
          </div>
          <p className="text_techno1">Projet création d'un Puissance4 en JQUERY (1 semaine)</p>
          {/* <p className="text_git">
            <a href="https://github.com/khadidiatou1/Puissance-4">
              <AiFillGithub size="2rem" color="#000" />
            </a>
            khadidiatou1/Puissance4
          </p> */}
        </div>
      </div>
    </div>
  );
}
