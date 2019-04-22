import React, { Component } from 'react';
import './../css_files/App.scss';
import Header from "./Header.jsx"
import YellowBar from "./YellowBar.jsx"
import FourSteps from './FourSteps';
import AboutUs from './AboutUs';
import HelpDesc from './HelpDesc';
import Footer from './Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { faGlasses } from '@fortawesome/free-solid-svg-icons'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faHandHoldingHeart, faBoxOpen, faGlasses, faShippingFast, faFacebookF)

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