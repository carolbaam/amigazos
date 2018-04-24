import React from "react";
import { Container, Row, Col } from 'reactstrap';




export default class NewMessage extends React.Component{
  render(){
      return (
          <li className="ChatMessage">
            <span className="author"><strong>{this.props.user} dice: </strong></span>
            <span className="message">"{this.props.message}"</span>
          </li>
          );
  }


}