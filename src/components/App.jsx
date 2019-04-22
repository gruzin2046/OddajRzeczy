import React, { Component } from 'react';
import './../css_files/App.scss';
import Header from "./Header.jsx"
import YellowBar from "./YellowBar.jsx"
import FourSteps from './FourSteps';
import AboutUs from './AboutUs';
import HelpDesc from './HelpDesc';
import Footer from './Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHandHoldingHeart, faBoxOpen, faGlasses, faShippingFast } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons"

library.add(faHandHoldingHeart, faBoxOpen, faGlasses, faShippingFast, faFacebookF, faTwitter)

class App extends Component {
  render() {
    return (<div>
      <Header />
      <YellowBar />
      <FourSteps />
      <AboutUs />
      <HelpDesc />
      <Footer />
    </div>
    );
  }
}

export default App;