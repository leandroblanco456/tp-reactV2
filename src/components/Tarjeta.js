import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import '../assets/css/Tarjeta.css';

class Tarjeta extends Component {
  render() {
    return (
      <React.Fragment>
       
        <ListGroup>
          <ListGroup.Item>
            <Card >
            <Row>
              <Card.Img variant="top" src={require(`../assets/images/${this.props.imagen}`)} style={{ width: '50%' }}/>
              <Card.Body >
    <Card.Subtitle>{this.props.nombre}<ul></ul></Card.Subtitle>
                <Card.Title>${this.props.precio}<ul></ul></Card.Title>  

                {comprobarEnvio(this.props.costoEnvio)}
                <Card.Text>
                  
                  {this.props.cantidadVendida} Vendidos
                </Card.Text>
                <Button href={`Detalle/${this.props.id}`} variant="warning">Ver producto</Button>
              </Card.Body>
              </Row>
            </Card>
          </ListGroup.Item>
        </ListGroup>
        
      </React.Fragment>
    );
  }
}
  function comprobarEnvio(costoEnvio) {
    if(costoEnvio === 'G') {
      const hStyle= {color: 'green'};
    return <p style={hStyle}>Envio gratis a todo el pais</p>
    } else {
      const hStyle= {color: 'orange'};
    return <p  style={hStyle}>Costo de envio: ${costoEnvio}</p>
    }
  }
export default Tarjeta;
