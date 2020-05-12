import React, { Component } from 'react';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {instrumentos} from '../datos/instrumentos.json';
import Button from 'react-bootstrap/Button';
import '../assets/css/Detalle.css'


class Detalle extends Component {

    constructor() {
        super();
        this.state = {
            instrumentos
        }
    }

    render() {
        const parametroId = this.props.match.params.id;
        const instrEnc = instrumentos.filter(instrumento => instrumento.id === parametroId);
        
        
        console.log('estoy aca'+parametroId);
        console.log('Id ::'+instrEnc[0].id);
        
        return (
            <React.Fragment>
                <Navigation></Navigation>
                <Container>
                    <Row>
        <Col className="uno" md="9"><Image src={require(`../assets/images/${instrEnc[0].imagen}`)} style= {{width: '90%', height:'40%'}}></Image>
        <p>Descripcion:</p><br></br><p>{instrEnc[0].descripcion}</p></Col>
        <Col md="3">
        
        <p>{instrEnc[0].cantidadVendida} Vendidos</p><br></br>
            <h3>{instrEnc[0].instrumento}</h3>
        <br></br>
        <h1>${instrEnc[0].precio}</h1>
        <br></br>
        <p>Marca: {instrEnc[0].marca}
        <br></br>
        Modelo: {instrEnc[0].modelo}
        </p>
        <p>
            Costo envio: {comprobarEnvio(instrEnc[0].costoEnvio)}
        </p>
        <Button variant="outline-primary">Agregar al Carrito</Button>
        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

function comprobarEnvio(costoEnvio) {
    if(costoEnvio === 'G') {
      const hStyle= {color: 'green'};
    return <p style={hStyle}>Envío gratis</p>
    } else {
      const hStyle= {color: 'orange'};
    return <p  style={hStyle}>Costo de envio: ${costoEnvio}</p>
    }
  }

export default Detalle;