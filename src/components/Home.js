import React, { Component } from 'react';
import Navigation from './Navigation';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <Navigation></Navigation>
                <h4>Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de experiencia. Tenemos el conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical.</h4>
            
            </React.Fragment>
        );
    }
}

export default Home;