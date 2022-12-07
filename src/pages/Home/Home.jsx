import React, { Component } from 'react'
import {
    Form,
    Button,
    Container,
    Row,
    Col,
  } from "react-bootstrap";
  import NavbarComp from "../../components/NavbarComp/NavbarComp.jsx";
  import "../../pages/Home/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavbarComp/>
        <Container>
          <Row className="justify-content-md-center">
            <Col className="rectangulo"></Col>
            <Col className="tituloHome">Mercancia Global</Col>
            <Col></Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col className="rectangulo"></Col>
            <Col className="slogan">
            Hacemos la entrega, transporte y envio de documentos y mercancias.
            </Col>
            <Col></Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col className="rectangulo"></Col>
            <Col className="slogan2">los recogemos en la puerta de tu casa y los llevamos hasta su destino en el tiempo que quieras.</Col>
            <object className="rectangulo1guia"></object>
            <object className="consultar">Consultar</object>
            <object className="separador">|</object>
            <Form.Control className="rectanguloguia" type="email" placeholder="Ingresa el # de guia" />
            <a href="seguimiento"><Button className="buscar"><img className="path" src="../assets/buscar.svg" width="10.23px" height="17.89px"/></Button></a>        
            <object className="imagen" data="../assets/Envios.svg"></object>
          </Row>
        </Container>
      </div>
    )
  }
}
