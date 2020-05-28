import React, { Component } from 'react';
import Navigation from './Navigation';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';


class agregarInstrumento extends Component {
  constructor(args){
    super(args)
    this.state = {
      instrumento: '', marca: '', modelo: '', precio: '', costoEnvio: '', cantidadVendida: '', descripcion:'' 
    }
  }
  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  crearInstrumento() {
  const  body = {
      instrumento : this.state.instrumento,
      marca: this.state.marca
    }

console.log(JSON.stringify(body))

    var url = 'http://localhost:9000/instrumento';
    const header = 'Content-Type: application/json'
    axios.post(url, { body }, header)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })

  }
  
    render() {
     
       return(
         <React.Fragment>
         <Navigation></Navigation>
         <div>
           
           <label htmlFor="instrumento" > Instrumento</label>
        <input type="text" value={this.state.instrumento} onChange={this.onChange.bind(this)} name="instrumento" id="instrumento" /> <br></br>

           <label htmlFor="marca" > Marca</label>
        <input type="text" value={this.state.marca} onChange={this.onChange.bind(this)} name="marca" id="marca" /> <br></br>

           <label htmlFor="modelo" > Modelo</label>
        <input type="text" value={this.state.modelo} onChange={this.onChange.bind(this)} name="modelo" id="modelo" /> <br></br>

           <label htmlFor="precio" > precio</label>
        <input type="text" value={this.state.precio} onChange={this.onChange.bind(this)} name="precio" id="precio" /> <br></br>

           <label htmlFor="costoEnvio" > costoEnvio</label>
        <input type="text" value={this.state.costoEnvio} onChange={this.onChange.bind(this)} name="costoEnvio" id="costoEnvio" /> <br></br>

           <label htmlFor="cantidadVendida" > cantidadVendida</label>
        <input type="text" value={this.state.cantidadVendida} onChange={this.onChange.bind(this)} name="cantidadVendida" id="cantidadVendida" /> <br></br>

           <label htmlFor="descripcion" > descripcion</label>
        <input type="text" value={this.state.descripcion} onChange={this.onChange.bind(this)} name="descripcion" id="descripcion" /> <br></br>
       <p>{JSON.stringify(this.state)}</p>
       <p>data {this.data}</p>
       <Button onClick={this.crearInstrumento.bind(this)}>Agregar</Button>
</div>
         </React.Fragment>
       );
    }


}

export default agregarInstrumento;