import React, { Component } from "react";
import './../css_files/FourSteps.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class FourSteps extends Component {
    render() {
        return (<div>
            <section className="fourStepsSection">
                <p>Wystarczą 4 proste kroki</p>
                <div className="decoration_image"></div>
                <div className="steps">
                    <div className="step">
                        <FontAwesomeIcon icon="hand-holding-heart" className="big" />
                        <p>Wybierz rzeczy</p>
                        <p className="step_desc">Ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="step">
                        <FontAwesomeIcon icon="box-open" className="big" />
                        <p>Spakuj je</p>
                        <p className="step_desc">Użyj kartonów lub worków na śmieci</p>
                    </div>
                    <div className="step">
                        <FontAwesomeIcon icon="glasses" className="big" />
                        <p>Zdecyduj komu chcesz pomóc</p>
                        <p className="step_desc">Wybierz zaufane miejsce</p>
                    </div>
                    <div className="step">
                        <FontAwesomeIcon icon="shipping-fast" className="big" />
                        <p>Zamów kuriera</p>
                        <p className="step_desc">Kurier Przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <div className="btn">ZAŁÓŻ KONTO</div>
            </section>
        </div>
        );
    }
}
