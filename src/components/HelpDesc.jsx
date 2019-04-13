import React, { Component } from "react";
import './../css_files/HelpDesc.scss';

export default class FourSteps extends Component {
    render() {
        return (<div>
            <section className="helpStartSection">
                <p>Komu pomagamy?</p>
                <div className="decoration_image"></div>
                <div className="helpOrganizations">
                    <div className="organization">Fundacjom</div>
                    <div className="organization">Organizacjom pozarządowym</div>
                    <div className="organization">Lokalnym zbiórkom</div>
                </div>
                <div className="descriptionText">W naszej bazie znajdziesz listę zweryfikowanych fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</div>
            </section>
        </div>
        );
    }
}
