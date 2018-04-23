import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import NewMessage from './newMessage'

export default class messageViewer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
       <Container>
           <NewMessage/>
       </Container>
    );
  }
}
