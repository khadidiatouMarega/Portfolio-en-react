import React from "react";
import "./Formation.css";
import Wac from "../../assets/wac.png";
import { FcMultipleDevices, FcComboChart, FcBriefcase } from "react-icons/fc";

export default function Formation() {
  return (
    <div className="Formation" id="Formations">
      <div className="border"></div>
      <h1 className="form">Formation</h1>
      <div className="webac">
        <h2 className="">
          WEB@CADEMIE BY EPITECH <img className="wac" src={Wac} />
        </h2>
      </div>
      <div>
        <div className="detail">
          <div className="col description">
            <FcMultipleDevices size="6rem" className="icon" />
            <h3 className=" titre_h">Technologie du web</h3>
            <p className=" text_techno">
              Au cours de cette première année, on eu à apprendre l'intégration
              HTML/CSS, initiation aux fondamentaux PHP et Javascript.
              Utilisation des frameworks et librairies.
            </p>
            <p className=" text_techno">
              En deuxième année, nous découvrirons le stack JAVA/ANGULAR,
              Python, Ruby, API & micro-services en plus de l'alternance.
            </p>
          </div>
          <div className=" col description">
            <FcComboChart size="6rem" className="icon" />
            <h3 className=" titre_h">Pédagogie d' EPITECH</h3>
            <p className=" text_techno">
              A la Web@cadémie by EPITECH c'est la pédagogie "d'apprendre à
              apprendre qui est mise en avant". Elle consiste à assimiler la
              théorie par la pratique dès le début de la formation, reposant sur
              notre autonomie, notre esprit d'équipe et l'accompagnement
              pédagogique apporté. Ainsi les preuves de cette méthode inductive
              d'EPITECH ne sont plus à démontrer.
            </p>
          </div>
          <div className="col description">
            <FcBriefcase size="6rem" className="icon" />
            <h3 className=" titre_h">Période d'alternance</h3>
            <p className=" text_techno">
              Cette période commence dés le 13 MARS 2022, sur un rythme de 3
              semaines en entreprise et une semaine au campus Universitaire
              d'Epitech. Pour le contrat c'est un contrat de
              professionnalisation ou un contrat apprentissage.
            </p>
            <p id="Portfolio"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
