import React, { Component } from "react";
import './../css_files/YellowBar.scss';

export default class YellowBar extends Component {
    render() {
        return (<div>
            <section className="yellow_container">
                <div className="yellow_section">
                    <p className="number">10</p>
                    <p className="yellow_title">ODDANYCH WORKÓW</p>
                    <p className="yellow_lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestias, nemo minima veritatis placeat dolores neque voluptate, possimus laboriosam ad cumque repudiandae, delectus itaque optio sit corporis cum a recusandae!</p>
                </div>
                <div className="yellow_section">
                    <p className="number">5</p>
                    <p className="yellow_title">WSPARTYCH ORGANIZACJI</p>
                    <p className="yellow_lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestias, nemo minima veritatis placeat dolores neque voluptate, possimus laboriosam ad cumque repudiandae, delectus itaque optio sit corporis cum a recusandae!</p>
                </div>
                <div className="yellow_section">
                    <p className="number">12</p>
                    <p className="yellow_title">PRZEPROWADZONYCH ZBIÓREK</p>
                    <p className="yellow_lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestias, nemo minima veritatis placeat dolores neque voluptate, possimus laboriosam ad cumque repudiandae, delectus itaque optio sit corporis cum a recusandae!</p>
                </div>
            </section>
        </div>
        );
    }
}
