import React from "react";
import "./Services.css";
import Symfony from "../../assets/Langages/symfony.png";
import Laravel from "../../assets/Langages/laravel.png";
import REACT from "../../assets/Langages/react.png";
import JS from "../../assets/Langages/js.png";
import PHP from "../../assets/Langages/php.png";
import Mongo from "../../assets/Langages/mongodb.png";
import SQL from "../../assets/Langages/sql.png";
import Html from "../../assets/Langages/html-css.png";
import Bootstrap from "bootstrap";
import  {col, row} from "bootstrap";


export default function Services() {
  return (
<div className="Services competence" id="Compétence">
                <div className="border"></div>
                <h1 className="competenceT">Compétences</h1>
                <div className='logo'>
                    <div className="symf"><img className="symfony" src={Symfony} /></div>
                    <div className="symf"><img className="laravel" src={Laravel} /></div>
                    <div className="symf"><img className="js" src={JS} /></div>
                    <div className="symf"><img className="react" src={REACT} /></div>
                </div>
                <div className='logo'>
                    <div className="symf"><img className="html" src={Html} /></div>
                    <div className="symf"><img className="sql" src={SQL} /></div>
                    <div className="symf"><img className="php" src={PHP} /></div>
                    <div className="symf"><img className="mongo" src={Mongo}/></div>
                </div>
            </div>
  );
}