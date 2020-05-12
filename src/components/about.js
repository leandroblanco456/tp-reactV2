import React, { Component } from 'react';
import Navigation from './Navigation';
import Image from 'react-bootstrap/Image';

class about extends Component {
    render() {
        return (
          <React.Fragment>
              <Navigation></Navigation>
              <h1>El rayo marca nuestra ubicacion :D</h1>
              <Image src={require('../assets/images/about.jpg')} rounded></Image>
          </React.Fragment>
        );
    }
}

export default about;