import React, { Component } from "react";
import JumbotronCard from "./reacstrap/JumbotronCard";
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import {connect} from 'react-redux'
import {googleLogin} from '../actions/userActions'
import {getUser} from '../actions/userActions'
import Navbar from './reacstrap/Navbar'

class Home extends Component {
  constructor() {
    super();
  }

componentDidMount(){
this.props.getUser();
}

componentDidUpdate(){
  if(this.props.userLoading === false && this.props.user){
  //  {this.props.history.push('/registration')}
}
}

  render() {
    return (
      <Container>
        <Navbar/>
        <JumbotronCard />
        <Col md={{ size: 4, offset: 4}} className="d-block mx-auto">
        <Button color="primary" >Inicia Sesión</Button>{' '}
        <Button color="success" onClick={this.props.googleLogin}>Regístrate</Button>{' '}
        </Col>
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
export default connect(mapStateToProps,{googleLogin, getUser} )(Home);
