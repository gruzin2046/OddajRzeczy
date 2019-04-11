import React, { Component } from "react";
import './../css_files/AboutUs.scss';

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <div className="aboutUs_container">
                    <section className="aboutUs_section">
                        <p>O nas</p>
                        <div className="decoration_image"></div>
                        <p className="abutUs_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat suscipit incidunt vero illo est modi voluptates repellat. Soluta in doloribus perspiciatis a, ex at officia ad, provident, iste illo illum.</p>
                        <div className="signature_image"></div>
                    </section>
                    <div className="aboutUs_image"></div>
                </div>
            </div>
        );
    }
}
