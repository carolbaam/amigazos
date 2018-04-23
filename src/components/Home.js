import React, { Component } from "react";
import JumbotronCard from "./reacstrap/JumbotronCard";
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

export default class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <JumbotronCard />
        <Col md={{ size: 4, offset: 4}} className="d-block mx-auto">
        <Button color="primary">Inicia Sesión</Button>{' '}
        <Button color="success">Regístrate</Button>{' '}
        </Col>
      </Container>
    );
  }
}
