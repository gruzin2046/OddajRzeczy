import React, { Component } from "react";
import './../css_files/HelpDesc.scss';

export default class FourSteps extends Component {
    render() {
        return (<div>
            <section className="helpStartSection">
                <p>Komu pomagamy?</p>
                <div className="decoration_image"></div>
                <div className="helpOrganizations">
                    <div className="organization 1">Fundacjom</div>
                    <div className="organization 2">Organizacjom pozarządowym</div>
                    <div className="organization 3">Lokalnym zbiórkom</div>
                </div>
                <div className="descriptionText">W naszej bazie znajdziesz listę zweryfikowanych fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</div>
                <div className="organizationList">
                    <div className="orgListItem 1">
                        <div className="orgListItemLeft">
                            <p className="orgName">Fundacja "Dbam o zdrowie"</p>
                            <p className="orgDesc">Cel: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                        </div>
                        <div className="orgListItemRight">
                            <p className="orgDesc">Ubrania, zabawki, sprzet AGD, meble</p>
                        </div>
                    </div>
                    <div className="orgListItem 2">
                        <div className="orgListItemLeft">
                            <p className="orgName">Fundacja "Dla dzieci"</p>
                            <p className="orgDesc">Cel: Pomoc dzieciom z ubogich rodzin.</p>
                        </div>
                        <div className="orgListItemRight">
                            <p className="orgDesc">Ubrania, zabawki, sprzęt sportowy</p>
                        </div>
                    </div>
                    <div className="orgListItem 2">
                        <div className="orgListItemLeft">
                            <p className="orgName">Fundacja "Bez domu"</p>
                            <p className="orgDesc">Cel: Pomoc osobom nie posiadającym stałego miejsca zamieszkania.</p>
                        </div>
                        <div className="orgListItemRight">
                            <p className="orgDesc">Ubrania, jedzenie, ciepłe koce.</p>
                        </div>
                    </div>
                </div>
                <div className="helpOrganizationsNumb">
                    <div className="numb 1">1</div>
                    <div className="numb 2">2</div>
                    <div className="numb 3">3</div>
                </div>
            </section>
        </div>
        );
    }
}
