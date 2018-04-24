import React, { Component } from "react";
import JumbotronCard from "./reacstrap/JumbotronCard";
import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { googleLogin } from "../actions/userActions";
import { getUser } from "../actions/userActions";
import Navbar from "./reacstrap/Navbar";

import axios from 'axios';



class Home extends Component {
  constructor() {
    super();
    this.pushSample = this.pushSample.bind(this);
    this.getToken = this.getToken.bind(this);
    this.sendToken = this.sendToken.bind(this);
    this.state = {
      Conekta: null,
      token: null
    }
  }

  componentDidMount() {
    this.props.getUser();
  }

  componentDidUpdate() {
    if (this.props.userLoading === false && this.props.user) {
      //  {this.props.history.push('/registration')}
    }
  }

  pushSample(event) {
    console.log("funcion ejecutada");
    event.preventDefault();
    axios.post('http://10.242.0.70:1337/user', {
      username: 'bernkaztel@hotmail.com',
    })
    .then(res => {
      console.log(res);
    });
  }

  pathSample(event){ 
    console.log("funcion ejecutada");
    event.preventDefault();
    axios.patch('http://10.242.0.70:1337/user/95', {
      "fullName": "Mariana Romo",
    "email": "bernkaztel@hotmail.com",
    "phone": "5584044798",
    })
    .then(res => {
      console.log(res);
    });
  }



    
  async getToken() {
    
    const data = {
      card: {
        number: "4242424242424242",
        name: "Javier Pedreiro",
        exp_year: "2018",
        exp_month: "12",
        cvc: "123"
      }
    };

    let stfun=this.sendToken;

    

    await window.Conekta.Token.create(data, 
      function(token){
        stfun(token);
        
      let token2 = token.id;
    }, function(err){
      console.error(err);
    })

  }


  sendToken(token) {

  let newToken = this.state.token
  console.log(token);
    axios.post('http://10.242.0.70:1337/payment', {
      "token": token,
      "amount": "20000",
      "user": "95",
      "service": "vip"
    })
    .then(res => {
      console.log(res);
    }).catch(err => 
      {
        console.log(err);
      });
  }



  

  render() {

    return (
      <Container>
        <Navbar />
        <JumbotronCard />
        <Col md={{ size: 4, offset: 4 }} className="d-block mx-auto">
          <Button color="primary">Inicia Sesión</Button>
          <Button color="success" onClick={this.props.googleLogin}>
            Regístrate
          </Button>
          <button type="submit" onClick={this.pushSample}>
            enviar usuario
          </button>
          <button type="submit" onClick={this.pathSample}>
            llenar datos usuario
          </button>
          <button type="submit" onClick={this.getToken}>
            enviar token
          </button>
          <button type="submit" onClick={this.sendToken}>
            enviar orden
          </button>
            
        </Col>
      </Container>
      
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    userLoading: state.loading.user
  };
}
export default connect(mapStateToProps, { googleLogin, getUser })(Home);
