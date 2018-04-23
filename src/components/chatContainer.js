import React, { Component } from "react";
import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import JumbotronChat from "./reacstrap/JumbotronChat";
import WriteMessage from './chats/writeMessage'
import MessageViewer from './chats/messageViewer'
import ChatLateralBar from './chats/chatLateralBar'

export default class chatContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <JumbotronChat />
        <Row>
        <Col md="8" className="d-block mx-auto">
       <MessageViewer/>
       <WriteMessage/>
        </Col>
        <Col  md="4" className="d-block mx-auto">
        <ChatLateralBar/>
        </Col>
        </Row>
      </Container>
    );
  }
}
