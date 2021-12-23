import React from "react";
import "./Formation.css";
import Wac from "../../assets/wac.png";
import { FcMultipleDevices, FcComboChart, FcBriefcase } from "react-icons/fc";

export default function Formation() {
  return (
    <div className="Formation" id="Formations">
      <div className="border"></div>
      <h1 className="form text_techno2  font-size" id="font_t">Formation</h1>
      <div className="webac">
        <h2 className="text_techno2  font-size" id="font_t">
          WEB@CADEMIE BY EPITECH <img className="wac techno_icon" src={Wac} />
        </h2>
      </div>
      <div>
        <div className="detail">
          <div className="col description">
            <FcMultipleDevices size="6rem" className="icon techno_icon" />
            <h3 className=" titre_h text_techno2  font-size" id="font_t">Technologie du web</h3>
            <h5 className=" text_techno  font-size">
              Au cours de cette première année, on a appris l'intégration
              HTML/CSS, initiation aux fondamentaux PHP, Javascript
              l'utilisation des frameworks et librairies.
            </h5>
            <h5 className=" text_techno  font-size">
              En deuxième année, nous approfondirons le stack JAVA/ANGULAR,
              Python, Ruby, API & micro-services en plus de l'alternance.
            </h5>
          </div>
          <div className=" col description">
            <FcComboChart size="6rem" className="icon techno_icon" />
            <h3 className=" titre_h text_techno2  font-size" id="font_t">Pédagogie d' EPITECH</h3>
            <h5 className=" text_techno  font-size">
              A la Web@cadémie by EPITECH c'est la pédagogie "d'apprendre à
              apprendre" qui est mise en avant. Elle consiste à assimiler la
              théorie par la pratique dès le début de la formation, reposant sur
              notre autonomie, notre esprit d'équipe et l'accompagnement
              pédagogique apporté.
            </h5>
          </div>
          <div className="col description">
            <FcBriefcase size="6rem" className="icon techno_icon" />
            <h3 className=" titre_h text_techno2  font-size" id="font_t">Période d'alternance</h3>
            <h5 className=" text_techno  font-size">
              Cette période commence dès le 13 mars 2022, sur un rythme de 3
              semaines en entreprise et une semaine au campus Universitaire
              d'Epitech. Pour le contrat c'est un contrat de
              professionnalisation ou un contrat apprentissage.
            </h5>
            <p id="Portfolio"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
