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

// Dominios a hacer el llamado de server
// en caso de hacerlo a heroku usar:
// https://restserver-instrumentos.herokuapp.com
// en caso de usar el proyecto localmente, usar:
//http://localhost:9000


    constructor() {
        super();
        this.state = {
            db:[]
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        
        fetch('https://restserver-instrumentos.herokuapp.com/instrumento/'+id)
        .then((response)=>response.json())
        .then((responseJson)=>{
          this.setState({db: responseJson.instrumentos});
        })

        
    }
    componentWillUnmount(){
    
        console.log('ciclo desmontado')
      }
    getInstrumentoXID(){
        

       
    }
    
    render() {
        
       
        const instrEnc = this.state.db;
        
        
        const imageurl = "https://restserver-instrumentos.herokuapp.com/images/" + instrEnc.imagen;
        
        
        return (
            
            <React.Fragment>
                <Navigation></Navigation>
                <Container>
                    <Row>
        <Col className="uno" md="9">
        <img alt="plato" className="minAltoImg" src={imageurl}  style={{ width: '50%' }} />
        <p>Descripcion:</p><br></br><p>{instrEnc.descripcion}</p></Col>
        <Col md="3">
        
        <p>{instrEnc.cantidadVendida} Vendidos</p><br></br>
            <h3>{instrEnc.instrumento}</h3>
        <br></br>
        <h1>${instrEnc.precio}</h1>
        <br></br>
        <p>Marca: {instrEnc.marca}
        <br></br>
        Modelo: {instrEnc.modelo}
        </p>
        <p>
            Costo envio: {comprobarEnvio(instrEnc.costoEnvio)}
        </p>

        <Button variant="outline-primary" size="sm">Agregar al Carrito</Button>
        <Button variant="danger" size="sm" block>Eliminar de Mongo</Button>
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

function borrarInstrumento() {

    
}