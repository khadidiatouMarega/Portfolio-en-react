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
                <h1 className="competenceT" id="font_t">Compétences</h1>
                <div className='logo'>
                    <div className="symf logo1 symfon"><img className="symfony techno_icon" src={Symfony} /></div>
                    <div className="symf logo1"><img className="laravel techno_icon" src={Laravel} /></div>
                    <div className="symf logo2"><img className="js techno_icon" src={JS} /></div>
                    <div className="symf logo2"><img className="react techno_icon" src={REACT} /></div>
                </div>
                <div className='logo logo_b'>
                    <div className="symf logo3 symfon"><img className="html techno_icon" src={Html} /></div>
                    <div className="symf logo3 sq"><img className="sql techno_icon" src={SQL} /></div>
                    <div className="symf logo4 pp"><img className="php techno_icon" src={PHP} /></div>
                    <div className="symf logo4 "><img className="mongo techno_icon2" src={Mongo}/></div>
                </div>
            </div>
  );
}