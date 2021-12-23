import React from "react";
import profil from "../../assets/profil2.jpg";
import "./About.css";

export default function About() {
  return (
    <div className="Abouts about" id="Abouts">
      <div className="container">
        <div className="apropos">
          <h1 className="about_heading text_techno2 font-size" id="font_t">A propos</h1>

          <div className="about_text">
            <div className="row">
              <div className="row profil">
                <img src={profil} alt="" class="about_image" />
              </div>
              <div className="col text_description">
                <div className="hello Text1">
                  <h3 className="titre_d hello1 text_techno2 font-size font-sizef" id="font_t">Salut</h3>
                  <h5 className="text_techno hello2 font-size">
                   J’ai choisi un cursus en alternance
                    à la web@demie d’Epitech au titre de développeuse
                    intégratrice web, pour acquérir des compétences et gagner de
                    l’expérience professionnelle. Dès le debut de cette
                    formation en mai 2021, j'ai gagné en autonomie et
                    en esprit d'équipe grâce à la pédagogie "d'apprendre à
                    apprendre". Aussi je suis actuellement en
                    recherche d'
                    <strong>alternance</strong> pour ma deuxième, qui débutera à
                    partir de <strong>mars 2022.</strong>
                  </h5>
                </div>
                <div className="diplome Text1">
                  <h3 className="titre_d text_techno2  font-sizef" id="font_t">Diplômes et Expériences</h3>
                  <h5 className="text_techno dip font-size">
                    Je suis titulaire d'un baccalauréat littéraire, obtenu en
                    2018 au Sénégal. Aprés mon arrivée en France, j'ai décider
                    de suivre cet attirance que j'ai toujours eu pour
                    l'informatique et le développement web en suivant cette
                    formation à la Web@cadémie.
                  </h5>
                  <h5 className="text_techno text_techno2 "id="font_s" >
                    Etant quelqu' un de pédagogue, emphatique et disciplinée quand il
                    faut l' être j'ai fais de la garde d'enfants et
                    de l'aide au devoir de 2015 à 2018.
                  </h5>
                </div>
                <div className="hobbies Text1">
                  <h3 className="titre_h dip text_techno2  font-size" id="font_t">Hobbies</h3>
                  <h5 className="text_techno font-size">
                    Passionnée de cuisine j'aime concocter des recettes au grand
                    bonheur de la famille et des ami(e)s. Fan de sport également
                    je me suis découverte récemment une autre passion :
                    l'équitation grâce au contact avec le cheval, animal que
                    j'adore. Quand je ne suis pas en train de coder, j'aime aussi
                    regarder la télé avec comme programmes favoris des series,
                    l'actualité sur le sport notamment le football.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
