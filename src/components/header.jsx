import React, { Component } from "react";
import './../css_files/Header.scss';

export default class Header extends Component {
    render() {
        return (<div className="header_container">
            <div className="header_image"></div>
            <div className="start_section">
                <section className="log_bar">
                    <div className="log">Zaloguj</div>
                    <div className="log">Załóż konto</div>
                </section>
            </div>
        </div>
        );
    }
}
