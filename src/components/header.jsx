import React, { Component } from "react";
import './../css_files/Header.scss';

export default class Header extends Component {
    render() {
        return (
            <div className="header_container">
                <div className="header_image"></div>
                <div className="start_section">
                    <section className="log_bar">
                        <div className="log">Zaloguj</div>
                        <div className="log">Załóż konto</div>
                    </section>
                    <nav className="nav_bar">
                        <div className="nav">Start</div>
                        <div className="nav">O co chodzi?</div>
                        <div className="nav">O nas</div>
                        <div className="nav">Fundacje i organizacje</div>
                        <div className="nav">Kontakt</div>
                    </nav>
                    <section className="main_section">
                        <p>Zacznij pomagać!</p>
                        <p>Oddaj niechciane rzeczy w zaufane ręce.</p>
                        <div className="decoration_image"></div>
                        <nav className="main_btns">
                            <div className="btns">ODDAJ RZECZY</div>
                            <div className="btns">ZORGANIZUJ ZBIÓRKĘ</div>
                        </nav>
                    </section>
                </div>
            </div>
        );
    }
}
