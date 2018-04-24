import React, { Component } from "react";
import { Button } from "reactstrap";
import Jumbotron from "./reacstrap/Jumbotron";
import Form from "./reacstrap/Form";
import { Container, Row, Col } from "reactstrap";
import { Media } from "reactstrap";
import FormCard from './reacstrap/FormCard'
import {connect} from 'react-redux'
import Navbar from '../components/reacstrap/Navbar'

class Registration extends Component {
  constructor() {
    super();
  }

  render() {
    return (

      <Container>
        <Navbar/>
        <h1 className="text-center">Personaliza tu perfil</h1>
        <Row>
          <Col md={{ size: 5, offset: 1 }}>
            <Form />
          </Col>
          <Col style={{ marginTop: "10px", marginLeft: "100px" }}>
            <img
              src="https://dummyimage.com/200x200/d1d1d1/000000"
              alt="Generic placeholder image"
            />
          </Col>
        </Row>
        <h1 className="text-center">Método de pago</h1>
        <Row>
          <Col>
        <FormCard/>
        </Col>
        <Col>
        <Jumbotron/>
        </Col>
        </Row>
      </Container>
    );
  }
}


function mapStateToProps(state, ownProps){
  return {
    user: state.user,
    userLoading: state.loading.user,
  }
}
export default connect(mapStateToProps)(Registration);
