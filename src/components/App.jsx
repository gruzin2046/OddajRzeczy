import React, { Component } from 'react';
import './../css_files/App.scss';
import Header from "./Header.jsx"
import YellowBar from "./YellowBar.jsx"
import FourSteps from './FourSteps';
import AboutUs from './AboutUs';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { faGlasses } from '@fortawesome/free-solid-svg-icons'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'

library.add(faHandHoldingHeart)
library.add(faBoxOpen)
library.add(faGlasses)
library.add(faShippingFast)

class App extends Component {
  render() {
    return (<div>
      <Header />
      <YellowBar />
      <FourSteps />
      <AboutUs />
    </div>
    );
  }
}

export default App;