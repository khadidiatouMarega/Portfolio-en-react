import React from 'react';
import emailjs, { init } from 'emailjs-com';
import "./Contact.css"

export default function Contact(){

     
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm(" "," ", e.target, init(" "))
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
};  

    return (
        <div className="Contact">
         <div className="border"></div>
         <p id="Contact"></p>
            <h1  className="titre font-size">Me contacter</h1>
            <p className="email text_techno1 font-sizef">Je reste joingnable par mail<strong> khadidiatou.marega@epitech.eu</strong></p>
            <form id="contact-form" onSubmit={sendEmail} >
                        <div className="form-group">
                            <label></label> 
                            <input type="text" className="form-control font-size1" placeholder="Votre nom" name="user_name"  />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control font-size1" aria-describedby="emailHelp" placeholder="Votre mail" name="user_email" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control text_mail  font-size1" rows="5" placeholder="Votre message" name="message"/>
                        </div>
                        <button type="submit" className="button-submit text_techno1  font-sizef"  value="Send">Envoyer</button>
                        </form>
        </div>
    )
}