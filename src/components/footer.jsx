import React, { Component } from "react";
import './../css_files/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Footer extends Component {
    render() {
        return (<div className="footer_container">
            <div className="footer_image">
                <div className="foorerFormContainer">
                    <div className="footerForm">
                        <p className="formTitle">Skontaktuj się z nami</p>
                        <div className="decoration_image"></div>
                        <div className="formLeft">
                            <p>FORMULARZ KONTAKTOWY</p>
                        </div>
                        <div className="nameAndEmail">
                            <input type="text" placeholder="Imię"></input>
                            <input type="email" placeholder="Email"></input>
                        </div>
                        <div className="formLeft">
                            <textarea className="message" placeholder="Twoja wiadomość"></textarea>
                        </div>
                        <button className="formBtn">Wyślij</button>
                    </div>
                </div>
                <div className="copywright">
                    <p>Copywhight &copy; by Anna Dadej</p>
                </div>
                <div className="icons">
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                </div>

            </div>
        </div>
        );
    }
}